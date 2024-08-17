import styled from 'styled-components';

const Input = styled.input`
  width: 400px;
  height: 40px;
  direction: rtl;
  margin: 15px 0;
  padding-right: 10px;
  border-radius: 0 8px 8px 0;
  border: 1px solid #EAECF0;
`;

export default function IpInput ({ ipAddress, onChange }) {
  return (
    <Input
      type="text"
      value={ipAddress}
      onChange={onChange}
      placeholder="جستجو..."
    />
  );
};