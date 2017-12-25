document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = "Rushabh Jhaveri";

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
		// add next character to h1
		if(i >= 0) {
			document.getElementById("title").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

			//Wait for a while and call this function again for next character
			setTimeout(function() {
			typeWriter(text, i + 1)
			}, 150);
		} else {
			document.getElementById("title").innerHTML = '<span aria-hidden="true"></span>';

			//Wait a little bit
			setTimeout(function() {
				typeWriter(text, i + 1)
			}, 1500);
		}
    }
  }

  // start the text animation
  typeWriter(dataText, -1);
});
