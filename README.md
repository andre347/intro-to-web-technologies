# **Introduction to Web Technologies**

Supporting material for introduction to web technologies. In order to create anything in Tableau, you need to understand the main web technologies. This is basically 'Level 0' for learning Web Data Connectors, working with the JavaScript API or building Extensions. All of these Tableau APIs assume you have knowledge of HTML, CSS and JavaScript. Without these three it's going to be very hard to develop anything.

The code in this repository is a reference point for those that want to follow along.

## **Prerequisites**

- [ ] Text Editor: VS Code, Atom or Sublime
- [ ] Web Browser: Google Chrome or Mozilla Firefox
- [ ] Basic understanding of APIs: Get, Post, Put etc.
- [ ] Basic understanding of Git & Github
- [ ] NodeJS (& NPM, which will be installed automatically if you install NodeJS)

**Extensions installed for VS Code**:

- [ ] Emmet (default) => for the autocomplete
- [ ] Prettier (default?) => to reformat your code
- [ ] Live Server => start a server for any html file
- [ ] Prettify JSON => make JSON look pretty
- [ ] Bracket Pair Colorizer => to avoid being confused with all the brackets

**Theme**:

- [ ] Material Theme

**Font**:

- [ ] FiraCode

## Overview of Material

Two folders in solutions:

1. **Client**
   - index.html
   - style.css
   - script.js
2. **Server**
   - server.js
   - db.db

## API that we are going to use

```
https://api.coindesk.com/v1/bpi/currentprice.json

```

---

## Questions (to be answered)

Write in your own words please! 🤓

Answers by [Laine!](https://lifeinthefastlaine.home.blog)

### **HTML** 💻

<details>
<summary>What is HTML?</summary>

- It is a language that we use to design a webpage. It is a way to format and annotate a text file.
- Stands for Hyper Text Markup Language

  </details>

  <details>

<summary>How do we create a HTML file?</summary>
-	Put .html
  </details>
  <details>
<summary>What are the main building blocks of an HTML file?</summary>

- You need a pair of tags for each element/part of the file.
- The main tags you need are <html>, <head>,<body>
  </details>

<details>
<summary>What is the DOM (Document Object Model)?</summary>
* Document Object Model
* It's kind of like the metadata of a dataset, but for objects. Objects in this case would be the html or XML file. It's like the metadata, because it represents the different parts/tags of the html or XML file. This is useful, because it allows other programming languages to manipulate the object, such as Javascript.
</details>
<details>
<summary>What are IDs and Classes (not a class in JavaScript) in HTML?</summary>
- You can use this within the Style tag.
- Class:
- Has a full stop in front of it.
- Can be applied to multiple elements in your object file.
- ID's:
- Have a hashtag in front of it.
- that you can only apply to one specific elements in your html file.
</details>

### **JavaScript** 🚀

<details>
<summary>How do we include JS files in HTML? Is there more than 1 option?</summary>
-	2 ways to do this: via file or via writing the script inside the HTML code.
-	Via file: Put script tag with the src attribute pointing to the name of the file e.g.

<script type="text/javascript" src="jsfile.js"></script>

- Script inside code e.g.

<script type="text/javascript">
-	// your JavaScript
-	</script>

</details>
<details>
<summary>What is the browser console and how do we use it?</summary>
-	It is a way of seeing what is happening in the background of a webpage. It can help you to diagnose JavaScript errors, you can also see logged messages so you know if a part of your JS script worked or not.
-	Can access it through developer tools from your browser.
</details>
<details>
<summary>What is jQuery?</summary>
-	It is a type of JavaScript library that allows you to write JS shorthand.  - a library is a package or a JS file that contains loads of functions that we can call on to execute a certain action.
-	It's used as a connector between the HTML DOM and the JS code.
-	You can use jQuery using the $ sign.
-	(Resources: https://jquery.com/)
</details>
<details>
<summary>What is ES6 (ECMAScript)?</summary>
-	ECMA script is a way of standardising a language. JS is one way to implement that. ES6 is the 6th edition.
</details>
<details>
<summary>What is Front End JavaScript and what is Back End JavaScript? (What are use cases for the latter?)</summary>
-	Front End:
"	"Client Side": You control what people see in the browser
-	Back End:
"	"Server Side": You control how the site works. For this, you need a server, an application and a database. Back end code will link the information from the data base to what we see on the browser.
"	You can use back end JS to provide RESTful API's
"	Use Cases include handling page requests, transferring data in a fast and smooth way,
"	Libraries that often used include Node.js, Express (which I've seen before with the web data connector).
</details>
<details>
<summary>What variables do we have in JS (different ways of declaring a variable)?</summary>
</details>
<details>
<summary>Which and how does JS handle datatypes?</summary>
-	Number, strings, Booleans, arrays (square brackets and comma separators) and objects (which can contain multiple bits of information using curly brackets and comma separated).
-	Same variable can be used to hold different data types at one time and if changed, the data type will change automatically as well.
</details>
<details>
<summary>What are functions? (are there different ways in writing them?)</summary>
-	Functions are a set of instructions that we be re-used in your code.
-	Functions need to be set and then invoked (called on).
-	How can we write them?:
"	"Function" keyword, name, parenthesis. The code to be executed is then written in curly brackets after.
E.g.
"	 function name (a,b) { return a + b}

you can then call on that function

var x = name(6,8)

this return you 6+8 = 14

To return the result of that function, use brackets.

- Different ways of writing them:
  " Function Declaration: Use keyword "function" e.g. function name (parameters) {code}
  " Function Expressions (lets you define a names or anonymous function): e.g let name = function (parameters) {code}
  " Arrow Function: e.g. let name =( parameters) => {code}

</details>
<details>
<summary>What is an array? (give me a few examples)</summary>
-	Arrays hold more than one value at the same time. It can hold lists.
-	E.g. var fruits = ["apple","banana", "grapes"]
-	E.g. var fruits = new Array("apple","banana","grapes")

</details>
<details>
<summary>What is an object (give me a few example) and how does it relate to arrays?</summary>
-	Objects contain properties and methods. You can store lots of data within an object, and you can get information from it using properties. E.g var fruit = "apple"
-	Objects can store single data types; it can be a variable with multiple values e.g var fruit = {type: "apple", colour: "red"} - these are called "name:value" pairs
-	Arrays are a certain type of object.

Properties
You can call on the properties of an object using objectname.propertyname e.g. fruit.type or fruit["type"]

Methods
They are essentially a function but stored as property. They do something, rather than just provide information

</details>
<details>
<summary>How do we write IF statement in JS?</summary>
</details>
<details>
<summary>What is a loop and how do we write it?</summary>
Types of loops: For-loops (batch macro) and while-loops (iterative macro)

For-loops:
For/in- lets you iterate through properties within an object.
For/of - lets you iterate through various data structures e.g. arrays

While-loops: while it satisfies the condition, do it.

</details>
<details>
<summary>What other types of loops do you have in JS?</summary>
</details>
<details>
<summary>What is an Event Listener? (give me a few examples)</summary>
- Event listeners listen for events to occur. So when something happens, e.g this button is clicked, then do this.

buttonelement.addEventListener(event, listener)

e.g.
buttonname.addEventListener("click", function() {
"Print something here"}

This then returns "Print something here" when a button is clicked.

</details>
<details>
<summary>What is a 'Promise'?</summary>
- A promise is a set of instructions that are given when something in the future happens. E.g. once a the data has fully loaded to this, then call this function, or it is has failed then call this function.

A promise must have a .then() function. This function should have onFufilled() and onRejected(), but they are optional. They tell you what happens when the promise is fulfilled or when it is rejected.

</details>
