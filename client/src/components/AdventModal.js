import Modal from 'react-modal';
import styled from 'styled-components/macro';

export default function AdventModal({ advDayContent, isOpen, onClose }) {
  const body = (
    <ModalStyle>
      <CloseButton onClick={onClose}>x</CloseButton>

      <h2>{advDayContent.day}. Dez. </h2>
      <p> Wir verlosen heute: </p>
      {advDayContent.text}
    </ModalStyle>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {body}
    </Modal>
  );
}
Modal.defaultStyles.overlay.background = 'none';
Modal.defaultStyles.overlay.border = 'none';
Modal.defaultStyles.content.background = 'none';
Modal.defaultStyles.content.border = 'none';

const CloseButton = styled.button`
  color: var(--third);
  font-size: 1.5rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 28px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalStyle = styled.div`
  background: radial-gradient(
    circle,
    rgba(210, 68, 68, 1) 0%,
    rgba(0, 0, 0, 0.8) 70%
  );
  border: 1px solid var(--third);
  border-radius: 0.5rem;
  display: grid;
  max-height: 100%;
  max-width: 100%;
  place-items: center;
  padding: 0.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  box-shadow: 15px 0px 150px 12px rgba(255, 255, 255, 0.8),
    0 0 40px 9px rgba(255, 253, 224, 0.7);
  transition: all 1.8s ease-in-out;
`;
