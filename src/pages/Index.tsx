import { useState, useEffect } from "react";

const Index = () => {
  const [blink, setBlink] = useState(true);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    const rotateInterval = setInterval(() => {
      setRotate((prev) => (prev + 10) % 360);
    }, 100);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-pink-500 to-green-400 animate-pulse">
      {/* Ужасный заголовок */}
      <div className="text-center pt-8 pb-4">
        <h1
          className={`text-6xl font-bold text-red-600 ${blink ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
          style={{
            fontFamily: "Impact, Arial Black, sans-serif",
            textShadow: "3px 3px 0px #00ff00, 6px 6px 0px #0000ff",
            transform: `rotate(${Math.sin(Date.now() / 500) * 10}deg)`,
          }}
        >
          🔥 ДОБРО ПОЖАЛОВАТЬ НА МОЙ САЙТ!!! 🔥
        </h1>
        <marquee className="text-2xl text-blue-600 font-bold bg-yellow-300 py-2 mt-4">
          ★★★ ЛУЧШИЙ САЙТ В ИНТЕРНЕТЕ!!! ЗАХОДИ КАЖДЫЙ ДЕНЬ!!! ★★★
        </marquee>
      </div>

      {/* Контент в хаотичном порядке */}
      <div className="container mx-auto px-4 relative">
        {/* Левая колонка */}
        <div
          className="absolute left-4 top-20 w-64 bg-lime-400 border-8 border-red-500 p-4 transform hover:scale-110 transition-transform"
          style={{ transform: `rotate(${rotate * 0.1}deg)` }}
        >
          <h2
            className="text-3xl font-bold text-purple-800 underline mb-4"
            style={{ fontFamily: "Comic Sans MS, cursive" }}
          >
            О НАС!!!
          </h2>
          <p
            className="text-orange-600 text-lg leading-tight"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Мы самая крутая компания в мире!!! У нас есть все что нужно и даже
            больше!!! Звоните прямо сейчас и получите скидку 99%!!!
          </p>
          <button className="mt-4 bg-red-600 text-yellow-300 px-6 py-3 text-xl font-bold border-4 border-blue-500 hover:bg-green-500 animate-bounce">
            НАЖМИ МЕНЯ!!!
          </button>
        </div>

        {/* Центральный блок */}
        <div className="text-center mt-32">
          <div className="bg-cyan-300 border-8 border-purple-600 p-8 inline-block transform -rotate-3 hover:rotate-3 transition-transform">
            <h2
              className="text-4xl text-red-700 mb-4 animate-pulse"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              НАШИ УСЛУГИ
            </h2>
            <ul className="text-left text-2xl space-y-2">
              <li className="text-green-600">🌟 Делаем сайты за 5 минут</li>
              <li className="text-blue-600">🌟 Продаем интернет</li>
              <li className="text-orange-600">🌟 Ремонтируем компьютеры</li>
              <li className="text-purple-600">🌟 Обучаем HTML</li>
            </ul>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="absolute right-4 top-40 w-72 bg-pink-400 border-8 border-green-500 p-4 animate-bounce">
          <h2
            className="text-3xl font-bold text-blue-800 mb-4"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            КОНТАКТЫ!!!
          </h2>
          <div className="space-y-3 text-lg">
            <p className="text-red-600">📞 Телефон: 8-800-555-35-35</p>
            <p className="text-green-600">📧 Email: info@best-site.ru</p>
            <p className="text-blue-600">🏠 Адрес: ул. Интернетная, д. 1</p>
          </div>
          <div className="mt-4 bg-yellow-400 p-3 border-4 border-red-500">
            <p className="text-purple-700 font-bold text-center animate-pulse">
              РАБОТАЕМ 25/8!!!
            </p>
          </div>
        </div>

        {/* Нижний блок с отзывами */}
        <div className="mt-96 bg-orange-300 border-8 border-cyan-500 p-6 mx-auto max-w-4xl transform rotate-1">
          <h2
            className="text-4xl text-center text-green-700 mb-6 animate-pulse"
            style={{ fontFamily: "Comic Sans MS, cursive" }}
          >
            ОТЗЫВЫ НАШИХ КЛИЕНТОВ!!!
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-lime-200 p-4 border-4 border-red-400 transform -rotate-2">
              <p className="text-purple-600 text-lg">
                "Лучший сайт!!! Рекомендую всем!!!"
              </p>
              <p className="text-blue-600 font-bold mt-2">- Василий К.</p>
            </div>
            <div className="bg-cyan-200 p-4 border-4 border-yellow-500 transform rotate-2">
              <p className="text-red-600 text-lg">
                "Очень красиво и удобно!!! 10 из 10!!!"
              </p>
              <p className="text-green-600 font-bold mt-2">- Мария П.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Плавающие элементы */}
      <div className="fixed bottom-4 left-4 bg-red-500 text-yellow-300 p-4 border-4 border-blue-500 animate-bounce">
        <p className="font-bold">💥 АКЦИЯ! 💥</p>
        <p>Скидка 90%!</p>
      </div>

      <div className="fixed bottom-4 right-4 bg-green-500 text-purple-300 p-4 border-4 border-pink-500 animate-spin">
        <p className="font-bold">🎉 ХИТ! 🎉</p>
      </div>

      {/* Футер */}
      <footer className="mt-20 bg-purple-600 text-yellow-300 py-8 text-center border-t-8 border-red-500">
        <marquee className="text-2xl font-bold mb-4">
          © 2024 ЛУЧШИЙ САЙТ В МИРЕ!!! ВСЕ ПРАВА ЗАЩИЩЕНЫ!!!
        </marquee>
        <p className="text-cyan-300 text-lg">
          Создано с любовью и без дизайнера! 😄
        </p>
      </footer>
    </div>
  );
};

export default Index;
