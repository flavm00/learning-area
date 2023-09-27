/* This code appears to be a simplified example of a client-server interaction, 
with a JavaScript client making API requests to a server and displaying responses. 
Let's break down the key components: */


//Client side
const HOST = 'server.com/'

const goElement = document.getElementsByClassName("go")[0];

goElement.onclick = function(){
    const inputElement = document.getElementsByClassName("test")[0];
    api.get(HOST + "menus", {menu: inputElement.value}, displayText);
}

/* When the HTML element with the class "go" is clicked, this event handler function is executed.
It retrieves the value from an HTML element with the class "test" and sends it as a parameter to the server using the api.get() function.
The response from the server will be displayed using the displayText() function. */

function displayText(response){
    const outputElement = document.getElementsByClassName("output")[0];
    outputElement.innerHTML += (response + "<br>");
}

/* This function takes a response parameter and is responsible for displaying the response in an HTML element with the class "output".
It appends the response to the existing content of the "output" element, effectively displaying multiple responses in a list. */

/*
1. HOST is a constant that holds the base URL for the server, in this case, 'server.com/'.
2. goElement is a reference to the first HTML element with the class "go". 
       +--->It's used to trigger an action when clicked.
3. inputElement is a reference to the first HTML element with the class "test". 
       +--->It's used to get a value that will be sent as a parameter to the server.

       */


//Server SIDE

function getMenus(data){
    switch(data.menu){
        case "a":
            return "I got an A";
        case "b":
            return "I got an B";
        default:
            return "I dont know what I got";
    }
}

const endpoints ={
    "/":{
        "get": () => "hello world"
    },
    "/menus": {
        "get": getMenus
    }
}

/*
The server-side code defines a function getMenus(data) that takes an object data and returns a response based on the value of data.menu. If data.menu is "a", it returns "I got an A", if it's "b", it returns "I got a B", and for any other value, it returns "I don't know what I got".
The endpoints object maps URLs to functions that handle HTTP GET requests. In this case, it associates the "/menus" endpoint with the getMenus function.
*/

//API Library

function getFunction(url, data, callback){
    const domain = url.substring(0,url.indexOf("/"));
    const endpoint = url.substring(url.indexOf("/"),url.length);

    const response = endpoints[endpoint]["get"](data);
    callback(response); // if there are multiple callbacks, the server will send multiple answers
}

/*
The getFunction(url, data, callback) function is a simplified API library function. It takes a URL, data object, and a callback function as parameters.
It extracts the domain and endpoint from the URL, then calls the appropriate function from the endpoints object and passes the data object as an argument to that function.
Finally, it invokes the callback function with the result from the server. 
*/


const api = {
    get: getFunction
};