import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`

export const InfoMessage = styled.p`
  background-color: #038aff;
  color: white;
  font-family: 'bold';
  text-align: center;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin: 10px 0;
`

export const ErrorMessage = styled.p`
  background-color: #c44d56;
  color: white;
  font-family: 'bold';
  text-align: center;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin: 10px 0;
`
