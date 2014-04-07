/* 
	Hash of basic collection properties set to either empty values or functions. 
	Add/remove properties as per your discretion to create new collection types
*/
var basicCollectionProps = {
	//model: Todo,
	initialize: function(){
		this.on({
			//'change':this.modelChanged, //Fires when any value of a collection's model changes
			//'change:attr':this.modelAttrChanged, //Fires when the value of the given attribute in a model collection changes
			'remove':this.modelRemoved,
			'add':this.modelAdded
		});
	},
	modelChanged:function(updatedModel){
		//console.log(updatedModel.cid);
	},
	modelAttrChanged:function(updatedModel,newAttrValue){
		//console.log(updatedModel.cid);
	},
	modelRemoved:function(modelItem){
		//console.log(modelItem.get('attrName'));
	},
	modelAdded:function(modelItem){
		//console.log(modelItem.get('attrName'));
	}
};

//var BasicCollection = Backbone.Collection.extend(basicCollectionProps);