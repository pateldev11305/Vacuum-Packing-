import React,{ useState } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header' ;
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import ExploreImages from '../../Components/ExploreImages/ExploreImages';
const Home = () => {
  const [category,setCategory]=useState("ALL");
  return (
    <div>
      
      <Header/>
      
      <ExploreImages category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
