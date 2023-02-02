import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumn, IColumnState } from '../../types/columns';

const initialState: IColumnState = {
  columns: [
    {
      id: '1',
      title: 'Column 1',
      cards: [
        { id: '1', title: 'card 1' },
        { id: '2', title: 'card 2' },
        { id: '3', title: 'card 3' },
        { id: '4', title: 'card 4' },
        { id: '5', title: 'card 5' },
      ],
    },
    {
      id: '2',
      title: 'Column 2',
      cards: [
        { id: '6', title: 'card 6' },
        { id: '7', title: 'card 7' },
        { id: '8', title: 'card 8' },
        { id: '9', title: 'card 9' },
        { id: '10', title: 'card 10' },
      ],
    },
    {
      id: '3',
      title: 'Column 3',
      cards: [
        { id: '11', title: 'card 11' },
        { id: '12', title: 'card 12' },
        { id: '13', title: 'card 13' },
        { id: '14', title: 'card 14' },
      ],
    },
  ],
};

export const columnsStateSlice = createSlice({
  name: 'dataColumns',
  initialState,
  reducers: {
    changeTitleColumn(state, action: PayloadAction<{ id: string; title: string }>) {
      const columnForChange = state.columns.find((column) => column.id === action.payload.id);
      if (columnForChange) {
        columnForChange.title = action.payload.title;
      } else {
        console.log('column №', action.payload.id, 'not found');
      }
    },
    updateColumn(state, action: PayloadAction<IColumn[]>) {
      state.columns = action.payload;
    },
  },
});

export const { changeTitleColumn, updateColumn } = columnsStateSlice.actions;

export const columnsState = columnsStateSlice.reducer;
