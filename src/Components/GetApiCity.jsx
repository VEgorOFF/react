import { useState, useEffect } from "react";

function GetApiCity({ value }) {
  const [data, setData] = useState(null); // Начальное состояние - null
  const [isLoading, setIsLoading] = useState(true); // Изначально загрузка
  const [error, setError] = useState(null); // Изначально нет ошибок

  useEffect(() => {
    async function fetchData() {
      const API = "67f053bf464c75b25e99fb74299aba79";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API}&units=metric`;
      try {
        setIsLoading(true); // Начать загрузку
        const response = await fetch(url); // Асинхронный вызов
        if (!response.ok) {
          throw new Error(`Ошибка при запросе: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData); // Обновление состояния после успешного получения данных
        setIsLoading(false); // Загрузка завершена
      } catch (err) {
        setError(err); // Обновление состояния в случае ошибки
        setIsLoading(false); // Загрузка завершена
      }
    }

    fetchData(); // Запуск асинхронной функции
  }, [value]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div className="result_weather-city_now">
      <h1>Данные:</h1>
      {data && (
        <div>
          <p>Город {data.name}</p>
          <p>Температура {data.main.temp} °C</p>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon" />
        </div>
      )}
    </div>
  );
}

export default GetApiCity;
