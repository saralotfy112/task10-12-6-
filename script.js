function calc() {
    let num1 = 5;
    let num2 = 15;
    let result = Number(num1) + Number(num2);

    document.getElementById("par1").innerHTML = result;
}

function calcdivision(number1, number2) {
    if (number2 == 0) {
        document.getElementById("par2").innerHTML = "Error: Division by zero is not allowed";
        return;
    }
    let division = Number(number1) / Number(number2);

    document.getElementById("par2").innerHTML = division;
}
// => string methods
let text = "sara lotfy elsayed mohamed ";
let length = text.length;

document.getElementById("par3").innerHTML = length

let text1 = "HELLO SARA";
let char = text1.charAt(6);

document.getElementById("par4").innerHTML = char

let text2 = "HELLO SARA";
let char1 = text2.charCodeAt(5);

document.getElementById("par5").innerHTML = char1

const name1 = "egyption council";
let letter = name1.at(2);

document.getElementById("par6").innerHTML = letter

let text3 = "Apple,Banana, Kiwi";
let part = text3.substring(6);

document.getElementById("par7").innerHTML = part

function converword() {
    let text4 = document.getElementById("par8").innerHTML;
    document.getElementById("par8").innerHTML = text4.toUpperCase();
}

let textone = "Hello";
let texttwo = "World!";
let textthree = textone.concat(" ", texttwo);
document.getElementById("par9").innerHTML = textthree;

let text5 = "     Hello ahmed!     ";
let text6 = text5.trim();

document.getElementById("par10").innerHTML = "Length text1 = " + text5.length + "<br>Length text2 = " + text6.length;

let text7 = "5";
text8 = text7.padStart(5, "9");

document.getElementById("par11").innerHTML = text8;

let text9 = "5";
text10 = text9.padEnd(5, "1");

document.getElementById("par12").innerHTML = text10;

let text11 = "Hello world!" + `</br>`;
let resultone = text11.repeat(5);

document.getElementById("par13").innerHTML = resultone;


function replaceAll() {
    let text12 = document.getElementById("par14").innerHTML;
    document.getElementById("par14").innerHTML = text12.replaceAll(/are/gi, "is");
}

let text13 = "red, blue, green, black";
const myArray = text13.split(",");

document.getElementById("par15").innerHTML = text13.length + "<br>" + myArray.length;
// => string search
let text14 = "Please locate where 'locate' occurs!";
let index = text14.indexOf("locate");
document.getElementById("par15").innerHTML = index;

let text15 = "Please locate where 'locate' occurs!";
let index1 = text15.lastIndexOf("locate");

document.getElementById("par16").innerHTML = index1;

let index2 = text15.search(/locate/);
document.getElementById("par17").innerHTML = index2;

let text16 = "The rain in SPAIN stays mainly in the plain";
const myArr = text16.match(/ain/gi);
document.getElementById("par18").innerHTML = myArr.length + "<br>" + myArr;

let text17 = "Hello world, welcome to the universe.";
document.getElementById("par19").innerHTML = text17.includes("world");

document.getElementById("par20").innerHTML = text17.startsWith("world");

document.getElementById("par21").innerHTML = text17.endsWith("universe.");


function calc1(hight, Weight) {

    let IdealWeight = Number(hight) - 100;

    document.getElementById("par22").innerHTML = " your hight is " + hight;
    document.getElementById("par23").innerHTML = " your weight is " + Weight;

    document.getElementById("par24").innerHTML = " your ideal weight is " + IdealWeight;

    let resultweight = 0;
    if (IdealWeight == Weight) {
        resultweight = "this is  Ideal Weight for you.";
    }
    else if (Weight > IdealWeight) {
        resultweight = "This is above the ideal weight for you.";
    }
    else if (Weight < IdealWeight) {
        resultweight = "This is below the ideal weight";
    }
    document.getElementById("par25").innerHTML = resultweight;
    console.log(resultweight)
}


