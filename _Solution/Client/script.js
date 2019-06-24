console.log("Hello data school!");

// Create a variable to hold API
// We can create variables in three different ways
// Old skool would be 'var', however, since about 2015 (ES6) we use const and let
const API_URL = `https://api.carbonintensity.org.uk/regional/postcode/`;
document.getElementById("btnDB").disabled = true;
let userData;

// get the postcode types in by the user
const selectedPostcode = document.getElementById("inputBox");
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
  const response = await fetch(API_URL + selectedPostcode.value.toUpperCase());
  const json = await response.json();
  return json.data[0];
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
const postcodeContainer = document.getElementById("infoContainer");

document.getElementById("btn").addEventListener("click", async e => {
  e.preventDefault();
  if (selectedPostcode.value) {
    const postCodeData = await fetchData();
    postcodeContainer.innerHTML = `Postcode: ${postCodeData.postcode} ${postCodeData.shortname}`;
    document.getElementById("btnDB").disabled = false;
    userData = postCodeData.postcode;
  } else {
    postcodeContainer.innerHTML = `Please specify a postcode`;
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
    debugger;
    const db_json = await db_response.json();
    console.log(db_json);
    debugger;
    console.log(db_json);
  } catch (err) {
    debugger;
    console.log(userData);
    console.error(err);
  }
});
