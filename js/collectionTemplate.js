/* 
	Hash of basic collection properties set to either empty values or functions.
	Use this template to save yourself keystrokes when creating models
	Uncomment methods/properties as per your discretion to create new collection types
*/
var basicCollectionProps = {
	//model: Todo,
	initialize: function(){
		this.on({
			//'change':this.modelChanged, //Fires when any value of a collection's model changes
			//'change:attr':this.modelAttrChanged, //Fires when the value of the given attribute in a model collection changes
			//'reset':this.collectionReset, //Fires on reset(). This does not fire the remove event
			'remove':this.modelRemoved,
			'add':this.modelAdded
		});
	},
	//modelChanged:function(updatedModel){
	//	//console.log(updatedModel.cid);
	//},
	//modelAttrChanged:function(updatedModel,newAttrValue){
	//	//console.log(updatedModel.cid);
	//},
	//collectionReset:function(newModelList,options){
	//	//console.log(options.previousModels);
	//},
	modelRemoved:function(modelItem){
		//console.log(modelItem.get('attrName'));
	},
	modelAdded:function(modelItem){
		//console.log(modelItem.get('attrName'));
	}
};

//var BasicCollection = Backbone.Collection.extend(basicCollectionProps);