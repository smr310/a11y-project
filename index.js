
//below is the masterArray with 10 subarrays. The subarrays contain the question at index0, the answer choices at index 1-4, and the correct answer at index 5. 
const masterArray = [
  ["你好", "Hello", "Goodbye", "Thank you", "You're welcome", "Hello"],
  ["外面真冷", "It is hot outside", "It is cold outside", "He is outside", "She is outside", "It is cold outside"],
  ["我爱你", "I like you", "I love you", "I hate you", "I see you", "I love you"], 
  ["我想吃汉堡包", "I like to eat hamburgers", "I ate a hamburger", "I am eating a hamburger", "I want to eat a hamburger", "I want to eat a hamburger"],
  ["这个菜很好吃", "This food tastes very good", "This ice cream tastes very good", "This soup is cold", "This coffee is hot", "This food tastes very good"],
  ["这个香蕉颜色很奇怪", "The color of this banana is very strange", "The color of this car is very dark", "The color of her hair is very dark", "This banana is very yellow", "The color of this banana is very strange"],
  ["饭后百步走活到九十九", "A bird does not sing because it has an answer, it sings because it has a song", "A book is like a garden carried in the pocket", "Walk 100 steps after you eat and you'll live to be 99", "An army can conquer a general, but no man can rob one of his ambition", "Walk 100 steps after you eat and you'll live to be 99"], 
  ["我想吃火锅", "I want to drink tea", "We will eat hot pot", "We will drink tea", "I want to eat hot pot", "I want to eat hot pot"], 
  ["他想看电影", "He wants to watch a movie", "He wants to watch TV", "She will watch TV", "They will watch a movie", "He wants to watch a movie"], 
  ["咱们去北京吧", "Let's go to Beijing", "He is going to Beijing", "They went to Beijing", "She wants to go to Beijing", "Let's go to Beijing"],
  ["index10 subArray"],
  ];

//set totalQuizQuestions determine total number of questions to be asked (maximum of 10).
let totalQuizQuestions = 2;
let j = 0;
//counter will represent the number of correct answers the user has chosen
let counter = 0;

// when the page loads, call `initializeQuiz`
$(initializeQuiz);

function initializeQuiz(){
  $("#start-quiz").click(function(){
    generateQuestionAndAnswers(0);
  });

//the below event handler is triggered when the submit-answer button is clicked 
  $("#submit-answer").click(function(event){
    event.preventDefault();
    let correctAnswer = masterArray[j][5];
    let userChoice = $('input[name=answerChoice]:checked').val();
    if(userChoice === correctAnswer) {
      //below code updates the correct counter 
      counter++;
      $('#my-quiz').addClass("hidden");
      //tell user they are correct with a GIF OF Jackie Chan (class hidden), unhide it when correct
      $('.answer-correct').removeClass("hidden");
    } else {
      $('#my-quiz').addClass("hidden");
      //tell user they are incorrect with a GIF OF BRUCE LEE (class hidden), unhide it when correct
      $('.answer-incorrect').removeClass("hidden");
      $('.display-correct').text(correctAnswer);
    }
    $('input[name=answerChoice]:checked').prop('checked', false);
    j++;
  }); //end of submit click handler
  
  $("#correct-next-button").click(function(){
    $('.answer-correct').addClass("hidden");
    $('#my-quiz').removeClass("hidden");
    generateQuestionAndAnswers();
  });
      
  $("#incorrect-next-button").click(function(){
    $('.answer-incorrect').addClass("hidden");
    $('#my-quiz').removeClass("hidden");
     generateQuestionAndAnswers();
  });
  
  $("#retake-quiz").click(function(){
    j = 0;
    counter = 0;
    $('.results-page').addClass("hidden");
    generateQuestionAndAnswers();
  });
}

//this function will provide the question and 4 answer choices.
function generateQuestionAndAnswers(){
  if (j < totalQuizQuestions) {
    $('#my-quiz').removeClass("hidden");
    $('.start-page').addClass("hidden");
    
    let question = masterArray[j][0];
    let answer1 = masterArray[j][1];
    let answer2 = masterArray[j][2];
    let answer3 = masterArray[j][3];
    let answer4 = masterArray[j][4];
    
    $(".js-question-text").text(question);
    $(".js-answer-one-text").text(answer1);
    $(".js-answer-two-text").text(answer2);
    $(".js-answer-three-text").text(answer3);
    $(".js-answer-four-text").text(answer4);
    
    $("#answer1").attr("value", answer1);
    $("#answer2").attr("value", answer2);
    $("#answer3").attr("value", answer3);
    $("#answer4").attr("value", answer4);
    
    $(".js-question-counter").text(j+1);
    $(".js-correct-counter").text(counter);
  }
  
  else if (j === totalQuizQuestions) {
      console.log(j);
      $(".js-score").text(counter + "/" + totalQuizQuestions);
      $('#my-quiz').addClass("hidden");
      $('.results-page').removeClass("hidden");
      
    }
}  

