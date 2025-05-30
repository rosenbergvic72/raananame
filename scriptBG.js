// Получаем кнопки и виджеты по их идентификаторам
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const widget1 = document.getElementById('widget1');
const widget2 = document.getElementById('widget2');

// По умолчанию активируем виджет 1
widget2.style.display = 'block';
widget1.style.display = 'none';

// Добавляем обработчики событий для кнопок
button1.addEventListener('click', () => {
    widget2.style.display = 'block'; // Показываем виджет 1
    widget1.style.display = 'none'; // Скрываем виджет 2
});

button2.addEventListener('click', () => {
    widget2.style.display = 'none'; // Скрываем виджет 1
    widget1.style.display = 'block'; // Показываем виджет 2
});
