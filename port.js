console.log("Hello World");

// console.log(changingText.textContent);
skillSet = ["Web Developer", "JAVA Programmer", "Python Programmer", "UI/UX Designer"]
changingTextSpan = document.getElementById("header-skill-text");
let idx = 0;
setInterval(()=>{
        changingTextSpan.textContent = skillSet[idx++ % skillSet.length];
}, 2000)