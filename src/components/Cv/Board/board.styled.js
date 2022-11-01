import styled from 'styled-components'

const screens = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
}

export const Header = styled.header`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #373741;
  height: 140px;
  margin-bottom: 16px;
  max-height: 140px;
  @media screen and (min-width: 768px) {
    height: 300px;
    max-height: 300px;
  }

  /* @media screen and (min-width: 768px) {
    max-height: 300px;
  }
  @media screen and (min-width: ${screens.desktop}) {
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: #373741;
    height: 300px;
    margin-bottom: 16px;
  } */
`

export const NameTitle = styled.h1`
  color: #e1d8cf;
  /* font-size: 40px; */
  font-size: 28px;
  display: grid;
  justify-content: center;
  /* @media screen and (min-width: ${screens.desktop}) {
    font-size: 50px;
    text-align: center;
  } */
`
export const ProfTitle = styled.h2`
  color: #ffffff;
  display: grid;
  justify-content: center;
  font-size: 22px;
  /* @media screen and (min-width: ${screens.desktop}) { */
  /* font-size: 50px;
    text-align: center; */
  /* } */
`

// *************BOARD*************
export const Board = styled.div`
  /* display: grid; */
`
export const BoardSection = styled.section`
  color: #373741;
  width: 90%;
  margin: 0 auto;
`
export const BoardHeader = styled.div`
  color: #e1d8cf;
  padding: 16px;
  background-color: #373741;
  font-size: 22px;
  text-align: center;
`
// for summary
export const BoardItems = styled.ul`
  font-size: 20px;
  padding: 16px;
  padding-left: 44px;
  line-height: 1.6;
`
export const BoardItem = styled.li``

// for cards
export const BoardCardItems = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr;
  gap: 14px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 96%;
`
export const BoardCardItem = styled.div`
  height: 500px;
  cursor: pointer;
`
export const BoardCardDescription = styled.div`
  /* outline: 1px solid lavender; */
`
export const BoardItemLink = styled.a`
  color: #373741;
`
export const BoardImage = styled.img`
  width: 100%;
  opacity: 60%;
`
