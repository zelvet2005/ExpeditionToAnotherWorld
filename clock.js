"use strict";

const clock = document.querySelector(".clock");

function setTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clock.textContent = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

setInterval(setTime, 10);
