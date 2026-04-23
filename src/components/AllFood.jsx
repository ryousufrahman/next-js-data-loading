import Link from "next/link";


const AllFood = ({setFoods , allFoodsArray}) => {
    return (
        <div>
            <p> this food does not exist </p>
            <button className="btn btn-accent" onClick={()=>setFoods(allFoodsArray)}>all food</button>
        </div>
    );
};

export default AllFood;