import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
          "name": 4,
          "pv": 3
        },
        {
          "name": 5,
          "pv": 2
        },
        {
          "name": 6,
          "pv": 6
        },
        {
          "name": 7,
          "pv": 8
        },
        {
          "name": 8,
          "pv": 9
        },
        {
          "name": 9,
          "pv": 10
        },
        {
          "name": 10,
          "pv": 9
        },
        {
          "name": 11,
          "pv": 10
        },
        {
          "name": 12,
          "pv": 12
        },
        {
          "name": 13,
          "pv": 12
        }
      ];

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={5}>
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
          <Line type="monotone" dataKey="pv" stroke="hsl(243, 51%, 70%)" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;
