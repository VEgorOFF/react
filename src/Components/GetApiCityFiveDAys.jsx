import { useState, useEffect } from "react";

function GetApiCityFiveDays({ value }) {
  const [data, setData] = useState(null); // Начальное состояние - null
  const [isLoading, setIsLoading] = useState(true); // Изначально загрузка
  const [error, setError] = useState(null); // Изначально нет ошибок
  const [days, setDays] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const API = "67f053bf464c75b25e99fb74299aba79";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API}&units=metric`;
      try {
        setIsLoading(true); // Начать загрузку
        const response = await fetch(url); // Асинхронный вызов
        if (!response.ok) {
          throw new Error(`Ошибка при запросе: ${response.status}`);
        }
        const jsonData = await response.json();
        const dailyData = jsonData.list.filter((item) => item.dt_txt.includes("15:00:00"));
        setData(jsonData); // Обновление состояния после успешного получения данных
        setDays(dailyData);
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
    <div className="result_weather-city_fiveDays">
      <h1>Данные:</h1>
      {data && (
        <div>
          <p>Город {data.city.name}</p>
          <div>
            {days.map((item, index) => (
              <div className="date-temp-icons" key={index}>
                {item.dt_txt.replace("15:00:00", "")} {item.main.temp}°C
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GetApiCityFiveDays;
