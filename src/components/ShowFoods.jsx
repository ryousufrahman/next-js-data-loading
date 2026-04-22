import Link from "next/link";
import React from "react";

const ShowFoods = ({food}) => {
  return (
    <div>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title">{food.dish_name}</h2>
          <p>
            {food.cuisine}
          </p>
          <div className="card-actions justify-end">
           <Link href={`/foods/${food.id}`}>
            <button className="btn btn-primary">See recipe</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFoods;
