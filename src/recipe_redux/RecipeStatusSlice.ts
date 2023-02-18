import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface IRecipeStatus{
    status: 'closed' | 'opened'
}

const initialState:IRecipeStatus={
    status : 'closed'
}

export  const RecipeStatusSlice = createSlice({
    reducers:{
        changeStatus: (state,action:PayloadAction<IRecipeStatus>)=>{
            state.status = action.payload.status
        }
    },
    name: 'recipe-status',
    initialState:initialState
})

export const {changeStatus} = RecipeStatusSlice.actions

export default RecipeStatusSlice.reducer