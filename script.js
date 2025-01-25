function highlight() {
    //Write your code here
 // Get all <strong> elements (bold text)
  const boldWords = document.querySelectorAll('strong');

  // Loop through each bold word and change its color to green
  boldWords.forEach(function(bold) {
    bold.style.color = 'green';
  });

}


function return_normal() {
    //Write your code here
 // Get all <strong> elements (bold text)
  const boldWords = document.querySelectorAll('strong');

  // Loop through each bold word and change its color back to black
  boldWords.forEach(function(bold) {
    bold.style.color = 'black';
  });
    
}
