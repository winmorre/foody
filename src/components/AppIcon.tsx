import { FC } from "react";
import { IconContext } from "react-icons";


interface IAppIconProps {
    icon:any;
    fontSize?:string
    color?:string;
    className?:string;
};

export const AppIcon: FC<IAppIconProps> = (props) => {
    return (
        <>
            <IconContext.Provider value={{style:{fontSize:props.fontSize,color:props.color}, className:props.className}}>
                <div>{props.icon}</div>
            </IconContext.Provider>
        </>
    );
}

AppIcon.defaultProps = {
    fontSize: "20px",
    color:"#f8bc43",
    className: ""
}