import styled from "styled-components"

export const NavContainer = styled.nav`
  border-top: 5px solid white;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 1;
  width: 100%;  
  max-width: 1678px;

  @media (min-width: 300px) and (max-width: 640px) {
    border-top: none;
  }

`
export const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 30px;
  width: 100%;
`