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
	
	experiment2();

});