$(document).ready(function() {

    function AddressBook() {
      this.contacts = []
    }

    AddressBook.prototype.addContact = function(contact) {
      this.contacts.push(contact);
    }

    // Business Logic for Contacts ---------
    function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
  }

    Contact.prototype.fullName = function() {
      return this.firstName + " " + this.lastName;
    }

    Address.prototype.fullAddress = function() {
      return this.street + ", " + this.city + " " + this.state;
    }
    function Address(street, city, state) {
      this.street = street;
      this.city = city;
      this.state = state;
    }


    var newAdCounter =0;


  $("#add-address").click(function() {

    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');

                               newAdCounter++;
  });

  function resetFields(){
    $("#new-contact")[0].reset();
  }
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    // if(newAdCounter>0){
    //   for (i=1; i<=newAdCounter; i++){
    //     $("#new-addresses").remove('<div class="new-address">' +
    //                                  '<div class="form-group">' +
    //                                    '<label for="new-street">Street</label>' +
    //                                    '<input type="text" class="form-control new-street">' +
    //                                  '</div>' +
    //                                  '<div class="form-group">' +
    //                                    '<label for="new-city">City</label>' +
    //                                    '<input type="text" class="form-control new-city">' +
    //                                  '</div>' +
    //                                  '<div class="form-group">' +
    //                                    '<label for="new-state">State</label>' +
    //                                    '<input type="text" class="form-control new-state">' +
    //                                  '</div>' +
    //                                '</div>');
    //
    //   }
    // }
      // $(".new-address").hide();
    $("form").not($("div form.new-address"));


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
      newContact.addresses.push(newAddress)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();
  });
})
