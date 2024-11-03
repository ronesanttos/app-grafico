import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import data from "../data.json";
import { useState } from "react";
//Styled Components: Ótimo para projetos que usam CSS-in-JS e desejam um estilo modular.
const Grafic = () => {
  const [datas, setData] = useState(data);
  const [selectedValue, setSelectedValue] = useState(null);

  const CustomLabel = ({ x, y }) => (
    <text
      className="custom-label"
      x={x}
      y={y}
      fill="Black"
      textAnchor="start"
      dominantBaseline="start"
      fontWeight="bold"
    >
      {selectedValue?.amount}
    </text>
  );

  const handleClick = (entry) => {
    const newData = datas.find((dados) => dados.amount == entry.amount);
    setSelectedValue(newData);
  };
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={datas}>
          <XAxis dataKey="day" tick={{ fill: "hsl(28, 10%, 53%)" }} />
          <Bar dataKey="amount" radius={5}>
            {datas.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                onClick={() => handleClick(entry)}
                cursor="pointer"
                fill={
                  entry.day === "wed"
                    ? " hsl(186, 34%, 60%)"
                    : "hsl(10, 79%, 65%)"
                }
              />
            ))}
            <LabelList dataKey="amount" content={<CustomLabel />} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafic;
