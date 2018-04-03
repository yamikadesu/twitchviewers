window.onload = function(){

var height = document.getElementById("result").offsetHeight;

function result(r) {
  document.getElementById("result").innerHTML = r;
};

function makeOutput(the_array) {
  var index;
  var output = "";
  var comma = ", ";
  for (index = 0; index < the_array.length; ++index) {
    output = output + "<div class='elemento'>" + the_array[index] + "</div>";
  }
  return output;
}

function makeList(stuff) {
  var output = makeOutput(stuff);
  if (output != "") {
    newOutput = "<div class='list'>" + output + "</div>";
  } else {
    newOutput = "";
  }
  return newOutput;
}

function updateDiv() {
  var channel = "yukikadesu";
  var theUrl = "https://tmi.twitch.tv/group/user/" + channel + "/chatters";
  $.ajax({
    url: theUrl,
    dataType: "jsonp",
    success: function(response) {
      var newOutput = "";
      newOutput = newOutput + makeList(response.data.chatters.viewers);
      result(newOutput);
    }
  });
  console.log(height = document.getElementById("result").offsetHeight);
  height = document.getElementById("result").offsetHeight
}

$('.marquee').marquee({
		//speed in milliseconds of the marquee
		duration: 7000,
		//gap in pixels between the tickers
		gap: 170,
		//'left' or 'right'
		direction: 'up',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true
});

setInterval(updateDiv, 3000);

}