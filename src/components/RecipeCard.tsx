import {FC} from 'react';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {AppIcon} from "./AppIcon";

import "../css/IngredientCard.css";
import "../css/RecipeCard.css";
import {Space} from "./Space";


export interface IRecipeCardProps {
    closed: boolean;
    mealName: string;
    ingData:IIgredientCardProps[];
    instructions:string;
    youTubeLink:string;
    category:string;
    mealThumb?:string;
    area?:string;
    onCLick?:any
}

export interface IIgredientCardProps {
    name: string;
    qty: string;
}

export const IngredientCard: FC<IIgredientCardProps> = (props: IIgredientCardProps) => {
    return (
        <div className="Ingredient flex px-2.5">
            <p className="Ingredient-name">{props.name}</p>
            <p className="Ingredient-qty">{props.qty}</p>
        </div>
    );
}

export const RecipeCard: FC<IRecipeCardProps> = (props: IRecipeCardProps) => {
    const youtubeLink = "?autoplay=0&mute=1"
    return (
        <div className="Recipe">
            <div className="Recipe-top flex justify-between">
                <p className="Recipe-top-name w-2/3">{props.mealName}</p>
                <div onClick={props.onCLick}><AppIcon icon={<AiOutlineCloseSquare onClick={props.onCLick}/>} fontSize={"2em"} className="Recipe-top-icon"/></div>
            </div>

            <div className="flex justify-between">
                <h4 className="Recipe-category-title">Category</h4>
                <p className="Recipe-category-text w-0.6">{props.category}</p>
            </div>

            <Space height={"10px"}/>

            <h4 className="Recipe-ing-title">Ingredients</h4>
            <Space height={"5px"}/>
            <div className="Recipe-ing flex justify-between pr-2">
                <p className="Recipe-ing-name">Name</p>
                <p className="Recipe-ing-qty">Qty</p>
            </div>

            <div className="Recipe-ing-list">
                {
                    props.ingData.map((ing:IIgredientCardProps,index:number)=>(
                        <IngredientCard name={ing.name} qty={ing.qty} key={index.toString()} />
                    ))
                }
            </div>

            <h4 className="Recipe-instruction-title">Instructions</h4>
            <div className="Recipe-instruction-container">
                <p className="Recipe-instruction-container-text">{props.instructions}</p>
            </div>

            <Space height={"15px"}/>

            <p className="Recipe-youtube-title">Watch on YouTube</p>
            <Space height={"5px"}/>
            <div className="Recipe-vid-box">
                <iframe src={fixYoutubeLink(props.youTubeLink,youtubeLink)} className="Recipe-vid-box-video" height="180" width="100%" title={props.mealName}></iframe>
            </div>
        </div>
    );
}

const fixYoutubeLink=(link:string,youtubeLink:string)=>{
    let linkSplit = link.split("watch?v=")
    return linkSplit[0].concat("embed/", linkSplit[1], youtubeLink)
}
