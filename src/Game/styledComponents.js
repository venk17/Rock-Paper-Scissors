import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`

export const ScoreContainer = styled.div`
  padding: 15px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`

export const ItemsContainer = styled.div``

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 1.3;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const ScoreCardContainer = styled.div`
  margin: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 80px;
    margin: 5px;
  }
`

export const ParagraphScore = styled.p`
  font-family: 'Roboto';
  color: #000000;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const ScoreSpan = styled.p`
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 0;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  max-width: 500px;
  gap: 20px;
  margin: 30px 0;

  @media (max-width: 768px) {
    gap: 15px;
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin: 15px 0;
  }
`

export const PlayAgainButton = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 14px;
  }
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    justify-content: flex-end;
    padding-right: 10px;
  }
`

export const PopUpButton = styled(PlayAgainButton)`
  width: auto;
  align-self: flex-end;

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`

export const RulesImageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`

export const RulesImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`

export const CloseLineButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
  color: #000000;
  align-self: flex-end;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 10px;
`
