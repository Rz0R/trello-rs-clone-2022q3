import { IUser } from "./card";

export interface IMark {
  color: string;
  text: string;
  _id?: string;
}

export interface IActivities {
  _id: string;
  userId: string;
  action: string;
  date: string;
}

export interface IColumnCard {
  id: string;
  title: string;
}

export interface IColumnParams {
  title: string;
  archived: boolean;
  cards: string[],
  createdAt: string;
  updatedAt: string;
}

export interface IColumn extends IColumnParams {
  _id: string;
}

export interface IBoardQueryParams {
  userId: string;
  workspaceId: string;
  title: string;
  description: string;
}


export interface IBoard {
  _id: string;
  title: string;
  backgroundColor?: string;
  backgroundImage?: string;
  archived?: boolean;
  participants?: string[];
  columns?: string[];
  marks?: IMark[];
  activities?: IActivities[];
  createdAt?: string;
  updatedAt?: string;
}


export interface ICard {
  _id: string;
  title: string;
}

export interface IBoardState {
  boardData: IBoard;
  participantsData: IUser[];
  columnsData: IColumn[];
  cardsData: ICard[];
  openMenuCardArgs: {
    boardId: string;
    cardId: string;
    title: string;
  };
}