/* 
	Hash of basic router properties set to either empty values or functions. 
	Use this template to save yourself keystrokes when creating models
	Uncomment methods/properties as per your discretion to create new model types
*/
var basicRouterProps= {
  /* define the route and function maps for this router */
  routes: {
    // "/" : "showAbout",
    // "route/:param" : "doSomething"
  },
  initialize: function(){
		this.on({
			'route':routeChanged
		});
	},

  doSomething: function(){
  	// updates the URL, doesn't trigger the route 'hashChange' event
  	// this.navigate('yourRoute/param'); 

  	// updates the URL, AND triggers the route 'hashChange' event
  	// this.navigate('yourRoute/param',{trigger: true});
  },
  routeChanged:function (name, args) {
  	// body...
  }

};

// var BasicRouter = Backbone.Router.extend(basicRouterProps);

// var router = new BasicRouter();

// Backbone.history.start();