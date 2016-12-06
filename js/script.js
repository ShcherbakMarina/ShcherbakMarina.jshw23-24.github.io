requirejs.config({
  paths: {
    'jquery': 'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1',
    'template': 'lib/tmpl',
    'model': 'app/model',
    'view': 'app/view',
    'controller': 'app/controller'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'template': {
      exports: 'template'
    }
  }
});

require(
  [
    'model',
    'view',
    'controller',
    'jquery',
    'template'
  ],
  function(model, view, controller, $, template) {
    var firstToDoList = ['learn javascript', 'learn html', 'make coffee'];
    var model = new model(firstToDoList);
    var view = new view(model);
    var controler = new controller(model, view);
  }
);
