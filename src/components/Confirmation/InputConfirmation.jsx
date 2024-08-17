import styled from 'styled-components';

const Input = styled.input`
  width: 50px;
  height: 40px;
  margin: 15px 5px;
  border-radius: 8px;
  border: 1px solid #EAECF0;
  
  ${props => props.value !== '1' && props.value !== "" &&`
    border-color: red;
  `}
`;
export default function InputConfirmation ({ value, onChange, ref })  {
  return (
    <Input
      type="tel"
      pattern="[0-9]"
      maxLength="1"
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
};
