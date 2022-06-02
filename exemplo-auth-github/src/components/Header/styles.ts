import styled from 'styled-components'

export const HeaderBar = styled.div`
  background-color: #24252a;
  display: flex;
  padding: 30px 20px;

  * {
    vertical-align: middle;
  }
`

export const AppTitle = styled.h1`
  color: white;
  font-family: 'bold';
  margin: 0;
`

export const ProfilePic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 20px 0 auto;
`

export const ProfileName = styled.h4`
  font-family: 'bold';
  color: white;
`
