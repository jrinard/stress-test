//backend
var stressTest = function(stressNumber){
		if (stressNumber >= 7) {
    		stressLevel = "high";
    } else if ((stressNumber >=4) && (stressNumber <= 6)) {
    		stressLevel = "medium";
    } else if (stressNumber <= 3) {
    		stressLevel = "low";
    }
};


//front end
var displayResults = function(finalResult){
    if (finalResult === "high"){
        $("#survey-response-high").show();
    } else if (finalResult === "medium"){
        $("#survey-response-med").show();
    } else if (finalResult === "low"){
        $("#survey-response-low").show();
    }
};

$(document).ready(function(){

    $("button#submit").click(function(){
      debugger
      var warnings = 0;
      var symptoms = 0;
      var coping = 0;

      $("input:checkbox[name='warning-signs']:checked").each(function(){
          warnings += 1;
        });// warnings
      $("input:checkbox[name='symptoms']:checked").each(function(){
          symptoms += 1;
        });// symptoms
      $("input:checkbox[name='coping']:checked").each(function(){
          coping += 2;
        });// coping
      var stressNumber = ((warnings + symptoms) - coping);
      stressTest(stressNumber);
      var stressLevel = "";
      displayResults(stressLevel);
    });// submit
});// ready


//
// $("form#transportation_survey").submit(function(event){
//   event.preventDefault();
//   $("#work-responses, #fun-responses").show();
//   $("input:checkbox[name=work-transportation]:checked").each(function(){ // each loops and grabs checked boxes
//     var workTransportationMode = $(this).val();
//     $('#work-responses').append(workTransportationMode + "<br>");
//   }); // each close
//   $("input:checkbox[name=fun-transportation]:checked").each(function(){
//     var funTransportationMode = $(this).val();
//     $('#fun-responses').append(funTransportationMode + "<br>");
//   });
//   $('#transportation_survey').hide();
// });// submit
