/* TOP NAV INICIO
Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function myNav() {
    var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
  }
/* TOP NAV FIN */

/* ABOUT INICIO*/
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
   	this.classList.toggle("active");
    	var panel = this.nextElementSibling;
   		if (panel.style.maxHeight){
     		panel.style.maxHeight = null;
    	} else {
    		panel.style.maxHeight = panel.scrollHeight + "px";
    	} 
  	});
}
/* ABOUT FIN*/

/* TABS INICIO*/
function openPage(pageName, element, color) {
  var tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
  	  tabcontent[i].style.display = "none";
    }
  tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  document.getElementById(pageName).style.display = "block";
  element.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();
/* TABS FiN*/