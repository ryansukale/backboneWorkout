
var basicViewProps = {

  //To create a new dom element, set one or more of the below three
  //tagName:  'div', //(required) Backbone defaults it to div
  //className: 'container', //(optional)
  //id:  'id', //(optional)

  //To select an existing dom element
  //el: 'selector',

  //Cache the template
  template: _.template( $("templateSelector") ),

  events: {
    //'eventName selector': 'handler'
  },

  initialize: function (options) {
    this.options = options || {};

    //this.model.bind('change', _.bind(this.render, this)); //Refresh the view when when model changes
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  },

  handler: function( e ) {
    //Do something
  }
  
};

//var BasicView = Backbone.View.extend(basicViewProps);