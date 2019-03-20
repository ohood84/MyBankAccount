$(document).ready(function() {
  var initialDeposit = 0;
  var depositAmount = 0;
  var totalBalance=0.0;
  var newAccount1 ;
  var name="";

  var withdrawalAmount = 0;

resetFields();
    function BankAccount() {
      this.accounts = [];
    }

    BankAccount.prototype.addAccount= function(account) {
      this.accounts.push(account);
    }

    // Business Logic for Contacts ---------
    function Account(name, initialDeposit) {
      this.name= name;
      this.initialDeposit = initialDeposit;
      this.Adeposit=0.0;
      this.Awithdraw=0.0;
      this.totalBalance=0.0;
    }

    Account.prototype.addInitial= function(initialDeposit) {
      this.Adeposit=this.initialDeposit;

      return this.totalBalance += initialDeposit;
      // debugger;
    }

    Account.prototype.deposit= function(depositAmount) {
      return this.Adeposit=this.initialDeposit + depositAmount;
    }

    Account.prototype.withdrawal= function(withdrawalAmount) {
      return this.totalBalance= this.Adeposit-withdrawalAmount;
    }

    document.getElementById("initial").onkeyup=function(){
      name = $("input#name").val();
      initialDeposit = parseFloat($("input#initial").val());
      newAccount1 = new Account(name, initialDeposit);
       // newAccount1.initial=
       newAccount1.addInitial(initialDeposit);
      // $("#balance").val(newAccount1.totalBalance);
      $("#balance").val("$"+(newAccount1.totalBalance).toFixed(2));

    }

  document.getElementById("deposit").onkeyup=function(){
        depositAmount = parseFloat($("input#deposit").val());
      newAccount1.totalBalance=newAccount1.deposit(depositAmount);
      // newAccount1.totalBalance=newAccount1.deposit-newAccount1.withdrawal;
       // $("#balance").val(newAccount1.totalBalance);
       $("#balance").val("$"+(newAccount1.totalBalance).toFixed(2));
    }



    document.getElementById("withdrawal").onkeyup=function(){
        withdrawalAmount = parseFloat($("input#withdrawal").val());
        newAccount1.totalBalance=newAccount1.withdrawal(withdrawalAmount);
          // newAccount1.totalBalance=newAccount1.deposit-newAccount1.withdrawal;
        $("#balance").val("$"+(newAccount1.totalBalance).toFixed(2));
    }


    $("form#bank").submit(function(event){
      event.preventDefault();


      var bank = new BankAccount();

      var name = $("input#name").val();
      initialDeposit = 0.0;
      // parseInt($("input#initial").val());
      depositAmount =0.0;
      // parseInt($("input#deposit").val());
      // alert( depositAmount);
      withdrawalAmount =0.0;
       // parseInt($("input#withdrawal").val());
      // alert( withdrawalAmount);

      // var newAccount1 = new Account(name, initialDeposit);
      // newAccount1.addInitial(initialDeposit);

      bank.addAccount(newAccount1);
      // $("#result").append("total balance is:" + " " + newAccount1.totalBalance+"<br>");



         // newAccount1.deposit(depositAmount);
        // $("#result").append("total balance is:" + " " +newAccount1.totalBalance);



         // newAccount1.withdrawal(withdrawalAmount);
        // $("#result").append("total balance is:" + " " +newAccount1.totalBalance);


       // $("#balance").val(newAccount1.totalBalance);

      resetFields();
    });



  function resetFields(){
    $("#bank")[0].reset();
    $("#balance").val("0.00");
  }

    // $("form").not($("div form.new-address"));
    //
    //
    // var inputtedFirstName = $("input#new-first-name").val();
    // var inputtedLastName = $("input#new-last-name").val();
    // var newContact = new Contact(inputtedFirstName, inputtedLastName);
    //
    // $(".new-address").each(function() {
    //   var inputtedStreet = $(this).find("input.new-street").val();
    //   var inputtedCity = $(this).find("input.new-city").val();
    //   var inputtedState = $(this).find("input.new-state").val();
    //   var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
    //   newContact.addresses.push(newAddress)
    // });
    //
    // $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    //
    // $(".contact").last().click(function() {
    //   $("#show-contact").show();
    //   $("#show-contact h2").text(newContact.fullName());
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);
    //   $("ul#addresses").text("");
    //   newContact.addresses.forEach(function(address) {
    //     $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    //   });
    // });

  //   resetFields();
  // });
});
