import './Home.css';
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import InputForm from "../../../components/InputForm/InputForm";
import RecipeList from "../../../components/RecipeList/RecipeList";
import SearchForm from '../../../components/SearchForm/SearchForm';


const Home = ({search}) =>  {



    return(
      <section className="main">
          <h1 className='main__h1'>Welcome to Yamm</h1>
          <img 
          src='https://static.diabetesfoodhub.org/system/thumbs/system/images/articles/by-the-plate-main-image_SFW_3368519878.jpg'
          className='main__img'
          />
          <SearchForm search={search} />
        </section>
    )
};

export default Home