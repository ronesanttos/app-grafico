import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import data from "../data.json";

const Grafic = () => {
  const CustomTooltip = ({ active }) => {
    if (active && data && data.length) {
        return (
            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '5px' }}>
                <p>{`Mês: ${data[0].day}`}</p>
                <p>{`Despesa: $${data[0].amount}`}</p>
            </div>
        );
    }
    return null; //mudar depois
};

  return (
    <ResponsiveContainer width="100%" height={300} >
      <BarChart data={data} >
        <XAxis dataKey="day" tick={{fill: 'hsl(28, 10%, 53%)'}}/>
        <Tooltip content={<CustomTooltip/>} />
        <Legend />
        <Bar 
          type="monotone"
          dataKey="amount"
          activeDot={{ r: 8 }}
          radius={5}
          style={{fill:'hsl(10, 79%, 65%)'}}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Grafic;
