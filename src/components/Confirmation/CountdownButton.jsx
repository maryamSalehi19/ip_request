import styled from 'styled-components';

const Button = styled.button`
  border: none;
  font-size: 14px;
  background-color: unset;
  ${props => !props.disabled && `
    color: #1043A6;
  `}
`;

export default function CountdownButton ({ remainingTime, onClick }) {
  return (
    <Button onClick={onClick} disabled={remainingTime > 0}>
      ارسال مجدد
    </Button>
  );
};