import { ICard, IColumn } from '../../types/board';

type getTranspositionColumnCardsProps = {
  dragColumnFromCard: IColumn;
  dropColumnFromCard: IColumn;
  dragCard: ICard;
  dropCard: ICard;
  columnsData: IColumn[];
};

type updateCardOrderProps = {
  columnId: string;
  columnCards: string[];
};

type returnColumnsCardsObject = {
  newColumns: IColumn[];
  resultColumn: updateCardOrderProps[];
};

export function getTranspositionColumnCards({
  dragColumnFromCard,
  dropColumnFromCard,
  dragCard,
  dropCard,
  columnsData,
}: getTranspositionColumnCardsProps): returnColumnsCardsObject {
  const firstResultColumn: updateCardOrderProps = { columnId: '', columnCards: [] };
  const secondResultColumn: updateCardOrderProps = { columnId: '', columnCards: [] };

  const newColumns: IColumn[] = columnsData.map((column) => {
    if (
      dragColumnFromCard._id === dropColumnFromCard._id &&
      column._id === dragColumnFromCard._id
    ) {
      const dragIndex = column.cards.indexOf(dragCard._id);
      const tempDropIndex = column.cards.indexOf(dropCard._id);
      const dropIndex = tempDropIndex > dragIndex ? tempDropIndex : tempDropIndex + 1;
      const newCards = [...column.cards.slice()];
      newCards.splice(dragIndex, 1);
      newCards.splice(dropIndex, 0, dragCard._id);
      firstResultColumn.columnId = column._id || '';
      firstResultColumn.columnCards.push(...newCards);
      return { ...column, cards: newCards } as IColumn;
    }
    if (column._id === dragColumnFromCard._id) {
      const dragIndex = column.cards.indexOf(dragCard._id);
      const newCards = [...column.cards.slice(0, dragIndex), ...column.cards.slice(dragIndex + 1)];
      firstResultColumn.columnId = column._id || '';
      firstResultColumn.columnCards.push(...newCards);
      return { ...column, cards: newCards } as IColumn;
    }
    if (column._id === dropColumnFromCard._id) {
      const dropIndex = column.cards.indexOf(dropCard._id) + 1;
      const newCards = [
        ...column.cards.slice(0, dropIndex),
        dragCard._id,
        ...column.cards.slice(dropIndex),
      ];
      secondResultColumn.columnId = column._id || '';
      secondResultColumn.columnCards.push(...newCards);
      return { ...column, cards: newCards } as IColumn;
    }
    return column;
  });
  const resultColumn = [firstResultColumn];
  if (secondResultColumn.columnId.length > 0) {
    resultColumn.push(secondResultColumn);
  }

  return { newColumns, resultColumn };
}

type getNewColumnsOrderProps = {
  dragColumn: IColumn;
  dropColumn: IColumn;
  columnsData: IColumn[];
};

export function getNewColumnsOrder({ dragColumn, dropColumn, columnsData }: getNewColumnsOrderProps): IColumn[] {
  const dragIndex = columnsData.indexOf(dragColumn);
  const dropIndex = columnsData.indexOf(dropColumn);
  if (dragIndex < dropIndex) {
    const newColumnOrder = [
      ...columnsData.slice(0, dragIndex),
      ...columnsData.slice(dragIndex + 1, dropIndex + 1),
      columnsData[dragIndex],
      ...columnsData.slice(dropIndex + 1),
    ];
    return newColumnOrder;
  }
  if (dragIndex > dropIndex) {
    const newColumnOrder = [
      ...columnsData.slice(0, dropIndex),
      columnsData[dragIndex],
      ...columnsData.slice(dropIndex, dragIndex),
      ...columnsData.slice(dragIndex + 1),
    ];
    return newColumnOrder;
  }
  return [];
}

// export function getColumnsByIds(ids: string[], columns: IColumn[]): IColumn[] | [] {
//   if (ids.length > 0 && columns.length > 0) {
//     // eslint-disable-next-line
//     return ids.map((id) => columns.find((column) => column._id === id)!);
//   }
//   return [];
// }
