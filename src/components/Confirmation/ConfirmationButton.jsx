import styled from 'styled-components';

const Button = styled.button`
  width: 280px;
  height: 45px;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #1043A6;
`;

export default function ConfirmationButton({ onClick, isFilled, remainingTime }) {
  return (
    <Button onClick={onClick}>
      {isFilled ? 'تایید' : `${remainingTime}`}
    </Button>
  );
}
