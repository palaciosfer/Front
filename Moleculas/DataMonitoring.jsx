import React, { useEffect, useState } from "react";
import { Titles } from "../Atomos/Texts";
import { DoubleContainer } from './DoubleContainer';
import NivelAgua from './GfHumedad';
import EChartsComponent from "./GfTemYHume";
import { useWebSocket } from "react-use-websocket"; // Asumiendo que usas un hook para WebSocket

export function DataMonitoring() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [lightData, setLightData] = useState([]);
  const [airQualityData, setAirQualityData] = useState([]);
  const [waterLevelData, setWaterLevelData] = useState([]);
  
  // Configuración de WebSocket
  const { lastJsonMessage } = useWebSocket("ws://localhost:3002/ws", {
    onMessage: (msg) => {
      const data = JSON.parse(msg.data);
      console.log("Datos recibidos:", data);
      
      // Mapear los datos del WebSocket a las variables de estado
      setTemperatureData((prevData) => [...prevData, data.averageTemperature]);
      setHumidityData((prevData) => [...prevData, data.averageHumidity]);
      setLightData((prevData) => [...prevData, data.averageLight]);
      setAirQualityData((prevData) => [...prevData, data.airQuality]);
      setWaterLevelData((prevData) => [...prevData, data.waterLevelStatus]);
    }
  });

  // Función para verificar si los datos están fuera de los rangos óptimos
  const checkAlerts = (value, type) => {
    switch (type) {
      case "temperature":
        return value < 22 || value > 25 ? "alert" : "normal";
      case "humidity":
        return value < 79 || value > 80 ? "alert" : "normal";
      case "waterLevel":
        return value !== 100 ? "alert" : "normal";
      case "light":
        return value < 300 || value > 1000 ? "alert" : "normal"; // Ajuste aproximado para luz
      case "airQuality":
        return value > 200 ? "alert" : "normal"; // MQ2: mayor que 200 generalmente es malo
      default:
        return "normal";
    }
  };

  const temperatureOptions = {
    title: { text: 'Temperatura' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Temperatura promedio'] },
    xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
      {
        name: 'Temperatura promedio',
        type: 'line',
        data: temperatureData,
        itemStyle: {
          color: (value) => {
            // Cambiar color según si la temperatura es normal o de alerta
            return checkAlerts(value.value, "temperature") === "alert" ? "red" : "green";
          }
        }
      }
    ]
  };

  const humidityOptions = {
    title: { text: 'Humedad' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Humedad promedio'] },
    xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
      {
        name: 'Humedad promedio',
        type: 'line',
        data: humidityData,
        itemStyle: {
          color: (value) => {
            // Cambiar color según si la humedad es normal o de alerta
            return checkAlerts(value.value, "humidity") === "alert" ? "red" : "green";
          }
        }
      }
    ]
  };

  const lightOptions = {
    title: { text: 'Luz' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Luz promedio'] },
    xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
      {
        name: 'Luz promedio',
        type: 'line',
        data: lightData,
        itemStyle: {
          color: (value) => {
            return checkAlerts(value.value, "light") === "alert" ? "red" : "green";
          }
        }
      }
    ]
  };

  const airQualityOptions = {
    title: { text: 'Calidad del Aire' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Calidad del aire promedio'] },
    xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
      {
        name: 'Calidad del aire promedio',
        type: 'line',
        data: airQualityData,
        itemStyle: {
          color: (value) => {
            return checkAlerts(value.value, "airQuality") === "alert" ? "red" : "green";
          }
        }
      }
    ]
  };

  const waterLevelOptions = {
    title: { text: 'Nivel de Agua' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Nivel de agua promedio'] },
    xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
      {
        name: 'Nivel de agua promedio',
        type: 'line',
        data: waterLevelData,
        itemStyle: {
          color: (value) => {
            return checkAlerts(value.value, "waterLevel") === "alert" ? "red" : "green";
          }
        }
      }
    ]
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
            <EChartsComponent option={humidityOptions} style={{ width: '100%', height: '400px' }} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <EChartsComponent option={lightOptions} style={{ width: '100%', height: '400px' }} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <EChartsComponent option={airQualityOptions} style={{ width: '100%', height: '400px' }} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <EChartsComponent option={waterLevelOptions} style={{ width: '100%', height: '400px' }} />
          </div>
        </section>
      </article>
    </DoubleContainer>
  );
}
