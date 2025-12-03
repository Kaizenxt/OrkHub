import styled from "styled-components"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f2f0ff;
  font-family: Arial, sans-serif;

  padding-top: 150px;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
`

export const Sidebar = styled.aside`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ProfileBar = styled.aside`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Box = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 1px 3px #d1cdef;
  
  h3 {
    margin-bottom: 10px;
    color: #9146ff;
  }
`

export const MenuItem = styled.div`
  padding: 8px 0;
  cursor: pointer;
  color: #5f5b8a;
  transition: 0.2s;

  &:hover {
    color: #9146ff;
    transform: translateX(4px);
  }
`

export const UserCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 1px 3px #d1cdef;

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  h3 {
    margin: 8px 0;
    color: #9146ff;
  }

  p {
    color: #6f6a94;
  }
`
