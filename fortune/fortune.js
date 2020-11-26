var responses = ["Without a doubt" , "Ask again later", "Don't count on it", "Why are you running?", "Only when September ends"];

var randomNum = Math.floor(Math.random() * responses.length);
document.getElementById("java").innerHTML = ("<p>Magic 8 Ball says... <strong>" + responses[randomNum] + "</strong>.</p>");
