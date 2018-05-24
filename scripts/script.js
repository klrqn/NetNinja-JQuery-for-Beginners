
$(document).ready(function(){

  var allQuotes = $('blockquote');
  var currentQuote = 0;

  function changeQuote(){

    $(allQuotes[currentQuote]).fadeOut(500, function(){

      if(currentQuote == allQuotes.length - 1){
        currentQuote = 0;
      } else {
          currentQuote++;
      }

      $(allQuotes[currentQuote]).fadeIn(500);

    });

  };

  var quoteTimer = setInterval(changeQuote, 3000);


});
