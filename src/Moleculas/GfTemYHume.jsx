import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const EChartsComponent = ({ option, style }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    if (option) {
      myChart.setOption(option);
    }

    return () => {
      myChart.dispose();
    };
  }, [option]);

  return <div ref={chartRef} style={style}></div>;
};

export default EChartsComponent;