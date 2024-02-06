//~==== Вариант МОЙ №1 ===============================================
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// // Оголошуємо змінну для зберігання обраної дати
// let userSelectedDate;

// // Оголошуємо змінну для зберігання ідентифікатора таймера
// let timerId;

// // Оголошуємо змінну для зберігання елемента таймера
// const timerElement = document.getElementById("timer");

// // Оголошуємо змінну для зберігання елемента кнопки
// const startButton = document.getElementById("start-button");

// // Оголошуємо об'єкт параметрів для flatpickr
// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         // Отримуємо перший елемент масиву обраних дат
//         const selectedDate = selectedDates[0];

//         // Перевіряємо, чи обрана дата в майбутньому
//         if (selectedDate > new Date()) {
//             // Записуємо обрану дату в змінну
//             userSelectedDate = selectedDate;

//             // Робимо кнопку активною
//             startButton.disabled = false;
//         } else {
//             // Показуємо повідомлення про помилку
//             iziToast.error({
//                 title: "Error",
//                 message: "Please choose a date in the future",
//             });

//             // Робимо кнопку неактивною
//             startButton.disabled = true;
//         }
//     },
// };

// // Ініціалізуємо flatpickr на елементі input
// flatpickr("#datetime-picker", options);

// // Написуємо функцію, яка додає нуль перед значенням, якщо воно менше 10
// function addLeadingZero(value) {
//     return value.toString().padStart(2, "0");
// }

// // Написуємо функцію, яка оновлює інтерфейс таймера
// function updateTimer() {
//     // Обчислюємо різницю між обраною і поточною датою в мілісекундах
//     const difference = userSelectedDate - new Date();

//     // Перевіряємо, чи різниця більша за нуль
//     if (difference > 0) {
//         // Конвертуємо різницю в дні, години, хвилини і секунди
//         const { days, hours, minutes, seconds } = convertMs(difference);

//         // Форматуємо значення з нулями
//         const formattedDays = addLeadingZero(days);
//         const formattedHours = addLeadingZero(hours);
//         const formattedMinutes = addLeadingZero(minutes);
//         const formattedSeconds = addLeadingZero(seconds);

//         // Виводимо значення на екран
//         timerElement.textContent = `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
//     } else {
//         // Зупиняємо таймер
//         clearInterval(timerId);

//         // Виводимо нулі на екран
//         timerElement.textContent = "00:00:00:00";
//     }
// }

// // Написуємо функцію, яка запускає таймер
// function startTimer() {
//     // Перевіряємо, чи обрана дата в майбутньому
//     if (userSelectedDate > new Date()) {
//         // Оновлюємо таймер один раз
//         updateTimer();

//         // Запускаємо таймер з інтервалом в одну секунду
//         timerId = setInterval(updateTimer, 1000);

//         // Робимо кнопку і інпут неактивними
//         startButton.disabled = true;
//         document.getElementById("datetime-picker").disabled = true;
//     } else {
//         // Показуємо повідомлення про помилку
//         iziToast.error({
//             title: "Error",
//             message: "Please choose a date in the future",
//         });
//     }
// }

// // Додаємо обробник події на кнопку
// startButton.addEventListener("click", startTimer);

//~==== Вариант МОЙ №2 ===============================================

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Оголошуємо змінну для зберігання обраної дати
let userSelectedDate;

// Оголошуємо змінну для зберігання ідентифікатора таймера
let timerId;

// Оголошуємо змінну для зберігання елемента таймера
const timerElement = document.querySelector(".timer");

// Оголошуємо змінну для зберігання елемента кнопки
const startButton = document.querySelector('[data-start]');
// Робимо кнопку неактивною при першому завантаженні сторінки
startButton.disabled = true;

// Оголошуємо об'єкт параметрів для flatpickr
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // Отримуємо перший елемент масиву обраних дат
        const selectedDate = selectedDates[0];

        // Перевіряємо, чи обрана дата в майбутньому
        if (selectedDate > new Date()) {
            // Записуємо обрану дату в змінну
            userSelectedDate = selectedDate;

            // Робимо кнопку активною
            startButton.disabled = false;
        } else {
            // Показуємо повідомлення про помилку
            iziToast.error({
                title: "Error",
                message: "Please choose a date in the future",
            });

            // Робимо кнопку неактивною
            startButton.disabled = true;
        }
    },
};

// Ініціалізуємо flatpickr на елементі input
flatpickr("#datetime-picker", options);

// Написуємо функцію, яка додає нуль перед значенням, якщо воно менше 10
function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}

// Функція convertMs() повертає об'єкт з розрахованим часом, що залишився до кінцевої дати. 
function convertMs(milliseconds) {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
}

// Написуємо функцію, яка оновлює інтерфейс таймера
function updateTimer() {
    // Обчислюємо різницю між обраною і поточною датою в мілісекундах
    const difference = userSelectedDate - new Date();

    // Перевіряємо, чи різниця більша за нуль
    if (difference > 0) {
        // Конвертуємо різницю в дні, години, хвилини і секунди
        const { days, hours, minutes, seconds } = convertMs(difference);

        // Форматуємо значення з нулями
        const formattedDays = addLeadingZero(days);
        const formattedHours = addLeadingZero(hours);
        const formattedMinutes = addLeadingZero(minutes);
        const formattedSeconds = addLeadingZero(seconds);

        // Виводимо значення на екран
        timerElement.textContent = `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
        // Зупиняємо таймер
        clearInterval(timerId);

        // Виводимо нулі на екран
        timerElement.textContent = "00:00:00:00";
    }
}

// Написуємо функцію, яка запускає таймер
function startTimer() {
    // Перевіряємо, чи обрана дата в майбутньому
    if (userSelectedDate > new Date()) {
        // Оновлюємо таймер один раз
        updateTimer();

        // Запускаємо таймер з інтервалом в одну секунду
        timerId = setInterval(updateTimer, 1000);

        // Робимо кнопку і інпут неактивними
        startButton.disabled = true;
        document.getElementById("datetime-picker").disabled = true;
    } else {
        // Показуємо повідомлення про помилку
        iziToast.error({
            title: "Error",
            message: "Please choose a date in the future",
        });
    }
}

// Додаємо обробник події на кнопку
startButton.addEventListener("click", startTimer);


//~==== Вариант Alex ===============================================

// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const startBtn = document.querySelector('[data-start]');
// const fieldsValue = document.querySelectorAll('.field');
// const daysElement = fieldsValue[0].firstElementChild;
// const hoursElement = fieldsValue[1].firstElementChild;
// const minutesElement = fieldsValue[2].firstElementChild;
// const secondsElement = fieldsValue[3].firstElementChild;
// let delta = 0;
// let intervalId;
// let userSelectedDate;
// let timerStarted = false;
// let zerosDisplayed = false;
// startBtn.disabled = true;

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         userSelectedDate = selectedDates[0].getTime();
//         delta = userSelectedDate - Date.now();

//         if (delta > 0) {
//             startBtn.disabled = false;
//             zerosDisplayed = true;

//             if (timerStarted) {
//                 startTimer();
//             }

//             startBtn.addEventListener('click', startTimer);
//         } else {
//             startBtn.disabled = true;
//             iziToast.error({
//                 message: 'Please choose a date in the future',
//                 messageColor: '#fff',
//                 messageSize: '16',
//                 messageLineHeight: '',
//                 backgroundColor: '#ef4040',
//                 icon: 'x',
//                 position: "topRight"
//             });

//             delta = 0;
//             if (!timerStarted) {
//                 daysElement.textContent = '00';
//                 hoursElement.textContent = '00';
//                 minutesElement.textContent = '00';
//                 secondsElement.textContent = '00';
//                 zerosDisplayed = false;
//             }
//         }
//     },
// };

// const input = document.querySelector('#datetime-picker');
// flatpickr(input, options);

// function setDateToField(delta) {
//     if (zerosDisplayed) {
//         daysElement.textContent = convertMs(delta).days.toString().padStart(2, '0');
//         hoursElement.textContent = convertMs(delta).hours.toString().padStart(2, '0');
//         minutesElement.textContent = convertMs(delta).minutes.toString().padStart(2, '0');
//         secondsElement.textContent = convertMs(delta).seconds.toString().padStart(2, '0');
//     }
// }

// function startTimer() {
//     if (!timerStarted && zerosDisplayed) {
//         input.disabled = true;
//         startBtn.disabled = true;
//         timerStarted = true;

//         setDateToField(delta);

//         intervalId = setInterval(() => {
//             delta -= 1000;
//             setDateToField(delta);

//             if (delta <= 0) {
//                 stopTimer();
//             }
//         }, 1000);
//     }
// }

// function stopTimer() {
//     clearInterval(intervalId);
//     input.disabled = false;
//     startBtn.disabled = true;
//     timerStarted = false;
//     zerosDisplayed = false;
//     daysElement.textContent = '00';
//     hoursElement.textContent = '00';
//     minutesElement.textContent = '00';
//     secondsElement.textContent = '00';
// }

// function convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const days = Math.floor(ms / day);
//     const hours = Math.floor((ms % day) / hour);
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
// }

//~==== Вариант Лиля ===============================================

// import flatpickr from 'flatpickr';
// import iziToast from 'izitoast';

// import 'flatpickr/dist/flatpickr.min.css';
// import 'izitoast/dist/css/iziToast.min.css';

// const myButtonEl = document.querySelector('button');
// const inputEl = document.querySelector('#datetime-picker');
// const timerEl = document.querySelector('.timer');
// const daysSpan = timerEl.querySelector('[data-days]');
// const hoursSpan = timerEl.querySelector('[data-hours]');
// const minutesSpan = timerEl.querySelector('[data-minutes]');
// const secondsSpan = timerEl.querySelector('[data-seconds]');

// let userSelectedDate;
// let countdownInterval;
// myButtonEl.disabled = true;

// function startCountdown() {
//     countdownInterval = setInterval(updateCountdown, 1000);
// }

// function updateCountdown() {
//     const now = new Date();
//     const remainingTime = userSelectedDate - now;
//     if (remainingTime <= 0) {
//         stopCountdown();
//         return;
//     }
//     const { days, hours, minutes, seconds } = convertMs(remainingTime);
//     daysSpan.textContent = days;
//     hoursSpan.textContent = hours;
//     minutesSpan.textContent = minutes;
//     secondsSpan.textContent = seconds;
// }

// myButtonEl.addEventListener('click', () => {
//     if (userSelectedDate) {
//         myButtonEl.disabled = true;
//         inputEl.disabled = true;
//         startCountdown();
//     }
// });

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     dateFormat: 'Y-m-d H:i',
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         userSelectedDate = selectedDates[0];
//         if (userSelectedDate < Date.now()) {
//             iziToast.error({
//                 position: 'topRight',
//                 message: 'Please choose a date in the future',
//             });
//             myButtonEl.disabled = true;
//         } else {
//             myButtonEl.disabled = false;
//         }
//     },
// };

// function stopCountdown() {
//     clearInterval(countdownInterval);
//     daysSpan.textContent = '00';
//     hoursSpan.textContent = '00';
//     minutesSpan.textContent = '00';
//     secondsSpan.textContent = '00';
//     countdownInterval = null;
//     inputEl.disabled = false;
// }

// const instance = flatpickr(inputEl, options);

// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(ms / day)
//         .toString()
//         .padStart(2, '0');
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour)
//         .toString()
//         .padStart(2, '0');
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute)
//         .toString()
//         .padStart(2, '0');
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second)
//         .toString()
//         .padStart(2, '0');

//     return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
