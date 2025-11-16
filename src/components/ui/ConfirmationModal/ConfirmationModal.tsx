import { ConfirmationModalProps } from '~/types/ConfirmationModalProps';
import './ConfirmationModal.css';
import MainButton from '../mainButton/mainButton';
import { MainButtonColors } from '~/types/dataButtonProps';

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  description,
  onClick,
  isNoButton,
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
        {isNoButton && (
          <MainButton
            onAction={onClose}
            title={'No'}
            color={MainButtonColors.Red}
          />
        )}
        <MainButton
          onAction={onClick}
          title={'Yes'}
          color={MainButtonColors.Blue}
        />
      </div>
    </section>
  );
};

export default ConfirmationModal;
