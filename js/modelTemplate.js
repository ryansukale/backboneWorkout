/* 
	Hash of basic model properties set to either empty values or functions. 
	Use this template to save yourself keystrokes
	Uncomment methods/properties as per your discretion to create new model types
*/
var basicModelProps = {
	defaults: {
	  //attrName: defaultValue
	},

	initialize: function (){
		this.on({
			//'invalid':invalidModel
		});
	},
	validate: function(attributes){ //Fires just before the new value is set in the model. Attributes has contains the new values
    //if(attributes.attrName === undefined){
    //    return "An attribute has not been set.";
    //}
  },
  //invalidModel:function(){
  //	//Do something
  //}
};

//var BasicModel = Backbone.Model.extend(basicModelProps);