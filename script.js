//display current date/time using moment.js
var day = moment();
$("#presentDay").text(day.format("llll"));

// Button function to clear local storage and clear contents
$("#clearFieldsBtn").click(function (dataSaved) {
    dataSaved.preventDefault;
    $("textarea").val("");
    localStorage.clear();
});

// save reference to important DOM elements
var resetBtn = document.querySelectorAll(".enterData");
//variable created to store input
var saveButton = document.querySelectorAll(".enterData");
// variable to store past, prersent & future w/color
var timeEL = document.querySelectorAll (".time");

// RETRIVE ITEM FROM STORAGE AFTER HITTING REFRESH BTN
//https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance

function allStorage() {
  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
  }
  return values;
}

for (let i = 0; i < 10; i++) {
  console.log(document.getElementById(`${i}`))
  document.getElementById(`${i}`).value = localStorage.getItem(`${i}`)
}

console.log(allStorage())

//grabs values from time and entry divs and saves them to local storage
for ( var i = 0; i < saveButton.length; i++) { 
    $(".enterData").click(function (dataSaved) {
      var entry = dataSaved.target.previousElementSibling.value;
      if(entry == null) {
        return;
      }
      var timeName = dataSaved.target.previousElementSibling.getAttribute("id");
      console.log(timeName)
      localStorage.setItem(timeName,entry);
    })
};
mode
//COMPARING TIMEBLOCK TO ACTUAL TIME
var page = "present";
var presentTime= new Date(); 
console.log(presentTime.getTimes()); //18
console.log (presentTime); //Mon Mar 28 2022 18:03:03 GMT-0700

// //IF Statement comparing id="12" vs. presentTime.getTimes().
// function changeColor() {
//   if (page ==="present") {
//     console.log ("present")
//      .getAttribute(".present");
//   } else if (times>= 0){
//     page ="past" ; //past times shows in red
//     console.log ("past")
//   } else {
//     dataSavedEL.css('background-color','Blue'); //future times shows in blue
//     console.log ("future")
//   }
// }

// //The forloop to run thru each timeblocks (to change the color)
// for (var i=0; i < dataSavedEL.length; i++ ) {
//    dataSaved.target.getAttribute("id");
// }