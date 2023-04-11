import React from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
   
    const marksData = [
        {
          id: 1,
          assignment_name: "First Assignment",
          assignment_marks: 58
        },
        {
          id: 2,
          assignment_name: "Second Assignment",
          assignment_marks: 60
        },
        {
          id: 3,
          assignment_name: "Thirt Assignment",
          assignment_marks: 60
        },
        {
          id: 4,
          assignment_name: "Fourth Assignment",
          assignment_marks: 53
        },
        {
          id: 5,
          assignment_name: "Fifth Assignment",
          assignment_marks: 60
        },
        {
          id: 6,
          assignment_name: "Sixth Assignment",
          assignment_marks: 60
        },
        {
          id: 7,
          assignment_name: "Seventh Assignment",
          assignment_marks: 60
        },
        {
          id: 8,
          assignment_name: "Eighth Assignmnet",
          assignment_marks: 60
        }
      ]
    
    return (
        <div>
            <div className='my-8 md:my-16'>
                <h2 className='font-bold text-3xl text-orange-500 text-center mb-6 md:mb-12'>My Assignmet Marks Are Show In The Below Graph Chart</h2>         
            </div>
            <div className='md:w-[1120px] mx-auto mb-4 md:mb-12'>
                <ResponsiveContainer width="100%" aspect={3}>
                    <AreaChart
                        width={800}
                        height={300}
                        data={marksData}>
                        <Area fill="#FD0A25" dataKey="assignment_marks"></Area>
                            <XAxis dataKey="assignment_name"></XAxis>
                            <YAxis dataKey="assignment_marks"></YAxis>
                            <Tooltip></Tooltip>
                        </AreaChart>
                </ResponsiveContainer>
                
            </div>
        </div>

    );
};

export default Statistics;