import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  width: 100%;
  height: 85.5px;
  background-color: #23394d; 
  align-items:center;
  text-decoration:none;

  .logo{
    margin-left:0.8rem;
    display: flex;
    bottom: 40px;
    margin-bottom: 0.5rem;
    align-items:center;
    font-size:1.2rem;
    cursor:pointer;
    border-radius: 50%;
    overflow: hidden;
    z-index:1;
    @media(max-width:768px){
       overflow: hidden;
       display:flex;
       margin:0px;
       bottom: 40px;
       justify-content: flex;
       cursor:pointer;
       border-radius: 50%;
    }
   
}
.logo img{
 
 width: auto;
 height: 60px;
 padding-left: 1px;
 padding-top: 1px;
 padding-bottom: 1px ;
 padding-bottom: 1px;
 transition: all 0.3s;
 @media(max-width:768px){
    
    width: auto;
    height: 58px;
    padding-left: 0px;
    padding-top: 0px;
    padding-bottom: 0px ;
    padding-bottom: 0px;
 }

} 
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  p {
    display:block;
    &:nth-child(2) {
      color: #fff;
    }

    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: #e07924;
      font-family:"cursive";
    }
  }

  svg {
    fill: #e07924;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`

  display: flex;
  justify-content: space-between;
  list-style: none;
 

  @media screen and (max-width: 960px) {
    background-color: #23394d;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-110%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    z-index:10;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  text-decoration: none;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #64b2ff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  a{
   
    text-decoration: none;
    color: white;
    }
  &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;
    
    div {
      svg {
        fill: #23394d;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 10%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 50%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
`;



export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    
    svg {
      fill: #e07924;
      margin-right: 0.5rem;
    }
  }
`;