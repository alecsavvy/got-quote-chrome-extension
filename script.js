var getQuote = new XMLHttpRequest();
getQuote.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var quoteRes = JSON.parse(this.responseText);
    document.getElementById("quote").innerHTML = quoteRes.quote;
    document.getElementById("character").innerHTML = '~ ' + quoteRes.character;
  }
};
getQuote.open("GET", "https://got-quotes.herokuapp.com/quotes", true);
getQuote.send();
