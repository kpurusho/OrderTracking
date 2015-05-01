Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    <a ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("view.href")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">Home</a>\r\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    <a ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("view.href")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">Orders</a>\r\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    <a ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("view.href")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">Customers</a>\r\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    <a ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("view.href")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">Measurement Config</a>\r\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    <a ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("view.href")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">Tasks Config</a>\r\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\r\n    <h2>Comfort Designs</h2>\r\n\r\n    <div class=\"navbar\">\r\n        <div class=\"navbar-inner\">\r\n            <ul class=\"nav\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "orders", options) : helperMissing.call(depth0, "link-to", "orders", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "customers", options) : helperMissing.call(depth0, "link-to", "customers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "measurementconfigs", options) : helperMissing.call(depth0, "link-to", "measurementconfigs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "tasks", options) : helperMissing.call(depth0, "link-to", "tasks", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["customersedit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Customer Name")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "name", options) : helperMissing.call(depth0, "input", "name", options))));
  data.buffer.push("\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Phone Number")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "phoneno", options) : helperMissing.call(depth0, "input", "phoneno", options))));
  data.buffer.push("\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("email"),
    'label': ("Email Id")
  },hashTypes:{'as': "STRING",'label': "STRING"},hashContexts:{'as': depth0,'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "emailid", options) : helperMissing.call(depth0, "input", "emailid", options))));
  data.buffer.push("\r\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Address Line 1")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "addressline1", options) : helperMissing.call(depth0, "input", "addressline1", options))));
  data.buffer.push("\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Address Line 2")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "addressline2", options) : helperMissing.call(depth0, "input", "addressline2", options))));
  data.buffer.push("\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Address Line 3")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "addressline3", options) : helperMissing.call(depth0, "input", "addressline3", options))));
  data.buffer.push("\r\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            <table class=\"tablesorter\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Measurement Name</th>\r\n                    <th>Measurement Type</th>\r\n                    <th>Edit</th>\r\n                    <th>Delete</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                ");
  stack1 = helpers.each.call(depth0, "measurement", "in", "measurements", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </tbody>\r\n            </table>\r\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "measurement.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "measurement.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editMeasurement", "measurement", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/edit-icon.png\"/></a></td>\r\n                    <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeMeasurement", "measurement", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/delete-icon.png\" border=\"0\"/></a></td>\r\n                    </tr>\r\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        <button class=\"btn btn-large btn-primary\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateCustomer", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Create customer</button>\r\n    ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        <button class=\"btn btn-large btn-primary\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateCustomer", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Update customer</button>\r\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"span12\">\r\n    <div class=\"row\">\r\n        <div class=\"span3\">\r\n            ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n        <div class=\"span3\">\r\n            ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"span12\">\r\n    <div class=\"row\">\r\n        <p><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createMeasurement", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><img src=\"images/add-icon.png\"/> New measurement</a></p>\r\n        ");
  stack1 = helpers['if'].call(depth0, "measurements.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n</div>\r\n\r\n<div class=\"span12 text-center\">\r\n    ");
  stack1 = helpers['if'].call(depth0, "controller.isNew", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    <button class=\"btn btn-large btn-primary\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelCustomer", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Cancel</button>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["customersindex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src=\"images/add-icon.png\"/> New customer");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("selected:warning")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "customer.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "customer.phoneno", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "customer.emailid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "customer.measurements.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "customers.edit", "customer", options) : helperMissing.call(depth0, "link-to", "customers.edit", "customer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeItem", "customer", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/delete-icon.png\" border=\"0\"/></a></td>\r\n            </tr>\r\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("<img src=\"images/edit-icon.png\"/>");
  }

  data.buffer.push("<div class=\"span12\">\r\n    <div class=\"row\">\r\n        <div class=\"span2\">\r\n            <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "customers.new", options) : helperMissing.call(depth0, "link-to", "customers.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n        </div>\r\n        <div class=\"span3\">\r\n            <div class=\"search-bar\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Search by name or phone no."),
    'value': ("searchcustomer")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"span12\">\r\n    <table class=\"tablesorter\">\r\n        <thead>\r\n        <tr>\r\n            <th>Customer Name</th>\r\n            <th>Phone Number</th>\r\n            <th>Email Id</th>\r\n            <th>Measurement count</th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        ");
  stack1 = helpers.each.call(depth0, "customer", "in", "controller", {hash:{
    'itemController': ("customersEdit")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </tbody>\r\n    </table>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"span12\">\r\n    <h4>Welcome to Comfort Designs!! </h4>\r\n</div>\r\n");
  
});

Ember.TEMPLATES["measurement"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Name")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "name", options) : helperMissing.call(depth0, "input", "name", options))));
  data.buffer.push("\r\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.isNew", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("select"),
    'label': ("Type"),
    'collection': ("measurementtypes"),
    'prompt': ("Select type")
  },hashTypes:{'as': "STRING",'label': "STRING",'collection': "STRING",'prompt': "STRING"},hashContexts:{'as': depth0,'label': depth0,'collection': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "measurementtype", options) : helperMissing.call(depth0, "input", "measurementtype", options))));
  data.buffer.push("\r\n                    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <label class=\"control-label\">Type:</label>\r\n                        <label class=\"control-label\">");
  stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\r\n                    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                ");
  stack1 = (helper = helpers.eachIndexed || (depth0 && depth0.eachIndexed),options={hash:{
    'itemController': ("measurementitem")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "measurementitems", options) : helperMissing.call(depth0, "eachIndexed", "measurementitems", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    ");
  stack1 = helpers['if'].call(depth0, "blockStart", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    <div class=\"span2\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("itemname")
  },hashTypes:{'label': "ID"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "itemvalue", options) : helperMissing.call(depth0, "input", "itemvalue", options))));
  data.buffer.push("\r\n                    </div>\r\n                    ");
  stack1 = helpers['if'].call(depth0, "blockEnd", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("\r\n                    <div class=\"row\">\r\n                    ");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\r\n                    </div>\r\n                    ");
  }

  data.buffer.push("<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&times;</button>\r\n    <h4>Edit Measurement</h4>\r\n</div>\r\n\r\n<div class=\"modal-body\">\r\n    <div class=\"span12\">\r\n        <div class=\"row\">\r\n            <div class=\"span4\">\r\n                ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n            <div class=\"span4\">\r\n                ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"span12\">\r\n        <div class=\"row\">\r\n            ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n    <div class=\"span12 text-center\">\r\n        <form class=\"form-horizontal\">\r\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateMeasurement", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Update measurement</button>\r\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Cancel</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["measurementSelect"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                ");
  stack1 = helpers.each.call(depth0, "measurement", "in", "order.measurements", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <tr >\r\n                        <td>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("measurement.selected")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "order.orderdate", options) : helperMissing.call(depth0, "format-date", "order.orderdate", options))));
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "measurement.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "measurement.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    </tr>\r\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal-header\">\r\n    <h4>Select measurement</h4>\r\n</div>\r\n\r\n<div class=\"modal-body\">\r\n    <div class=\"span12\">\r\n        <table class=\"tablesorter\">\r\n            <thead>\r\n            <tr>\r\n                <th>Select</th>\r\n                <th>Date</th>\r\n                <th>Measurement Name</th>\r\n                <th>Measurement Type</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            ");
  stack1 = helpers.each.call(depth0, "order", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n    <div class=\"span12 text-center\">\r\n        <form class=\"form-horizontal\">\r\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "ok", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Cancel</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["measurementconfigsedit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Measurement Type")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "type", options) : helperMissing.call(depth0, "input", "type", options))));
  data.buffer.push("\r\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <table class=\"tablesorter\">\r\n            <thead>\r\n            <tr>\r\n                <th>Item Name</th>\r\n                <th>Minimum Value</th>\r\n                <th>Maximum Value</th>\r\n                <th>Edit</th>\r\n                <th>Delete</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            ");
  stack1 = helpers.each.call(depth0, "item", "in", "measurementitems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </tbody>\r\n        </table>\r\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                <tr>\r\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "item.itemname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "item.min", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "item.max", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editMeasurementItemConfig", "item", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/edit-icon.png\"/></a></td>\r\n                    <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeMeasurementIemConfig", "item", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/delete-icon.png\" border=\"0\"/></a></td>\r\n                </tr>\r\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        <button class=\"btn btn-large btn-primary\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateMeasurementType", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Create measurement type</button>\r\n    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        <button class=\"btn btn-large btn-primary\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateMeasurementType", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Update measurement type</button>\r\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"span12\">\r\n    ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n<div class=\"span12\">\r\n    <p><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createMeasurementItemConfig", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><img src=\"images/add-icon.png\"/> New measurement item</a></p>\r\n    ");
  stack1 = helpers['if'].call(depth0, "measurementitems.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n<div class=\"span12 text-center\">\r\n    ");
  stack1 = helpers['if'].call(depth0, "controller.isNew", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["measurementconfigsindex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src=\"images/add-icon.png\"/> New measurement type");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("selected:warning")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "config.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "config.measurementitems.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "measurementconfigs.edit", "config", options) : helperMissing.call(depth0, "link-to", "measurementconfigs.edit", "config", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "copyItem", "config", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/copy-icon.png\" border=\"0\"/></a></td>\r\n                <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeItem", "config", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/delete-icon.png\" border=\"0\"/></a></td>\r\n            </tr>\r\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("<img src=\"images/edit-icon.png\"/>");
  }

  data.buffer.push("<div class=\"span12\">\r\n    <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "measurementconfigs.new", options) : helperMissing.call(depth0, "link-to", "measurementconfigs.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n</div>\r\n<div class=\"span12\">\r\n    <table class=\"tablesorter\">\r\n        <thead>\r\n        <tr>\r\n            <th>Type</th>\r\n            <th>Item Count</th>\r\n            <th>Edit</th>\r\n            <th>Copy</th>\r\n            <th>Delete</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        ");
  stack1 = helpers.each.call(depth0, "config", "in", "controller", {hash:{
    'itemController': ("measurementconfigsEdit")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </tbody>\r\n    </table>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["measurementitemconfig"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                <div class=\"span4\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Name")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "itemname", options) : helperMissing.call(depth0, "input", "itemname", options))));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"span4\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Min")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "min", options) : helperMissing.call(depth0, "input", "min", options))));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"span4\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Max")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "max", options) : helperMissing.call(depth0, "input", "max", options))));
  data.buffer.push("\r\n                </div>\r\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal-header\">\r\n    <h4>Edit Measurement item config</h4>\r\n</div>\r\n\r\n<div class=\"modal-body\">\r\n    <div class=\"span12\">\r\n        <div class=\"row\">\r\n            ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n    <div class=\"span12 text-center\">\r\n        <form class=\"form-horizontal\">\r\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateMeasurementItemConfig", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Update</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["modal_layout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"modal-backdrop fade\">&nbsp;</div>\r\n<div class=\"modal fade show\" >\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["ordersedit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Name")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "customername", options) : helperMissing.call(depth0, "input", "customername", options))));
  data.buffer.push("\r\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("email"),
    'label': ("Email Id")
  },hashTypes:{'as': "STRING",'label': "STRING"},hashContexts:{'as': depth0,'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "customeremailid", options) : helperMissing.call(depth0, "input", "customeremailid", options))));
  data.buffer.push("\r\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("No. pieces")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "nopieces", options) : helperMissing.call(depth0, "input", "nopieces", options))));
  data.buffer.push("\r\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    <table class=\"tablesorter\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>Measurement Name</th>\r\n                            <th>Measurement Type</th>\r\n                            <th>Edit</th>\r\n                            <th>Delete</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        ");
  stack1 = helpers.each.call(depth0, "measurement", "in", "measurements", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </tbody>\r\n                    </table>\r\n                ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "measurement.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "measurement.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editMeasurement", "measurement", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/edit-icon.png\"/></a></td>\r\n                            <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeMeasurement", "measurement", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/delete-icon.png\" border=\"0\"/></a></td>\r\n                            </tr>\r\n                        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            <button class=\"btn btn-large btn-primary\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateOrder", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Create order</button>\r\n        ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            <button class=\"btn btn-large btn-primary\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateOrder", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Update order</button>\r\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\r\n    <div class=\"span12 text-center\">\r\n        <p>\r\n            <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "ordersummary", "ordersummary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data})));
  data.buffer.push(">Order summary : ");
  stack1 = helpers._triageMustache.call(depth0, "ordersummary.totalnewcount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" New, ");
  stack1 = helpers._triageMustache.call(depth0, "ordersummary.totalinprogresscount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" In Progress, ");
  stack1 = helpers._triageMustache.call(depth0, "ordersummary.totaldonecount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Done</a>\r\n        </p>\r\n    </div>\r\n    <div class=\"span12\">\r\n        <div class=\"row\">\r\n            <div class=\"span3\">\r\n                <form class=\"form\">\r\n                    <fieldset>\r\n                        <label class=\"control-label\" >Order No.</label>\r\n                        <div class=\"controls\">\r\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'disabled': ("true"),
    'valueBinding': ("orderno")
  },hashTypes:{'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'disabled': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n            <div class=\"span3\">\r\n                <form class=\"form\">\r\n                    <fieldset>\r\n                        <label class=\"control-label\" >Order Date</label>\r\n                        <div class=\"controls\">\r\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DatePicker", {hash:{
    'dateBinding': ("orderdate")
  },hashTypes:{'dateBinding': "STRING"},hashContexts:{'dateBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n            <div class=\"span3\">\r\n                <form class=\"form\">\r\n                    <fieldset>\r\n                        <label class=\"control-label\" >Ready Date</label>\r\n                        <div class=\"controls\">\r\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DatePicker", {hash:{
    'dateBinding': ("readydate")
  },hashTypes:{'dateBinding': "STRING"},hashContexts:{'dateBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n            <div class=\"span3\">\r\n                <form class=\"form\">\r\n                    <fieldset>\r\n                        <label class=\"control-label\" >Delivery Date</label>\r\n                        <div class=\"controls\">\r\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DatePicker", {hash:{
    'dateBinding': ("duedate")
  },hashTypes:{'dateBinding': "STRING"},hashContexts:{'dateBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n            <div class=\"span3\">\r\n                <form class=\"form\">\r\n                    <fieldset>\r\n                        <label class=\"control-label\" >Phone No</label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.TextFieldEx", {hash:{
    'valueBinding': ("customerphoneno"),
    'targetAction': ("updateCustomerDetails")
  },hashTypes:{'valueBinding': "STRING",'targetAction': "STRING"},hashContexts:{'valueBinding': depth0,'targetAction': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n            <div class=\"span3\">\r\n                ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n            <div class=\"span3\">\r\n                ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n            <div class=\"span3\">\r\n                ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n            <div class=\"span3\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("select"),
    'label': ("Status"),
    'collection': ("states")
  },hashTypes:{'as': "STRING",'label': "STRING",'collection': "STRING"},hashContexts:{'as': depth0,'label': depth0,'collection': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "status", options) : helperMissing.call(depth0, "input", "status", options))));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"span12\">\r\n        <div class=\"row\">\r\n            <div class=\"span3\">\r\n                <p><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createMeasurement", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><img src=\"images/add-icon.png\"/> New measurement</a></p>\r\n            </div>\r\n            <div class=\"span3\">\r\n                <p><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getRecentMeasurement", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><img src=\"images/get-icon.png\"/> Get last measurement</a></p>\r\n            </div>\r\n            <div class=\"span3\">\r\n                <p><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getAllPreviousMeasurement", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><img src=\"images/get-icon.png\"/> Get all previous measurements</a></p>\r\n            </div>\r\n            <div class=\"span6\">\r\n            </div>\r\n            <div class=\"span12\">\r\n                ");
  stack1 = helpers['if'].call(depth0, "measurements.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"span12\">\r\n        <form class=\"form-horizontal\">\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >Measurement note</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'class': ("measurementnotetext"),
    'valueBinding': ("additionalnote")
  },hashTypes:{'class': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n\r\n    <div class=\"span12 text-center\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "controller.isNew", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        <button class=\"btn btn-large btn-primary\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelOrder", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Cancel</button>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["ordersindex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src=\"images/add-icon.png\"/> New order");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                        <tr>\r\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "order.orderno", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "order.orderdate", options) : helperMissing.call(depth0, "format-date", "order.orderdate", options))));
  data.buffer.push("</td>\r\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "order.customername", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "order.customerphoneno", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "order.readydate", options) : helperMissing.call(depth0, "format-date", "order.readydate", options))));
  data.buffer.push("</td>\r\n                            <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "order.duedate", options) : helperMissing.call(depth0, "format-date", "order.duedate", options))));
  data.buffer.push("</td>\r\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "order.nopieces", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "orderStatusPrevious", "order", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/previous-icon.png\"/></a></td>\r\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "order.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "orderStatusNext", "order", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/next-icon.png\"/></a></td>\r\n                            <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "orders.edit", "order", options) : helperMissing.call(depth0, "link-to", "orders.edit", "order", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeItem", "order", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/delete-icon.png\" border=\"0\"/></a></td>\r\n                            <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "orders.print", "order", options) : helperMissing.call(depth0, "link-to", "orders.print", "order", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        </tr>\r\n                    ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("<img src=\"images/edit-icon.png\"/>");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("<img src=\"images/print-icon.png\"/>");
  }

  data.buffer.push("<div class=\"span12\">\r\n    <div class=\"row\">\r\n        <div class=\"span2\">\r\n            <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "orders.new", options) : helperMissing.call(depth0, "link-to", "orders.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n        </div>\r\n\r\n        <div class=\"span3\">\r\n            <div class=\"search-bar\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Search by order number"),
    'value': ("searchorder")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"span3\">\r\n            <div class=\"search-bar\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Search by name or phone no."),
    'value': ("searchcustomer")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"span4 text-center\">\r\n            <p>\r\n                <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "ordersummary", "ordersummary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data})));
  data.buffer.push(">Order summary : ");
  stack1 = helpers._triageMustache.call(depth0, "ordersummary.totalnewcount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" New, ");
  stack1 = helpers._triageMustache.call(depth0, "ordersummary.totalinprogresscount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" In Progress, ");
  stack1 = helpers._triageMustache.call(depth0, "ordersummary.totaldonecount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Done</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"span12\">\r\n    <div class=\"row\">\r\n        <div class=\"span2\">\r\n            <form>\r\n                <fieldset>\r\n                    <legend>Filter by status:</legend>\r\n\r\n                    <label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("filterByStatusNew")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        New\r\n                    </label>\r\n                    <label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("filterByStatusInProgress")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        In Progress\r\n                    </label>\r\n                    <label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("filterByStatusDone")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        Done\r\n                    </label>\r\n                    <label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("filterByStatusDelivered")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        Delivered\r\n                    </label>\r\n                </fieldset>\r\n            </form>\r\n\r\n            <form>\r\n                <fieldset>\r\n                    <legend class=\"small\">Filter by delivery date:</legend>\r\n                    <label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.RadioButton", {hash:{
    'name': ("DueDateFilter"),
    'selectionBinding': ("filterByDueDate"),
    'value': ("0")
  },hashTypes:{'name': "STRING",'selectionBinding': "STRING",'value': "STRING"},hashContexts:{'name': depth0,'selectionBinding': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        None\r\n                    </label>\r\n\r\n                    <label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.RadioButton", {hash:{
    'name': ("DueDateFilter"),
    'selectionBinding': ("filterByDueDate"),
    'value': ("1")
  },hashTypes:{'name': "STRING",'selectionBinding': "STRING",'value': "STRING"},hashContexts:{'name': depth0,'selectionBinding': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        This week\r\n                    </label>\r\n\r\n                    <label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.RadioButton", {hash:{
    'name': ("DueDateFilter"),
    'selectionBinding': ("filterByDueDate"),
    'value': ("2")
  },hashTypes:{'name': "STRING",'selectionBinding': "STRING",'value': "STRING"},hashContexts:{'name': depth0,'selectionBinding': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        Next 2 weeks\r\n                    </label>\r\n\r\n                    <label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.RadioButton", {hash:{
    'name': ("DueDateFilter"),
    'selectionBinding': ("filterByDueDate"),
    'value': ("3")
  },hashTypes:{'name': "STRING",'selectionBinding': "STRING",'value': "STRING"},hashContexts:{'name': depth0,'selectionBinding': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        Next 3 weeks\r\n                    </label>\r\n\r\n                    <label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.RadioButton", {hash:{
    'name': ("DueDateFilter"),
    'selectionBinding': ("filterByDueDate"),
    'value': ("4")
  },hashTypes:{'name': "STRING",'selectionBinding': "STRING",'value': "STRING"},hashContexts:{'name': depth0,'selectionBinding': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        Next 4 weeks\r\n                    </label>\r\n\r\n                    <label>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.RadioButton", {hash:{
    'name': ("DueDateFilter"),
    'selectionBinding': ("filterByDueDate"),
    'value': ("-1")
  },hashTypes:{'name': "STRING",'selectionBinding': "STRING",'value': "STRING"},hashContexts:{'name': depth0,'selectionBinding': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        Past\r\n                    </label>\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n        <div class=\"span10\">\r\n            <div class=\"table-main\">\r\n                <table class=\"tablesorter\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortColumn", "orderno", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">Order No</th>\r\n                        <th ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortColumn", "orderdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">Order Date</th>\r\n                        <th ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortColumn", "customername", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">Customer Name</th>\r\n                        <th ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortColumn", "customerphoneno", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">Phone Number</th>\r\n                        <th ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortColumn", "readydate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">Ready Date</th>\r\n                        <th ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortColumn", "duedate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">Delivery Date</th>\r\n                        <th ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortColumn", "nopieces", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">Piece count</th>\r\n                        <th ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortColumn", "orderno", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push("></th>\r\n                        <th ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortColumn", "status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">Status</th>\r\n                        <th></th>\r\n                        <th>Edit</th>\r\n                        <th>Delete</th>\r\n                        <th>Print</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    ");
  stack1 = helpers.each.call(depth0, "order", "in", "controller", {hash:{
    'itemController': ("ordersEdit")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["ordersprint"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <div class=\"span12 borderedDiv\">\r\n                <div class=\"row\">\r\n                    <h5>\r\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "m.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" : ");
  stack1 = helpers._triageMustache.call(depth0, "m.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </h5>\r\n                    ");
  stack1 = (helper = helpers.eachIndexed || (depth0 && depth0.eachIndexed),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "m.measurementitems", options) : helperMissing.call(depth0, "eachIndexed", "m.measurementitems", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        ");
  stack1 = helpers['if'].call(depth0, "blockstart", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    <tr>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "itemname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "itemvalue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    </tr>\r\n                        ");
  stack1 = helpers['if'].call(depth0, "blockend", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\r\n                        <div class=\"span2\">\r\n                        <table class=\"tablesorter\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th>Measurement</th>\r\n                                <th>Value</th>\r\n                            </tr>\r\n                            </thead>\r\n                        <tbody>\r\n                        ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\r\n                        </tbody>\r\n                        </table>\r\n                        </div>\r\n                        ");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    <tr>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "task.taskname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"span12\">\r\n    <div class=\"row\">\r\n        <h4>Order details</h4>\r\n        <table class=\"tablesorter\">\r\n            <thead>\r\n            <tr>\r\n                <th>Order No</th>\r\n                <th>Order Date</th>\r\n                <th>Ready Date</th>\r\n                <th>Customer Name</th>\r\n                <th>Phone Number</th>\r\n                <th>Piece count</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "orderno", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "orderdate", options) : helperMissing.call(depth0, "format-date", "orderdate", options))));
  data.buffer.push("</td>\r\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "readydate", options) : helperMissing.call(depth0, "format-date", "readydate", options))));
  data.buffer.push("</td>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "customername", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "customerphoneno", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "nopieces", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"span12\">\r\n    <div class=\"row\">\r\n\r\n        <h4>Measurement details</h4>\r\n\r\n        ");
  stack1 = helpers.each.call(depth0, "m", "in", "measurements", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        <div class=\"span12\">\r\n            <h4>Measurement Notes:</h4>\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "additionalnote", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n\r\n        <div class=\"span12\">\r\n            <h4>Order Tracking:</h4>\r\n            <table class=\"tablesorter\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Work Step</th>\r\n                    <th>Completed Date</th>\r\n                    <th>Completed by</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                ");
  stack1 = helpers.each.call(depth0, "task", "in", "tasks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"span12 text-center\">\r\n            <button class=\"btn btn-large btn-primary\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "print", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Print order</button>\r\n            <button class=\"btn btn-large btn-primary\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Close</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["ordersummary"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                            <tr>\r\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "rec.week", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "rec.newcount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "rec.inprogresscount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "rec.donecount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            </tr>\r\n                        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <tr>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "rec.duedate", options) : helperMissing.call(depth0, "format-date", "rec.duedate", options))));
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "rec.newcount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "rec.inprogresscount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "rec.donecount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    </tr>\r\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&times;</button>\r\n    <h4>Order summary</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"span6\">\r\n        <div class=\"row\">\r\n            <div class=\"span6\">\r\n                <h5>Overall summary</h5>\r\n                <table class=\"tablesorter\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th width=\"25%\"></th>\r\n                        <th width=\"25%\">New</th>\r\n                        <th width=\"25%\">In Progress</th>\r\n                        <th width=\"25%\">Done</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td>Total</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "model.totalnewcount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "model.totalinprogresscount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "model.totaldonecount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"span6\">\r\n                <h5>Week wise summary</h5>\r\n                <div class=\"table-weeks\">\r\n                    <table class=\"tablesorter\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th width=\"25%\">Week</th>\r\n                            <th width=\"25%\">New</th>\r\n                            <th width=\"25%\">In Progress</th>\r\n                            <th width=\"25%\">Done</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        ");
  stack1 = helpers.each.call(depth0, "rec", "in", "model.weekwisesummary", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"span6\">\r\n        <h5>Day wise summary</h5>\r\n        <div class=\"table-days\">\r\n            <table class=\"tablesorter\">\r\n                <thead>\r\n                <tr>\r\n                    <th width=\"25%\">Delivery Date</th>\r\n                    <th width=\"25%\">New</th>\r\n                    <th width=\"25%\">In Progress</th>\r\n                    <th width=\"25%\">Done</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                ");
  stack1 = helpers.each.call(depth0, "rec", "in", "model.daywisesummary", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <div class=\"span12 text-center\">\r\n        <form class=\"form-horizontal\">\r\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Close</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["tasksEdit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                <div class=\"span6\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Sequence Id")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "seqid", options) : helperMissing.call(depth0, "input", "seqid", options))));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"span6\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'label': ("Task Name")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "taskname", options) : helperMissing.call(depth0, "input", "taskname", options))));
  data.buffer.push("\r\n                </div>\r\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal-header\">\r\n    <h4>Edit task</h4>\r\n</div>\r\n\r\n<div class=\"modal-body\">\r\n    <div class=\"span12\">\r\n        <div class=\"row\">\r\n            ");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "form-for", "controller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n    <div class=\"span12 text-center\">\r\n        <form class=\"form-horizontal\">\r\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateTask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Update</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["tasksindex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            <tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("selected:warning")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "task.seqid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "task.taskname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editTask", "task", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/edit-icon.png\"/></a></td>\r\n                <td><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeTask", "task", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img src=\"images/delete-icon.png\" border=\"0\"/></a></td>\r\n            </tr>\r\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"span12\">\r\n    <p><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createTask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><img src=\"images/add-icon.png\"/>New task</a></p>\r\n</div>\r\n<div class=\"span12\">\r\n    <table class=\"tablesorter\">\r\n        <thead>\r\n        <tr>\r\n            <th>Sequence Id</th>\r\n            <th>Task Name</th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        ");
  stack1 = helpers.each.call(depth0, "task", "in", "controller", {hash:{
    'itemController': ("tasksEdit")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </tbody>\r\n    </table>\r\n</div>\r\n");
  return buffer;
  
});