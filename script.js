"use strict";
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.getElementById('header');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    text.style.top = `${40 + value * -.1}%`;
    btn.style.marginTop = `${value * 1.5}px`;
    header.style.top = value * .5 + 'px';
});