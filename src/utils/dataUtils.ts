import { TableRow } from '~/types/tableProps';

export const getRandomRow = (data: TableRow[]) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

export const createExistingData = (staticData: TableRow[], countRows = 9) => {
  const newData: TableRow[] = [];

  for (let i = 0; i <= countRows; i++) {
    newData.push(getRandomRow(staticData));
  }
  return newData;
}
