import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import data from '../data.json';

function Modal(props) {
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }

  let dayValue = parseInt(props.text) - 1;

  return (
    <ModalWrap id="modal">
      <ModalBox id="modal">
        <div>
          {props.children} <h2>{props.text}</h2>
          <p> {data ? data[dayValue].text : ''}</p>{' '}
        </div>
        <div className="actions">
          <Button onClick={onClose}>x</Button>
        </div>
      </ModalBox>
    </ModalWrap>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

const ModalWrap = styled.div`
  position: absolute;
  width: 100vw;
  top: 30vh;
  display: flex;
  z-index: 10;
  justify-self: center;
  justify-items: center;
  justify-content: center;
  margin: auto;
`;

const ModalBox = styled.div`
  background: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0, 0.671)),
    url(https://media3.giphy.com/media/JzY0gA5agzZSg/giphy.gif?cid=790b761162d6905c8ad5ee12a4947cbf9e21ba71a8562d96&rid=giphy.gif);
  background-size: cover;
  position: fixed;
  border: 1px solid var(--thrird);
  border-radius: 0.8rem;
  padding: 1rem;
`;

const Button = styled.button`
  color: var(--third);
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 28px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`;

export default Modal;
