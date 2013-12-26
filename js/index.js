$(function(){

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
	
	//console.log(emp1.get('firstName'));
	
	
	var EmployeeCollection = Backbone.Collection.extend({
		model:Employee
	});
	
	var allEmployees = new EmployeeCollection();
	allEmployees.add(emp1);
	
	//console.log('allEmployees.length : ', allEmployees.length);
	
	//console.log('emp1.cid',emp1.cid);
	
	
	
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
	
	var EmployeeList = Backbone.View.extend({
		el:'#allEmployees',
		initialize:function(){
			
		},
		
	});
	

});


