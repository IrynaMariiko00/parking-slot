import type { AddButtonProps } from '~/types/AddData';

const AddButton: React.FC<AddButtonProps> = ({ addData }) => {
  return (
    <button onClick={addData} className="add-btn">
      Add
    </button>
  );
};

export default AddButton;
