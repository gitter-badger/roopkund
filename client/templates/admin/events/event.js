//Events section begins here
//==========================================
//******************************************
Template.add_event.onRendered(function() {
    this.$('.datetimepicker').datetimepicker({

    });

    //change the Select here.
    this.$('#client').selectize();
});

Template.edit_event.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

Template.list_events.events({
  //Delete the Event
  'click .delete_event': function(event){
    if(confirm('Are you sure to delete this'))
    {
        Events.remove(this._id);
    }

  }
});

Template.add_event.events({
  'submit .add_event_form': function(event){
    FS.Debug = true;
    var name = event.target.name.value;
    var description = event.target.description.value;
    var client = event.target.client.value;
    var type = event.target.type.value;
    var eventDate = event.target.eventDate.value;
    //Insert Event
      Events.insert({
        name: name,
        description: description,
        type: type,
        client: client,
        eventDate: eventDate
      });
    FlashMessages.sendSuccess('Appointment Added');
    Router.go('/admin/events');

    return false;
  },


});
//Event Section ends here.
//====================================================
//****************************************************

//Helper Section begins here
//====================================================
//****************************************************
Template.registerHelper("getEvents", function(argument){
  return Events.find();
});

Template.registerHelper("getClient", function(){
  console.log('Inside getClient ' + this.client);
  var clientName =  Clients.findOne({"_id":this.client});
  console.log(clientName);
  return clientName;
});

Template.registerHelper("getClients", function(argument){
  return Clients.find();
});
//Helper Section ends here.
//====================================================
//****************************************************


//Generic methods starts here
//====================================================
//****************************************************


//Generic methods ends here
//====================================================
//****************************************************
