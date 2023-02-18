import get, {AxiosResponse} from "axios";
import {IIgredientCardProps, IRecipeCardProps} from "../components/RecipeCard";

const SearchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f="

const strIngredients: string[] = ["strIngredient1", "strIngredient2", "strIngredient3", "strIngredient4", "strIngredient5", "strIngredient6", "strIngredient7", "strIngredient8", "strIngredient9", "strIngredient10", "strIngredient12", "strIngredient13", "strIngredient14", "strIngredient15", "strIngredient16", "strIngredient17", "strIngredient18", "strIngredient19", "strIngredient20",]
const strMeasures: string[] = ["strMeasure1","strMeasure2","strMeasure3","strMeasure4","strMeasure5","strMeasure6","strMeasure7","strMeasure8","strMeasure9","strMeasure10","strMeasure11","strMeasure12","strMeasure13","strMeasure14","strMeasure15","strMeasure16","strMeasure17","strMeasure18","strMeasure19","strMeasure20"]

const searchMealWithFirstLetter = async (letter: string) => {
    // updateStrIngredients()
    let recipes: IRecipeCardProps[] = []
    try {
        let response: AxiosResponse<any, any> = await get(`${SearchUrl.concat(letter)}`);
        // let strIng = "strIngredient"
        // let strMeasure = "strMeasure"
        let count = 0;
        if (response.status === 200) {
            for (const meal of response.data["meals"]) {
                // let strIngC = strIng.concat(count.toString())
                // let strM = strMeasure.concat(count.toString())
                let ingredients: IIgredientCardProps[] = []
                // let next = true

                while (count < 20){
                    const measure:string = strMeasures[count]
                    const ingred = strIngredients[count]

                    let item = meal[measure]
                    let item1 = meal[ingred]
                    if (item !== "" && item1 !== ""){
                        ingredients.push({name:item1,qty:item})
                        count += 1
                    }else{
                        count = 0
                        break
                    }
                }
                count = 0
                let recipe: IRecipeCardProps = {
                    mealName: meal["strMeal"],
                    ingData: ingredients,
                    instructions: meal["strInstructions"],
                    youTubeLink: meal["strYoutube"],
                    category: meal["strCategory"],
                    closed: false,
                    mealThumb: meal["strMealThumb"],
                    area: meal["strArea"]
                }
                recipes.push(recipe)
            }
            return recipes
        }
    } catch (e) {
    }
}

export async function mealsWithLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    return await searchMealWithFirstLetter(randomCharacter)
}