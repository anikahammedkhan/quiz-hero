import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    return (
        <div className='flex justify-center my-10'>

            <div style={{ width: "90%", height: "70vh" }}>
                <h1 className='text-center my-3 font-bold text-2xl'>Quiz Statistics</h1>
                <ResponsiveContainer width="99%" height="100%">
                    <BarChart
                        width={700}
                        height={600}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" barSize={40} fill="#00A36C" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;