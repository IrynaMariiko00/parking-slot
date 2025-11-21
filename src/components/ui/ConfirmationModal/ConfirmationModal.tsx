import { ConfirmationModalProps } from '~/types/ConfirmationModalProps';
import './ConfirmationModal.css';
import MainButton from '../mainButton/mainButton';
import { MainButtonColors } from '~/types/dataButtonProps';

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  description,
  onConfirm,
  displayNoButton,
  onClose,
}) => {
  return (
    <section className="modal">
      <h1>{title}</h1>
      <h4>{description}</h4>
      <button type="button" className="close" onClick={onClose}>
        x
      </button>
      <div className="btns">
        {displayNoButton && (
          <MainButton
            onAction={onClose}
            title={'No'}
            color={MainButtonColors.Blue}
          />
        )}
        <MainButton
          onAction={onConfirm}
          title={'Yes'}
          color={MainButtonColors.Red}
        />
      </div>
    </section>
  );
};

export default ConfirmationModal;
