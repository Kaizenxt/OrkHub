import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f2f0ff;
  font-family: Arial, sans-serif;
  padding-top: 80px; /* espaço para o header */
`;

export const Content = styled.div`
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Box = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0px 2px 4px #d4cfff;

  ul {
    margin-top: 10px;
    padding-left: 20px;
    color: #6a64a2;

    li {
      margin-bottom: 6px;
    }
  }
`;

export const Title = styled.h2`
  color: #9146ff;
  margin-bottom: 12px;
`;

export const Paragraph = styled.p`
  color: #5c5786;
  line-height: 1.6;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  display: block;
  width: 200px;
  margin: 20px auto 0 auto;
  opacity: 0.9;
`;
