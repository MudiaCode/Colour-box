//calling variable
const redbutton = document.getElementById("red_button");
const bluebutton = document.getElementById("blue_button");
const resetbutton = document.getElementById("reset_button");
const box = document.getElementById("box");


//giving variable an event
//passing event to a function
redbutton.addEventListener("click", (e)=>{
  box.style.background = "#F64D4D"
});

bluebutton.addEventListener("click", (e)=>{
  box.style.background = "#285CFF";
});

resetbutton.addEventListener("click", (e)=>{
  box.style.background = "white";
}
)