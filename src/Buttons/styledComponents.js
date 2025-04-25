import styled from 'styled-components'

export const ButtonLiContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const ButtonImage = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 5px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }

  @media (max-width: 480px) {
    padding: 2px;
  }
`

export const ImageItem = styled.img`
  width: 150px;
  height: 150px;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`
