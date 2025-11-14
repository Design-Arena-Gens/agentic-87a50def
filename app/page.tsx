'use client';

import { useState, useEffect } from 'react';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Работа с Gemini Opal",
      content: (
        <div className="center-content">
          <h1>Работа с Gemini Opal</h1>
          <p className="subtitle">Революционная модель мультимодального ИИ от Google</p>
          <p style={{ marginTop: '40px', fontSize: '1.2rem' }}>Интерактивная презентация 2025</p>
        </div>
      )
    },
    {
      title: "Что такое Gemini Opal?",
      content: (
        <>
          <h2>Что такое Gemini Opal?</h2>
          <ul>
            <li><span className="highlight">Новейшая модель</span> от Google DeepMind</li>
            <li>Мультимодальный ИИ - работает с текстом, изображениями, видео и аудио</li>
            <li>Превосходит предыдущие версии Gemini по всем показателям</li>
            <li>Интегрирована в экосистему Google (AI Studio, Vertex AI)</li>
            <li>Оптимизирована для коммерческого использования</li>
          </ul>
        </>
      )
    },
    {
      title: "Ключевые возможности",
      content: (
        <>
          <h2>Ключевые возможности</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🎯 Точность</h3>
              <p>Высокая точность в понимании контекста и генерации ответов</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Скорость</h3>
              <p>Быстрая обработка запросов в режиме реального времени</p>
            </div>
            <div className="feature-card">
              <h3>🌐 Мультимодальность</h3>
              <p>Работа с различными типами данных одновременно</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Безопасность</h3>
              <p>Встроенные механизмы безопасности и этичности</p>
            </div>
          </div>
        </>
      )
    },
    {
      title: "Начало работы",
      content: (
        <>
          <h2>Начало работы</h2>
          <ul>
            <li>Получите API ключ в <span className="highlight">Google AI Studio</span></li>
            <li>Установите необходимые библиотеки</li>
            <li>Настройте аутентификацию</li>
            <li>Отправьте первый запрос</li>
          </ul>
          <div className="code-block">
npm install @google/generative-ai
          </div>
        </>
      )
    },
    {
      title: "Пример кода - Инициализация",
      content: (
        <>
          <h2>Пример кода - Инициализация</h2>
          <div className="code-block">
{`import { GoogleGenerativeAI } from '@google/generative-ai';

// Инициализация клиента
const genAI = new GoogleGenerativeAI(API_KEY);

// Получение модели Gemini Opal
const model = genAI.getGenerativeModel({
  model: "gemini-opal"
});`}
          </div>
        </>
      )
    },
    {
      title: "Пример кода - Текстовый запрос",
      content: (
        <>
          <h2>Пример кода - Текстовый запрос</h2>
          <div className="code-block">
{`// Простой текстовый запрос
const prompt = "Объясни квантовую физику простыми словами";

const result = await model.generateContent(prompt);
const response = result.response;
const text = response.text();

console.log(text);`}
          </div>
        </>
      )
    },
    {
      title: "Работа с изображениями",
      content: (
        <>
          <h2>Работа с изображениями</h2>
          <div className="code-block">
{`// Анализ изображения
const imagePart = {
  inlineData: {
    data: base64Image,
    mimeType: "image/jpeg"
  }
};

const prompt = "Что изображено на этой картинке?";

const result = await model.generateContent([
  prompt,
  imagePart
]);

console.log(result.response.text());`}
          </div>
        </>
      )
    },
    {
      title: "Потоковая передача данных",
      content: (
        <>
          <h2>Потоковая передача данных</h2>
          <p>Получайте ответы частями для лучшего UX:</p>
          <div className="code-block">
{`// Streaming запрос
const result = await model.generateContentStream(prompt);

for await (const chunk of result.stream) {
  const chunkText = chunk.text();
  process.stdout.write(chunkText);
}`}
          </div>
        </>
      )
    },
    {
      title: "Настройка параметров",
      content: (
        <>
          <h2>Настройка параметров</h2>
          <div className="code-block">
{`const generationConfig = {
  temperature: 0.9,      // Креативность (0-1)
  topP: 0.95,           // Разнообразие
  topK: 40,             // Фильтрация токенов
  maxOutputTokens: 2048, // Макс. длина ответа
};

const result = await model.generateContent({
  contents: [{ role: "user", parts: [{ text: prompt }] }],
  generationConfig
});`}
          </div>
        </>
      )
    },
    {
      title: "Чат-режим",
      content: (
        <>
          <h2>Чат-режим</h2>
          <div className="code-block">
{`// Создание чат-сессии
const chat = model.startChat({
  history: []
});

// Отправка сообщений
const msg1 = await chat.sendMessage("Привет!");
console.log(msg1.response.text());

const msg2 = await chat.sendMessage("Как дела?");
console.log(msg2.response.text());`}
          </div>
        </>
      )
    },
    {
      title: "Практические применения",
      content: (
        <>
          <h2>Практические применения</h2>
          <ul>
            <li><span className="highlight">Чат-боты</span> - интеллектуальные ассистенты</li>
            <li><span className="highlight">Анализ документов</span> - извлечение информации</li>
            <li><span className="highlight">Генерация контента</span> - статьи, описания, код</li>
            <li><span className="highlight">Компьютерное зрение</span> - анализ изображений и видео</li>
            <li><span className="highlight">Перевод</span> - мультиязычная поддержка</li>
          </ul>
        </>
      )
    },
    {
      title: "Безопасность и этика",
      content: (
        <>
          <h2>Безопасность и этика</h2>
          <div className="code-block">
{`// Настройка фильтров безопасности
const safetySettings = [
  {
    category: "HARM_CATEGORY_HARASSMENT",
    threshold: "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    category: "HARM_CATEGORY_HATE_SPEECH",
    threshold: "BLOCK_MEDIUM_AND_ABOVE"
  }
];

const result = await model.generateContent({
  contents: [{ role: "user", parts: [{ text: prompt }] }],
  safetySettings
});`}
          </div>
        </>
      )
    },
    {
      title: "Лучшие практики",
      content: (
        <>
          <h2>Лучшие практики</h2>
          <ul>
            <li>Используйте <span className="highlight">четкие промпты</span> для лучших результатов</li>
            <li>Реализуйте <span className="highlight">обработку ошибок</span> и повторные попытки</li>
            <li>Оптимизируйте <span className="highlight">размер контекста</span></li>
            <li>Кэшируйте результаты для повторяющихся запросов</li>
            <li>Мониторьте использование API и затраты</li>
            <li>Соблюдайте лимиты rate limiting</li>
          </ul>
        </>
      )
    },
    {
      title: "Ресурсы",
      content: (
        <>
          <h2>Полезные ресурсы</h2>
          <ul>
            <li><span className="highlight">ai.google.dev</span> - официальная документация</li>
            <li><span className="highlight">Google AI Studio</span> - веб-интерфейс для экспериментов</li>
            <li><span className="highlight">Vertex AI</span> - корпоративное решение</li>
            <li><span className="highlight">GitHub</span> - примеры кода и интеграции</li>
            <li><span className="highlight">Community Forum</span> - сообщество разработчиков</li>
          </ul>
        </>
      )
    },
    {
      title: "Спасибо!",
      content: (
        <div className="center-content">
          <h1>Спасибо за внимание! 🚀</h1>
          <p style={{ marginTop: '40px', fontSize: '1.5rem' }}>
            Начните работать с <span className="highlight">Gemini Opal</span> уже сегодня
          </p>
          <p style={{ marginTop: '30px', color: '#718096' }}>
            Вопросы? Обсуждение?
          </p>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="presentation">
      <div className="slide" key={currentSlide}>
        {slides[currentSlide].content}
      </div>

      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>

      <div className="navigation">
        <button
          className="nav-button"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          ←
        </button>
        <button
          className="nav-button"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
}
