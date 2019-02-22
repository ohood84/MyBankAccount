$("document").ready(function(){

    var names = ["Jennifer Aniston","Taylor Swift","Jennifer Lawrence","Cameron Diaz",
                "Jim Carrey","George Clooney","Chris Evan","James Spader"];
    var counters = [0,0,0,0,0,0,0,0];

    var counter=0; //counter to make sure all the questions have been answered from the user
    $("#start").click(function(){
      var name = $("input#name").val();
      if (name!==""){
        $(".help-inline").empty();
        $("#form1").show();
        $("#result").hide();
      }
      else{
        $(".help-inline").empty().text("Please make sure to enter your name.");
        $("#result").hide();
      }
    });


    $(".intrested-in").click(function(){
      var intrestedIn = $("input:radio[name=intrested-in]:checked").val();

      if (intrestedIn!==""){
        counter++;
      }
      // alert(counter);
      if(intrestedIn === "actor"){
        $("#man-type").slideDown();
        $("#woman-type").fadeOut();
        counters[4] =1000;
        counters[5] =1000;
        counters[6] =1000;
        counters[7] =1000;
        counters[0]=0;
        counters[1]=0;
        counters[2]=0;
        counters[3]=0;
      }
      else {
        $("#woman-type").slideDown();
        $("#man-type").fadeOut();
        counters[0]=1000;
        counters[1]=1000;
        counters[2]=1000;
        counters[3]=1000;

        counters[4]=0;
        counters[5]=0;
        counters[6]=0;
        counters[7]=0;
      }
      // alert(counters);
    });

    // adding the logic for the sec question-a <fav charactar-men>
    $(".man-type").click(function(){
      var manType = $("input:radio[name=man-type]:checked").val();

      if (manType!==""){
        counter++;
      }
      // alert(counter);

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
      if (womanType!==""){
        counter++;
      }


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
      if (vacationSpot!==""){
        counter++;
      }


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
    $(".intrests").click(function(){
      var intrests = $("input:radio[name=intrests]:checked").val();
      if (intrests!==""){
        counter++;
      }

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
      if (colors!==""){
        counter++;
      }
      // alert(counter);

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

    $(".show-kind").click(function(){
      var shows = $("input:radio[name=show-kind]:checked").val();
      if (shows!==""){
        counter++;
      }
      // alert(counter);
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
        //to make sure that the user answered all the 6 questions
        if (counter <6){
          $("#help-inline").empty().text("Please make sure to answer all the questions.");
          $("#result").hide();
        }
        else{
          $("#help-inline").empty();
          $("#result").show();
        }
        event.preventDefault();

        //to determine which celebrity counter was the larger

        var max= Math.max(...counters);
        // alert(max);

        //to do the mapping between the 2 arrays counters and names
        var maxIndex = counters.indexOf(max);
        var matchName = names[maxIndex];

        //var name = $("input#name").val();
        $("#user-name").text(name);
        $("#first-match").text(": "+matchName);

        //mapping between the maxIndex and the array of photos
        $("#info0").show();
        var images = ["<img src= 'images/ans.jpg' width=400px>",
          "<img src='images/taylor.png' width=400px>",
          "<img src='images/lowr.jpg' width=400px>",
          "<img src='images/cam.jpg' width=400px>",
          "<img src='images/jim.jpg' width=400px>" ,
          "<img src='images/clo.jpg' width=400px>",
          "<img src='images/evans.jpg' width=400px>",
          "<img src='images/bb.jpg' width=400px>"]
        var firstImg = images[maxIndex];
        $("#info0").empty().after(firstImg);
        // alert(counters);
        // alert(max);
      //To find the second match, need to find the second maximum counter
      //i will set the max value to -1 and then i will find the max again
      counters[maxIndex]=-1;
      // alert(counters);
      var secMax = Math.max(...counters);
      // alert(secMax);
      var secMaxIndex = counters.indexOf(secMax);
      var secMatchName = names[secMaxIndex];
      $("#sec-match").text(": "+ secMatchName);

      $("#info1").show();
      var secImg = images[secMaxIndex];
      $("#info1").empty().after(secImg);

      });

});
//for the ready
