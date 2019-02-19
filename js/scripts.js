$("document").ready(function(){
  $("#submit").click(function(event){

    event.preventDefault();

    var gender = $("input:radio[name=gender]:checked").val();
    var level = $("input:radio[name=level]:checked").val();
    var color= $("input:radio[name=color]:checked").val();
    var show-kind = $("input:radio[name=kind]:checked").val();




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
