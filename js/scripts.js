$("document").ready(function(){

    var names = ["Jennifer Aniston","Taylor Swift","Jennifer Lawrence","Cameron Diaz",
                "Jim Carrey","George Clooney","Chris Evan","James Spader"];
    var counters = [0,0,0,0,0,0,0,0];



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
        counters[6]++;
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
        counters[0]++;
        counters[2]++;
        counters[4]++;
        counters[7]++;
      }
      else if (vacationSpot === "vegas") {
        counters[3]++;
        counters[5]++;
      }
      else {
        counters[1]++;
        counters[6]++;
      }
    });

    // adding the logic for the the forth question <intrests>
    $(".interests").click(function(){
      var intrests = $("input:radio[name=intrests]:checked").val();
      if(intrests === "fashion"){
        counters[0]++;
        counters[2]++;
        counters[4]++;
        counters[7]++;
      }

      else if (intrests === "traveling") {
        counters[3]++;
        counters[5]++;
      }
      else {
        counters[1]++;
        counters[6]++;
      }
    });

    // adding the logic for the the fifth question <favorate-color>
    $(".favorate-color").click(function(){
      var colors = $("input:radio[name=colors]:checked").val();
      if(colors === "dark"){
        counters[0]++;
        counters[2]++;
        counters[4]++;
        counters[7]++;
      }
      else if (colors === "springy") {

        counters[3]++;
        counters[5]++;
      }
      else {
        counters[1]++;
        counters[6]++;
      }
    });
      // adding the logic for the the sixith question <show-kind>

    $(".favorate-color").click(function(){
      var shows = $("input:radio[name=show-kind]:checked").val();
      if(shows === "emotional"){
        counters[4]++;
        counters[0]++;
      }
      else if (shows === "action") {
        counters[2]++;
        counters[7]++;
      }
      else if (shows === "drama") {
        counters[3]++;
        counters[5]++;
      }
      else{
        counters[1]++;
        counters[6]++;
      }
      });


      $("form#dating").submit(function(event){
        //to determine which counter was the larger
        event.preventDefault();
        $("#result").show();

        var max = 0;
        for (i=0; i<counters.length; i++){
          if (counters[i] > max){
            max = counters[i];
          }
        }

        //to do the mapping between the 2 arrays counters and names
        var maxIndex = counters.indexOf(max);
        var matchName = names[maxIndex];

        var name = $("input#name").val();
        $("#user-name").text(name);
        $("#match").text(": "+matchName);

        //mapping between the maxIndex and the array of photos


        $("#info0").show();
        var images = ["<img src= 'images/ans.jpgc width=400px>",
          "<img src='images/taylor.png' width=400px>",
          "<img src='images/lowr.jpg' width=400px>",
          "<img src='images/cam.jpg' width=400px>",
          "<img src='images/jim.jpg' width=400px>" ,
          "<img src='images/clo.jpg' width=400px>",
          "<img src='images/evans.jpg' width=400px>",
          "<img src='images/bb.jpg' width=400px>"]
        var selectedImage = images[maxIndex];
        $("#info0").append(selectedImage);


        // $("#info1").show();
        // $("#info2").show();
        // $("#info3").show();
        // $("#info4").show();
        // $("#info5").show();
        // $("#info6").show();
        // $("#info7").show();


      });

});
//for the ready
