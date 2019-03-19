$(document).ready(function() {

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
      this.totalBalance=0;
    }

    Account.prototype.addInitial= function(initialDeposit) {
      return (this.totalBalance += initialDeposit);
    }

    Account.prototype.deposit= function(depositAmount) {
      return this.totalBalance += depositAmount;
    }

    Account.prototype.withdrawal= function(withdrawalAmount) {
      return this.totalBalance -= withdrawalAmount;
    }



    // $("form#bank").submit(function(event){
    //   event.preventDefault();
    //

      var bank = new BankAccount();

      var name = $("input#name").val();
      var initialDeposit = parseInt($("input#initial").val());

      var newAccount1 = new Account(name, initialDeposit, totalBalance);
      newAccount1.addInitial(initialDeposit);

      bank.addAccount(newAccount1);
      $("#result").text("total balance is:" + " " + totalBalance);

      if ($("#deposit")){
        var depositAmount = parseInt($("input#deposit").val());
        newAccount1.deposit(depositAmount);
        $("#result").text("total balance is:" + " " + totalBalance);
      }

      if ($("#withdrawal")){
        var withdrawalAmount = parseInt($("input#withdrawal").val());
        newAccount1.withdrawal(withdrawalAmount);
        $("#result").text("total balance is:" + " " + totalBalance);
    }

      $("#result").text("hello there!");


    // });


  function resetFields(){
    $("#bank")[0].reset();
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
