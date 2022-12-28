import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import "./styleCircleMost.css"

const MostTypeCircle = () => {
  const data = [

 
    {
      name: "30-34",
      uv: 100,
      pv: 1398,
      fill: "#1F1D2B",
    },
    {
      name: "Dine In",
      uv: 75,
      pv: 9800,
      fill: "rgba(255, 124, 163, 1)",
    },
    {
      name: "To Go",
      uv: 60,
      pv: 3908,
      fill: "rgba(255, 181, 114, 1)",
    },
    {
      name: "Delivery",
      uv: 80,
      pv: 4800,
      fill: "rgba(101, 176, 246, 1)",
    },

  ];

  const style = {
    top: "0",
    right: 0,
    transform: "translate(0, 0)",
    lineHeight: "14px",
  };

  return (
    <>
<div className="mostCircle">
<RadialBarChart
        width={320}
        height={250}
        innerRadius="60%"
        outerRadius="140%"
        data={data}
        startAngle={180}
        endAngle={-180}
      >
        <RadialBar
          minAngle={15}
          
          background
          clockWise={true}
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
</div>
    </>
  );
};

export default MostTypeCircle;
