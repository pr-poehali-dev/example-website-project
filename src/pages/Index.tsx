import { useState, useEffect } from "react";

const Index = () => {
  const [blink, setBlink] = useState(true);
  const [rotate, setRotate] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 200);

    const rotateInterval = setInterval(() => {
      setRotate((prev) => (prev + 15) % 360);
    }, 50);

    // Раздражающий попап через 3 секунды
    const popupTimer = setTimeout(() => {
      setPopupVisible(true);
    }, 3000);

    // Отслеживание мыши для раздражающих элементов
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(rotateInterval);
      clearTimeout(popupTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-pink-500 to-green-400 animate-pulse relative overflow-x-auto">
      {/* Раздражающий курсор-преследователь */}
      <div
        className="fixed w-8 h-8 bg-red-500 rounded-full animate-bounce pointer-events-none z-50"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        😵‍💫
      </div>

      {/* Всплывающее окно */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-red-600 border-8 border-yellow-400 p-8 max-w-md animate-bounce">
            <h3 className="text-3xl font-bold text-yellow-300 mb-4 animate-pulse">
              🚨 ВНИМАНИЕ!!! 🚨
            </h3>
            <p className="text-white text-xl mb-4">
              Вы выиграли 1000000 рублей!!! Нажмите ОК чтобы получить!!!
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPopupVisible(false)}
                className="bg-green-500 text-white px-4 py-2 font-bold animate-pulse"
              >
                ОК!!!
              </button>
              <button
                onClick={() => setPopupVisible(false)}
                className="bg-blue-500 text-white px-4 py-2 font-bold animate-pulse"
              >
                ОТМЕНА
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ужасный заголовок с еще больше эффектов */}
      <div className="text-center pt-8 pb-4">
        <h1
          className={`text-7xl font-bold text-red-600 ${blink ? "opacity-100" : "opacity-0"} transition-opacity duration-100 animate-bounce`}
          style={{
            fontFamily: "Impact, Arial Black, sans-serif",
            textShadow:
              "5px 5px 0px #00ff00, 10px 10px 0px #0000ff, 15px 15px 0px #ff00ff",
            transform: `rotate(${Math.sin(Date.now() / 200) * 20}deg) scale(${1 + Math.sin(Date.now() / 300) * 0.3})`,
          }}
        >
          🔥💀 ДОБРО ПОЖАЛОВАТЬ НА МОЙ УЛЬТРА САЙТ!!! 💀🔥
        </h1>
        <marquee
          className="text-3xl text-blue-600 font-bold bg-yellow-300 py-2 mt-4"
          direction="right"
          scrollamount="15"
        >
          ★★★ ЛУЧШИЙ САЙТ ВО ВСЕЛЕННОЙ!!! ЗАХОДИ КАЖДУЮ СЕКУНДУ!!! РАССКАЖИ
          ДРУЗЬЯМ!!! ★★★
        </marquee>
        <marquee
          className="text-2xl text-purple-600 font-bold bg-cyan-300 py-2"
          direction="left"
          scrollamount="20"
        >
          🎯 СКИДКА 999%!!! ТОЛЬКО СЕГОДНЯ!!! ЗВОНИ СЕЙЧАС!!! 🎯
        </marquee>
      </div>

      {/* Основной контент с хаосом */}
      <div className="container mx-auto px-4 relative">
        {/* Левая колонка */}
        <div
          className="absolute left-4 top-20 w-80 bg-lime-400 border-8 border-red-500 p-4 transform hover:scale-125 transition-transform animate-pulse"
          style={{
            transform: `rotate(${rotate * 0.2}deg) skew(${Math.sin(Date.now() / 400) * 10}deg)`,
          }}
        >
          <h2
            className="text-4xl font-bold text-purple-800 underline mb-4 animate-bounce"
            style={{ fontFamily: "Comic Sans MS, cursive" }}
          >
            О НАС!!! МЫ ЛУЧШИЕ!!!
          </h2>
          <div className="bg-pink-300 p-2 border-4 border-orange-500 mb-4">
            <img
              src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=200&h=150&fit=crop&crop=center"
              alt="Мигающая картинка"
              className={`w-full h-20 object-cover ${blink ? "brightness-200 saturate-200" : "brightness-50"} transition-all duration-100`}
            />
          </div>
          <p
            className="text-orange-600 text-xl leading-tight mb-4"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            🚀 Мы самая крутая компания в галактике!!! У нас есть ВСЁ что нужно
            и в 100 раз больше!!! Звоните прямо сейчас и получите скидку 999%!!!
            БЕСПЛАТНАЯ ДОСТАВКА НА МАРС!!!
          </p>
          <button className="mt-4 bg-red-600 text-yellow-300 px-8 py-4 text-2xl font-bold border-8 border-blue-500 hover:bg-green-500 animate-bounce transform hover:rotate-12">
            НАЖМИ МЕНЯ СРОЧНО!!! 💥
          </button>
        </div>

        {/* Центральный блок */}
        <div className="text-center mt-32">
          <div className="bg-cyan-300 border-8 border-purple-600 p-8 inline-block transform hover:rotate-6 transition-transform animate-pulse">
            <h2
              className="text-5xl text-red-700 mb-6 animate-bounce"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              НАШИ МЕГА УСЛУГИ ⚡⚡⚡
            </h2>
            <ul className="text-left text-2xl space-y-3">
              <li className="text-green-600 animate-pulse">
                🌟💫 Делаем сайты за 30 секунд
              </li>
              <li className="text-blue-600 animate-pulse">
                🌟💫 Продаем весь интернет
              </li>
              <li className="text-orange-600 animate-pulse">
                🌟💫 Ремонтируем квантовые компьютеры
              </li>
              <li className="text-purple-600 animate-pulse">
                🌟💫 Обучаем HTML за 5 минут
              </li>
              <li className="text-pink-600 animate-pulse">
                🌟💫 Создаем искусственный интеллект
              </li>
              <li className="text-red-600 animate-pulse">
                🌟💫 Продаем лицензию на дыхание
              </li>
            </ul>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="absolute right-4 top-40 w-80 bg-pink-400 border-8 border-green-500 p-4 animate-bounce transform hover:scale-110">
          <h2
            className="text-4xl font-bold text-blue-800 mb-4 animate-pulse"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            КОНТАКТЫ!!! ЗВОНИ!!!
          </h2>
          <div className="space-y-4 text-xl">
            <p className="text-red-600 animate-bounce">
              📞 Телефон: 8-800-555-35-35
            </p>
            <p className="text-green-600 animate-bounce">
              📧 Email: super@best-site-ever.ru
            </p>
            <p className="text-blue-600 animate-bounce">
              🏠 Адрес: ул. Интернетная, д. 999
            </p>
            <p className="text-purple-600 animate-bounce">
              📱 WhatsApp: +7-999-123-45-67
            </p>
            <p className="text-orange-600 animate-bounce">
              💬 Telegram: @best_site_ever
            </p>
          </div>
          <div className="mt-4 bg-yellow-400 p-4 border-8 border-red-500 animate-pulse">
            <p className="text-purple-700 font-bold text-center text-2xl">
              РАБОТАЕМ 25/8/366!!! БЕЗ ВЫХОДНЫХ!!!
            </p>
          </div>
        </div>

        {/* Блок с мигающими картинками */}
        <div className="mt-96 mb-8 text-center">
          <h2 className="text-5xl font-bold text-red-600 mb-6 animate-bounce">
            НАША ГАЛЕРЕЯ!!! 📸✨
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop"
              className={`w-32 h-32 border-8 border-yellow-500 ${blink ? "brightness-200 hue-rotate-180" : "brightness-50"} transition-all duration-100 hover:scale-150`}
            />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=150&h=150&fit=crop"
              className={`w-32 h-32 border-8 border-red-500 ${!blink ? "brightness-200 hue-rotate-90" : "brightness-50"} transition-all duration-100 hover:scale-150`}
            />
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=150&h=150&fit=crop"
              className={`w-32 h-32 border-8 border-green-500 ${blink ? "brightness-200 hue-rotate-270" : "brightness-50"} transition-all duration-100 hover:scale-150`}
            />
          </div>
        </div>

        {/* Нижний блок с отзывами */}
        <div className="mt-8 bg-orange-300 border-8 border-cyan-500 p-8 mx-auto max-w-5xl transform rotate-2 hover:rotate-3 transition-transform">
          <h2
            className="text-5xl text-center text-green-700 mb-8 animate-pulse"
            style={{ fontFamily: "Comic Sans MS, cursive" }}
          >
            ОТЗЫВЫ НАШИХ СУПЕР КЛИЕНТОВ!!! ⭐⭐⭐⭐⭐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-lime-200 p-6 border-8 border-red-400 transform -rotate-3 hover:rotate-3 transition-transform animate-pulse">
              <p className="text-purple-600 text-xl font-bold">
                "ЛУЧШИЙ САЙТ В ИСТОРИИ ЧЕЛОВЕЧЕСТВА!!! РЕКОМЕНДУЮ ВСЕМ НА
                ПЛАНЕТЕ!!!"
              </p>
              <p className="text-blue-600 font-bold mt-3">
                - Василий К., CEO Газпрома
              </p>
            </div>
            <div className="bg-cyan-200 p-6 border-8 border-yellow-500 transform rotate-3 hover:-rotate-3 transition-transform animate-pulse">
              <p className="text-red-600 text-xl font-bold">
                "НЕВЕРОЯТНО КРАСИВО И УДОБНО!!! 100 ИЗ 10!!! ЛУЧШЕ ЧЕМ
                GOOGLE!!!"
              </p>
              <p className="text-green-600 font-bold mt-3">
                - Мария П., Директор NASA
              </p>
            </div>
            <div className="bg-pink-200 p-6 border-8 border-blue-500 transform -rotate-1 hover:rotate-2 transition-transform animate-pulse">
              <p className="text-orange-600 text-xl font-bold">
                "ЭТОТ САЙТ ИЗМЕНИЛ МОЮ ЖИЗНЬ!!! ТЕПЕРЬ Я МИЛЛИОНЕР!!!"
              </p>
              <p className="text-purple-600 font-bold mt-3">
                - Билл Г., Microsoft
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Плавающие раздражающие элементы */}
      <div className="fixed top-1/4 left-1/2 bg-red-500 text-yellow-300 p-6 border-8 border-blue-500 animate-bounce transform -translate-x-1/2 rotate-12 hover:rotate-45 transition-transform">
        <p className="font-bold text-2xl">💥 МЕГА АКЦИЯ! 💥</p>
        <p className="text-xl">Скидка 9999%!</p>
        <p className="text-lg">Только сегодня!!!</p>
      </div>

      <div className="fixed top-1/3 right-8 bg-green-500 text-purple-300 p-6 border-8 border-pink-500 animate-spin hover:animate-bounce">
        <p className="font-bold text-2xl">🎉 ХИТ! 🎉</p>
        <p className="text-xl">НОВИНКА!</p>
      </div>

      <div className="fixed bottom-1/3 left-8 bg-purple-500 text-yellow-300 p-4 border-8 border-orange-500 animate-pulse transform hover:scale-125">
        <p className="font-bold text-xl">🚀 КОСМОС! 🚀</p>
        <p>БЕСПЛАТНО!</p>
      </div>

      {/* Футер */}
      <footer className="mt-20 bg-purple-600 text-yellow-300 py-12 text-center border-t-8 border-red-500">
        <marquee className="text-3xl font-bold mb-6" scrollamount="25">
          © 2024 ЛУЧШИЙ САЙТ ВО ВСЕХ ВСЕЛЕННЫХ!!! ВСЕ ПРАВА ЗАЩИЩЕНЫ
          ЛАЗЕРАМИ!!!
        </marquee>
        <marquee
          className="text-2xl font-bold mb-4"
          direction="right"
          scrollamount="15"
        >
          СОЗДАНО С ЛЮБОВЬЮ И БЕЗ ДИЗАЙНЕРА!!! ТЕПЕРЬ ЕЩЕ ХУЖЕ!!! 😵‍💫🎨💀
        </marquee>
        <p className="text-cyan-300 text-2xl animate-pulse">
          Если у вас болят глаза - это нормально! 🤪
        </p>
      </footer>
    </div>
  );
};

export default Index;
