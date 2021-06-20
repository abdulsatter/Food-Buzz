import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';


const Home = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const eventHandler = event =>{
        // console.log(event.target.value)
        setSearch(event.target.value)
    }

  useEffect( () => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals))
  },[search])

    return (
        <div>
            <h1>Welcome To Food Buzz</h1>
            <input style={{padding:'5px 50px', borderRadius:'5px', color:'blue'}} 
            type="text" onChange= {eventHandler} placeholder="search your meals"/>
            {
                meals?.map(meal => <Food meal ={meal}></Food>)
            }
            
        </div>
    );
};

export default Home;