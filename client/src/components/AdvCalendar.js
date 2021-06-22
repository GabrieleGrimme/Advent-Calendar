import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import CalBackground from '../assets/cal_background.svg';
import Modal from './Modal';
import data from '../data.json';

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
      today.getDate() >= data[correctedDay].day &&
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
        data={data}
        activeDoor={activeDoor}
        text={text}
      ></Modal>

      <Container>
        <ImageGrid>
          {data.map((item) => (
            <BackImage
              key={item.id}
              id={item.day}
              style={
                openedArr.includes(item.id) &&
                today.getMonth() === month &&
                today.getDate() >= data[parseInt(item.id) - parseInt(1)].day
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
          {data.map((item) => (
            <BackDoor
              key={item.id}
              style={
                openedArr.includes(item.id) &&
                today.getDate() >= data[parseInt(item.id) - parseInt(1)].day
                  ? { zIndex: '4' }
                  : { zIndex: '3', pointerEvents: 'none' }
              }
            >
              <Door
                onClick={openDoor}
                key={item.id}
                id={item.id}
                day={item.day}
              >
                <span>{item.day}</span>
              </Door>
            </BackDoor>
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
  //background-size: auto;
  //background: url(${CalBackground});
  //background-repeat: no-repeat;
`;

/* FRONT DOOR */
const Door = styled.div`
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
  .door span {
    pointer-events: none;
  }
  .opened {
    background-color: rgb(250, 102, 102);
    transform: perspective(1200px) translateZ(0px) translateX(0px)
      translateY(0px) rotateY(-105deg);
  }
`;

const Doors = styled.div`
  display: grid;
  width: 100vw;
  padding: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 150px;
  grid-row-gap: 170px;
  grid-auto-flow: row;

  .shine {
    box-shadow: 15px 0px 100px 12px rgba(255, 255, 255, 0.8),
      0 0 40px 9px rgba(255, 253, 224, 0.7);
    transition: all 1s ease-in-out;
  }
`;

const BackDoor = styled.div`
  width: 140px;
  justify-self: center;
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

export default AdvCal;
