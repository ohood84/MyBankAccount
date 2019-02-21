$("document").ready(function(){

    var names = [jen aniston,taylor swift,jen lawrence,cameron dios,
                jim carrey,clooney,chris evan, james spader];
    var counters = [0,0,0,0,0,0,0,0];

    var name = $("input#name").val();

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

    // adding the logic for the sec question-a <fav charactar-men>
    $(".man-type").click(function(){
      var manType = $("input:radio[name=man-type]:checked").val();
      if(manType === "ross"){
        counters[4]++;
        counters[7]++;
      }

      else if (manType === "joey") {
      counters[5]++;
      }
      else {
        counters[6]+++;
      }
    });
    // adding the logic for the sec question a <fav charactar-women>
    $(".woman-type").click(function(){
      var womanType = $("input:radio[name=woman-type]:checked").val();
      if(womanType === "rachel"){
        counters[0]++;
        counters[2]++;
      }

      else if (womanType === "monica") {
      counters[3]++;
      }
      else {
        counters[1]++;
      }
    });

    // adding the logic for the the third question b<fav vacation spots>

    $(".vacation-spot").click(function(){
      var vacationSpot = $("input:radio[name=vacation-spot]:checked").val();
      if(vacationSpot === "france"){
        counters[1]++;
        counters[3]++;
        counters[4]++;
        counters[6]++;
      }

      else if (vacationSpot === "vegas") {
        counters[2]++;
        counters[6]++;
      }
      else {
        counters[0]++;
        counters[4]++;

      }
    });

    // adding the logic for the the forth question <intrests>

    $(".interests").click(function(){
      var intrests = $("input:radio[name=intrests]:checked").val();
      if(intrests === "fashion"){
        counters[0]++;
        counters[3]++;
        counters[4]++;
        counters[7]++;

      }

      else if (intrests === "traveling") {
        counters[1]++;
        counters[5]++;

      }

      else {
        counters[2]++;
        counters[6]++;

      }
    });

    // adding the logic for the the fifth question <favorate-color>

    $(".favorate-color").click(function(){
      var colors = $("input:radio[name=colors]:checked").val();
      if(colors === "dark"){
        counters[3]++;
        counters[6]++;
      }

      else if (colors === "springy") {
        counters[0]++;
        counters[1]++;
        counters[4]++;
        counters[7]++;
      }

      else {
        counters[2]++;
        counters[5]++;
      }

      // adding the logic for the the sixith question <show-kind>

      $(".favorate-color").click(function(){
        var shows = $("input:radio[name=show-kind]:checked").val();
        if(shows === "emotional"){
          counters[0]++;
          counters[4]++;
        }

        else if (shows === "action") {
          counters[3]++;
          counters[7]++;
        }

        else if (shows === "drama") {
          counters[2]++;
          counters[6]++;
        }
        else{
          counters[1]++;
          counters[5]++;
        }
      });

      //to determine which counter was the larger
      var max = 0;
      for (i=0, i<=7, i++){
        if (counters[i] > max){
          max = counters[i];
        }
      }




      $("form#dating").submit(function(event){
        //to do the mapping between the 2 arrays counters and names
        var maxIndex = counters.indexOf(max);
        var matchName = names[maxIndex];

        $("#result").text("Your best match is "+ matchName);
        event.preventDefault();







      });






});
