import styled from 'styled-components';

import HeaderPage from './ui/Header';
import PhoneNumberInput from './Phone/PhoneNumberInput';
import ButtonInput from './Phone/Button';

const Wrapper = styled.div`
  padding: 0 30px 30px 30px;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid #EAECF0;
`;

function PhoneInput() {
  const subTitle = 'به پنل مدیرت تسک پادرو خوش آمدید';
  const message = 'برای ورود لطفا شماره تماس خود را وارد کنید.';

  return (
    <Wrapper>
      <HeaderPage 
        subTitle={subTitle} 
        message={message} 
      />
      <PhoneNumberInput />
      <br />
      <ButtonInput title={'تایید'} />
    </Wrapper>
  );
}

export default PhoneInput;
