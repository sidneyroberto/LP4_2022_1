import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  background-color: #f1e7fe;
  padding: 5px 10px;
  border-radius: 15px;
  display: flex;
  width: 60%;
  margin: 0 auto 20px auto;
  align-items: center;

  @media(max-width: 600px) {
    width: 90%;
  }
`

export const ViewLink = styled(Link)`
  text-decoration: none;
`

export const CryptoLogo = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const CryptoTitle = styled.span`
  font-family: 'bold';
  color: black;
`

export const Price = styled.span`
  font-family: 'bold';
  margin: 0 0 0 auto;
`