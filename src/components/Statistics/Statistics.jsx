import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const marksData = useLoaderData()
    console.log(marksData);
    return (
        <div>
            <h2>Statistics</h2>
        </div>
    );
};

export default Statistics;