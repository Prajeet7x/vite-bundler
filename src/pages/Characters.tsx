import { useState, useEffect } from "react";
import { fetchData } from "../axios/axios";
import styled from "styled-components";
import { Card } from "antd";

const Characters = () => {
  interface ICharacter {
    name: string;
    status: string;
    species: string;
    image: string;
  }
  const endpoint: string = `character`;
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = (await fetchData(endpoint)) as ICharacter[];
      setCharacters(characters);
    };
    fetchCharacters();
  }, []);

  const Container = styled.main`
    background-color: #f0f2f5;
  `;

  const Header = styled.h1`
    width: 91%;
    margin: 0 auto;
    padding-top: 3rem;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    flex-wrap: wrap;
    width: 100%;
    background-color: #f0f2f5;
  `;

  const CardWrapper = styled.div`
    margin: 2rem;
  `;

  const ImageContainer = styled.div`
    margin: 0 auto;
  `;

  return (
    <Container>
      <Header>Characters</Header>
      <Wrapper>
        {characters.map((character) => {
          const { name, status, species, image } = character;
          return (
            <CardWrapper title={name} style={{ width: 300 }}>
              <ImageContainer>
                <img src={image} alt="image of character" width={200} />
              </ImageContainer>
              <div>Status: {status}</div>
              <div>Species: {species}</div>
            </CardWrapper>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Characters;
