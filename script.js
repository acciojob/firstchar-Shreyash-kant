function firstChar(text) {
  // your code here
	for(let ch of text){
		if(ch!==" ")return ch;
	}
	return "";
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:"); 
alert(firstChar(text));
