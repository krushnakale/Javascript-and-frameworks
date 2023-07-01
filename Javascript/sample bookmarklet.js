/*function checkAutoCompleteAttribute(field) {
	let p = document.createElement("p");
	
	if (field.hasAttribute("autocomplete")) {
		let result = 'autocomplete="' + field.getAttribute("autocomplete") + '"';
		p.innerText = result;
		field.parentNode.insertBefore(p, field.nextSibling);
		field.setAttribute("aria-description", result);
	}
	else {
		let result = 'MISSING: autocomplete attribute';
		p.innerText = result;
		field.parentNode.insertBefore(p, field.nextSibling);
		field.setAttribute("aria-description", result);
	}
}*/


/*MAIN PROGRAM*/
/*let fields = document.querySelectorAll("input, textarea");

for (let i=0; i<fields.length; i++) {
	if ((fields[i].getAttribute("type") == "hidden") || (fields[i].getAttribute("type") == "submit") || (fields[i].getAttribute("type") == "checkbox") || (fields[i].getAttribute("type") == "radio")) {
		continue;
	}
	else {
		checkAutoCompleteAttribute(fields[i]);
	}
}

alert("Processing finished!");
*/
/*function myFunction() {
    alert("many of the fields are required!");
  }*/

 /* function findElementsWithMouseover() {
    var allElements = document.querySelectorAll("*"); // Select all elements in the DOM
  
    let elements = document.querySelectorAll("*[onmouseover]");
  }
  
 /*   for (var i = 0; i < allElements.length; i++) {
      var element = allElements[i];
      var listeners = getEventListeners(element);
  
      if (listeners && listeners.mouseover) {
        elementsWithMouseover.push(element);
      }
    }
  
    return elementsWithMouseover;
  }
  
  // Usage:
  var elementsWithMouseover = findElementsWithMouseover();
  console.log(elementsWithMouseover); */

 /*let elements = document.querySelectorAll("*[onmouseover]");
alert(elements.length)
/*let elements = document.querySelectorAll("*[aria-hidden=true]");
alert(elements.length);

let findout = document.querySelectorAll("")*/

/*var element = document.getElementById("myElement");
function myFunctionPush(){
	console.log("Mouse pointer is over the element");

}
element.onmouseover = myFunction*/
/*window.alert("this is pop"); 
window.prompt("please enter\nyour mobile number");
window.confirm("helo wrong spell");*/

/*function myFunction(){
	let text;
	if(confirm('are you confirm this dailogue')){
		text = "You Pressed ok!";
	} else {
		text = "You pressed canceled!";
	}
	document.getElementById('p').innerHTML = text;
}

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
*/
