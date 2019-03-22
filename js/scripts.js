$(document).ready(function() {
  var initialDeposit = 0;
  var depositAmount =0;
  var totalBalance=0.0;
  var virtualTotal=0;
  var newAccount1 ;
  var name="";
  var input;
  var withdrawalAmount = 0;
  var index=0;

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
      this.Adeposit=0;
      this.Awithdraw=0;
      this.totalBalance=0.0;
    }

    Account.prototype.addInitial= function(initialDeposit) {
      this.Adeposit=this.initialDeposit;

      return this.totalBalance += initialDeposit;
      // debugger;
    }

    Account.prototype.deposit= function(virtualTotal,depositAmount) {

      return this.totalBalance=virtualTotal+ depositAmount;
    }

    Account.prototype.withdrawal= function(virtualTotal,withdrawalAmount) {
      return this.totalBalance= virtualTotal-withdrawalAmount;
    }

    document.getElementById("initial").onkeyup=function(){

      name = $("input#name").val();
      initialDeposit = parseFloat($("input#initial").val());
      newAccount1 = new Account(name, initialDeposit);
      newAccount1.totalBalance=newAccount1.addInitial(initialDeposit);
      index=0;
      $("#balance").val("$"+(newAccount1.totalBalance).toFixed(2));

    }

    document.getElementById("deposit").onkeyup=function(){
      // input="input#deposit";
      input = parseFloat($("input#deposit").val());
        if((index===2)|(index===0)){
          virtualTotal=newAccount1.totalBalance;
        }

        if(isNaN(input)){
         depositAmount=0;
        }
        else{
          depositAmount = input;
        }

         newAccount1.totalBalance=newAccount1.deposit(virtualTotal,depositAmount);
         $("#balance").val("$"+(newAccount1.totalBalance).toFixed(2));
         index=1;
    }



    document.getElementById("withdrawal").onkeyup=function(){
        input=parseFloat($("input#withdrawal").val());
        if((index===1)|(index===0)){
          virtualTotal=newAccount1.totalBalance;
        }
        if(isNaN(input)){
          withdrawalAmount=0;
        }
        else{
          withdrawalAmount =input;
        }
          newAccount1.totalBalance=newAccount1.withdrawal(virtualTotal,withdrawalAmount);
          $("#balance").val("$"+(newAccount1.totalBalance).toFixed(2));
          index=2;
      }

      resetFields();



  function resetFields(){
    $("#bank")[0].reset();
    $("#balance").val("0.00");
  }


});
