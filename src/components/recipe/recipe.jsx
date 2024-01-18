import { Link } from "react-router-dom";
import { useState } from 'react'
import "./recipe.css";
import React, { useEffect } from 'react';

const YourComponent = () => {
const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
        //   headers: {
        //     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        //     "X-RapidAPI-Host": "www.themealdb.com/api/",
        //   },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="recipe-box">
      <h1 className="heading-re">YOUR RECIPES</h1>
      {apiData ? (
        <ul>
          <li>
            {" "}
            {apiData.meals.map((meal) => (
              <li className="recipe-con" key={meal.idMeal}>
                <img className="recipe-img" src={meal.strMealThumb} alt="" />
                <h2>{meal.strMeal}</h2>
                <p>Category: {meal.strCategory}</p>
                <p>Instructions: {meal.strInstructions}</p>
                {/* <iframe src={meal.strYoutube} frameborder="0"></iframe> */}
              </li>
            ))}
            
          </li>

          {console.log(apiData.meals)}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  {
    
  }
};


export default YourComponent;
