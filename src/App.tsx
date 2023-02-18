import React, {useState,useEffect} from 'react';
import {BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs';

import './css/App.css';
import {Search} from "./components/Search";
import {FoodPandaIcon, MenuIcon} from "./components/MenuIcon";
import {BellFresh} from "./components/BellFresh";
import {Space} from "./components/Space";
import {FoodCard, IFoodCardProps} from "./components/FoodCard";
import {DishCard} from "./components/DishCard";
import {AppIcon} from "./components/AppIcon";
import {IRecipeCardProps, RecipeCard} from "./components/RecipeCard";
import {useAppDispatch, useAppSelector} from "./hooks";
import {add, clear, selectRecipe} from "./recipe_redux/RecipeSlice";
import {getAllCategories} from './services/FoodService';
import {mealsWithLetter} from './services/RecipeService';



function App() {
    const recipe = useAppSelector(selectRecipe)
    const dispatch = useAppDispatch()

    const [recipes, setRecipes] = useState<IRecipeCardProps[]>([])
    const [categories, setCategories] = useState<IFoodCardProps[]>([])
    const [rec,setRec] = useState<IRecipeCardProps>(recipe)

    const getCategories = async () => {
        const items = await getAllCategories()
        setCategories(items)
    }

    const getRecipes = async () => {
        const items = await mealsWithLetter() as IRecipeCardProps[]
        setRecipes(items)
    }

    const storeRecipe = (data: IRecipeCardProps) => {
        dispatch(add(data))
        setRec(data)
        showRecipeCard()
    }

    useEffect( ()=>{
        getRecipes().then(()=>{console.log("Recipes gotten")})
        getCategories().then(()=>{console.log("Categories fetched")})
    },[])

    const clearStore = () => {
        dispatch(clear())
        closeIconClick()
    }
    const leftSlide = () => {
        console.log("left clicked")
        let container = document.getElementById("foodContainer")
        console.log(container)
        if (container !== null) {
            container.scrollLeft -= 250
        }
    }

    const rightSlide = () => {
        let container = document.getElementById("foodContainer")
        if (container !== null) {
            container.scrollLeft += 250
        }
    }

    console.log(`Store items ${recipe.mealName}`)

    return (
        <div className="App">
            <div className="flex">
                <MenuIcon/>
                <Search/>
                <FoodPandaIcon/>
            </div>
            <Space height="15px"/>
            <BellFresh/>
            <Space height="50px"/>
            <div id={"leftSlide"} className={"App-left-slide"} onClick={() => leftSlide()}>
                <AppIcon icon={<BsChevronDoubleLeft/>} fontSize={"3em"}/>
            </div>
            <div id={"rightSlide"} className={"App-right-slide App-right-slide-alt"} onClick={() => rightSlide()}>
                <AppIcon icon={<BsChevronDoubleRight/>} fontSize={"3em"}/>
            </div>
            <div className="App-food" id={"foodContainer"}>
                {
                    categories.map((item, index) => (
                        <FoodCard imgSrc={item.imgSrc} name={item.name} onClick={() => {
                        }} key={index.toString()}/>))
                }
            </div>
            <Space height="30px"/>

            <h4 className="App-popular-dish-title">Popular Dish</h4>
            <Space height="48px"/>

            <div className="App-popular-dish grid gap-y-12 gap-x-2 grid-cols-5 md:grid-cols-4 sm:grid-cols-2 mx-auto"
                 id="dishCard">
                {
                    recipes.map((item: IRecipeCardProps, index) => (
                        <DishCard imageSrc={item.mealThumb ?? ''} name={item.mealName} area={item.area ?? ""}
                                  category={item.category} onClick={() => storeRecipe(item)} key={index.toString()}/>))
                }

            </div>
            <Space height="50px"/>
            <div className="" id={"RecipeContainer"} hidden={true}>
                <RecipeCard closed={rec.closed} mealName={rec.mealName} ingData={rec.ingData}
                            instructions={rec.instructions}
                            youTubeLink={rec.youTubeLink} category={rec.category}
                            onCLick={() => clearStore()}/>
            </div>
        </div>
    );
}


const closeIconClick = () => {
    let foodContainer = document.getElementById("foodContainer")
    let dishContainer = document.getElementById("dishCard")
    const rightSlide = document.getElementById("rightSlide")
    const recipeContainer = document.getElementById("RecipeContainer")

    if (dishContainer !== null) {
        let dishClasses = dishContainer.classList
        dishClasses.remove("md:grid-cols-3")
        dishClasses.add("md:grid-cols-4")
    }

    if (foodContainer !== null) {
        let foodClasses = foodContainer.classList
        foodClasses.remove("Reduce-width")
    }

    if (rightSlide !== null) {
        let rightSlideClasses = rightSlide.classList
        rightSlideClasses.remove("Right-slide-reduce")
        rightSlideClasses.add("App-right-slide-alt")
    }

    if (recipeContainer !== null) {
        recipeContainer.hidden = true
    }
}

const showRecipeCard = () => {
    let foodContainer = document.getElementById("foodContainer")
    let dishContainer = document.getElementById("dishCard")
    const rightSlide = document.getElementById("rightSlide")
    const recipeContainer = document.getElementById("RecipeContainer")

    if (dishContainer !== null) {
        let dishClasses = dishContainer.classList
        dishClasses.remove("md:grid-cols-4")
        dishClasses.add("md:grid-cols-3")
    }

    if (foodContainer !== null) {
        let foodClasses = foodContainer.classList
        foodClasses.add("Reduce-width")
    }

    if (rightSlide !== null) {
        let rightSlideClasses = rightSlide.classList
        rightSlideClasses.add("Right-slide-reduce")
        rightSlideClasses.remove("App-right-slide-alt")
    }

    if (recipeContainer !== null) {
        recipeContainer.hidden = false
    }
}


export default App;