import styled from 'styled-components'
import Select from 'react-select'
import { device } from './devices'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.companyColour};
  padding-bottom: 2em;

  h1 {
    color: white;
    font-size: 3.5vh;
  }

  p,
  span {
    color: white;
    font-size: 2vh;
    font-weight: 400;
  }

  h2 {
    color: white;
    font-size: 3vh;
    width: fit-content;
  }

  h3 {
    color: white;
    font-size: 2.5vh;
    width: fit-content;
  }
`

const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: 0;
  }
`

const Header = styled.div`
  display: flex;
  width: 80%;
  margin-left: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: 0;
  }
`

const RoiSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin-left: 10%;

  @media ${device.tablet} {
    flex-direction: row;
    height: 50vh;
  }
`

const ProductionAndCall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
    width: 45%;
    margin-left: 0;
  }
`

const ProductionVariables = styled.div`
  display: flex;
  flex-direction: column;
`

const ProductOptions = styled(Select)`
  width: 100%;
  padding-top: 1em;
  font-size: 1.5vh;
`

const Variable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 6%;

  label {
    color: white;
    font-weight: 600;
    font-size: 2vh;
    text-align: left;
  }

  input {
    width: 100%;
  }
`

const Range = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

const UpgradeSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  width: 80%;
  margin-left: 10%;
`

const Upgrades = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 80%;
    margin-left: 10%;

    img {
      width: 50%;
    }

    @media ${device.tablet} {
      width: 30%;
      margin: 0;
    }
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const LayoutSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 80%;
  margin-left: 10%;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 100%;
    }

    @media ${device.tablet} {
      width: 45%;
      margin: 0;
    }
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 3%;
  width: 100%;
  height: 100%;
  border-radius: 1em;
  background-color: white;

  @media ${device.tablet} {
    width: 45%;
    height: 100%;
    margin-left: 0;
  }

  h4 {
    font-size: 2.5vh;
    width: fit-content;
    color: black;
  }
`

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 95%;
  margin-top: 3%;
  margin-bottom: 10%;

  tr {
    border-bottom: 0.1em solid grey;
    width: 97%;
  }
  td {
    width: fit-content;
    text-align: center;
    font-weight: 400;
    font-size: 1.4vh;
    padding: 1vh 0.5vh;

    @media ${device.laptopL} {
      font-size: 2vh;
      padding: 1.5vh 0.9vh;
    }
  }

  td:first-child {
    text-align: left;
    color: black;
  }

  td:nth-child(2) {
    color: grey;
  }

  td:nth-child(3) {
    color: ${(props) => props.theme.atgBlue};
  }
`

export {
  Container,
  Title,
  Header,
  RoiSection,
  ProductionAndCall,
  ProductionVariables,
  ProductOptions,
  Variable,
  Range,
  UpgradeSection,
  Upgrades,
  LayoutSection,
  Layout,
  ChartContainer,
  Table
}
