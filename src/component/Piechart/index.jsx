import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Category A", value: 20 },
  { name: "Category B", value: 40 },
  { name: "Category C", value: 65 },
];

const COLORS = ["#f43396", "#f1effc", "#633bea"];

const Piechart = () => {
  return (
    <PieChart width={325} height={300}>
      <Pie
        data={data}
        cx='50%'
        cy='50%'
        innerRadius={60}
        outerRadius={80}
        fill='#8884d8'
        paddingAngle={5}
        dataKey='value'>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <foreignObject x='31%' y='40%' width='50%' height='50%'>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
          }}>
          <div style={{ fontSize: 20, fontWeight: "bold" }}>65%</div>
          <div>Total New</div>
          <div>Customers</div>
        </div>
      </foreignObject>
    </PieChart>
  );
};

export default Piechart;
