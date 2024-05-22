import { createContext, useContext, useState } from "react";

export const ChartContext = createContext();

export const useChartContext = () => {
  return useContext(ChartContext);
};

export const ChartContextProvider = ({ children }) => {
  const [chart, setChart] = useState(
    JSON.parse(localStorage.getItem("chart")) || null
  );

  const data = {
    chart,
    setChart,
  };
  return <ChartContext.Provider value={data}>{children}</ChartContext.Provider>;
};
