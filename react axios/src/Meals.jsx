import React, { useState,useEffect } from 'react'
import axios from "axios";
import "./style.css"

export const Meal = () => {
         let [items,setitems] = useState([])
    
        
        useEffect(()=>{
            axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res)=>{
                setitems(res.data.meals)
            }).catch(err=>console.log(err));
        },[])

        let meals = items.map(({strMeal, strMealThumb, idMeal })=>{

            return (
                <section className="card"  key={idMeal} >
                    <img src={strMealThumb} />
                    <section className="content">
                    <p>{strMeal}</p>
                    <p key={Math.random()}>#{idMeal}</p>
                    </section>
                </section>
            )
        })
        


    return (
    <div className='items-container'>
        {meals}
    </div>
  )
}
