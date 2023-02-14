import React from 'react'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'AR < 30 Days',
    uv: 150,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'AR 31-60 Days',
    uv: '50',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'AR 61-90 Days',
    uv: '100',
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'AR > 90 Days',
    uv: '50',
    pv: 3908,
    amt: 2000,
  },

];
const getIntroOfPage = (label) => {
  if (label === 'AR < 30 Days') {
    return "$150";
  }
  if (label === 'AR 31-60 Days') {
    return "$50";
  }
  if (label === 'AR 61-90 Days') {
    return "$100";
  }
  if (label === 'AR > 90 Days') {
    return "$50";
  }
 
  return '';
};
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label" style={{ color: "#681c9a" }}>{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc"></p>
      </div>
    );
  }

  return null;
};
function AccountRecivable() {
  return (
    <div>
      <h1>
      <div  className='container'>
<hr />
<ResponsiveContainer width="100%" aspect={2.1}>
<BarChart
        width={200}
         height={400}
          data={data}
          margin={{
            top: 80,
            right: 30,
            left: 80,
            bottom: 0,
          }}
        >
          <CartesianGrid horizontal="" vertical=""  />
          <XAxis dataKey="name" tick={{stroke:"black"}} tickSize />
          <YAxis tick={{stroke:"black"}} />
          <Tooltip wrapperStyle={{ outline: "none" }} cursor={false}  content={<CustomTooltip />} />
          <Legend />
       
          <Bar type="monotone"  dataKey="uv" stroke="#6e1da2" fill="#6e1da2"  />
        </BarChart>
      </ResponsiveContainer>

      </div>
    

      </h1>
    </div>
  )
}

export default AccountRecivable
