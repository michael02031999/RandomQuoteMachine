document.getElementById("body").style.backgroundColor = "blue";

document.querySelector("body").style.backgroundColor = "red";

document.querySelector("body").style.backgroundColor = "orange";

function clickingFunction () {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    console.log(red +"," + green + ","+ blue);
    document.querySelector("body").style.backgroundColor = "rgb("+  red +","+ green +", "+ blue +")";
}

/*document.querySelector("div").addEventListener("mouseover", function color (){
    alert("Hello World!")
})*/