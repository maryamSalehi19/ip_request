import { useState } from 'react';
import styled from 'styled-components';

import IpInput from './Ip/IpInput';
import ButtonComponent from './Ip/ButtonComponent';
import ErrorComponent from './Ip/ErrorComponent';
import DetailsComponent from './Ip/DetailsComponent';
import HeaderPage from './ui/Header';

const Wrapper = styled.div`
  width: 720px;
  padding: 30px;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid #EAECF0;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
` 

function IpRequest() {
  const subTitle = 'آی پی مورد نظر خود را پیدا کنید';
  const message = ' اگر بتوانید آدرس IPv4 یا IPv6 یک کاربر اینترنت را بیابید، می توانید با استفاده از ابزار جستجوی IP ما، ایده ای از آن کشور یا جهان پیدا کنید. چه باید کرد: آدرس IP مورد نظر خود را در کادر زیر وارد کنید، سپس روی "دریافت جزئیات IP" کلیک کنید.';

  const [ipAddress, setIpAddress] = useState('');
  const [ipDetails, setIpDetails] = useState(null);
  const [error, setError] = useState('');

  const validateIpAddress = (ip) => {
    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

    if (ipRegex.test(ip)) {
      setError('');
      return true;
    } else {
      setError('ای پی نادرست است');
      return false;
    }
  };

  const handleSearch = async () => {
    if (validateIpAddress(ipAddress)) {
      try {
        const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=at_aVrDSTmjzLElkHBEaZl6uyCqNgiJJ&ipAddress=${ipAddress}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setIpDetails(data);

        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error('Error fetching IP details:', error);
      }
    }
  };

  return (
    <Wrapper>
      <HeaderPage subTitle={subTitle} message={message} />
      <Search>
        <ButtonComponent onClick={handleSearch} />
        <IpInput ipAddress={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
      </Search>
      <ErrorComponent error={error} />
      { ipDetails && (
        <DetailsComponent ipDetails={ipDetails} />
      )}
    </Wrapper>
  );
}

export default IpRequest;