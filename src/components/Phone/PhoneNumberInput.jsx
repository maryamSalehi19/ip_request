import { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 285px;
    height: 45px;
    direction: rtl;
    margin: 10px 0;
    border-radius: 8px;
    padding-right: 12px;
    border: 1px solid #EAECF0;
`;

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <Input
    type="tel"
    placeholder="شماره موبایل"
    value={phoneNumber}
    onChange={handlePhoneNumberChange}
  />
  )
}