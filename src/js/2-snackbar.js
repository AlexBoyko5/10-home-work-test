//~==== Вариант МОЙ ===============================================

//~==== Вариант Alex ===============================================

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

function delayFunction(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(`Promise resolved after ${delay} milliseconds`);
            } else {
                reject(`Promise rejected after ${delay} milliseconds`);
            }
        }, delay);
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const delay = parseInt(e.target.elements.delay.value, 10);
    const state = e.target.elements.state.value;

    delayFunction(delay, state)
        .then(result => {
            console.log(result);
            iziToast.success({
                title: '',
                message: `${result}`,
                position: 'topRight',
            });
            e.target.elements.delay.value = '';
            e.target.elements.state.value = '';
        })
        .catch(err => {
            console.log(err);
            iziToast.error({
                title: '',
                message: `${err}`,
                position: 'topRight',
            });
        });
    e.target.elements.delay.value = '';
    e.target.elements.state.value = '';
});

//~==== Вариант Лиля ===============================================
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', createPromise);

function createPromise(e) {
    e.preventDefault();

    const storedObj = {
        delay: parseInt(formEl.elements.delay.value),
        state: formEl.elements.state.value,
    };

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (storedObj.state === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${storedObj.delay}ms`);
            } else {
                reject(`❌ Rejected promise in ${storedObj.delay}ms`);
            }
        }, storedObj.delay);
    });

    promise
        .then(result => {
            iziToast.success({
                position: 'topRight',
                message: result,
            });
        })
        .catch(error => {
            iziToast.error({
                position: 'topRight',
                message: error,
            });
        });
}