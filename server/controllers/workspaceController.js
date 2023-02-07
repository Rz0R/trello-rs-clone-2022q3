/* eslint-disable no-await-in-loop */
import Workspace from '../models/workspaceModel.js';
import User from '../models/userModel.js';
import { chooseRandomColor } from '../helpers.js';

async function createWorkspace(req, res) {
  try {
    const { title, description, websiteAddress } = req.body;
    const { userId } = req;
    const avatarColor = chooseRandomColor();

    let count = 1;
    let isAlreadyExist = true;
    while (isAlreadyExist) {
      isAlreadyExist = await Workspace.findOne({ shortTitle: `${title}${count}` });
      if (isAlreadyExist) {
        count += 1;
      }
    }

    const workspace = new Workspace({
      title,
      shortTitle: `${title}${count}`,
      description,
      websiteAddress,
      avatarColor,
      participants: [userId],
    });
    const savedWorkspace = await workspace.save();

    const user = await User.findById(userId);
    user.workspaces.push(savedWorkspace._id);
    await user.save();
    return res.status(200).json(savedWorkspace);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function updateWorkspaceTextFields(req, res) {
  try {
    const { workspaceId, title, description, shortTitle, websiteAddress } = req.body;
    const { userId } = req;
    const currentWorkspace = await Workspace.findById(workspaceId);
    // check if user is member of workspace
    if (!currentWorkspace.participants.includes(userId)) {
      return res
        .status(403)
        .json({ message: 'Вы не являетесь участником этого рабочего пространства' });
    }
    const isShortTitleAlreadyExist = await Workspace.findOne({ shortTitle });
    if (isShortTitleAlreadyExist && shortTitle !== currentWorkspace.shortTitle) {
      return res.status(400).json({ message: 'Такое имя уже существует' });
    }

    const workspace = await Workspace.findByIdAndUpdate(
      workspaceId,
      { title, description, shortTitle, websiteAddress },
      { new: true, runValidators: true },
    );
    return res.status(200).json(workspace);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function deleteWorkspace(req, res) {
  try {
    const { id } = req.params;
    const { userId } = req;
    const currentWorkspace = await Workspace.findById(id);
    if (!currentWorkspace) {
      return res.status(400).json({ message: 'Такого рабочего пространства не существует' });
    }
    // check if user is member of workspace
    if (!currentWorkspace.participants.includes(userId)) {
      return res
        .status(403)
        .json({ message: 'Вы не являетесь участником этого рабочего пространства' });
    }
    // delete workspace from participants User array
    const { participants } = currentWorkspace;
    participants.forEach(async (participantId) => {
      const user = await User.findById(participantId);
      const updatedWorkspaces = [...user.workspaces].filter((item) => item.toString() !== id);
      user.workspaces = updatedWorkspaces;
      await user.save();
    });
    // delete workspace
    await Workspace.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Рабочее пространство удалено' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { createWorkspace, updateWorkspaceTextFields, deleteWorkspace };
