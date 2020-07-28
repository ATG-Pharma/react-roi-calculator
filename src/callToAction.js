import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { device } from './devices'

// STYLES
const Container = styled.div`
  display: ${(props) => (props.mobile ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10%;

  @media ${device.tablet} {
    display: ${(props) => (props.mobile ? 'none' : 'flex')};
    width: 100%;
    margin: 0;
  }

  h2 {
    text-decoration: underline;
  }
`

// const Button = styled(Link)`
//   cursor: pointer;
//   text-transform: uppercase;
//   font-weight: 500;
//   color: white;
//   background-color: #0378be;
//   text-decoration: none;
//   border: solid;
//   border-radius: 1em;
//   text-align: center;
//   width: 50%;
//   font-size: 2.3vh;
//   padding: 1em;

//   &:hover {
//     background-color: white;
//     border-color: ${(props) => props.theme.atgBlue};
//     color: ${(props) => props.theme.atgBlue};
//   }
// `

const CallToAction = ({ productName, difference, mobile }) => {
  return (
    <Container mobile={mobile}>
      <h2>
        A {productName} saves you ${difference} monthly
      </h2>
      {/* <Button to='/contact'>Request Quote</Button> */}
    </Container>
  )
}

export default CallToAction
