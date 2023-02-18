import {FC} from 'react';

import '../css/FoodCard.css';


export interface IFoodCardProps{
    imgSrc:string;
    name:string;
    onClick?:any
}

export const FoodCard:FC<IFoodCardProps>=(props:IFoodCardProps)=>{
    return <div className="Food-card items-center flex-col" onClick={props.onClick}>
        <img src={props.imgSrc} alt="Food" className="Food-card-img mx-auto mt-4"/>
        <p className="Food-card-name">{props.name}</p>
    </div>
}