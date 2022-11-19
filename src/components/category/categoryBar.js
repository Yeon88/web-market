import Nav from 'react-bootstrap/Nav';
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Link = ({ isActive, children, ...props }) => {
	return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  padding: 6px 12px;
  margin: 0 auto;
  text-align: center;
  text-decoration:none;
  border-radius: 10px;
  line-height: 1.8;
  border: 1px solid lightgray;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "rgb(25,103,206)" : "black")};
`;

function CategoryBar() {
    const { pathname } = useLocation();

    return (
      <>
        <Nav justify variant="tabs">
          <Nav.Item>
            <StyledLink to="/category/c1" isActive={pathname === "/category/c1"}>디자인문구</StyledLink>
          </Nav.Item>
          <Nav.Item>
            <StyledLink to="/category/c2" isActive={pathname === "/category/c2"}>디지털/핸드폰</StyledLink>
          </Nav.Item>
          <Nav.Item>
            <StyledLink to="/category/c3" isActive={pathname === "/category/c3"}>가구/수납</StyledLink>
          </Nav.Item>
          <Nav.Item>
            <StyledLink to="/category/c4" isActive={pathname === "/category/c4"}>데코/조명</StyledLink>
          </Nav.Item>
          <Nav.Item>
            <StyledLink to="/category/c5" isActive={pathname === "/category/c5"}>키친</StyledLink>
          </Nav.Item>
          <Nav.Item>
            <StyledLink to="/category/c6" isActive={pathname === "/category/c6"}>패션잡화</StyledLink>
          </Nav.Item>
          <Nav.Item>
            <StyledLink to="/category/c7" isActive={pathname === "/category/c7"}>뷰티</StyledLink>
          </Nav.Item>
          <Nav.Item>
            <StyledLink to="/category/c8" isActive={pathname === "/category/c8"}>주얼리/시계</StyledLink>
          </Nav.Item>
        </Nav>
      </>
      );
}

export default CategoryBar;