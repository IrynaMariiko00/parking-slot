import { useState } from 'react';
import { addData } from '~/constants/addData';
import './addDataPopup.css';
import type { addDataPopupType } from '~/types/TableProps';

const AddDataPopup: React.FC<addDataPopupType> = ({
  openPopup,
  setMainTableData,
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string | number }>(
    {}
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMainTableData((prev) => [...prev, formData]);
    openPopup(false);
  };

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
      <button type="button" className="close" onClick={() => openPopup(false)}>
        x
      </button>
    </section>
  );
};

export default AddDataPopup;
