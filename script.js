function disable(){
    document.onkeydown
 {
  return false;
 }
}

let result = "";
let state = true;

function one(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= "1";
}
function two(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= "2";
}
function three(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= "3";
}
function four(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= "4";
}
function five(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= "5";
}
function six(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= "6";
}
function seven(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= "7";
}
function eight(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= "8";
}
function nine(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= "9";
}
function zero(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= "0";
}
function decimal(){
    let num = document.getElementsByClassName("display")[0];
    num.value+= ".";
}
function plus_or_minus(){
    if (state === true){
    let num = document.getElementsByClassName("display")[0];
    num.value= "-" + num.value;
    state = false;
    }
    else{
        let num = document.getElementsByClassName("display")[0];
        let a = parseInt(num.value);
        a = 0-a;
        document.getElementsByClassName("display")[0].value= a.toString();
        state = true;
    }
}

function AC(){
    document.getElementsByClassName("display")[0].value="";
    document.getElementsByClassName("preview")[0].value="";
    result = "";
}

function C(){
    let a = document.getElementsByClassName("display")[0].value;
    let b = a.slice(0, a.length-1);
    document.getElementsByClassName("display")[0].value = b;
}

function add(){
    let num = document.getElementsByClassName("display")[0].value;
    result+= num;
    result+= "+";
    document.getElementsByClassName("preview")[0].value="";
    document.getElementsByClassName("preview")[0].value+= result; 
    document.getElementsByClassName("display")[0].value = "";
}
function sub(){
    let num = document.getElementsByClassName("display")[0].value;
    result+= num;
    result+= "-";
    document.getElementsByClassName("preview")[0].value="";
    document.getElementsByClassName("preview")[0].value+= result;
    document.getElementsByClassName("display")[0].value = "";
}
function mul(){
    let num = document.getElementsByClassName("display")[0].value;
    result+= num;
    result+= "*";
    document.getElementsByClassName("preview")[0].value="";
    document.getElementsByClassName("preview")[0].value+= result;
    document.getElementsByClassName("display")[0].value = "";
}
function div(){
    let num = document.getElementsByClassName("display")[0].value;
    result+= num;
    result+= "/";
    document.getElementsByClassName("preview")[0].value="";
    document.getElementsByClassName("preview")[0].value+= result;
    document.getElementsByClassName("display")[0].value = "";
}

function modulo(){
    let num = document.getElementsByClassName("display")[0].value;
    result+= num;
    result+= "%";
    document.getElementsByClassName("preview")[0].value="";
    document.getElementsByClassName("preview")[0].value+= result;
    document.getElementsByClassName("display")[0].value = "";
}


function equal() {
    let num = document.getElementsByClassName("display")[0].value;
    result+= num;
    document.getElementsByClassName("preview")[0].value="";
    document.getElementsByClassName("preview")[0].value+= result;
    document.getElementsByClassName("display")[0].value = eval(result);
    document.getElementsByClassName("preview")[0].value="";
    result = "";
}
