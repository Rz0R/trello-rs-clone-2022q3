import axios from 'axios';
import { ServerDetails } from '../const/const';
import { IColumn } from '../types/board';

export function getAllBoard() {
  throw new Error('empty function');
}

export async function getColumns(boardId: string): Promise<IColumn[] | Error> {
  try {
    const responce = await axios.get<IColumn[]>(
      `${ServerDetails.url}:${ServerDetails.port}/columns/${boardId}`,
    );
    return responce.data;
  } catch (e: unknown) {
    let message = '';
    if (typeof e === 'string') {
      console.error('error fetching columns: ', e);
      message = e;
    } else if (e instanceof Error) {
      console.error('error fetching columns: ', e.message);
      message = e.message;
    }
    return new Error(message);
  }
}

export async function createColumn(
  userId: string,
  boardId: string,
  title: string,
): Promise<IColumn | Error> {
  try {
    const body = {
      userId,
      boardId,
      title,
    };
    const responce = await axios.post<IColumn>(
      `${ServerDetails.url}:${ServerDetails.port}/columns`,
      body,
    );
    return responce.data;
  } catch (e: unknown) {
    let message = '';
    if (typeof e === 'string') {
      console.error('error fetching columns: ', e);
      message = e;
    } else if (e instanceof Error) {
      console.error('error fetching columns: ', e.message);
      message = e.message;
    }
    return new Error(message);
  }
}

export async function updateTitleColumn(
  userId: string,
  boardId: string,
  columnId: string,
  title: string,
): Promise<IColumn | Error> {
  try {
    const body = {
      userId,
      boardId,
      columnId,
      title,
    };
    const responce = await axios.patch<IColumn>(
      `${ServerDetails.url}:${ServerDetails.port}/columns`,
      body,
    );
    return responce.data;
  } catch (e: unknown) {
    let message = '';
    if (typeof e === 'string') {
      console.error('error fetching update columns: ', e);
      message = e;
    } else if (e instanceof Error) {
      console.error('error fetching update columns: ', e.message);
      message = e.message;
    }
    return new Error(message);
  }
}

export async function getCardsOnBoard(boardId: string): Promise<IColumn[] | Error> {
  try {
    const responce = await axios.get<IColumn[]>(
      `${ServerDetails.url}:${ServerDetails.port}/cards/${boardId}`,
    );
    return responce.data;
  } catch (e: unknown) {
    let message = '';
    if (typeof e === 'string') {
      console.error('error fetching cards: ', e);
      message = e;
    } else if (e instanceof Error) {
      console.error('error fetching cards: ', e.message);
      message = e.message;
    }
    return new Error(message);
  }
}

export async function createCard(
  userId: string,
  boardId: string,
  columnId: string,
  title: string,
): Promise<IColumn | Error> {
  try {
    const body = {
      userId,
      boardId,
      columnId,
      title,
    };
    const responce = await axios.post<IColumn>(
      `${ServerDetails.url}:${ServerDetails.port}/cards`,
      body,
    );
    return responce.data;
  } catch (e: unknown) {
    let message = '';
    if (typeof e === 'string') {
      console.error('error fetching cards: ', e);
      message = e;
    } else if (e instanceof Error) {
      console.error('error fetching cards: ', e.message);
      message = e.message;
    }
    return new Error(message);
  }
}