let array = [["All our dreams can come true, if we have the courage to pursue them.", "- Walt Disney"],["The secret of getting ahead is getting started.", "- Mark Twain"],["I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.","- Michael Jordan"],["Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.","- Mary Kay Ash"],["The best time to plant a tree was 20 years ago. The second best time is now.","- Chinese Proverb"],["Only the paranoid survive.","- Andy Grove"],["It’s hard to beat a person who never gives up.","- Babe Ruth"],["I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.","- Leah Busque"],["If people are doubting how far you can go, go so far that you can’t hear them anymore.","- Michele Ruiz"],["We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.","- Arianna Huffington"],["Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.","- Joss Whedon"],["Do one thing every day that scares you.","- Eleanor Roosevelt"],["Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.","- Socrates"],["Happiness is not something ready made. It comes from your own actions.","- Dalai Lama XIV"],["You can either experience the pain of discipline or the pain of regret. The choice is yours.","- Unknown"],["Hold the vision, trust the process.","- Unknown"],["Don’t be afraid to give up the good to go for the great.","-John D. Rockefeller"],["No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.","- Jaymin Shah"],["Things may come to those who wait, but only the things left by those who hustle.","- Abraham Lincoln"],["We are what we repeatedly do. Excellence, then, is not an act, but a habit.","- Aristotle"],["If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.","- Sheryl Sandberg"],["How wonderful it is that nobody need wait a single moment before starting to improve the world.","- Anne Frank"],["Some people want it to happen, some wish it would happen, others make it happen.","- Michael Jordan"],["Keep your eyes on the stars, and your feet on the ground.","- Theodore Roosevelt"],["You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.","- George Lorimer"],["I now tried a new hypothesis: It was possible that I was more in charge of my happiness than I was allowing myself to be.","- Michelle Obama"],["Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.","- Roy T. Bennett"]];


    let color = Math.floor(Math.random()*255) + "," +  Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255);
    
    document.querySelector("body").style.backgroundColor = "rgb("+ color +")";
    

        let numPicker = Math.floor(Math.random()*array.length);

        /*Quotes*/ 
        document.getElementsByClassName("firstSpan")[0].innerHTML = array[numPicker][0];
        document.getElementsByClassName("authors")[0].innerHTML = array[numPicker][1];

        /*Colors*/

        document.querySelector("span").style.color="rgb("+  color +")";
        document.querySelector("i").style.color="rgb("+  color +")";
        document.getElementsByClassName("twitter")[0].style.backgroundColor="rgb("+  color +")";
        document.getElementsByClassName("tumbler")[0].style.backgroundColor="rgb("+  color +")";
        document.getElementsByClassName("newQuote")[0].style.backgroundColor="rgb("+  color +")";
        document.getElementsByClassName("authors")[0].style.color="rgb("+ color +")";

        document.getElementsByClassName("Michael")[0].style.backgroundColor="rgb("+ color +")";


function clickingFunction () {

    let color = Math.floor(Math.random()*255) + "," +  Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255);
    
    document.querySelector("body").style.backgroundColor = "rgb("+ color +")";
    

        let numPicker = Math.floor(Math.random()*array.length);

        var el = document.getElementsByClassName("fade-in")[0];
        console.log(el);
        el.style.animation = "none";
        el.offsetHeight;
        el.style.animation=null;







        /*Quotes*/ 
        
        

        document.getElementsByClassName("firstSpan")[0].innerHTML = array[numPicker][0];
        document.getElementsByClassName("authors")[0].innerHTML = array[numPicker][1];

        /*Colors*/

        document.querySelector("span").style.color="rgb("+  color +")";
        document.querySelector("i").style.color="rgb("+  color +")";
        document.getElementsByClassName("twitter")[0].style.backgroundColor="rgb("+  color +")";
        document.getElementsByClassName("tumbler")[0].style.backgroundColor="rgb("+  color +")";
        document.getElementsByClassName("newQuote")[0].style.backgroundColor="rgb("+  color +")";
        document.getElementsByClassName("authors")[0].style.color="rgb("+ color +")";

        document.getElementsByClassName("Michael")[0].style.backgroundColor="rgb("+ color +")";
}


