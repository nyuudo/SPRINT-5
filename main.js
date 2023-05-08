"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// DOM variables (main button, text area for jokes)
const nextJoke = document.querySelector("#button");
const jokeText = document.querySelector("#joke");
let currentJoke = "";
// Exercise 2 (data in DOM)
// ASYNC function to get current Joke
const getJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://icanhazdadjoke.com/`;
        const header = {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        };
        const response = yield fetch(url, header);
        const data = yield response.json();
        currentJoke = data.joke;
        console.log(currentJoke);
        jokeText.innerHTML = `${currentJoke}`;
        nextJoke.textContent = "NEXT JOKE";
        return currentJoke;
    }
    catch (error) {
        console.error(error);
    }
});
// Listeners for the main button
nextJoke.addEventListener("click", () => {
    getJoke();
});
