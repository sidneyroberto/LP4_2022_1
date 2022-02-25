import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: #f1e7fe;
  padding: 10px 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 auto 20px auto;

  @media (max-width: 600px) {
    width: 90%;
  }
`

export const CryptoLogo = styled.img`
  width: 30px;
  margin-right: 10px;

  @media (max-width: 600px) {
    width: 25px;
  }
`

export const CryptoTitle = styled.span`
  font-family: 'bold';
  color: black;

  @media (max-width: 600px) {
    font-size: 90%;
  }
`

export const Price = styled.span`
  font-family: 'bold';
  margin: 0 0 0 auto;

  @media (max-width: 600px) {
    font-size: 90%;
  }
`

export const ViewLink = styled(Link)`
  text-decoration: none;
`
