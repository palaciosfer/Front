import React from 'react';
import { Titles } from "../Atomos/Texts";
import { DoubleContainer } from './DoubleContainer';
import NivelAgua from './GfHumedad';
import EChartsComponent from "./GfTemYHume";

export function DataMonitoring() {
  const temperatureOptions = {
    title: { text: 'Humedada' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'] },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    toolbox: { feature: { saveAsImage: {} } },
    xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
      { name: 'Search Engine', type: 'line', stack: 'Total', areaStyle: {}, data: [820, 932, 901, 934, 1290, 1330, 1320] },
      { name: 'Direct', type: 'line', stack: 'Total', areaStyle: {}, data: [320, 332, 301, 334, 390, 330, 320] },
      { name: 'Video Ads', type: 'line', stack: 'Total', areaStyle: {}, data: [150, 232, 201, 154, 190, 330, 410] },
      { name: 'Union Ads', type: 'line', stack: 'Total', areaStyle: {}, data: [220, 182, 191, 234, 290, 330, 310] },
      { name: 'Email', type: 'line', stack: 'Total', areaStyle: {}, data: [120, 132, 101, 134, 90, 230, 210] },
    ],
  };

  const Humedad = {
    title: { text: 'Temperatura' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Tipo A', 'Tipo B', 'Tipo C'] },
    xAxis: { type: 'category', boundaryGap: false, data: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'] },
    yAxis: { type: 'value' },
    series: [
      { name: 'Tipo A', type: 'line', data: [100, 200, 150, 300, 250] },
      { name: 'Tipo B', type: 'line', data: [80, 90, 100, 110, 120] },
      { name: 'Tipo C', type: 'line', data: [150, 140, 160, 170, 180] },
    ],
  };

  return (
    <DoubleContainer>
      <article className="w-full h-full p-6">
        <header className="mt-3">
          <Titles text="Datos de Monitoreo" />
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-5">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <EChartsComponent option={temperatureOptions} style={{ width: '100%', height: '400px' }} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <EChartsComponent option={Humedad} style={{ width: '100%', height: '400px' }} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <NivelAgua /> 
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
          </div>
        </section>
      </article>
    </DoubleContainer>
  );
}
