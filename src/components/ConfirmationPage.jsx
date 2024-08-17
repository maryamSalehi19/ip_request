import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import InputConfirmation from './Confirmation/InputConfirmation'; 
import CountdownButton from './Confirmation/CountdownButton'; 
import ConfirmationButton from './Confirmation/ConfirmationButton';
import HeaderPage from './ui/Header';

const Wrapper = styled.div`
  padding: 30px;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid #EAECF0;
`;

const Link = styled.a`
  display: flex;
  font-size: 14px;
  color: #1043A6;
  margin-top: 10px;
  justify-content: center;
`

const ToastMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;

const CodeMessage = styled.div `
  display: flex;
`

export default function ConfirmationPage (){
  const subTitle = "کد تایید را وارد نمایید";
  const message = "کد تایید به شماره 09381390696 پیامک شد";

  const inputCount = 4;
  const countdownDuration = 60;

  const [remainingTime, setRemainingTime] = useState(countdownDuration);
  const [inputValues, setInputValues] = useState(Array(inputCount).fill(''));
  const inputRefs = Array.from({ length: inputCount }, () => useRef());
  const [toastMessage, setToastMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;

    if (remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [remainingTime]);

  const handleSendAgainClick = () => {
    setRemainingTime(countdownDuration);
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    if (index < inputCount - 1 && value === '1') {
      inputRefs[index + 1].current.focus();
    }

    if (value !== '1') {
      setToastMessage('Please enter the correct value (1).');
    } else {
      setToastMessage('');
    }
  }; 

  const areAllInputsFilled = inputValues.every((value) => value.trim() !== '');

  const handleConfirmation = () => {
    if (remainingTime) {
      navigate('/ip-request');
    }
  };

  return (
    <Wrapper>
      <HeaderPage 
        subTitle={subTitle} 
        message={message} 
      />

      <Link href="/">تغییر شماره همراه</Link>

      {[...Array(inputCount)].map((_, index) => (
        <InputConfirmation
          key={index}
          value={inputValues[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
          ref={inputRefs[index]}
        />
      ))}

      {toastMessage && <ToastMessage>{toastMessage}</ToastMessage>}

      <CodeMessage>
        <CountdownButton
          remainingTime={remainingTime}
          onClick={handleSendAgainClick}
        />
        <p>کد را دریافت نکردید؟</p>
      </CodeMessage>

      <ConfirmationButton
        onClick={handleConfirmation}
        isFilled={areAllInputsFilled}
        remainingTime={remainingTime}
      />
    </Wrapper>
  );
};