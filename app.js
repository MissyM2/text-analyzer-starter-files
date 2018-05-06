//Using the array of user input, find the number of unique items.
function findUnique(ary) {
	alert('findUnique');
 var distinctItems = [];
  for (var i=0; i < ary.length; i++) {
   if(distinctItems.indexOf(ary[i]) === -1) {
    distinctItems.push(ary[i]);
    } 
  }
   var distinctItemsCount = distinctItems.length;
    return distinctItemsCount;
}

//Using the array of user input, find the average length of the words.
function findAverageLength(ary) {
	alert('findaveragelength');
  var totalLength=0;
  var avgLength=0;
   for (var i=0; i < ary.length; i++) {
     totalLength += ary[i].length;
   }
  avgLength = Math.round(avgLength = totalLength / ary.length);
  return avgLength; 
}

//Convert user text into an array.
function makeArray(str) {
	alert('make array');
  var newArr = [];
  newArr = str.split(" ");
  return newArr;
}

//From the array, find and post the 3 required items.
function analyzeTheText(inputText) {
	alert('analyzeTheText');
  var usrArr = makeArray(inputText);
  var usrArrLength = usrArr.length;
  $('dl').removeClass('hidden');
  
  //Display the number of words in the text array and display.
  $('.js-wc').text(usrArrLength);
  
  //Find the number of unique words in the text array and display.
  $('.js-unique-wc').text(findUnique(usrArr));
  
  //Find the average length of the words in the text array and display.
  $('.js-avg-wc').text(findAverageLength(usrArr));
}


//Listen for a submit event on the form to collect the text.
function lookForInput() {
	alert('lookForInput');
  var usrText = "";
    $('#js-text-input').submit(function(event) {
      event.preventDefault();
      var usrText = $(this).find('#user-text').val();
      analyzeTheText(usrText);
   
      
  });
 }

$(function() {
  lookForInput();
});