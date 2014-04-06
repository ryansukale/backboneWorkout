//Hash of basic model properties set to either empty values or functions.
//Use this to save yourself keystrokes
//Add/remove properties as per your discretion to create new model types
var basicProps = {
	defaults: {
	  //attrName: defaultValue
	},

	initialize: function (){
		this.on('invalid',function(){
			//Do something
		});
	},

	validate: function(attributes){
    //if(attributes.attrName === undefined){
    //    return "An attribute has not been set.";
    //}
  }
};

//var SampleModel = Backbone.Model.extend(basicProps);