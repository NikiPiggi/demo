import { CardSquareProps } from "@/types/cardType";
import React from "react";

const CardSquare: React.FC<CardSquareProps> = ({
    size = 250, 
    backgroundColor = "black"
}) => {
    const squareStyle: React.CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: backgroundColor,
    };
    
    return <div style={squareStyle}></div>;
}

export default CardSquare