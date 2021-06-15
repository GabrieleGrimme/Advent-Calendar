import styled from 'styled-components/macro';
import Card from './Cards';
//import loadFromDatabase from '../controller/lib/databaseHelpers';
import { useEffect, useState } from 'react';
import DMELogo from '../assets/dme_logo2_klein.jpg';
import Tree from '../assets/tree.svg';
import Skull from '../assets/skull.svg';

export default function Home() {
    const initialAdvent = [
        { name: 'Pikachu', type: 'Elektro, Megatron' },
        { name: 'Glumanda', type: 'Feuer' },
        { name: 'Bisasam', type: 'Pflanze' },
        { name: 'Schiggy', type: 'Wasser' },
        { name: 'Smettbo', type: 'Käfer' },
        { name: 'Blitza', type: 'Elektro' },
        { name: 'Vulpix', type: 'Feuer' },
        { name: 'Pummeluff', type: 'Fee' },
      ];
const [adventsgeschenk, setAdventsgeschenk] = useState(initialAdvent);

    return (
        <div>
      <ImageWrapper className="imageWrapper">
        <img className="DMELogo" src={DMELogo} alt="DME-Radio Logo" />
      </ImageWrapper>

      {adventsgeschenk.map((adventsgeschenk) => (
        <Card
          name={adventsgeschenk.name}
          type={adventsgeschenk.type}
        />
      ))}
    </div>
  );
}

const ImageWrapper = styled.section`
  display: grid;
  place-items: center;
`;

const EichWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  
  img {
    width: 8rem;
  }
`;

const Logo = styled.img`
  width: 100px;
  margin: 0 auto;
`;

const H2 = styled.h2`
  color: var(--fifth);
  font-size: 2rem;
  margin: 0 auto;
`;
