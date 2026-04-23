"use client";
import AllFood from "@/components/AllFood";
import ShowFoods from "@/components/ShowFoods";
import { useEffect, useState } from "react";

const FoodDataFetch = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchFood , setSearchFood] =useState('')
  const [allFoodsArray , setAllFoodsArray] = useState([])
  const foodPromise = async () => {
    setLoading(true);
    const res = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/foods",
    );
    const data = await res.json();
    
    setFoods(data.data);
    setAllFoodsArray(data.data)
    console.log(foods);

    setLoading(false);
  };
  useEffect(() => {
    foodPromise();
  }, []);
  
  const handleSearch =()=>{
   const selectedFood = foods.filter(food=> food.dish_name.toLowerCase().includes(searchFood.toLocaleLowerCase().trim())) 
   console.log(selectedFood);
   
   setFoods(selectedFood)

  }
  
  

  return (
    <div className="max-w-[1400px] mx-auto mt-10 space-y-10">
      <div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Search your food</legend>
          <input type="text" className="input" 
          value={searchFood}
          onChange={e=>setSearchFood(e.target.value)}
          />
          
        </fieldset>
        <button className="btn btn-primary" onClick={handleSearch}>search</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {loading ? (
          <h2>loading....</h2>
        ) : foods.length==0 ? <AllFood setFoods={setFoods} allFoodsArray={allFoodsArray}></AllFood> :(
          foods.map((food) => <ShowFoods key={food.id} food={food}></ShowFoods>)
        )}
      </div>
    </div>
  );
};

export default FoodDataFetch;
