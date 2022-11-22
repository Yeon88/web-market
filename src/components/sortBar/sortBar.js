import styled from "styled-components";
import { useState } from "react";

const StyledP = styled.p`
  color: ${props => props.color};
  font-weight: ${props => props.color === 'black' ? "normal" : "bold"};
`;

const basecolor = "rgb(25,103,206)";

function SortBar({ products, setProducts }) {
    const [color, setColor] = useState('black');
    const [color2, setColor2] = useState('black');
    const [color3, setColor3] = useState('black');

    const handleNow = () => {
        setColor(basecolor);
        setColor2('black');
        setColor3('black');
    };
    const handleNow2 = () => {
        setColor('black');
        setColor2(basecolor);
        setColor3('black');
    };
    const handleNow3 = () => {
        setColor('black');
        setColor2('black');
        setColor3(basecolor);
    };

    const sortProduct = (type) => {
        if (type === "recent") {
        const newProduct = [...products];
        newProduct.sort((a, b) => a.id - b.id);
        setProducts(newProduct);
        } else if (type === "row") {
        const newProduct = [...products];
        newProduct.sort((a, b) => a.price - b.price);
        setProducts(newProduct);
        } else if (type === "high") {
        const newProduct = [...products];
        newProduct.sort((a, b) => b.price - a.price);
        setProducts(newProduct);
        }
    };

    return (
        <>
        <StyledP color={color} onClick={() => {sortProduct("recent"); handleNow();}}>최신순</StyledP><p>|</p>
        <StyledP color={color2} onClick={() => {sortProduct("row"); handleNow2();}}>낮은 가격</StyledP><p>|</p>
        <StyledP color={color3} onClick={() => {sortProduct("high"); handleNow3();}}>높은 가격</StyledP>
        </>
    );
}

export default SortBar;