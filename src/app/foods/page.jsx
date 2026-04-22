
import ShowFoods from '@/components/ShowFoods';


const FoodDataFetch = async() => {
    const fetchPromise = await fetch ('https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const dataObject = await fetchPromise.json()
    const foods = dataObject.data
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
              

                {
                foods.map(food=> <ShowFoods key={food.id} food ={food}></ShowFoods>)
               }

            
            </div>
        </div>
    );
};

export default FoodDataFetch;