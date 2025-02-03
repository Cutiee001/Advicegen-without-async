
function id(id) {
    return document.getElementById(id);
}

async function fetchApi(url) {  
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("An error occured while fetching the advice API");
      }  
    const result = await response.json();
    return result
}


id("dice-holder").addEventListener("click", () => {
    id("advice").textContent = "Loading...";

    function changeData(adviceText, numText, adviceStyle, numStyle, headStyle, conStyle ) {
        id("number").textContent = numText;
        id("advice").textContent = adviceText;
        id("advice").style.color = adviceStyle;
        id("header").style.color = headStyle;
        id("container").style.backgroundColor = conStyle;
        id("number").style.display = numStyle;
    }

    // Fetching the advice API       
    fetchApi("https://api.adviceslip.com/advice").then((response) => {
    //Changing the content of the texts
         const text = `“${response.slip.advice}”`;
         const num = response.slip.id;

         changeData(text, num, "hsl(193, 38%, 86%)", "inline", "hsl(150, 100%, 66%)", "hsl(217, 19%, 24%)");

    }).catch((err) => {
        const error = `An Error Occurred: ${err.message}`;

        changeData(error, null , "red", "none", "red", "#eee");
    });
});

setTimeout(() => alert("Kindly wait a few seconds before generating a new advice."), 800);
/*

// Without using async/await

let data;
fetch("https://api.adviceslip.com/advice")
.then((response) => response.json())
.then(result => data = result.slip);
=======
function id(id) {
    return document.getElementById(id);
}

async function fetchApi(url) {  
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("An error occured while fetching the advice API");
      }  
    const result = await response.json();
    return result
}


id("dice-holder").addEventListener("click", () => {
    id("advice").textContent = "Loading...";

    function changeData(adviceText, numText, adviceStyle, numStyle, headStyle, conStyle ) {
        id("number").textContent = numText;
        id("advice").textContent = adviceText;
        id("advice").style.color = adviceStyle;
        id("header").style.color = headStyle;
        id("container").style.backgroundColor = conStyle;
        id("number").style.display = numStyle;
    }

    // Fetching the advice API       
    fetchApi("https://api.adviceslip.com/advice").then((response) => {
    //Changing the content of the texts
         const text = `“${response.slip.advice}”`;
         const num = response.slip.id;

         changeData(text, num, "hsl(193, 38%, 86%)", "inline", "hsl(150, 100%, 66%)", "hsl(217, 19%, 24%)");

    }).catch((err) => {
        const error = `An Error Occurred: ${err.message}`;

        changeData(error, null , "red", "none", "red", "#eee");
    });
});

setTimeout(() => alert("Kindly wait a few seconds before generating a new advice."), 800);
/*

// Without using async/await

let data;
fetch("https://api.adviceslip.com/advice")
.then((response) => response.json())
.then(result => data = result.slip);
>>>>>>> 7e9131b33cf89da5806fcc9a46ff403caa8572f2
*/