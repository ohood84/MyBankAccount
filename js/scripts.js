$("document").ready(function(){

    var names = ["Jennifer Aniston","Taylor Swift","Jennifer Lawrence","Cameron Diaz",
                "Jim Carrey","George Clooney","Chris Evan","James Spader"];
    var counters = [0,0,0,0,0,0,0,0];

    var checker = [0,0,0,0,0,0]; // to make sure all the questions have been answered from the user
                                //if answered turn the value to 1



    $("#start").click(function(){
      var name = $("input#name").val();
      if (name!==""){
        $(".help-inline").empty();
        $("#intrested-in").show();
        $("#result").hide();
        $(".name-block").hide();
        // $("#err-msg").hide();
      }
      else{
        $(".help-inline").empty().text("Please make sure to enter your name.");
        $("#result").hide();
      }
    });


    $("#next1").click(function(){
      var intrestedIn = $("input:radio[name=intrested-in]:checked").val();
      if ((intrestedIn==="actor")|(intrestedIn==="actress")){ //first if
          checker[0]=1;
        // alert(counter);
        $("#intrested-in").hide();
        if(intrestedIn === "actor"){
          $("#err-msg").hide();
          $("#man-type").slideDown();
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
          counters[0]=1000;
          counters[1]=1000;
          counters[2]=1000;
          counters[3]=1000;
          counters[4]=0;
          counters[5]=0;
          counters[6]=0;
          counters[7]=0;
        }
      } //for the first if
      else{
        $("#err-msg").show();
        $("#err-msg").text("Please pick an answer.")
        $("#intrested-in").show();
      }
      });

    // adding the logic for the sec question-a <fav charactar-men>
    $(".man-type").click(function(){
      var manType = $("input:radio[name=man-type]:checked").val();
      if (manType!==""){
        checker[1]=1;

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
      }
    });

    $("#next2").click(function(){
      $("#man-type").hide();
      $("#vacation-spot").slideDown();
    });
    $("#back2").click(function(){
      $("#man-type").fadeOut();
      $("#intrested-in").slideDown();
      $("#err-msg").empty();


    });

    // adding the logic for the sec question a <fav charactar-women>
    $(".woman-type").click(function(){
      var womanType = $("input:radio[name=woman-type]:checked").val();
      if (womanType!==""){
        checker[1]=1;

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
      }
    });

    $("#next2-1").click(function(){
      $("#woman-type").hide();
      $("#vacation-spot").slideDown();
    });
    $("#back2-1").click(function(){
      $("#woman-type").fadeOut();
      $("#intrested-in").slideDown();
      $("#err-msg").empty();
    });

    // adding the logic for the the third question b<fav vacation spots>
    $(".vacation-spot").click(function(){
      var vacationSpot = $("input:radio[name=vacation-spot]:checked").val();
      if (vacationSpot!==""){
        checker[2]=1;

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
      }
    });

    $("#next3").click(function(){
      $("#vacation-spot").hide();
      $("#intrests").slideDown();
    });
    $("#back3").click(function(){
      $("#vacation-spot").fadeOut();
      var intrestedIn = $("input:radio[name=intrested-in]:checked").val();
      if(intrestedIn==="actor"){
        $("#man-type").slideDown();
      }
      else{
        $("#woman-type").slideDown();
      }
    });

    // adding the logic for the the forth question <intrests>
    $(".intrests").click(function(){
      var intrests = $("input:radio[name=intrests]:checked").val();
      if (intrests!==""){
        checker[3]=1;

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
      }
    });

    $("#next4").click(function(){
      $("#intrests").hide();
      $("#favorate-color").slideDown();
    });
    $("#back4").click(function(){
      $("#intrests").fadeOut();
      $("#vacation-spot").slideDown();
    });

    // adding the logic for the the fifth question <favorate-color>
    $(".favorate-color").click(function(){
      var colors = $("input:radio[name=colors]:checked").val();
      if (colors!==""){
        checker[4]=1;


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
      }
    });

    $("#next5").click(function(){
      $("#favorate-color").hide();
      $("#show-kind").slideDown();
      $("#submit").show();
      $("#help-inline").empty();
    });
    $("#back5").click(function(){
      $("#favorate-color").fadeOut();
      $("#vacation-spot").slideDown();
      // $(".main-submit").hide();
    });
      // adding the logic for the the sixith question <show-kind>

    $(".show-kind").click(function(){
      var shows = $("input:radio[name=show-kind]:checked").val();
      if (shows!==""){
        checker[5]=1;

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
      }
    });

      $("#back6").click(function(){
        $("#show-kind").fadeOut();
        $("#favorate-color").slideDown();
        $("#submit").hide();
        $("#result").hide();
        // $("#help-inline").hide();
      });
      $("#restart").click(function(){
        $("#show-kind").fadeOut();
        $("#submit").fadeOut();
        $("#result").hide();
        $(".name-block").slideDown();
        $("#dating")[0].reset();
        $("#err-msg").hide();
        checker=[0,0,0,0,0,0];
     });


      $("form#dating").submit(function(event){
        //to make sure that the user answered all the 6 questions
        for (i=0; i<6; i++){
          if (checker[i] !== 1){
            $("#help-inline").empty().text("Please make sure to answer all the questions.");
            $("#result").hide();
          }
          else{
            $("#help-inline").empty();
            $("#result").show();
          }
        }
        event.preventDefault();

        //to determine which celebrity counter was the larger
        var max= Math.max(...counters);

        //to do the mapping between the 2 arrays counters and names
        var maxIndex = counters.indexOf(max);
        var matchName = names[maxIndex];

        var name = $("input#name").val();
        $("#user-name").text(name);
        $("#first-match").text(" "+matchName);

        //mapping between the maxIndex and the array of photos
        $(".info0").show();
        var images = ["images/ans.jpg",
          "images/taylor.png",
          "images/lowr.jpg",
          "images/cam.jpg",
          "images/jim.jpg" ,
          "images/clo.jpg",
          "images/evans.jpg",
          "images/bb.jpg"]
        var firstImg = images[maxIndex];
        $(".info0").attr("src",firstImg);

      //To find the second match, need to find the second maximum counter
      //i will set the max value in the array to -1 and then i will find the max again
      counters[maxIndex]=-1;
      // alert(counters);
      var secMax = Math.max(...counters);
      // alert(secMax);
      var secMaxIndex = counters.indexOf(secMax);
      var secMatchName = names[secMaxIndex];
      $("#sec-match").text(" "+ secMatchName);

      $(".info1").show();
      var secImg = images[secMaxIndex];
      $(".info1").attr("src",secImg);
      });

});
//for the ready
