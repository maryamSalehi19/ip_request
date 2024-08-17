import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  width: 300px;
  height: 45px;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  background-color: #1043A6;
`;

export default function ButtonInput(props) {
  const navigate = useNavigate(); 

  const handleConfirmClick = () => {
    navigate('/confirmation');
  };

  return (
    <Button onClick={handleConfirmClick}>
      {props.title}
    </Button>
  )
}