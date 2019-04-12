import styled from 'styled-components';

export const CardContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  width:100%;
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 20px;
  margin: 10px 5px;
  flex: 0 0 auto;
  width: 23%;
  flex-basis: 25%;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  border-radius: 5px;
  background-color: #fff;
  translate: all .5s;
  a{
    width:100%;
  }
  @media (max-width:576px){
    width: 100%;
    flex-basis: 100%;
  }
  @media (min-width:576px){
    width: 100%;
    flex-basis: 100%;
  }
  @media (min-width:768px){
    width: 50%;
    flex-basis: 50%;
  }
  @media (min-width:992px){
    width: 33.33333%;
    flex-basis: 33.33333%;
  }
  @media (min-width:1200px){
    width: 23%;
    flex-basis: 25%;
  }
`;

export const CardImage = styled.div`
  display: flex;
  justify-content:center;
  background-image: url(${props => props.src});
  background-position: center center; 
  background-repeat: no-repeat;
  background-size: contain;
  height: 280px;
`;

export const CardTitle = styled.div`
  font-size: 25px;
  color: #525252;
`;

export const CardDetails = styled.div`
  border-top: 1px solid #eee;
  p{
    font-size: 13px;
  }
`;

export const CardFooter = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardPrice = styled.div`
  font-size: 15px;
  color: #000;
  font-weight: bold;
`;

export const CardActionBtn = styled.div`
  font-size: 10px;
  font-weight: 400;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: #61619e;
  cursor: pointer;
`;