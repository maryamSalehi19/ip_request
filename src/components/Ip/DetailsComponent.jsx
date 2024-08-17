import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  border-radius: 8px;
  background-color: #F6F7F9;
`;

const Column= styled.div`
  flex: 1; 
  margin-right: 10px;
`;

const ImageColumn = styled.div`
  flex: 1; 
  margin-right: 10px;
`;

const Title = styled.span`
  color: #7E838F;
  font-size: 14px;
`;

const Value = styled.span`
  color: #313235;
  font-size: 14px;
`;

const Details = styled.div`
  margin: 10px;
`

export default function DetailsComponent ({ ipDetails }) {
  const apiKey = "at_aVrDSTmjzLElkHBEaZl6uyCqNgiJJ&ipAddress";

  return (
    <Wrapper>
      <Column>
        <Details>
          <Title>Ip Address: </Title>
          <Value>{ipDetails.ip}</Value>
        </Details>
        <Details>
          <Title>Country: </Title>
          <Value>{ipDetails.location.country}</Value>
        </Details>
        <Details>
          <Title>Region: </Title>
          <Value>{ipDetails.location.region}</Value>
        </Details>
        <Details>
          <Title>City: </Title>
          <Value>{ipDetails.location.city}</Value>
        </Details>
      </Column>
    
      <Column>
        <Details>
          <Title>Latitud: </Title>
          <Value>{ipDetails.location.lat}</Value>
        </Details>
        <Details>
          <Title>Longitud: </Title>
          <Value>{ipDetails.location.lng}</Value>
        </Details>
      </Column>
      
      <ImageColumn>
        <img 
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${ipDetails.location.lat},${ipDetails.location.lng}&zoom=13&size=400x400&key=${apiKey}`}          
          alt="Map" 
        />
      </ImageColumn>
    </Wrapper>
  );
};