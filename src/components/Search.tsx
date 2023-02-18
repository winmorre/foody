import {FC} from 'react'

import {AiOutlineSearch} from 'react-icons/ai';
import {AppIcon} from "./AppIcon";

import '../css/Search.css'


interface ISearchProps {
}

export const Search: FC<ISearchProps> = (props: ISearchProps) => {
    return <div className="Search relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 Search-left">
            <span className="sm:text-sm Search-left-search-icon"><AppIcon icon={<AiOutlineSearch/>} color="#f8bc43"
                                                                          fontSize="28px" /></span>
        </div>
        <input type="text" name="search" id="search" className="block w-full rounded-md border-gray-300 pl-7 pr-12 sm:text-sm Search-input" placeholder="Search Meal"/>
    </div>
}