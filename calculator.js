let keys = document.getElementsByTagName("BUTTON");
let input = document.getElementById("text");
let display = document.getElementById("screen");
let signs = [];

const calc = () => {
let str = signs.join("");
console.log(str);

if(str.includes("x")){
    if(str.includes(".")){
    let opindex = str.indexOf("x");
    let op1 = parseFloat(str.substring(0, opindex));
    let op2 = parseFloat(str.substring(opindex+1, str.length));
    console.log(op1 * op2);
    return op1 * op2;
    }else{
    let opindex = str.indexOf("x");
    let op1 = Number(str.substring(0, opindex));
    let op2 = Number(str.substring(opindex+1, str.length));
    console.log(op1 * op2);
    return op1 * op2;
    }

}else if(str.includes("/")){
    if(str.includes(".")){
    let opindex = str.indexOf("/");
    let op1 = parseFloat(str.substring(0, opindex));
    let op2 = parseFloat(str.substring(opindex+1, str.length));
    console.log(op1 / op2);
    return op1 / op2;
    }else{
    let opindex = str.indexOf("/");
    let op1 = Number(str.substring(0, opindex));
    let op2 = Number(str.substring(opindex+1, str.length));
    console.log(op1 / op2);
    return op1 / op2;
    }
}else if(str.includes("+")){
    if(str.includes(".")){
    let opindex = str.indexOf("+");
    let op1 = parseFloat(str.substring(0, opindex));
    let op2 = parseFloat(str.substring(opindex+1, str.length));
    console.log(op1 + op2);
    return op1 + op2;
    }else{
    let opindex = str.indexOf("+");
    let op1 = Number(str.substring(0, opindex));
    let op2 = Number(str.substring(opindex+1, str.length));
    console.log(op1 + op2);
    return op1 + op2;
    }
}else if(str.includes("-")){
    if(str.includes(".")){
    let opindex = str.indexOf("-");
    let op1 = parseFloat(str.substring(0, opindex));
    let op2 = parseFloat(str.substring(opindex+1, str.length));
    console.log(op1 - op2);
    return op1 - op2;
    }else{
    let opindex = str.indexOf("-");
    let op1 = Number(str.substring(0, opindex));
    let op2 = Number(str.substring(opindex+1, str.length));
    console.log(op1 - op2);
    return op1 - op2;
    }
}

};


for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', ()=>{
        
        if(keys[i].textContent === "AC"){
        display.textContent = 0;
        input.value = "";
        signs = [];
        }else if(keys[i].textContent === "C"){
        display.textContent = 0;
        let curr = input.value;
        signs.pop();
        input.value = curr.substr(0, curr.length-1);
        }else if(keys[i].textContent === "="){
        display.textContent = calc();
        signs = [];
        console.log(signs); 
        }else{
        display.textContent = 0;
        signs.push(keys[i].textContent);
        input.value += keys[i].textContent;
        }
    })
}



    document.addEventListener('keypress', (e)=>{
        if(e.key === "c"){
        display.textContent = 0;
        input.value = "";
        signs = [];
        }else if(e.key === " "){
        display.textContent = 0;
        let curr = input.value;
        signs.pop();
        input.value = curr.substr(0, curr.length-1);
        }else if(e.key === "Enter" || e.key === "="){
        display.textContent = calc();
        console.log(signs); 
        signs = [];
        }else if(e.key === "*"){
        display.textContent = 0;
        signs.push("x");
        input.value += "x";
        }else if(e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" ||
        e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9"
        || e.key === "0" || e.key === "+" || e.key === "-" || e.key === "/" || e.key === "."){
        display.textContent = 0;
        signs.push(e.key);
        input.value += e.key;
        }else{
            input.value += "";
        }
    })
