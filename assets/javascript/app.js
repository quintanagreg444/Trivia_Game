$(document).ready(function(){ 
  var count = 120;  
  setInterval(function() {
    $(".countDown").html(count--);
    console.log("hi")
  }, 1000);
  //console.log(document.querySelector("#question1").children);
  function getQuestion1() {
    var questionOne = document.querySelector("#question1");
    for (var i = 0, length = questionOne.length; i < length; i++) {
      console.log(questionOne[i]);
      if (questionOne[i].checked) {
        // do whatever you want with the checked radio
        return questionOne[i].value;
        // only one radio can be logically checked, don't check the rest
      }
    }
  }
  
  $("#submit").on("click", function() {
    var answerOne = getQuestion1();
    console.log(answerOne);
  });

})



