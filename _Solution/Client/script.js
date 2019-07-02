console.log("Hello data school!");

// Create a variable to hold API
// We can create variables in three different ways
// Old skool would be 'var', however, since about 2015 (ES6) we use const and let
const API_URL = `https://api.coindesk.com/v1/bpi/currentprice.json`;
document.getElementById("btnDB").disabled = true;
// create a variable where we store data for adding to DB
let userData;

// get the amount that the user types in
const addedAmount = document.getElementById("inputBox");
// Create function to grab the data from the API
// various ways of creating a function
// we can call the Fetch API immediatly (this will load when the page loads) and use the promises

/*
fetch(API_URL)
  .then(response => response.json())
  .then(data => console.log(data));
*/

// or we can use Async/Await

const fetchData = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.bpi;
};

// const sendData = async userInput => {
//   const response = await fetch("http://localhost:1234/api", {
//     method: "POST",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(userInput)
//   });
//   const json = await response.json();
//   console.log(json);
// };

// fetchData();

// the problem is that it will run each time we reload the page. We actually want to setup an event listener. Which will only run when we click a button

// get the button from the HTML and attach event listener
// get the postcode information container
const infoContainer = document.getElementById("infoContainer");

document.getElementById("btn").addEventListener("click", async e => {
  e.preventDefault();
  if (addedAmount.value) {
    const currencyData = await fetchData();
    const convertedData = +addedAmount.value * currencyData.GBP.rate_float;
    infoContainer.innerHTML = `Amount: ${currencyData.GBP.rate_float}, which is Converted Amount: ${convertedData}`;
    document.getElementById("btnDB").disabled = false;
    userData = currencyData;
  } else {
    infoContainer.innerHTML = `Please specify an amount to convert`;
  }
});

document.getElementById("btnDB").addEventListener("click", async e => {
  e.preventDefault();
  // send the data to the backend so we can add it to the db
  try {
    const options = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    };

    const db_response = await fetch("http://localhost:1234/api", options);
    console.log(db_response);

    const db_json = await db_response.json();
    console.log(db_json);

    console.log(db_json);
  } catch (err) {
    console.log(userData);
    console.error(err);
  }
});
