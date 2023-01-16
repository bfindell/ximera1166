	<script type="text/javascript">
		function toggleDiv(divId) {
			$('#' + divId).toggle();
		}
	</script>

	<script>
		
		localStorage.lastLevel = 4 ;
		
	</script>
</head>


<div id="page">
<body>

<!--    <h1>Euclid: The Game - Level 4</h1> -->

<p id="goal">
	<b>Goal:</b> Construct a line (segment) that goes through point A and that is perpendicular to the given line. 
</p>

<script>
$(document).ready(function(){
  $("#button").click(function(){
    $("#hint").toggle();
  });
});
</script>
<p><span id="button"><b>Show hint: &nbsp;</b></span> <span style="display:none" id="hint"> It would help to have points equidistant from A.</span></p>

<p id="winningimg">
<img src="level4.png"/ >
</p>
<div id="hidden" style="display: none">
<p id="level">
Well done! You are ready for the next level!
</p>
</div>
<script type="text/javascript">
	    // * ShowResetIcon set to false because pressing it caused "Level Completed" bug
    var parameters = {"id":"ggbApplet","width":680,"height":480,"showToolBar":true,"showMenuBar":false,"showAlgebraInput":false,"showResetIcon":false,"enableLabelDrags":false,"enableShiftDragZoom":false,"enableRightClick":false, "showToolBarHelp":true,"errorDialogsActive":true,"useBrowserForJS":true, "language":"en","isPreloader":false,"screenshotGenerator":false,"preventFocus":false};
    /** is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator, DA=Data Analysis, FI=Function Inspector, PV=Python, macro=Macro View */
    var views = {"is3D":false,"AV":false,"SV":false,"CV":false,"EV2":false,"CP":false,"PC":false,"DA":false,"FI":false,"PV":false,"macro":true};
	var applet = new GGBApplet('5.0', parameters, views);
    // applet.setPreviewImage('', '/img/GeoGebra_loading.png'); // comment out because image was squashed
    window.onload = function() {
        applet.inject('applet_container', 'html5');
    }
	parameters.language = "en"
	parameters.customToolBar = "0 | 1 501 | 5 19 | 15 2 18 | 10 53 | 100001 | 8 9 4 3 | 40 41 42";  // Standard toolbar for game.

  parameters.customToolBar = "0 | 501 | 5 | 19 | 15 | 18 | 8 | 10 | 100001 | 9 "//| 4 | 3 | 100002 | 53";
  parameters.ggbBase64 = "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" ;	
</script>

<div id="applet_container">
</div>

<script type="text/javascript">
var primitives = true;

function ggbOnInit() {

	var element = document.getElementsByClassName("toolbar_button")[0]; 
	element.setAttribute("isselected", "false"); 
	ggbApplet.debug("ggbOnInit");
	ggbApplet.registerAddListener("newObjectListener");
	Command('progress = 0');
	Command('Progresstext = Text["Progress: "progress"%",'+abspos("0.02","-0.05")+']');
	Command('countnumber = 0');
	Command ('count0 = Text["Moves: "countnumber"",'+abspos("0.85","-0.05")+']');
	Command('W = (-10,-10)'); 
	ggbApplet.setVisible("W",false);
	Command('welldone = Text["Well done!", W]'); 		
	ggbApplet.setVisible("welldone",false);	
	}

function Command(cmd){ggbApplet.debug(cmd); ggbApplet.evalCommand(cmd);}

function abspos(x,y){
	return "Corner[4] + ("+x+"*(x(Corner[3])-x(Corner[4])),"+y+"*(y(Corner[3])-y(Corner[2])))"
	}

function getCoord(objx){ 
	if (ggbApplet.getObjectType(objx) === "point" ) {
		var x = ggbApplet.getXcoord(objx);
		var y = ggbApplet.getYcoord(objx);
		return "("+x+","+y+")"
	}
	else if (ggbApplet.getObjectType(objx)==="segment" || ggbApplet.getObjectType(objx)==="ray" || ggbApplet.getObjectType(objx)==="line" ){
		Command("xx = x(Point["+objx+",0.5])");
		Command("yy = y(Point["+objx+",0.5])");
		var x = ggbApplet.getValue("xx");
		var y = ggbApplet.getValue("yy");
		return "("+x+","+y+")";
	}
	else if (ggbApplet.getObjectType(objx)==="circle"){
		var cmdStringx = ggbApplet.getCommandString(objx);
		var x = ggbApplet.getXcoord(cmdStringx.substring(7,8));
		var y = ggbApplet.getYcoord(cmdStringx.substring(7,8));
		return "("+x+","+y+")";
	}
}

function newObjectListener(obj) {
	var objType = ggbApplet.getObjectType(obj);
	if (objType === "boolean" || objType === "text" || objType === "numeric"|| obj == "W")
		{return;
		}

	if (objType == "segment" || objType == "circle" || objType == "ray" || objType == "line") 
		{ggbApplet.setColor(obj,255,204,102);
		}
	var cmdString = ggbApplet.getCommandString(obj);
	console.log(objType,":", obj, "=", cmdString);

/*	if (objType == "point" && cmdString == ""){
		var x = ggbApplet.getXcoord(obj) + 0.01;
		var y = ggbApplet.getYcoord(obj) - 0.01;
		console.log(x,y);
		Command( obj +"= ("+x+","+y+")");
	}
*/
	if (cmdString.substring(0,3) == "Ray" || (cmdString.substring(0,2) == "Eq" && objType=="point") || 
		cmdString.substring(0,3) == "Seg" ||cmdString.substring(0,3) == "Cir" || cmdString.substring(0,3) == "Mid" || 
		cmdString.substring(0,13) == "AngleBisector" || cmdString.substring(0,4) == "Perp" || cmdString.substring(0,4) == "Line" || 
		(cmdString.substring(0,5) == "Trans"&& objType=="point")){
			Command('countnumber = countnumber + 1');
			if (!(cmdString.substring(0,3) == "Ray" || cmdString.substring(0,3) == "Seg" || cmdString.substring(0,4) == "Line" || cmdString.substring(0,3) == "Cir") && primitives) { 
				primitives = false;
				console.log("First non-primitive tool.");
			}

			function isLowerCase(myString) { 
				return (myString == myString.toLowerCase()); 
				}

			var lastcomma = cmdString.indexOf(",");
			if(cmdString.substring(0,3) == "Cir" && (isLowerCase(cmdString.substring(lastcomma+2,lastcomma+3)) || cmdString.substring(lastcomma+2,lastcomma+4) =="Se" || cmdString.substring(lastcomma+2,lastcomma+4) =="Ra")) {
				primitives = false;
				console.log("Compass tool.");
			}
		}

// The following code disallows (by deletion) the angle bisector of a straight angle.  
if (cmdString.substring(0,13) == "AngleBisector"){
	var obj1 = cmdString.substring(14,15);
	if (ggbApplet.getObjectType(obj1) === "point"){
		var obj2 = cmdString.substring(17,18);
		var obj3 = cmdString.substring(20,21);
		var a = ggbApplet.getXcoord(obj1);
		var b = ggbApplet.getYcoord(obj1);
		var m = ggbApplet.getXcoord(obj2);
		var n = ggbApplet.getYcoord(obj2);
		var x = ggbApplet.getXcoord(obj3);
		var y = ggbApplet.getYcoord(obj3);

		function round(value) {
			return(Math.round(value * 100000) / 100000);
			}

		if ( round((n-b)*(x-m)) === round((y-n)*(m-a))){
			Command('Delete['+obj+']');
			Command('Text["Some angle bisection methods fail when the angle is 180 degrees!  Try again.",'+abspos("0.02","-0.80")+']');		
		}
	}
}
	// The following "check" functions test whether target has been drawn.  
	// When it has, finished = true in the app, and the check function:  
	//   (1) Sets the target's "finished" flag by defining the text variable f_target in the app;
	//   (2) Sets the position of "Well done!" offset from target by (x,y); and
	//   (3) Diplays "Well done!"

	// This function can check all general objects. 
	function checkobject(target,x,y) {
		Command("finished = (" + obj + "== " + target + ")");
		finished = ggbApplet.getValueString("finished");
		if (finished.indexOf("true") > -1) {
			Command('f_'+target+'= Text["", (0,0)]');
			Command("W = "+getCoord(target)+"+("+x+","+y+")");
			ggbApplet.setVisible("welldone",true);		  
		} 
	}

	// This function checks line segments.
	function checksegment(target,x,y) {
		if (ggbApplet.getObjectType(obj) == "segment") {
			var beginpointobject = "Point["+obj+",0]"
			var endpointobject = "Point["+obj+",1]"
			var beginpointtarget = "Point["+target+",0]"
			var endpointtarget = "Point["+target+",1]"
			//here it checks if endpoints of line segment are equal
			if (obj != "finished") {
				Command("finished =((("+beginpointobject+"=="+beginpointtarget+")||("+beginpointobject+"=="+endpointtarget+"))&&(("+endpointobject+"=="+beginpointtarget+")||("+endpointobject+"=="+endpointtarget+")))");
				finished = ggbApplet.getValueString("finished");
				if (finished.indexOf("true") > -1) {
					Command('f_'+target+'= Text["", (0,0)]');
					if (typeof x !== 'undefined'){
						Command("W = "+getCoord(target)+"+("+x+","+y+")")
					};	
					ggbApplet.setVisible("welldone",true);		  
				}
			}
		}
	}

	// This function can check if line segment has right direction.
 
	function checkdirection(target,x,y) {
		if (ggbApplet.getObjectType(obj) == "segment" || ggbApplet.getObjectType(obj) == "ray" || ggbApplet.getObjectType(obj) == "line") { 
			Command("finished = (("+obj+"(1)=="+target+"(1))&&("+obj+"(-1)=="+target+"(-1)))");
			finished = ggbApplet.getValueString("finished");
			if (finished.indexOf("true") > -1) {
				Command('f_'+target+'= Text["", (0,0)]');
				if (typeof x !== 'undefined'){
					Command("W = "+getCoord(target)+"+("+x+","+y+")")
				};	
				ggbApplet.setVisible("welldone",true);		
			}
		}
	}

	// This function checks if the new point is on the targetline.
	// Assuming 'target' is a line, the command "finished = (target(x(A))==y(A))" computes the 
	// y-coordinate corresponding to x(A) on 'target', and checks its equality to y(A).
	function checkpointontarget(target,x,y) {
		if (ggbApplet.getObjectType(obj) == "point") {
			Command("finished = ("+target+"(x("+obj+"))==y("+obj+"))");
			finished = ggbApplet.getValueString("finished");
			if (finished.indexOf("true") > -1) {
				Command('f_p'+target+'= Text["", (0,0)]');
				if (typeof x !== 'undefined'){
					Command("W = "+getCoord(obj)+"+("+x+","+y+")")
				};	
				ggbApplet.setVisible("welldone",true);		 
 			}
		}
	}

	// This function returns true if one of the above check functions has placed a "finished" flag in the app. 
	// For the function to work correctly, a check function must first be called for the (target) object. 
	function drawn(object){
		return ggbApplet.getVisible('f_'+object) ;
	}

function LevelCompleted(condition,mincount){  // The parameter mincount is obsolete and unused. 
	if(condition){
		Command('progress = 100');
		Command('Complete = Text["Level completed!",  '+abspos("0.15","-0.20")+']');   
		//document.getElementById("level").style.display="inline-block";	
		$( "#hidden" ).slideDown(1000);	
		// $( "#hiddencomments" ).toggle();	 Used for disqus comments.
		var count = ggbApplet.getValue("countnumber");
		if (primitives && (count === levels[4].primitive)){
			Command('score2 = Text["Perfect! You have done this challenge in a minimum number of primitive moves!", '+abspos("0.35","-0.90")+']');
		}
		if (!primitives) {
			if(count === levels[4].all){
				Command('score2 = Text["Perfect! You have done this challenge in a minimum number of moves!", '+abspos("0.35","-0.90")+']');
			}
		}

	if (primitives){
		if (!(localStorage.Level4p < count)) {
			localStorage.Level4p = count;
		}
	}
	else{
		if(!(localStorage.Level4<count)) {
			localStorage.Level4 = count;
		}
	}

	}
}


checkdirection("segmentPerp",-0.4,0.3);
checkpointontarget("segmentPerp",-0.4,0.3);
checkpointontarget("segmentA",-0.4,-0.3);
//checkobject("circleleft");
//checkobject("circleright");

if (drawn("psegmentA")){
	Command('progress = 20');
   }	

if (drawn("psegmentPerp")){
	Command('progress = 50');
   }	

LevelCompleted(drawn("segmentPerp"),3);

}
</script>

