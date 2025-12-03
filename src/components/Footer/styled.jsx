import styled from "styled-components";

export const Container = styled.footer`
  background: linear-gradient(135deg, #FF69B4 0%, #DB7093 100%);
  padding: 30px 20px;
  color: white;
  width: 100%;
  border-top: 3px solid #FF1493;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FF1493, #FF69B4, #FFB6C1, #FF69B4, #FF1493);
    animation: shimmer 2s infinite linear;
  }

  @keyframes shimmer {
    0% { background-position: -100px 0; }
    100% { background-position: calc(100px + 100%) 0; }
  }

  .iconWPP {
    color: #25D366;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(37, 211, 102, 0.3));
  }
  
  .iconWPP:hover {
    color: #128C7E;
    transform: scale(1.2) translateY(-3px);
    filter: drop-shadow(0 4px 8px rgba(37, 211, 102, 0.5));
  }

  .iconGHB {
    color: white;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3));
  }
  
  .iconGHB:hover {
    color: #FFB6C1;
    transform: scale(1.2) translateY(-3px);
    filter: drop-shadow(0 4px 8px rgba(255, 182, 193, 0.5));
  }

  .iconDC {
    color: #0077B5;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 119, 181, 0.3));
  }
  
  .iconDC:hover {
    color: #005582;
    transform: scale(1.2) translateY(-3px);
    filter: drop-shadow(0 4px 8px rgba(0, 119, 181, 0.5));
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  
  &:first-child {
    color: #FFE4E1;
    font-size: 15px;
    font-weight: 500;
    
    strong {
      color: white;
      font-weight: 700;
    }
  }
  
  &:last-child {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.2);
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: 0.5s;
      }

      &:hover {
        transform: translateY(-5px) scale(1.1);
        border-color: white;
        box-shadow: 0 8px 20px rgba(255, 105, 180, 0.4);
        
        &::before {
          left: 100%;
        }
      }
    }
  }
`;

export const Heart = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(8deg); }
  }
  
  svg {
    color: #FFB6C1;
    filter: drop-shadow(0 3px 6px rgba(255, 20, 147, 0.3));
  }
`;