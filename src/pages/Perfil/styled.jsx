import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f2f0ff;
  padding-top: 80px;
  font-family: Arial, sans-serif;

  padding-top: 150px;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 20px;
  display: flex;
  gap: 30px;
`;

export const LeftColumn = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Box = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 2px 4px #d4cfff;
`;

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 4px solid #9146ff33;
`;

export const InfoText = styled.p`
  color: #5f5a86;
  margin-top: 6px;
  line-height: 1.5;
`;

export const Title = styled.h3`
  color: #9146ff;
  margin-bottom: 10px;
`;

export const Badge = styled.span`
  background: #f4e9ff;
  padding: 6px 10px;
  border-radius: 8px;
  color: #6e44aa;
  font-size: 13px;
  border: 1px solid #e5d4ff;
`;

export const StatsBox = styled.div`
  display: flex;
  background: white;
  border-radius: 12px;
  padding: 15px 20px;
  box-shadow: 0px 2px 4px #d4cfff;
  justify-content: space-around;
`;

export const StatItem = styled.div`
  text-align: center;

  strong {
    display: block;
    font-size: 20px;
    color: #9146ff;
  }

  span {
    font-size: 13px;
    color: #6e6b8f;
  }
`;
