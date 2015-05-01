//Ember.Application.reopen({
//    init: function () {
//        this._super();
//        this.loadTemplates();
//    },

//    templates: [],

//    loadTemplates: function () {
//        var app = this;
//        var templates = this.get('templates');
//        app.deferReadiness();

//        var promises = templates.map(function (name) {
//            return Ember.$.get('/templates/' + name + '.hbs').then(function (data) {
//                Ember.TEMPLATES[name] = Ember.Handlebars.compile(data);
//            });
//        });

//        Ember.RSVP.all(promises).then(function () {
//            app.advanceReadiness();
//        });
//    }
//});

App = Ember.Application.create({
    LOG_ACTIVE_GENERATION: true,
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true
    //templates: ['application']

});

////////////////////
////local adapter
//App.ApplicationAdapter = DS.FixtureAdapter.extend();
//DS.JSONSerializer.reopen({
//    serializeHasMany: function (record, json, relationship) {
//        var key = relationship.key;
//
//        var relationshipType = DS.RelationshipChange.determineRelationshipType(
//                record.constructor, relationship);
//
//        if (relationshipType === 'manyToNone'
//                || relationshipType === 'manyToMany'
//                || relationshipType === 'manyToOne') {
//            json[key] = Ember.get(record, key).mapBy('id');
//            // TODO support for polymorphic manyToNone and manyToMany
//            // relationships
//        }
//    }
//});

//REST adapter
App.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:3000'
});

Ember.EasyForm.Config.registerInputType('mydate', App.DatePicker);

App.Serializer = DS.RESTSerializer.extend({
    normalize: function (type, hash, property) {

        // normalize the `_id`
        var json = { id: hash._id };
        delete hash._id;

        // normalize the underscored properties
        for (var prop in hash) {
            json[prop.camelize()] = hash[prop];
        }

        // delegate to any type-specific normalizations
        return this._super(type, json, property);
    },

    extractArray: function(store, type, payload, id, requestType) {


        return this._super(store, type, payload, id, requestType);
    },

    serializeHasMany: function(record, json, relationship) {
        var key = relationship.key;

        var relationshipType = DS.RelationshipChange.determineRelationshipType(record.constructor, relationship);

        if (relationshipType === 'manyToNone' || relationshipType === 'manyToMany' || relationshipType === 'manyToOne') {
            json[key] = Ember.get(record, key).mapBy('id');
        }

}
});

App.TaskSerializer = App.Serializer.extend();
App.CustomerSerializer = App.Serializer.extend();
App.MeasurementSerializer = App.Serializer.extend();
App.OrderSerializer = App.Serializer.extend();
App.OrdersummarySerializer = App.Serializer.extend();
App.MeasurementconfigSerializer = App.Serializer.extend();
App.MeasurementitemconfigSerializer = App.Serializer.extend();
App.MeasurementitemSerializer = App.Serializer.extend();

App.Consts = {
    OrderState: {
        New: "New",
        InProgress: "InProgress", 
        Done: "Done",
        Delivered: "Delivered"
    },

    MeasurementType: {
        Blouse: "Blouse",
        Salwar: "Salwar",
        Skirt: "Skirt"
    }
};


App.CustomersEditController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

    removedMeasurements: [],

    actions: {
        updateCustomer: function () {
            var customer = this.get('model');

            var self = this;
            var onCustomerSaveFailure = function (error) {
                window.alert('Failed to save customer..');
                console.log(error.message);
            };

            var onCustomerSaveSuccess = function () {
                console.log('customer saved successfully..');
                self.transitionToRoute('customers');
            };

            var onMeasurementsSaveSuccess = function () {
                console.log('all measurements saved successfully..');
            };

            var onMeasurementsSaveFailure = function () {
                window.alert('Failed to save measurements..');
                console.log(error.message);
            };

            customer.get('measurements').then(function (measurements) {
                var marr = measurements.toArray();
                async.forEach(marr,
                    function(measurement, done) {
                        App.Measurementhelper.saveMeasurement(measurement, done);
                    },
                    function done() {
                        console.log('measurements saved successfully..');
                        console.log('Trying to save customer..');
                        customer.save().then(onCustomerSaveSuccess, onCustomerSaveFailure);
                    }
                );
            });
        },

        cancelCustomer: function () {
            var customer = this.get('model');
            var self = this;

            App.OrderCustomerCommonHelper.cancel(customer, function(){
                self.transitionToRoute('customers');
            });
        },

        editMeasurement: function (measurement) {
            var customer = this.get('model');
            var self = this;

            App.Measurementhelper.cloneMeasurement(measurement, self.store, function (editableMeasurement){
                self.send('openModal', 'measurement', editableMeasurement, measurement, customer, false);
            });
        },

        removeMeasurement: function (measurement) {
            var customer = this.get('model');

            customer.get('measurements').removeObject(measurement);

            var isRecordNew = measurement.get('isNew');

            App.Measurementhelper.deleteMeasurement(measurement, false);

            if (!isRecordNew) {
                this.get('removedMeasurements').push(measurement);
            }
        },

        createMeasurement: function () {
            var self = this;
            var customer = this.get('model');
            var measurement = self.store.createRecord('measurement');
            measurement.set('type', '');
            measurement.set('name', self.get('name') );
            self.send('openModal', 'measurement', measurement, null, customer, true);
        }
    },

  isNew: function() {
      console.log("calculating isNew");
      var id = this.get('content').get('id');
      return id;
  }.property() //.property() marks this function as property. check http://emberjs.com/api/classes/Function.html#method_property
});


App.CustomersEditController.reopen({
    validations: {
        name: {
            presence: true
        },
        phoneno: {
            presence: true,
            numericality: true
        }
    }
});
App.CustomersIndexController = Ember.ArrayController.extend({

    searchedCustomer: function () {
        var regexp = new RegExp(this.get('searchcustomer'), 'i');

        this.get('model').set('content', this.store.filter('customer', function (item) {
            return regexp.test(item.get('name')) || regexp.test(item.get('phoneno'));
        }));

    }.observes('searchcustomer'),

    actions: {

        removeItem: function (customer) {
            App.OrderCustomerCommonHelper.delete(customer);
        }}
});


App.CustomersNewController = App.CustomersEditController.extend();

App.MeasurementController = Ember.ObjectController.extend(Ember.Validations.Mixin, {
    measurementtypes: [],
    measurementtype: '',

    init: function() {
        var self = this;
        App.MeasurementConfigServiceInstance.findMeasurementTypes(function(types) {
            self.set('measurementtypes', types);
        });

        this._super();
    },

    selectionChanged: function () {
        var self = this;
        var measurement = this.get('model');
        var type = this.get('measurementtype');
        var isNew = this.get('isNew');

        if (type === '' || type === undefined || type === null || !isNew) return;

        App.MeasurementConfigServiceInstance.createMeasurementItems(type, function(mitems) {
                    measurement.set('type', self.get('measurementtype'));
                    measurement.get('measurementitems').then(function(items) {
                        items.clear();
                        items.pushObjects(mitems);
                    });
                });

    }.observes('measurementtype'),

    parentModel: null,
    isNew: false,
    originalModel: null,

    actions: {
        close: function () {
            var measurement = this.get('model');
            App.Measurementhelper.deleteMeasurement(measurement);
            return this.send('closeModal');
        },
        updateMeasurement: function () {
            var measurement = this.get('model');
            var parent = this.get('parentModel');
            var isNew = this.get('isNew');
            var self = this;

            if (isNew) {
                parent.get('measurements').pushObject(measurement);
            }
            else {
                var orgmeasurement = this.get('originalModel');
                orgmeasurement.set('name', measurement.get('name'));
                measurement.get('measurementitems').then(function (items){
                    var itemArr = items.toArray();
                    orgmeasurement.get('measurementitems').then(function (oitems){
                        var oitemArr = oitems.toArray();
                        for(var i = 0; i < itemArr.length; i++) {
                            oitemArr[i].setProperties(itemArr[i].toJSON());
                        }
                        App.Measurementhelper.deleteMeasurement(measurement);
                    });
                });
            }
            this.set('measurementtype', '');
            return this.send('closeModal');
        }
    }
});

App.MeasurementController.reopen({
    validations: {
        name: {
            presence: true
        }
    }
});
App.MeasurementconfigsEditController = Ember.ObjectController.extend({
    actions: {
        updateMeasurementType: function () {
            var config = this.get('model');

            var that = this;
            var onSuccess = function () {
                console.log('config saved successfully..');
                that.transitionToRoute('measurementconfigs');
            };

            var onFailure = function (error) {
                window.alert('Failed to save. Reason: ' + error.responseJSON.message);
                //console.log(error.message);
            };

            App.Measurementhelper.saveMeasurementConfig(config,onSuccess, onFailure);
        },
        editMeasurementItemConfig: function(item) {
            this.send('openModal', 'measurementitemconfig', item, null, null, false);
        },
        createMeasurementItemConfig: function() {
            var model = this.get('model');
            var item = this.store.createRecord('measurementitemconfig');
            this.send('openModal', 'measurementitemconfig', item, null, model, true);
        }
    },

    isNew: function() {
        console.log("calculating isNew");
        return this.get('model').get('id');
    }.property() //.property() marks this function as property. check http://emberjs.com/api/classes/Function.html#method_property
});


App.MeasurementconfigsIndexController = Ember.ArrayController.extend({
    actions: {
        removeItem: function (config) {
            App.Measurementhelper.deleteMeasurementConfig(config);
        },
        copyItem: function (config) {
            App.Measurementhelper.copyMeasurementConfig(config, this.store);
        }
    }
});


/**
 * Created by Karthik on 4/25/2014.
 */


App.MeasurementitemController = Ember.ObjectController.extend(Ember.Validations.Mixin);


App.MeasurementitemController.reopen({
    validations: {
        itemvalue: {
            numericality: true,
            measurementValidator: true
        }
    }
});

/**
 * Created by Karthik on 4/23/2014.
 */
App.MeasurementitemconfigController = Ember.ObjectController.extend(Ember.Validations.Mixin, {
    parentModel: null,
    isNew: false,
    originalModel: null,

    actions: {
        updateMeasurementItemConfig: function () {
            var measurementitem = this.get('model');
            var parent = this.get('parentModel');
            var isNew = this.get('isNew');
            var self = this;

            if (isNew) {
                parent.get('measurementitems').pushObject(measurementitem);
            }
            return this.send('closeModal');
        }
    }

});

App.MeasurementitemconfigController.reopen({
    validations: {
        itemname: {
            presence: true
        },
        min : {
            presence: true,
            numericality: true
        },
        max : {
            presence: true,
            numericality: true
        }
    }
});

/**
 * Created by Karthik on 5/13/14.
 */
App.MeasurementSelectController = Ember.ObjectController.extend({
    parentModel: null,
    isNew: false,
    originalModel: null,

    selectionState : function() {
        var ordersArr = this.get('model');
        async.forEach(ordersArr,
            function(order, orderDone){
                order.get('measurements').then(function(measurements) {
                        var measurementsArr = measurements.toArray();
                        async.forEach(measurementsArr,
                            function(measurement, measurementDone) {
                                measurement.set('selected', false);
                                measurementDone();
                            },

                            function measurementDone() {
                                orderDone();
                            }
                        );
                    }
                );
            },
            function orderDone() {
            }
        );
    }.observes('model'),

    actions: {
        ok : function() {
            var parentOrder = this.get('parentModel');
            var ordersArr = this.get('model');
            var self = this;
            async.forEach(ordersArr,
                function(order, orderDone){
                    order.get('measurements').then(function(measurements) {
                            var measurementsArr = measurements.toArray();
                            async.forEach(measurementsArr,
                                function(measurement, measurementDone) {
                                    if (measurement.get('selected')) {
                                        App.Measurementhelper.cloneMeasurement(measurement, self.store, function(newMeasurement){
                                            parentOrder.get('measurements').then(function(om) {
                                                om.pushObject(newMeasurement);
                                                measurementDone();
                                            });
                                        });
                                    } else {
                                        measurementDone();
                                    }
                                },

                                function measurementDone() {
                                    orderDone();
                                }
                            );
                        }
                    );
                },
                function orderDone() {
                    return self.send('closeModal');
                }
            );
        },
        cancel : function() {
            return this.send('closeModal');
        }
    }
});
App.OrdersEditController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

    states: [App.Consts.OrderState.New, App.Consts.OrderState.InProgress, App.Consts.OrderState.Done, App.Consts.OrderState.Delivered],

    removedMeasurements: [],

    ordersummary: function () {
        //return this.store.find('ordersummary');
        var summary = App.OrdersummaryService.create();
        summary.set('store', this.store);
        summary.computesummary();
        return summary;
    }.property('model'),

    actions: {
        updateCustomerDetails: function (phnum) {
            var self = this;
            var phno = this.get('customerphoneno');
            if (!phno) return;

            this.store.find('customer', { phoneno: phno }).then(function (customers) {
                if (customers.get('length') > 0) {//TODO: handle multiple customer record
                    var customer = customers.objectAt(0);
                    self.set('customername', customer.get('name'));
                    self.set('customeremailid', customer.get('emailid'));
                }
            });
        },

        updateOrder: function () {
            var order = this.get('model');

            var self = this;

            var onOrderSaveSuccess = function () {
                console.log('Order saved successfully');

                console.log('Trying to update customer..');

                var order = self.get('model');
                self.store.find('customer', { phoneno: self.get('customerphoneno') }).then(function (customers) {

                    var customer = null;
                    if (customers.get('length') > 0) {//TODO: handle multiple customer record
                        customer = customers.objectAt(0);
                    } else {
                        customer = self.store.createRecord('customer',
                            {
                                name: self.get('customername'),
                                phoneno: self.get('customerphoneno'),
                                emailid: self.get('customeremailid')
                            }
                        );
                    }

                    var customerMeasurements = [];
                    var orderMeasurements = [];
                    var saveMeasurements = [];
                    customer.get('measurements').then(function (measurements) {
                        customerMeasurements = measurements.toArray();
                    }).then(function () {
                        order.get('measurements').then(function (measurements) {
                            orderMeasurements = measurements.toArray();
                        }).then(function () {

                            async.forEach(orderMeasurements,

                                function(oMeasurement, done) {

                                    var saveFunction = function (cMeasurement) {
                                        App.Measurementhelper.saveMeasurement(cMeasurement, done);
                                    };

                                    var matchFound = false;
                                    for (var cIdx = 0; cIdx < customerMeasurements.length; cIdx++) {
                                        var cMeasurement = customerMeasurements[cIdx];

                                        if (cMeasurement.get('name') === oMeasurement.get('name') &&
                                            cMeasurement.get('type') === oMeasurement.get('type')) {
                                            matchFound = true;
                                            App.Measurementhelper.copyMeasurement(oMeasurement, cMeasurement,
                                                self.store, saveFunction);
                                            break;
                                        }
                                    }

                                    if (!matchFound) {
                                        App.Measurementhelper.cloneMeasurement(oMeasurement, self.store, function (newMeasurement) {
                                            App.Measurementhelper.saveMeasurement(newMeasurement, function() {
                                                customer.get('measurements').then(function(cm) {
                                                    cm.pushObject(newMeasurement);
                                                    done();
                                                });
                                            });
                                        });
                                    }
                                },

                                function done() {
                                    customer.save();
                                    console.log('customer saved successfully..');
                                    self.transitionToRoute('orders');
                                }
                            );
                        });
                    });
                });
            };

            var onOrderSaveFailure = function (error) {
                window.alert('Failed to save order..');
                console.log(error.message);
            };

            var onMeasurementsSaveSuccess = function () {
                console.log('measurements saved successfully..');
            };

            var onMeasurementsSaveFailure = function () {
                window.alert('Failed to save measurements..');
                console.log(error.message);
            };

            order.get('measurements').then(function(measurements) {
                console.log('Trying to save measurements..');
                var marr = measurements.toArray();
                async.forEach(marr,
                    function(measurement, done) {
                        App.Measurementhelper.saveMeasurement(measurement, done);
                    },
                    function done() {
                        console.log('measurements saved successfully..');
                        console.log('Trying to save order..');
                        order.save().then(onOrderSaveSuccess, onOrderSaveFailure);
                        self.get('removedMeasurements').forEach(function (rmeasurement) {
                            App.Measurementhelper.saveMeasurement(rmeasurement);
                        });
                    }
                );
            });
        },

        cancelOrder: function () {
            var order = this.get('model');
            var self = this;

            self.get('removedMeasurements').forEach(function (rmeasurement) {
                App.Measurementhelper.rollbackMeasurement(rmeasurement);
            });

            App.OrderCustomerCommonHelper.cancel(order, function(){
                self.transitionToRoute('orders');
            });
        },

        editMeasurement: function (measurement) {
            var order = this.get('model');
            var self = this;

            App.Measurementhelper.cloneMeasurement(measurement, self.store, function (editableMeasurement){
                self.send('openModal', 'measurement', editableMeasurement, measurement, order, false);
            });
        },

        removeMeasurement: function (measurement) {
            var order = this.get('model');

            order.get('measurements').removeObject(measurement);

            var isRecordNew = measurement.get('isNew');

            App.Measurementhelper.deleteMeasurement(measurement, false);

            if (!isRecordNew) {
                this.get('removedMeasurements').push(measurement);
            }
        },

        createMeasurement: function () {
            var self = this;
            var order = this.get('model');
            var measurement = self.store.createRecord('measurement');
            measurement.set('type', '');
            measurement.set('name', self.get('customername') );
            self.send('openModal', 'measurement', measurement, null, order, true);
        },

        getAllPreviousMeasurement: function () {
            var customerphno = this.get('customerphoneno');

            if (!customerphno) {
                window.alert('Enter customer phone numbers to get measurements');
                return;
            }

            var order = this.get('model');
            var self = this;

            this.store.find('order', { customerphoneno: customerphno, status: App.Consts.OrderState.Delivered }).then(function (orders) {

                if (orders.get('length') > 0) {
                    var orderArr = orders.toArray();
                    orderArr.sort(function(a,b){
                        return a.get('orderdate') < b.get('orderdate');
                    });
                    self.send('openModal', 'measurementSelect', orderArr, null, order, false);
                } else {
                    window.alert('No measurements found for customer with phone no ' + customerphno);
                }
            });
        },

        getRecentMeasurement: function () {
            var customerphno = this.get('customerphoneno');

            if (!customerphno) {
                window.alert('Enter customer phone numbers to get measurements');
                return;
            }

            var order = this.get('model');
            var self = this;

            this.store.find('customer', { phoneno: customerphno }).then(function (customers) {
                if (customers.get('length') > 0) {//TODO: handle multiple customer record
                    var customer = customers.objectAt(0);

                    customer.get('measurements').then(function (measurements) {
                        var marr = measurements.toArray();

                        var pushFunction = function(newMeasurement){
                            order.get('measurements').then(function(om) {
                                om.pushObject(newMeasurement);
                            });
                        };

                        for (var i = 0; i < marr.length; i++){
                            App.Measurementhelper.cloneMeasurement(marr[i], self.store, pushFunction);
                        }
                    });
                } else {
                    window.alert('No measurements found for customer with phone no ' + customerphno);
                }
            });
        }

    },

    isNew: function() {
      console.log("calculating isNew");
      var id = this.get('content').get('id');
      return id;
  }.property() //.property() marks this function as property. check http://emberjs.com/api/classes/Function.html#method_property
});


App.OrdersEditController.reopen({
    validations: {
        customername: {
            presence: true
        },
        nopieces: {
            presence: true,
            numericality: true
        }

    }
});

App.OrdersIndexController = Ember.ArrayController.extend({
    states: [App.Consts.OrderState.New, App.Consts.OrderState.InProgress, App.Consts.OrderState.Done, App.Consts.OrderState.Delivered],

    //contentBinding: Ember.Binding.oneway("App.OrdersIndexController.content"),

    sortProperties: ['orderno'],
    sortAscending: false,

    filterByStatusNew: false,
    filterByStatusInProgress: false,
    filterByStatusDone: false,
    filterByStatusDelivered: false,
    filterByDueDate: "0",

    ordersummary: function () {
        //return this.store.find('ordersummary');
        var summary = App.OrdersummaryService.create();
        summary.set('store', this.store);
        summary.computesummary();
        return summary;
    }.property('model.@each.status'),

    filter: function () {
        var filterNew = this.get('filterByStatusNew');
        var filterInProgress = this.get('filterByStatusInProgress');
        var filterDone = this.get('filterByStatusDone');
        var filterDelivered = this.get('filterByStatusDelivered');
        var filterNone = !(filterNew || filterInProgress || filterDone || filterDelivered);

        var pattern = filterNew ? App.Consts.OrderState.New + '|' : '';
        pattern += filterInProgress ? App.Consts.OrderState.InProgress + '|' : '';
        pattern += filterDone ? App.Consts.OrderState.Done + '|' : '';
        pattern += filterDelivered ? App.Consts.OrderState.Delivered + '|' : '';

        pattern = pattern.substring(0, pattern.length - 1);

        var statuRegExp = new RegExp(pattern);
        var customerRegExp = new RegExp(this.get('searchcustomer'), 'i');
        var orderRegExp = new RegExp(this.get('searchorder'), 'i');

        var startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        startDate.setMilliseconds(0);

        var endDate = new Date(startDate);

        //week is from monday to sunday

        var daysleftthisweek = ((6 - startDate.getDay() + 1)%7) + 1;

        var filterDueDate = this.get('filterByDueDate');
        switch (filterDueDate) {
            case "0":
                startDate = undefined;
                endDate = undefined;
                break;
            case "-1":
                startDate = undefined;
                break;
            case "1":
                endDate.setDate(startDate.getDate() + daysleftthisweek);
                break;
            case "2":
                endDate.setDate(startDate.getDate() + daysleftthisweek + 7);
                break;
            case "3":
                endDate.setDate(startDate.getDate() + daysleftthisweek + 14);
                break;
            case "4":
                endDate.setDate(startDate.getDate() + daysleftthisweek + 21);
                break;
        }

        var self = this;
        if (filterDelivered) {
            this.store.find('order').then(function (orders) {
                self.get('model').set('content', self.store.filter('order', function (item) {
                    return statuRegExp.test(item.get('status')) &&
                        (startDate !== undefined ? (startDate.getTime() <= item.get('duedate').getTime()) : true) &&
                        (endDate !== undefined ? (item.get('duedate').getTime() < endDate.getTime()) : true) &&
                        (customerRegExp.test(item.get('customername')) || customerRegExp.test(item.get('customerphoneno'))) &&
                        orderRegExp.test(item.get('orderno'));
                }));
                $("table").trigger("update");
            });
        }
        else {
            self.get('model').set('content', self.store.filter('order', function (item) {
                return statuRegExp.test(item.get('status')) &&
                    (startDate !== undefined ? (startDate.getTime() <= item.get('duedate').getTime()) : true) &&
                    (endDate !== undefined ? (item.get('duedate').getTime() < endDate.getTime()) : true) &&
                    (customerRegExp.test(item.get('customername')) || customerRegExp.test(item.get('customerphoneno'))) &&
                    orderRegExp.test(item.get('orderno'));
            }));
            $("table").trigger("update");
        }
    }.observes('filterByStatusNew', 'filterByStatusInProgress',
                'filterByStatusDone', 'filterByStatusDelivered',
                'filterByDueDate',
                'searchcustomer',
                'searchorder'),

    editCounter: function () {
        return this.filterProperty('selected', true).get('length');
    }.property('@each.selected'),

    itemsSelected: function () {
        return this.get("editCounter") > 0;
    }.property('editCounter'),

    actions: {

        sortColumn: function (colname){
            var sp = this.get('sortProperties');
            if (sp.length === 1 && sp[0]===colname){
                var sortorder = this.get('sortAscending');
                sortorder = sortorder ? false : true;
                this.set('sortAscending', sortorder);
            }
            else{
                this.set('sortProperties', [colname]);
                this.set('sortAscending', true);
            }
        },

        searchItem: function () {
            var con = this.get('content.length');
            var searchvalue = this.get('search');
            var regexp = new RegExp(searchvalue);
            var filtered = this.get('model').filter(function (item) {
                return regexp.test(item.get('customername'));
            });
        },

        removeItem: function (order) {
            var self = this;
            App.OrderCustomerCommonHelper.delete(order, function() {
                self.filter();
            });
        },


        orderStatusNext: function (order) {
            var length = this.states.length;
            var nextIdx = 0;
            for (var i = 0; i < length; i++) {
                if (this.states[i] === order.get('status')) {
                    if (i === (length - 1)) {
                        nextIdx = i;
                    }
                    else {
                        nextIdx = i + 1;
                    }
                }
            }
            order.set('status', this.states[nextIdx]);
            order.save();
        },
        orderStatusPrevious: function (order) {
            var length = this.states.length;
            var nextIdx = 0;
            for (var i = 0; i < length; i++) {
                if (this.states[i] === order.get('status')) {
                    if (i === 0) {
                        nextIdx = i;
                    }
                    else {
                        nextIdx = i - 1;
                    }
                }
            }
            order.set('status', this.states[nextIdx]);
            order.save();
        }
}
});


App.OrdersNewController = App.OrdersEditController.extend();
App.OrdersPrintController = Ember.ObjectController.extend({
    actions: {
        print: function () {
            window.print();
            this.transitionToRoute('orders');
        },

        close: function () {
            this.transitionToRoute('orders');
        }
    },
    tasks: function () {
        console.log('getting tasks for printing..');
        return this.store.find('task');
    }.property()
});
App.OrdersummaryController = Ember.ObjectController.extend({

    actions: {
        close: function () {
            return this.send('closeModal');
        }
    }
});
App.TasksEditController = Ember.ObjectController.extend(Ember.Validations.Mixin, {
    parentModel: null,
    isNew: false,
    originalModel: null,


    actions: {
        updateTask: function () {
            var task = this.get('model');
            var parent = this.get('parentModel');
            var isNew = this.get('isNew');
            var self = this;

            var that = this;
            var onSuccess = function () {
                console.log('task saved successfully..');
                that.transitionToRoute('tasks');
            };

            var onFailure = function (error) {
                window.alert('Failed to save..');
                console.log(error.message);
            };

            task.save().then(onSuccess, onFailure);
            return this.send('closeModal');
        }
    }
});


App.TasksEditController.reopen({
    validations: {
        taskname: {
            presence: true
        },
        seqid : {
            presence: true,
            numericality: true
        }
    }
});

App.TasksIndexController = Ember.ArrayController.extend({

    editCounter: function () {
        return this.filterProperty('selected', true).get('length');
    }.property('@each.selected'),

    itemsSelected: function () {
        return this.get("editCounter") > 0;
    }.property('editCounter'),

    actions: {
        createTask: function () {
            var model = this.get('model');
            var item = this.store.createRecord('task');
            this.send('openModal', 'tasksEdit', item, null, model, true);
        },

        editTask : function (task) {
            this.send('openModal', 'tasksEdit', task, null, null, false);
        },

        removeTask: function (task) {
            task.deleteRecord();
            task.get('isDeleted');
            task.save();
        }
    }
});


Ember.Handlebars.helper('format-date', function (date) {
    if (date)  {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        return "%@-%@-%@".fmt(day, month, date.getFullYear());
    }
});


Ember.Handlebars.registerHelper('eachIndexed', function eachHelper(path, options) {
    var keywordName = 'item',
        fn;

    var blockSize = 6;

    // Process arguments (either #earchIndexed bar, or #earchIndexed foo in bar)
    if (arguments.length === 4) {
        Ember.assert('If you pass more than one argument to the eachIndexed helper, it must be in the form #eachIndexed foo in bar', arguments[1] === 'in');
        Ember.assert(arguments[0] +' is a reserved word in #eachIndexed', $.inArray(arguments[0], ['index', 'index+1', 'even', 'odd']));
        keywordName = arguments[0];

        options = arguments[3];
        path = arguments[2];
        options.hash.keyword = keywordName;
        if (path === '') { path = 'this'; }
    }

    if (arguments.length === 1) {
        options = path;
        path = 'this';
    }

    // Wrap the callback function in our own that sets the index value
    fn = options.fn;
    function eachFn(){
        var keywords = arguments[1].data.keywords,
            view = arguments[1].data.view,
            index = view.contentIndex,
            list = view._parentView.get('content') || [],
            len = list.get('length');

        // Set indexes
        keywords.index = index;
        keywords.index_1 = index + 1;
        keywords.first = (index === 0);
        keywords.last = (index + 1 === len);
        keywords.even = (index % 2 === 0);
        keywords.odd = !keywords.even;
        keywords.blockstart = (index % blockSize === 0);
        keywords.blockend = (keywords.last || (index > 0 && (index+1) % blockSize === 0));
        arguments[1].data.keywords = keywords;

        return fn.apply(this, arguments);
    }
    options.fn = eachFn;

    // Render
    options.hash.dataSourceBinding = path;
    if (options.data.insideGroup && !options.hash.groupedRows && !options.hash.itemViewClass) {
        new Ember.Handlebars.GroupedEach(this, path, options).render();
    } else {
        return Ember.Handlebars.helpers.collection.call(this, 'Ember.Handlebars.EachView', options);
    }
});
App.Measurementhelper = {

    cloneMeasurement : function(measurement, store, callback) {
        callback = callback || function (m) {};

        var clonedMeasurement = store.createRecord('measurement', measurement.toJSON());
        measurement.get('measurementitems').then(function (items){
            var itemArr = items.toArray();
            clonedMeasurement.get('measurementitems').then(function (eitems){
                for(var i = 0; i < itemArr.length; i++) {
                    eitems.pushObject(store.createRecord('measurementitem', itemArr[i].toJSON()));
                }
                callback(clonedMeasurement);
            });
        });
    },

    copyMeasurement : function(source, dest, store, callback) {
        callback = callback || function () {};

        dest.set('name', source.get('name'));
        dest.get('type', source.get('type'));
        source.get('measurementitems').then(function (sitems){
            var sitemArr = sitems.toArray();
            dest.get('measurementitems').then(function (ditems){
                var ditemArr = ditems.toArray();

                async.forEach(sitemArr, function(item, done) {
                    var found = false;
                    for(var i = 0; i < ditemArr.length; i++) {
                        if (ditemArr[i].get('itemname') === item.get('itemname') ) {
                            ditemArr[i].setProperties(sitemArr[i].toJSON());
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        ditems.pushObject(store.createRecord('measurementitem', item.toJSON()));
                    }
                    done();
                }, function done() {
                    callback(dest);
                });
            });
        });
    },

    deleteMeasurement : function(measurement, doSave, callback) {
        if (doSave === undefined || doSave === null) {
            doSave = true;
        }
        callback = callback || function () {};

        measurement.get('measurementitems').then(function(items){
            var itemArr = items.toArray();
            for(var i = 0; i < itemArr.length; i++) {
                var isItemNew = itemArr[i].get('isNew');
                itemArr[i].deleteRecord();
                if (doSave && !isItemNew) {
                    itemArr[i].save();
                }
            }
            var isNew = measurement.get('isNew');
            measurement.deleteRecord();
            if (doSave && !isNew) {
                measurement.save();
            }

            callback();
        });
    },

    rollbackMeasurement : function(measurement, callback) {
        callback = callback || function () {};

        measurement.get('measurementitems').then(function(items){
            var itemArr = items.toArray();
            for(var i = 0; i < itemArr.length; i++) {
                itemArr[i].rollback();
            }
            measurement.rollback();

            callback();
        });
    },

    saveMeasurement : function(measurement, callback) {
        callback = callback || function () {};

        measurement.get('measurementitems').then(function(items){
            var itemArr = items.toArray();
            var saveItems = [];
            for(var i = 0; i < itemArr.length; i++) {
                saveItems.push(itemArr[i].save());
            }

            Ember.RSVP.all(saveItems).then(function () {
                measurement.save().then(function () {
                    callback();
                });
            });
        });
    },

    saveMeasurementConfig : function(config, success, failure) {
        success = success || function () {};
        failure = failure || function () {};

        config.get('measurementitems').then(function(items){
            var itemArr = items.toArray();
            var saveItems = [];
            for(var i = 0; i < itemArr.length; i++) {
                saveItems.push(itemArr[i].save());
            }

            Ember.RSVP.all(saveItems).then(function () {
                config.save().then (success, failure);
            });
        });
    },

    copyMeasurementConfig : function(config, store, callback) {
        callback = callback || function () {};

        var newConfig = store.createRecord('measurementconfig', {type: config.get('type') + '_new'});

        config.get('measurementitems').then(function(items){
            var itemArr = items.toArray();
            var newItems = [];
            for(var i = 0; i < itemArr.length; i++) {
                var newItem = store.createRecord('measurementitemconfig', itemArr[i].toJSON());
                newItems.push(newItem);
            }

            async.forEach(newItems,
                function(newItem, done) {
                    newItem.save().then(function () {
                        done();
                    });
                },
                function done(){
                    newConfig.get('measurementitems').then(function(nitems) {
                        nitems.pushObjects(newItems);
                        newConfig.save().then( function() {
                            callback();
                        },
                        function(error) {
                            window.alert('Failed to save. Reason: ' + error.responseJSON.message);
                            App.Measurementhelper.deleteMeasurementConfig(newConfig);
                        }
                        );
                });
            });
        });

    },

    deleteMeasurementConfig : function(measurement, doSave, callback) {
        if (doSave === undefined || doSave === null) {
            doSave = true;
        }
        callback = callback || function () {};

        measurement.get('measurementitems').then(function(items){
            var itemArr = items.toArray();
            for(var i = 0; i < itemArr.length; i++) {
                var isItemNew = itemArr[i].get('isNew');
                itemArr[i].deleteRecord();
                if (doSave && !isItemNew) {
                    itemArr[i].save();
                }
            }
            var isNew = measurement.get('isNew');
            measurement.deleteRecord();
            if (doSave && !isNew) {
                measurement.save();
            }

            callback();
        });
    }
};
/**
 * Created by Karthik on 4/21/2014.
 */
App.OrderCustomerCommonHelper = {

    cancel : function(item, callback) {
        item.get('measurements').then(function (measurements) {
            var measurementsArr = measurements.toArray();
            async.forEach(measurementsArr, cancelMeasurement, cancelItem );
        });

        var cancelMeasurement = function (measurement, done) {
            if (measurement.get('isNew')) {
                item.get('measurements').removeObject(measurement);
                App.Measurementhelper.deleteMeasurement(measurement);
            }
            else {
                App.Measurementhelper.rollbackMeasurement(measurement);
            }
            done();
        };

        var cancelItem = function () {
            if (item.get('isNew')) {
                item.deleteRecord();
            }
            else {
                item.rollback();
            }
            if (callback) {
                callback();
            }
        };
    },
    delete : function(item, callback) {
        callback = callback || function () {};

        item.get('measurements').then(function (measurements) {
            var measurementsArr = measurements.toArray();
            async.forEach(measurementsArr, deleteMeasurement, deleteItem );
        });

        var deleteMeasurement = function (measurement, done) {
            App.Measurementhelper.deleteMeasurement(measurement, true, done);
        };

        var deleteItem = function () {
            var isNew = item.get('isNew');
            item.deleteRecord();
            if (!isNew) {
                item.save();
            }
            callback();
        };
    }

};

/**
 * Created by Karthik on 4/27/2014.
 */
Ember.Validations.validators.local.MeasurementValidator = Ember.Validations.validators.Base.extend({
    call: function () {
        var itemname = this.model.get('itemname');
        var measurementtype = this.model.get('parentController').get('model').get('type');
        var value = this.model.get(this.property);
        var self = this;

        App.MeasurementConfigServiceInstance.findMeasurementItemConfig(measurementtype, itemname, function(item) {
            if (item === undefined || item === null) return;
            if (value < item.get('min') || value > item.get('max')) {
                self.errors.pushObject("Value should be between [" + item.get('min') + "-" + item.get('max') + "]");
            }
        });
    }
});


App.Customer = DS.Model.extend({
    name: DS.attr('string'),
    phoneno: DS.attr('string'),
    emailid: DS.attr('string'),
    addressline1: DS.attr('string'),
    addressline2: DS.attr('string'),
    addressline3: DS.attr('string'),
    measurements: DS.hasMany('measurement', { async: true })
});

App.Customer.FIXTURES = [{
    id: 1,
    name: 'lavanya',
    phoneno: '9500037396',
    emailid: 'lavrajan@gmail.com',
    addressline1: '',
    addressline2: '',
    addressline3: '',
    measurements: [1,2]
}, {
    id: 2,
    name: 'ahana',
    phoneno: '96000373796',
    emailid: 'rajan@gmail.com',
    addressline1: '',
    addressline2: '',
    addressline3: '',
    measurements: [3,4]
}];

/**
 * Created by Karthik on 4/9/2014.
 */
App.Measurementconfig = DS.Model.extend({
    type: DS.attr('string'),
    measurementitems: DS.hasMany('measurementitemconfig', { async: true })
});

App.Measurementitemconfig = DS.Model.extend({
    itemname : DS.attr('string'),
    min : DS.attr('number'),
    max: DS.attr('number')
});

App.Measurementconfig.FIXTURES = [{
    id: 1,
    type: 'SK',
    measurementitems: [1,2]
    //customer: 1
}];

App.Measurementitemconfig.FIXTURES = [{
    id: 1,
    itemname: 'length',
    min: 0,
    max: 100
    //customer: 1
}, {
    id: 2,
    itemname: 'slit',
    min: 0,
    max: 100
}
];

App.Measurement = DS.Model.extend({
    type: DS.attr('string'),
    name: DS.attr('string'),
    measurementitems: DS.hasMany('measurementitem', { async: true }),
    additionalnote: DS.attr('string')
});

App.Measurementitem = DS.Model.extend({
    itemname : DS.attr('string'),
    itemvalue : DS.attr('number')
});


//App.Measurement.reopen()
App.Measurement.FIXTURES = [{
    id: 1,
    type: 'SK',
    name: 'main',
    measurementitems: [1,2],
    additionalnode: ''
    //customer: 1
}, {
    id: 2,
    type: 'BL',
    name: 'main',
    measurementitems: [1,2],
    additionalnode: ''
    //customer: 1
}, {
    id: 3,
    type: 'SK',
    name: 'kid',
    measurementitems: [1,2],
    additionalnode: ''
    //customer: 2
}, {
    id: 4,
    type: 'BL',
    name: 'kid',
    measurementitems: [1,2],
    additionalnode: ''
    //customer: 2
}];

App.Measurementitem.FIXTURES = [{}];
App.Order = DS.Model.extend({
    orderno: DS.attr('number'),
    orderdate: DS.attr('date'),
    customername: DS.attr('string'),
    customerphoneno: DS.attr('string'),
    customeremailid: DS.attr('string'),
    readydate: DS.attr('date'),
    duedate: DS.attr('date'),
    nopieces: DS.attr('number'),
    status: DS.attr('string'),
    additionalnote: DS.attr('string'),
    measurements: DS.hasMany('measurement', { async: true })
});

App.Order.FIXTURES = [{
    id: 1,
    orderno: 1,
    orderdate: new Date(),
    customername: 'lavanya',
    customerphoneno: '9500037396',
    customeremailid: '',
    duedate: new Date(),
    nopieces : 2,
    status: 'New',
    additionalnote: '',
    measurements: [3]
}];
App.Ordersummary = DS.Model.extend({
    duedate: DS.attr('date'),
    newcount: DS.attr('number'),
    inprogresscount: DS.attr('number'),
    donecount: DS.attr('number')
});



App.Ordersummary.FIXTURES  = [
    {
        id: 1,
        duedate: new Date(),
        newcount: 1,
        inprogresscount: 1,
        donecount: 1
    }
];

App.Task = DS.Model.extend({
    seqid: DS.attr('number'),
    taskname: DS.attr('string')
});



App.Task.FIXTURES = [
 {
     id: 1,
     seqid: 1,
     taskname: 't1'
 },
 {
     id: 2,
     seqid: 2,
     taskname: 't2'
 },
 {
     id: 3,
     seqid: 3,
     taskname: 't3'
 }
];


App.Router.map(function () {
    this.route('index', { path: '/' });
    this.route('about', { path: '/about' });

    this.resource('tasks', { path: 'tasks' }, function () {
        console.log('Inside tasks....');
        //this.route('new', { path: '/new' });	//url : tasks/new, template: tasks/new, Route: TasksNewRoute, Controller: TasksNewController
        //this.route('edit', { path: '/:task_id' });	//url : tasks/:task_id, template: tasks/edit, Route: TasksEditRoute, Controller: TasksEditController
        //automatically generated - //url: tasks/index, template; tasks/index, Route: TasksIndexRoute, Controller: TasksIndexController
    });

    this.resource('measurementconfigs', { path: 'measurementconfigs' }, function () {
        console.log('Inside measurementconfigs....');
        this.route('new', { path: '/new' });	//url : tasks/new, template: tasks/new, Route: TasksNewRoute, Controller: TasksNewController
        this.route('edit', { path: '/:config_id' });	//url : tasks/:task_id, template: tasks/edit, Route: TasksEditRoute, Controller: TasksEditController
        //automatically generated - //url: tasks/index, template; tasks/index, Route: TasksIndexRoute, Controller: TasksIndexController
    });

    this.resource('customers', { path: 'customers' }, function () {
        console.log('Inside customers....');
        this.route('new', { path: '/new' });
        this.route('edit', { path: '/:cust_id' });

        //this.resource('measurements', { path: 'measurements' }, function () {
        //    console.log('Inside measurements....');
        //    this.route('new', { path: '/new' });
        //    this.route('edit', { path: '/:measurement_id' });
        //});

    });

    this.resource('orders', { path: 'orders' }, function () {
        console.log('Inside orders....');
        this.route('new', { path: '/new' });
        this.route('edit', { path: '/:order_id' });
        this.route('print', { path: '/print/:order_id' });
    });

});


App.ApplicationRoute = Ember.Route.extend({
    init : function() {
        App.MeasurementConfigServiceInstance = App.MeasurementConfigService.create();
        App.MeasurementConfigServiceInstance.set('store', this.store);
    },
    actions: {
        openModal: function (modalName, model, originalModel, parentModel, isNew) {
            if (isNew !== undefined) {
                this.controllerFor(modalName).set('isNew', isNew);
            }

            this.controllerFor(modalName).set('model', model);

            if (parentModel) {
                this.controllerFor(modalName).set('parentModel', parentModel);
            }
            if (originalModel) {
                this.controllerFor(modalName).set('originalModel', originalModel);
            }

            return this.render(modalName, {
                into: 'application',
                outlet: 'modal',
                view: 'modal'
            });
        },

        closeModal: function () {
            return this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        }
    }
});
App.CustomersIndexRoute = Ember.Route.extend({

    model: function () {
        return this.store.find('customer');
    },

    renderTemplate: function () {
        this.render('customersindex', { into: 'application' });
    }
});

App.CustomersEditRoute = Ember.Route.extend({

    model : function(params) {
        return this.store.find('customer', params.cust_id);
    },

    setupController: function (controller, model) {
        this.controllerFor('customers.edit').setProperties({ isNew: false, model: model, editableMeasurement: null });
    },

    renderTemplate: function () {
        //this renders the template tasks.edit into application template's outlet
        this.render('customersedit', { into: 'application' });
    },

    actions: {
    error: function(error, transition) {
        // handle the error
        console.log(error.message);
    }
}
});

App.CustomersNewRoute = Ember.Route.extend({
    model: function () {
        return this.store.createRecord('customer');
    },

    setupController: function (controller, model) {
        this.controllerFor('customers.new').setProperties({ isNew: true, model: model, editableMeasurement: null });
    },

    renderTemplate: function () {
        //this renders the same template tasks.edit into application template's outlet
        // isNew property is used to determine if it is a new task or an existing task
        this.render('customersedit', { into: 'application' });
    }
});


App.MeasurementconfigsIndexRoute = Ember.Route.extend({

    model: function () {
        return this.store.find('measurementconfig');
    },

    renderTemplate: function () {
        //this renders the template tasks.index into application template's outlet
        this.render('measurementconfigsindex', { into: 'application' });
    }

});

App.MeasurementconfigsEditRoute = Ember.Route.extend({

    model: function (params) {
        //sets the content proerty in controller
        //return App.Task.find();
        return this.store.find('measurementconfig', params.config_id);
    },

    setupController: function (controller, m) {
        this.controllerFor('measurementconfigs.edit').setProperties({ isNew: false, model: m });
    },

    renderTemplate: function () {
        //this renders the template tasks.edit into application template's outlet
        this.render('measurementconfigsedit', { into: 'application' });
    }

});

App.MeasurementconfigsNewRoute = Ember.Route.extend({
    model: function () {
        //sets the content proerty in controller
        //return App.Task.find();
        return this.store.createRecord('measurementconfig');
    },

    setupController: function (controller, m) {
        this.controllerFor('measurementconfigs.edit').setProperties({ isNew: true, model: m });
    },

    renderTemplate: function () {
        //this renders the same template tasks.edit into application template's outlet
        // isNew property is used to determine if it is a new task or an existing task
        this.render('measurementconfigsedit', { into: 'application' });
    }

});


App.OrdersIndexRoute = Ember.Route.extend({

    model: function () {
        return this.store.find('order', {'status' : ['New','InProgress','Done']});
    },

    setupController: function (controller, model) {
        this.controllerFor('orders.index').setProperties({
            model: model, filterByStatusNew: true, filterByStatusInProgress: true,
            filterByStatusDone: true, filterByStatusDelivered: false, filterByDueDate: "0"
        });
    },

    renderTemplate: function () {
        this.render('ordersindex', { into: 'application' });
    }
});

App.OrdersEditRoute = Ember.Route.extend({

    model : function(params) {
        return this.store.find('order', params.order_id);
    },

    setupController: function (controller, model) {
        this.controllerFor('orders.edit').setProperties({ isNew: false, model: model, editableMeasurement: null, removedMeasurements: [] });
    },

    renderTemplate: function () {
        //this renders the template tasks.edit into application template's outlet
        this.render('ordersedit', { into: 'application' });
    },

    actions: {
    error: function(error, transition) {
        // handle the error
        console.log(error.message);
    }
}
});

App.OrdersNewRoute = Ember.Route.extend({
    model: function () {
        return this.store.createRecord('order', {
            status: 'New',
            orderdate: new Date(),
            duedate: new Date()
        });
    },

    setupController: function (controller, model) {
        this.controllerFor('orders.new').setProperties({ isNew: true, model: model, editableMeasurement: null, removedMeasurements: [] });
    },

    renderTemplate: function () {
        //this renders the same template tasks.edit into application template's outlet
        // isNew property is used to determine if it is a new task or an existing task
        this.render('ordersedit', { into: 'application' });
    }
});


App.OrdersPrintRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('order', params.order_id);
    },

    setupController: function (controller, model) {
        console.log('setting controller for print page');
        this.controllerFor('orders.print').setProperties({ model: model});
    },

    renderTemplate: function () {
        //this renders the template tasks.edit into application template's outlet
        this.render('ordersprint', { into: 'application' });
    },

    actions: {
        error: function (error, transition) {
            // handle the error
            console.log(error.message);
        }
    }
});

App.TasksIndexRoute = Ember.Route.extend({

    model: function () {
        return this.store.find('task');
    },

    renderTemplate: function () {
        //this renders the template tasks.index into application template's outlet
        this.render('tasksindex', { into: 'application' });
    }

});
//
//App.TasksEditRoute = Ember.Route.extend({
//
//    model: function (params) {
//        //sets the content proerty in controller
//        //return App.Task.find();
//        return this.store.find('task', params.task_id);
//    },
//
//    setupController: function (controller, m) {
//        this.controllerFor('tasks.edit').setProperties({ isNew: false, model: m });
//    },
//
//    renderTemplate: function () {
//        //this renders the template tasks.edit into application template's outlet
//        this.render('tasks.edit', { into: 'application' });
//    }
//
//});
//
//App.TasksNewRoute = Ember.Route.extend({
//    model: function () {
//        //sets the content proerty in controller
//        //return App.Task.find();
//        return this.store.createRecord('task');
//    },
//
//    setupController: function (controller, m) {
//        this.controllerFor('tasks.edit').setProperties({ isNew: true, model: m });
//    },
//
//    renderTemplate: function () {
//        //this renders the same template tasks.edit into application template's outlet
//        // isNew property is used to determine if it is a new task or an existing task
//        this.render('tasks.edit', { into: 'application' });
//    }
//
//});
//

App.MeasurementConfigService = Ember.Object.extend({
    store: null,

    createMeasurementItems :  function(measurementtype, callback) {
        callback = callback || function (items) { };
        var self = this;

        this.store.find('measurementconfig', {'type': measurementtype}).then (function (configs) {
            if (configs.get('length') > 0) {
                var config = configs.objectAt(0);

                config.get('measurementitems').then(function (measurementitems) {
                    var marr = measurementitems.toArray();
                    var len = marr.length;
                    var mitems = [];
                    for (var i = 0; i < len; i++) {
                        var newMeasurementitem = self.store.createRecord('measurementitem');
                        newMeasurementitem.set('itemname', marr[i].get('itemname'));
                        newMeasurementitem.set('itemvalue', marr[i].get('itemvalue'));
                        mitems.push(newMeasurementitem);
                    }
                    callback(mitems);
                });
            }
        });
    },

    findMeasurementItemConfig : function(measurementype, itemname, callback) {
        callback = callback || function (m) {};

        this.store.find('measurementconfig', {type: measurementype}).then(function(configs) {
            if (configs.get('length') > 0) {
                var config = configs.objectAt(0);

                config.get('measurementitems').then(function (measurementitems) {
                    var marr = measurementitems.toArray();
                    var len = marr.length;
                    var item = null;
                    for (var i = 0; i < len; i++) {
                        if (marr[i].get('itemname') === itemname) {
                            item = marr[i];
                            break;
                        }
                    }
                    callback(item);
                });
            }
        });
    },

    findMeasurementTypes : function(callback) {
        callback = callback || function (types) { };

        this.store.find('measurementconfig').then(function (configs) {
            var types = [];
            var configArr = configs.toArray();
            var len = configArr.length;
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    types.push(configArr[i].get('type'));
                }
                callback(types);
            }
        });
    }


});

App.MeasurementConfigServiceInstance = null;
App.StatusSummary = Ember.Object.extend({
    newcount: 0,
    inprogresscount: 0,
    donecount: 0
});

App.OrdersummaryService = Ember.Object.extend({
    store : null,

    totalnewcount: function(){
        return 0;
    }.property(),

    totalinprogresscount: function () {
        return 0;
    }.property(),

    totaldonecount: function () {
        return 0;
    }.property(),

    daywisesummary: function () {
        return null;
    }.property(),

    computesummary: function () {
        this.computecount();
        this.computedayandweekwisesummary();
    },

//    computedayandweekwisesummary: function (){
//
//        var daysummary = {};
//        var weeksummary = {};
//        var items = this.store.all('order');
//
//        var self = this;
//
//        items.forEach(function(item){
//            var daykey = daysummary[item.get('duedate')];
//            if (!daykey){
//                daykey = App.StatusSummary.create();
//                daysummary[item.get('duedate')] = daykey;
//            }
//
//            self.updatecounts(daykey,item);
//
//            var weekno = self.getweek(new Date(item.get('duedate')));
//            var weekkey = weeksummary[weekno];
//            if (!weekkey){
//                weekkey = App.StatusSummary.create();
//                weeksummary[weekno] = weekkey;
//            }
//
//            self.updatecounts(weekkey, item);
//        });
//
//        var daysummarytable = [];
//        var weeksummarytable = [];
//
//        for (var key in daysummary){
//            daysummarytable.push({
//                duedate: new Date(key),
//                newcount: daysummary[key].newcount,
//                inprogresscount: daysummary[key].inprogresscount,
//                donecount: daysummary[key].donecount
//            });
//        }
//        this.set('daywisesummary', daysummarytable);
//
//        for (var key in weeksummary){
//            weeksummarytable.push({
//                week: self.getWeekAsString(key),
//                newcount: weeksummary[key].newcount,
//                inprogresscount: weeksummary[key].inprogresscount,
//                donecount: weeksummary[key].donecount
//            });
//        }
//        this.set('weekwisesummary', weeksummarytable);
//    },

    computedayandweekwisesummary: function (){

        var daysummary = {};
        var weeksummary = {};

        var self = this;

        var items = this.store.filter('order', function(item){
            var daykey = daysummary[item.get('duedate').toDateString()];
            if (!daykey){
                daykey = App.StatusSummary.create();
                daysummary[item.get('duedate').toDateString()] = daykey;
            }

            self.updatecounts(daykey,item);

            var weekno = self.getweek(new Date(item.get('duedate')));
            var weekkey = weeksummary[weekno];
            if (!weekkey){
                weekkey = App.StatusSummary.create();
                weeksummary[weekno] = weekkey;
            }

            self.updatecounts(weekkey, item);
            return true;
        });

        var daysummarytable = [];
        var weeksummarytable = [];

        for (var key in daysummary){
            daysummarytable.push({
                duedate: new Date(key),
                newcount: daysummary[key].newcount,
                inprogresscount: daysummary[key].inprogresscount,
                donecount: daysummary[key].donecount
            });
        }
        daysummarytable.sort(function(a,b){
            return a.duedate > b.duedate;
        });
        this.set('daywisesummary', daysummarytable);

        for (var wk in weeksummary){
            weeksummarytable.push({
                week: self.getWeekAsString(wk),
                newcount: weeksummary[wk].newcount,
                inprogresscount: weeksummary[wk].inprogresscount,
                donecount: weeksummary[wk].donecount
            });
        }
        this.set('weekwisesummary', weeksummarytable);
    },

    getWeekAsString : function (week){
        var weekno = parseInt(week);
        if (weekno === 0){
            return 'This Week';
        }
        if (weekno < 0) {
            return 'Previous Week ' + (weekno * -1).toString();
        }
        return 'Week ' + weekno.toString();
    },


    updatecounts : function(key, item){
        if (item.get('status') === App.Consts.OrderState.New){
            key.set('newcount', key.get('newcount') + 1);
        }
        if (item.get('status') === App.Consts.OrderState.InProgress){
            key.set('inprogresscount', key.get('inprogresscount') + 1);
        }
        if (item.get('status') === App.Consts.OrderState.Done){
            key.set('donecount', key.get('donecount') + 1);
        }
    },

    getweek : function(date){
        var today = new Date();
        var daysleftthisweek = ((6 - today.getDay() + 1)%7) + 1;
        today.setDate(today.getDate() - (7-daysleftthisweek));
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);

        return this.weeksbetween(today, date);
    },

    weeksbetween : function( date1, date2 ) {
        //Get 1 day in milliseconds
        var one_week=1000*60*60*24*7;

        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();

        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;

        // Convert back to days and return
        return Math.floor(difference_ms/one_week);
    },

    computecount: function(){
        var self = this;
        var newitems = this.store.filter('order', function (item) {
            return item.get('status') === App.Consts.OrderState.New;
        });
        self.set('totalnewcount', newitems.get('length'));

        var inprogressitems = this.store.filter('order', function (item) {
            return item.get('status') === App.Consts.OrderState.InProgress;
        });
        self.set('totalinprogresscount', inprogressitems.get('length'));

        var doneitems = this.store.filter('order', function (item) {
            return item.get('status') === App.Consts.OrderState.Done;
        });
        self.set('totaldonecount', doneitems.get('length'));
    }
});

/**
 * Created by Karthik on 5/1/2014.
 */


App.DateField = Ember.TextField.extend({
    didInsertElement: function () {
        var that = this;
        return this.$().datepicker().on('changeDate', function () {
            that.$().trigger('change');
        });
    }
});

App.DatePicker = Ember.TextField.extend({
    classNames: ['date-picker'],
    textToDateTransform: (function (key, value) {
        var date, month, parts;
        if (arguments.length === 2) {
            if (value instanceof Date) {
                this.set('date', date);
                return this.close();
            } else if (value && /\d{2}-\d{2}-\d{2}/.test(value)) {
                parts = value.split('-');
                date = new Date();
                date.setDate(parts[0]);
                date.setMonth(parts[1] - 1);
                date.setYear(parts[2]);
                this.set('date', date);
                return this.close();
            } else {
                return this.set('date', null);
            }
        } else if (arguments.length === 1 && this.get('date')) {
            month = this.get('date').getMonth() + 1;
            date = this.get('date').getDate();
            if (month < 10) {
                month = "0" + month;
            }
            if (date < 10) {
                date = "0" + date;
            }
            return "%@-%@-%@".fmt(date, month, this.get('date').getFullYear());
        }
    }).property(),
    format: "dd-mm-yyyy",
    placeholder: Ember.computed.alias('format'),
    size: 8,
    valueBinding: "textToDateTransform",
    yesterday: (function () {
        var date;
        date = new Date();
        date.setDate(date.getDate() - 1);
        return date;
    }).property(),
    didInsertElement: function () {
        var _this = this;
        return this.$().datepicker({
            format: this.get('format'),
            autoclose: true,
            todayHighlight: true,
            keyboardNavigation: false
        }).on('changeDate', function (ev) {
            _this.set('date', ev.date);
            return _this.$().datepicker('setValue', ev.date);
        });
    },
    close: function () {
        return this.$().datepicker('hide');
    }
});


App.ModalView = Ember.View.extend({
    didInsertElement: function () {
        Ember.run.next(this, function () {
            this.$('.modal, .modal-backdrop').addClass('in');
        });
    },

    layoutName: 'modal_layout',
    actions: {
        close: function () {
            var view = this;
            // use one of: transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd
            // events so the handler is only fired once in your browser
            this.$('.modal, .modal-backdrop').one("transitionend", function (ev) {
                view.controller.send('close');
            });

            this.$('.modal').removeClass('in');
        }
    }
});

Ember.RadioButton = Ember.View.extend({
    tagName: "input",
    type: "radio",
    attributeBindings: ["name", "type", "value", "checked:checked:"],
    click: function () {
        this.set("selection", this.$().val());
    },
    checked: function () {
        return this.get("value") == this.get("selection");
    }.property()
});
App.TextFieldEx = Em.TextField.extend({
    focusOut: function () {
        this.sendAction('targetAction', this.get('value'));
    }
});