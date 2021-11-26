var log = document.querySelector("#log");
function send(){
    console.log(log.value);
}

//https://www.codegrepper.com/code-examples/javascript/user+input+in+console.log

//Other method that didn't work as well:
    //var logValue = document.getElementById("log");
    //var button = document.getElementById("button");

    //button.onclick = function(){
        //console.log("The value in the text box is =" + logValue);
    //} 

    // with this HTML
    //<input type = "text" id = "log" name = "log" required minlength = "4" size = "10">
    //<button id = "button" type = "button">Log input value</button>  