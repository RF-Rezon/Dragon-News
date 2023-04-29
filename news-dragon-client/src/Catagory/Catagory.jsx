import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleCard from './singleCard';



const Catagory = () => {
    const {id} = useParams();
    const categoryNews =  useLoaderData();
    
    return (
        <div>
            {categoryNews.map(cd => <SingleCard cd={cd} key={cd._id}/>)}
        </div>
    );
};

export default Catagory;