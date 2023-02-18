import get, {AxiosResponse} from "axios";
import {IFoodCardProps} from "../components/FoodCard";


const allCategoriesUrl = "https://www.themealdb.com/api/json/v1/1/categories.php"
export const getAllCategories =async ()=>{
    let categories:IFoodCardProps[] = []
    try{
        let response:AxiosResponse<any,any> = await get(allCategoriesUrl);
        if (response.status ===200){
            for (const cat of response.data["categories"]) {
                let item:IFoodCardProps = {
                    name: cat["strCategory"],
                    imgSrc:cat["strCategoryThumb"]
                }
                categories.push(item)
            }
        }
    }catch (e) {
    }
    return categories
}
