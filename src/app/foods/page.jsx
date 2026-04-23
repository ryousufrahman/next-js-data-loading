"use client";
import ShowFoods from "@/components/ShowFoods";
import { useEffect, useState } from "react";

const FoodDataFetch = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchFood , setSearchFood] =useState('')
  const foodPromise = async () => {
    setLoading(true);
    const res = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/foods",
    );
    const data = await res.json();
    const foodsArray = data.data;
    setFoods(data.data);
    console.log(foods);

    setLoading(false);
  };
  useEffect(() => {
    foodPromise();
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto mt-10 space-y-10">
      <div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Search your food</legend>
          <input type="text" className="input" 
          defaultValue={searchFood}
          />
          
        </fieldset>
        <button className="btn btn-primary">search</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {loading ? (
          <h2>loading....</h2>
        ) : (
          foods.map((food) => <ShowFoods key={food.id} food={food}></ShowFoods>)
        )}
      </div>
    </div>
  );
};

export default FoodDataFetch;
