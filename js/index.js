$(function(){

	function experiment1(){
		var Employee = Backbone.Model.extend({	
			initialize : function(){
				console.log('Creating a new employee instance!');
			},

			// Default employee attribute values
			defaults: function(){
				console.log('some initialization' + arguments.length);
				return {
					firstName: 'FN',
					lastName: 'LN'
				}
			}
		});
		
		var emp1 = new Employee({
			'firstName':'John',
			'lastName':'Doe'
		});
		
		var emp2 = new Employee({
			'firstName':'James',
			'lastName':'Bond'
		});
		
		//console.log(emp1.get('firstName'));
		
		
		var EmployeeCollection = Backbone.Collection.extend({
			model:Employee
		});
		
		var allEmployees = new EmployeeCollection();
		allEmployees.add([emp1,emp2]);
		
		var EmployeeView = Backbone.View.extend({
			tagName:  'li',
			
			events :{
				'.f-name click': 'nameClicked'
			},
			
			initialize : function(){
				console.log('Initializing a new view for an employee');
			},

			empTmpl: _.template( $('#empTmpl').html() ),
			
			render: function() {
				this.$el.html( this.empTmpl( this.model.toJSON() ) );
				return this;
			},
			
			nameClicked:function(){
				console.log('name clicked');
			}
			
		});
		
		var emp1View = new EmployeeView({model:emp1});
		
		//emp1View.render();
		//console.log(emp1View.$el.html());
		
		var EmployeeListView = Backbone.View.extend({
			
			render:function(){
				console.log(this.model);
				_.each(this.model.models, function (element,index,list){
					
					//console.log(element);
					//var emp1 = new EmployeeView({model:element});
					
					this.$el.append( (new EmployeeView({model:element})).render().el );
					
				}, this);
				
				return this;
			}
			
		});
		
		var allEmployeesView = new EmployeeListView({
			el:'#allEmployees',
			model:allEmployees
		});
		
		console.log(allEmployeesView.render());
	}

	//Identifying which attributes were changed
	function experiment2(){

		var Person = new Backbone.Model();
		Person.on("change", function(model) {
			console.log(model.changed);
		});

		Person.set({name: 'Jeremy',age:'10'});
		Person.set({name: 'Alex'});
	}
	
	function experiment3(){
		var basicModelProps = {
			defaults: {
			  name: 'defaultValue'
			}
		};

		var BasicModel = Backbone.Model.extend(basicModelProps);

		var model1 = new BasicModel({name:'model1'});
		var model2 = new BasicModel({name:'model2'});

		var basicCollectionProps = {
		  model: BasicModel,
		  initialize: function(){
		  	console.log('initializing');
	  		this.on({
		  		"add":this.modelAdded,
		  		"remove":this.modelRemoved
				});

				// log a message if a model in the collection changes
				this.on("change:name", function(modelItem,updatedValue) {
				  console.log("New value of model attribute " + updatedValue);
				});

				// log a message if a model in the collection changes
				this.on("change", function(updatedModel) {
				  //console.log(updatedModel.cid);
				});

		  },
		  modelAdded:function(modelItem){
				console.log(modelItem.get('name'));
			},
		  modelRemoved:function(modelItem){
				console.log('model removed', modelItem.get('name'));
			}
		};

		var BasicCollection = Backbone.Collection.extend(basicCollectionProps);

		var bc = new BasicCollection();
		bc.add(model1);
		bc.add(model2);
		model1.set({'name':'billy'});
		console.log(bc.remove(bc.get('c1')));
		console.log(bc.length);
	}

	experiment3();

});