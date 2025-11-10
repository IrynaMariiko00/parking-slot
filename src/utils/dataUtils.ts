import { TableRowType } from "~/types/TableProps";

export const getRandomRow = <T extends TableRowType>(data: T[]) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

export const createExistingData =  <T extends TableRowType>(staticData: T[], countRows = 9) => {
  const newData: T[] = [];

  for (let i = 0; i <= countRows; i++) {
    newData.push(getRandomRow(staticData));
  }
  return newData;
}
