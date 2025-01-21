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
    instance = new StellarDataStore.ProjectTierApi();
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

  describe('ProjectTierApi', function() {
    describe('v1ProjectTierCurrentGet', function() {
      it('should call v1ProjectTierCurrentGet successfully', function(done) {
        //uncomment below and update the code to test v1ProjectTierCurrentGet
        //instance.v1ProjectTierCurrentGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1ProjectTierGet', function() {
      it('should call v1ProjectTierGet successfully', function(done) {
        //uncomment below and update the code to test v1ProjectTierGet
        //instance.v1ProjectTierGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
