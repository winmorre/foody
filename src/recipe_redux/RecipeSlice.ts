import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {IRecipeCardProps} from '../components/RecipeCard';
import {RootState} from "../Store";

const initialState:IRecipeCardProps = {
    closed:true,
    category:'',
    youTubeLink:'',
    mealName:'',
    ingData:[],
    instructions:''
}


export const recipeSlice = createSlice({
    name:'recipe',
    initialState:initialState,
    reducers: {
        add: (state, action:PayloadAction<IRecipeCardProps>)=>{
            state = {...action.payload}
        },
        clear: (state)=>{
            state = {...initialState}
        }
    }
})

export  const selectRecipe = (state:RootState)=>state.recipe

export const {add,clear} = recipeSlice.actions
export default recipeSlice.reducer