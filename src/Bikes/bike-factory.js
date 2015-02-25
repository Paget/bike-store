app.factory('Bike', function () {
  // And we return our constructor function.
  return Bike;

  // Here, we define our Bike constructor
  function Bike (spec) {
    spec = spec || {};

    var self = {
      promo: spec.promo,

      lineItems: spec.lineItems || [LineItem()],

      get total () {
        return self.lineItems.reduce(function (total, item) {
          return total + item.cost;
        }, 0);
      },

      addLineItem: function (description, cost) {
        self.lineItems.push(LineItem({
          description: description,
          cost: cost
        }));
      },

      deleteLineItem: function (item) {
        var index = self.lineItems.indexOf(item);

        if (index >= 0) {
          self.lineItems.splice(index, 1);
        }

        // Don't allow 0 line items
        if (!self.lineItems.length) {
          self.lineItems.push(LineItem());
        }
      }
    };

    return self;
  }

  // The LineItem class represents a single line item in
  // a promo
  function LineItem (spec) {
    spec = spec || {};

    return {
      description: spec.description,
      cost: spec.cost
    };
  }

});
