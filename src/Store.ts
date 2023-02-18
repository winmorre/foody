import {configureStore, Action, ThunkAction} from "@reduxjs/toolkit";
import recipeReducer from './recipe_redux/RecipeSlice'
import recipeStatusReducer from "./recipe_redux/RecipeStatusSlice";

export const store = configureStore({
    reducer: {
        recipe:recipeReducer,
        recipeStatus:recipeStatusReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType =void>=ThunkAction<ReturnType, RootState, unknown, Action<any>>;