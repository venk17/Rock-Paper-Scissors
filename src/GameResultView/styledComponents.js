import styled from 'styled-components'

export const ShowResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

export const ResultImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
  }
`

export const ResultTextImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`

export const ResultText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  color: #ffffff;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const ResultImageItem = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`

export const ResultButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`

export const PlayAgainButton = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 12px 24px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 150px;

  &:hover {
    transform: scale(1.05);
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
    min-width: 130px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 13px;
    min-width: 120px;
  }
`
