document.getElementById("body").style.backgroundColor = "blue";

document.querySelector("body").style.backgroundColor = "red";

document.querySelector("body").style.backgroundColor = "orange";

let array = ["Change your thoughts and you change your world.", "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.", "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.", "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.", "I didn’t fail the test. I just found 100 ways to do it wrong.", "Life is 10% what happens to me and 90% of how I react to it.", "Whatever the mind of man can conceive and believe, it can achieve.", "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "Definiteness of purpose is the starting point of all achievement.", "Teach thy tongue to say, “I do not know,” and thous shalt progress.", "You become what you believe.", "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", "I attribute my success to this: I never gave or took any excuse.", "Build your own dreams, or someone else will hire you to build theirs.", "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it."];
let i = 0; 

function clickingFunction () {

    

    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    console.log(red +"," + green + ","+ blue);
    document.querySelector("body").style.backgroundColor = "rgb("+  red +","+ green +", "+ blue +")";
    if (i < array.length) {
        document.querySelector("span").innerHTML = array[i];
        document.querySelector("span").style.color="rgb("+  red +","+ green +", "+ blue +")";
        document.querySelector("i").style.color="rgb("+  red +","+ green +", "+ blue +")";
        i++;
        console.log(i);
        if (i == array.length) {
            i=0;
        }
    }
    
}

