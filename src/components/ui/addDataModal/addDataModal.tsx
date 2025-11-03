import { addData } from '~/constants/addData';
import './addDataModal.css';
import useAddData from './hooks/useAddData';
import type { addDataPopupType } from '~/types/tableProps';

const AddDataModal: React.FC<addDataPopupType> = ({
  openModal,
  setMainTableData,
}) => {
  const { handleSubmit, setFormData } = useAddData({ openModal, setMainTableData });

  return (
    <section className="popup">
      <h1>Fill in all fields</h1>
      <form className="form" onSubmit={handleSubmit}>
        {addData.map((data) => (
          <div key={data.key} className="data">
            <label className="label">{data.label}</label>
            <input
              className="input"
              placeholder={data.placeholder}
              type={data.type}
              required
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  [data.key]: e.target.value,
                }));
              }}
            />
          </div>
        ))}
        <div className="submit-wrapper">
          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </form>
      <button type="button" className="close" onClick={() => openModal(false)}>
        x
      </button>
    </section>
  );
};

export default AddDataModal;
