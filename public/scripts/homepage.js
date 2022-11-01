$(".main-search").click(function (event) {
  event.preventDefault();
  var element = event.target;
  if (element.matches("button")) {
    var userInput = $(this).children("input").val();
    console.log(userInput);
    location.replace(`search/${userInput}`);    
  }
});

$(".card").click(event => location.replace(`product/${$(this).data(id)}`));