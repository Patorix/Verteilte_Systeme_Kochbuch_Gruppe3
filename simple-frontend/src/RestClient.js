const fetch = require("node-fetch");

export async function alleRezepte() {
    return await fetch("http://localhost:4000/kochbuch/rezepte", {
    mode: "cors",})
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        return res;
    });
}