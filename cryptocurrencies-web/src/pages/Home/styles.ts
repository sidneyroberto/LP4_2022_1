import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 10px;
`

export const Filter = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 30%;
  margin: 0 auto 30px auto;
  height: 30px;
  border: 2px solid #ccc;
  border-radius: 10px;
  text-align: center;
  padding: 0 10px;
  font-family: 'regular';
  font-size: 15px;

  @media(max-width: 600px) {
    width: 80%;
  }
`

export const LoadingArea = styled.div`
  margin: auto;
  width: 50px;
`
