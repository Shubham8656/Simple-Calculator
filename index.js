

let output;
function operator1(){
    let x = document.getElementById("search1").value;
    let y = document.getElementById("search2").value;
    output = Number(x)+Number(y)
    console.log(output);
    print();
}

function operator2(){
    let x = document.getElementById("search1").value;
    let y = document.getElementById("search2").value;
    output = Number(x)-Number(y)
    console.log(output);
    print();
}

function operator3(){
    let x = document.getElementById("search1").value;
    let y = document.getElementById("search2").value;
    output = Number(x)*Number(y)
    console.log(output);
    print();
}

function operator4(){
    let x = document.getElementById("search1").value;
    let y = document.getElementById("search2").value;
    output = Number(x)/Number(y)
    console.log(output);
    print();
}

function print(){
    document.querySelector(".res").innerHTML = output;
}