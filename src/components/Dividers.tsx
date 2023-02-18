import { FC } from "react";
interface IDividerProps {
    size?:string;
    color?:string;
    type?:string;
};

export const HorizontalDivider: FC<IDividerProps> = (props) => {
    return (
        <div style={{borderBottom:`${props.size} ${props.type} ${props.color}`}}>

        </div>
    );
}

export const RVerticalDivider: FC<IDividerProps> = (props) => {
    return (
        <div style={{borderRight:`${props.size} ${props.type} ${props.color}`}}>

        </div>
    );
}

export const LVerticalDivider: FC<IDividerProps> = (props) => {
    return (
        <div style={{borderLeft:`${props.size} ${props.type} ${props.color}`}}>

        </div>
    );
}


HorizontalDivider.defaultProps ={
    size:"2px",
    color: "black",
    type:"solid"
}

RVerticalDivider.defaultProps={
    size:"5mm",
    color: "black",
    type:"solid"
}

LVerticalDivider.defaultProps = {
    size:"5mm",
    color: "black",
    type:"solid"
}