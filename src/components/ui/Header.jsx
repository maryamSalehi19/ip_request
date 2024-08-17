import styled from "styled-components"

const Title = styled.div`
  display: flex;
  font-size: 38px;
  font-weight: bold;
  justify-content: center;
`;

const SubTitle = styled.div`
  display: flex;
  font-size: 16px;
  margin-top: 10px;
  justify-content: center;
`

const Message = styled.div `
  margin: 10px;
  display: flex;
  font-size: 14px;
  color: #7E838F;
  justify-content: center;
`

export default function HeaderPage({subTitle, message}) {
  return (
    <>
      <Title>پادرو</Title>
      <SubTitle> {subTitle} </SubTitle>
      <Message> {message} </Message>
    </>
  )
}