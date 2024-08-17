import styled from 'styled-components';

const Button = styled.button`
  width: 70px;
  height: 45px;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 8px 0 0 8px;
  background-color: #1043A6;
`;

export default function ButtonComponent ({ onClick })  {
  return (
    <Button onClick={onClick}>
      search
    </Button>
  );
};