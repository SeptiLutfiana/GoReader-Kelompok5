import React from "react";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home(){

    const data = [
        {
          date: '2000-01',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          date: '2000-02',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          date: '2000-03',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          date: '2000-04',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          date: '2000-05',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          date: '2000-06',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          date: '2000-07',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          date: '2000-08',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          date: '2000-09',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          date: '2000-10',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          date: '2000-11',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          date: '2000-12',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
      ];
      
      const monthTickFormatter = (tick) => {
        const date = new Date(tick);
      
        return date.getMonth() + 1;
      };
      
      const renderQuarterTick = (tickProps) => {
        const { x, y, payload } = tickProps;
        const { value, offset } = payload;
        const date = new Date(value);
        const month = date.getMonth();
        const quarterNo = Math.floor(month / 3) + 1;
        const isMidMonth = month % 3 === 1;
      
        if (month % 3 === 1) {
          return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
        }
      
        const isLast = month === 11;
      
        if (month % 3 === 0 || isLast) {
          const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;
      
          return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
        }
        return null;
      };

    return(
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
              <div className='card'>
                <div className='card-inner'>
                    <h3>PERANGKAT AKTIF</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
              </div>
              <div className='card'>
                <div className='card-inner'>
                    <h3>PERANGKAT NONAKTIF</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>26</h1>
              </div>
              <div className='card'>
                <div className='card-inner'>
                    <h3>OMSET</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>25.000</h1>
              </div>
              <div className='card'>
                <div className='card-inner'>
                    <h3>TUNGGAKAN</h3>
                    <BsListCheck className='card_icon'/>
                </div>
                <h1>50.000</h1>
              </div>
            </div>

            <div className='charts'>
              <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                  }}
                  >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
                  <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      interval={0}
                      tick={renderQuarterTick}
                      height={1}
                      scale="band"
                      xAxisId="quarter"
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
              </ResponsiveContainer>
              
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
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
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
        </main>
    )
}

export default Home