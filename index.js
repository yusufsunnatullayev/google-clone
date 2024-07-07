"use strict";

const section = document.querySelector(".info-wrapper");
const form = document.querySelector("form");
const input = document.querySelector("input");
const API_KEY = "AIzaSyCh7g51EVza-Rc-oPyd5LkF9r_9uZpryX0";
const CONTEXT_KEY = "0478cca8a4b33ed34";

async function fetchData(term) {
  try {
    let res = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    );
    let data = await res.json();
    console.log(data);
    section.innerHTML = "";
    data.items.forEach((item) => {
      let info = document.createElement("div");
      info.classList.add("info");
      info.innerHTML = `
      <div class="up">
      <img
        src="https://superspec.com/wp-content/uploads/2020/11/4-Neutral-Gray.jpg"
        alt=""
      />
      <div class="right">
        <a target="_blank" href=${item.link}><h1>${item.title}</h1></a>
        <a target="_blank" href=${item.link}>${item.link}</a>
      </div>
    </div>
    <div class="down">
      <a target="_blank" href=${item.link}><span>${item.title}</span></a>
      <p>
        ${item.snippet}
      </p>
    </div>
      `;
      section.appendChild(info);
    });
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData(input.value);
  input.value = "";
});
