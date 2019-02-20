$("document").ready(function(){

    var names = [jen aniston,taylor swift,jen lawrence,cameron dios,
                jimcarrey,clooney,chrisevan, jamesSpader];
    var counters = [0,0,0,0,0,0,0,0];

    var name = $("input#name").val();

    var womanType = $("input:radio[name=woman-type]:checked").val();
    var vacationSpot = $("input:radio[name=vacation-spot]:checked").val();
    var intrests = $("input:radio[name=intrests]:checked").val();
    var favColor= $("input:radio[name=colors]:checked").val();
    var showKind = $("input:radio[name=show-kind]:checked").val();


    $(".intrested-in").click(function(){
      var intrestedIn = $("input:radio[name=intrested-in]:checked").val();

      if(intrestedIn === "actor"){
        $("#man-type").show();
        $("#woman-type").hide();
        counters[4]+=1000;
        counters[5]+=1000;
        counters[6]+=1000;
        counters[7]+=1000;
      }
      else {
        $("#woman-type").show();
        $("#man-type").hide();
        counters[0]+=1000;
        counters[1]+=1000;
        counters[2]+=1000;
        counters[3]+=1000;
      }
    });

    // adding the logic for the sec question <fav charactar-men>
    $(".man-type").click(function(){
      var manType = $("input:radio[name=man-type]:checked").val();
      if(manType === "ross"){
        jimCarreyCounter++;
        chrisevansCounter++;
      }

      else if (manType === "joey") {
      jimCarreyCounter++;
      }
      else {
        chrisevansCounter++;
      }
    });
    // adding the logic for the sec question <fav charactar-women>
    $(".man-type").click(function(){
      var manType = $("input:radio[name=man-type]:checked").val();
      if(manType === "ross"){
        jimCarreyCounter++;
        chrisevansCounter++;
      }

      else if (manType === "joey") {
      jimCarreyCounter++;
      }
      else {
        chrisevansCounter++;
      }
    });










});
