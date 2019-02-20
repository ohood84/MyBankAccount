$("document").ready(function(){
  $("#submit").click(function(event){

    event.preventDefault();

    var name = $("input#name").val();
    var intrested-in = $("input:radio[name=intrested-in]:checked").val();
    var man-type = $("input:radio[name=man-type]:checked").val();

    var woman-type = $("input:radio[name=woman-type]:checked").val();
    var vacation-spot = $("input:radio[name=vacation-spot]:checked").val();
    var intrests = $("input:radio[name=intrests]:checked").val();
    var fav-color= $("input:radio[name=colors]:checked").val();
    var show-kind = $("input:radio[name=show-kind]:checked").val();

    var jenaniston-counter = 0;
    var taylorswift-counter = 0;
    var jenlawrence-counter = 0;
    var jen-counter = 0;
    var jimCarrey-counter = 0;
    var clooney-counter = 0;
    var chrisevans-counter = 0;
    var jamesSpader-counter =0;



    if(animal === "cats"){
      $("#c").show();
      $("#s").hide();
      $("#b").hide();
    }

    else if(animal==="squirrels"){
      $("#s").show();
      $("#c").hide();
      $("#b").hide();
    }

    else{
      $("#b").show();
      $("#s").hide();
      $("#c").hide();
    }


  });

});
