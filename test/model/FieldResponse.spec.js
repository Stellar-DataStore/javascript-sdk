/**
 * Stellar DataStore
 * The Stellar DataStore service is your instantly available, secure and worry-free cloud data storage service. Sign-up now and minutes later, you can start putting your data in the cloud.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StellarDataStore);
  }
}(this, function(expect, StellarDataStore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new StellarDataStore.FieldResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FieldResponse', function() {
    it('should create an instance of FieldResponse', function() {
      // uncomment below and update the code to test FieldResponse
      //var instance = new StellarDataStore.FieldResponse();
      //expect(instance).to.be.a(StellarDataStore.FieldResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new StellarDataStore.FieldResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new StellarDataStore.FieldResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new StellarDataStore.FieldResponse();
      //expect(instance).to.be();
    });

  });

}));
