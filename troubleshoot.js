var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() {
    var stringOutput = "";  //declares stringOutput inital value to be blank

    //define the individual troubleshooting tips per the chart
    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";

    /* Need to be careful here when defining our boolean variables for use in the troubleshooting chart
     * and what you define as true or false.  For example, in the chart used in this problem,
     * a combination of Y-Y-Y results in messages 2, 3, & 4 being provided
     * to the user.  In this case, Y-Y-Y means
     * "the printer does NOT print"  AND "a red light is flashing" AND "the printer is unrecognized"
     */
    var boolPrinting = $("not_printing").selected;  //returns a value of true only when the not_printing html id is selected from the dropdown menu
    var boolRedLight = $("yes_redlight").selected;  //returns a value of true only when the yes_redlight html id is selected from the dropdown menu
    var boolRecognised = $("not_recognised").selected;  ////returns a value of true only when the not_recognized html id is selected from the dropdown menu

    if($("not_printing").selected===flase && $("yes_printing").selected === flase ||
       $("no_redlight").selected===flase && $("yes_redlight").selected === flase ||
       $("not_recognised").selected==flase && $("yes_recognised").selected === flase) {
          alert("Sorry, you need to answer all three questions to continue.");
          stringOutput = "Please answer all three of the above questions to continue";
 } else switch(true) {
    case boolPrinting === true && boolRedLight === true && boolRecognised === true:
        stringOutput = stringMessage2 + "\n" + stringMessage3 + "\n" + stringMessage4;
        break;
    case boolPrinting === true && boolRedLight === true && boolRecognised === false :
        stringOutput = stringMessage4 + "\n" + stringMessage5;
        break;
    case boolPrinting === true && boolRedLight === false && boolRecognised === true :
        stringOutput = stringMessage1 + "\n" + stringMessage2 + "\n" + stringMessage3;
        break;
    case boolPrinting === true && boolRedLight === false && boolRecognised === false :
        stringOutput = stringMessage5;
        break;
    case boolPrinting === true && boolRedLight === false && boolRecognised === false :
        stringOutput = stringMessage3 + "\n" + stringMessage4;
        break;
    case boolPrinting === true && boolRedLight === false && boolRecognised === false :
        stringOutput = stringMessage4;
        break;
    case boolPrinting === true && boolRedLight === false && boolRecognised === false :
        stringOutput = stringMessage3;
        break;
      default:
        stringOutput = stringMessage6;
        break;
    }

  $("output").value = stringOutput;

};
window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
};
