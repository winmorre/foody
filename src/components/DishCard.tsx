import {FC} from 'react';
import {BsDot} from 'react-icons/bs';
import {GiBurningDot} from 'react-icons/gi';
import '../css/DishCard.css';
import {HorizontalDivider} from "./Dividers";
import {AppIcon} from "./AppIcon";
import {Space} from "./Space";


interface IDishCardProps{
    imageSrc:string;
    name:string;
    area:string;
    category:string;
    onClick?:any
}

export  const DishCard:FC<IDishCardProps> = (props:IDishCardProps) => {
    const defaultImage ="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1600"
  return <div className="Dish-card px-3" onClick={props.onClick}>
      <div className="Dish-card-box">
          <img src={props.imageSrc ?? defaultImage} alt="dish" className="Dish-card-box-img"/>
      </div>
      <Space height={"42%"} />
      <div className="Dish-card-name mx-auto">{props.name}</div>
      <Space height={"20px"}/>

      <HorizontalDivider color="gray" size="1px" />
      <div className="Dish-card-container flex w-0.5">
          <div className="Dish-card-container-cat-box flex">

              <p className="Dish-card-container-area pt-1">Category  </p>
              <span className="flex"><AppIcon icon={<GiBurningDot />} className="Dish-card-container-dot" fontSize="30px"/> </span>
          </div>
          <p className="Dish-card-container-text pl-2 pt-1">{props.category}</p>
      </div>
      <HorizontalDivider color="gray" size="1px" />
  </div>
}