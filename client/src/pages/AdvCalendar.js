import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import Modal from '../components/Modal';
import Data from '../data.json';
import '../lib/basic.css';

function AdvCal() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(0);
  const [activeDoor, setActiveDoor] = useState(0);
  const [openedArr, setOpenedArr] = useState([]);

  //Set the month for testing / Xmas purposes (0 == January, 11 == December)
  const month = 5;
  const today = new Date();

  useEffect(() => {
    setOpenedArr(openedArr.concat(parseInt(activeDoor)));
    localStorage.setItem('opened', JSON.stringify(openedArr));
  }, [activeDoor]);

  const openDoor = (e) => {
    let correctedDay = parseInt(e.target.id) - parseInt(1);
    setActiveDoor(e.target.id);
    if (
      today.getDate() >= Data[correctedDay].day &&
      today.getMonth() === month
    ) {
      e.target.classList.add('opened');
      e.target.parentElement.classList.add('shine');
    }
  };

  const showModal = (e) => {
    setText(e.target.id);
    setShow(!show);
  };

  return (
    <WrapAll>
      <Modal
        onClose={showModal}
        show={show}
        data={Data}
        activeDoor={activeDoor}
        text={text}
      ></Modal>
      <Container>
        <ImageGrid>
          {Data.map((item) => (
            <BackImage
              key={item.id}
              id={item.day}
              className="back-image"
              style={
                openedArr.includes(item.id) &&
                today.getMonth() === month &&
                today.getDate() >= Data[parseInt(item.id) - parseInt(1)].day
                  ? { visibility: 'visible', zIndex: '3' }
                  : {
                      visibility: 'hidden',
                      zIndex: '-1',
                      pointerEvents: 'none',
                    }
              }
              src={item.image}
              onClick={showModal}
              alt="xmas"
            />
          ))}
        </ImageGrid>

        <Doors>
          {Data.map((item) => (
            <Back
              key={item.id}
              style={
                !openedArr.includes(item.id) &&
                today.getDate() >= Data[parseInt(item.id) - parseInt(1)].day
                  ? { zIndex: '4' }
                  : { zIndex: '3', pointerEvents: 'none' }
              }
            >
              <FrontDoor
                onClick={openDoor}
                key={item.id}
                id={item.id}
                day={item.day}
              >
                <span>{item.day}</span>
              </FrontDoor>
            </Back>
          ))}
        </Doors>
      </Container>
    </WrapAll>
  );
}

const WrapAll = styled.section`
  width: 100 vw;
`;

const Container = styled.div`
  width: 100vw;
`;

const ImageGrid = styled.div`
  position: absolute;
  display: grid;
  width: 100vw;
  padding: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 150px;
  grid-row-gap: 170px;
  grid-auto-flow: row;
`;

const BackImage = styled.img`
  background: linear-gradient(
      rgba(255, 255, 255, 0.712),
      rgba(255, 255, 255, 0.795)
    ),
    url(https://media3.giphy.com/media/JzY0gA5agzZSg/giphy.gif?cid=790b761162d6905c8ad5ee12a4947cbf9e21ba71a8562d96&rid=giphy.gif);
  width: 140px;
  height: 200px;
  justify-self: center;
  object-fit: contain;
`;

/* FRONT DOOR */
const FrontDoor = styled.div`
  background: linear-gradient(rgb(0, 0, 0), rgb(210, 68, 68));
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 140px;
  border: 2.5px solid rgb(255, 209, 209);
  border-radius: 0.5rem;
  text-align: center;
  font-size: 2rem;
  transform-origin: left;
  /*Speed of Door animation*/
  transition: all 1.4s ease-in-out;
  z-index: -2;
`;

const Doors = styled.div`
  display: grid;
  width: 100vw;
  padding: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 150px;
  grid-row-gap: 170px;
  grid-auto-flow: row;
`;

const Back = styled.div`
  width: 140px;
  justify-self: center;
`;

export default AdvCal;
