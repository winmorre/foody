import {FC} from 'react';
import {BsMenuButton} from 'react-icons/bs';
import {SiFoodpanda} from 'react-icons/si';
import {AppIcon} from "./AppIcon";
import '../css/MenuIcon.css';

interface IMenuIconProps {
    
}

export const MenuIcon:FC<IMenuIconProps> = (props:IMenuIconProps) => {
  return (
      <div className="Menu-box col-start-1 mr-2.5 mt-1">
          <AppIcon icon={<BsMenuButton />} className="Menu-box-icon items-center mx-auto mt-2" color="white" fontSize="22px"/>
      </div>
  )
}

interface IFoodPandaProps {

}

export const FoodPandaIcon:FC<IFoodPandaProps> = (props:IFoodPandaProps)=>{
    return (
        <div className="Food-panda ml-2.5">
            <AppIcon icon={<SiFoodpanda />} className="Menu-box-icon items-center mx-auto mt-2" color="black" fontSize="30px"/>
        </div>
    );
}