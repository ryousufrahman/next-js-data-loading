import React from 'react';

const RecipiePage = async({params}) => {
    const {showRecipie} = await params
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${showRecipie}`)
    const dataObject = await res.json()
    const food = dataObject.data
    return (
        <div>
            <h2>show details page of {showRecipie}</h2>
            <h2>{food.price}</h2>
        </div>
    );
};

export default RecipiePage;