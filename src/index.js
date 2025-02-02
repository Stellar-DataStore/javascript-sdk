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


import ApiClient from './ApiClient';
import AbstractObjectQueryResult from './model/AbstractObjectQueryResult';
import AbstractObjectServiceResult from './model/AbstractObjectServiceResult';
import CreateRecordRequest from './model/CreateRecordRequest';
import FieldRequest from './model/FieldRequest';
import FieldResponse from './model/FieldResponse';
import FieldResponseServiceResult from './model/FieldResponseServiceResult';
import IServiceResult from './model/IServiceResult';
import ProjectRequest from './model/ProjectRequest';
import RevokeTokenRequest from './model/RevokeTokenRequest';
import ServiceMessage from './model/ServiceMessage';
import ServiceMessageType from './model/ServiceMessageType';
import ServiceResult from './model/ServiceResult';
import Stream from './model/Stream';
import TableRequest from './model/TableRequest';
import TableResponse from './model/TableResponse';
import TableResponseIEnumerableServiceResult from './model/TableResponseIEnumerableServiceResult';
import TokenResponse from './model/TokenResponse';
import UpdateRecordRequest from './model/UpdateRecordRequest';
import DataApi from './api/DataApi';
import FieldApi from './api/FieldApi';
import OAuthApi from './api/OAuthApi';
import ProjectApi from './api/ProjectApi';
import ProjectTierApi from './api/ProjectTierApi';
import TableApi from './api/TableApi';
import TestApi from './api/TestApi';
import UserApi from './api/UserApi';


/**
* The Stellar DataStore service is your instantly available, secure and worry-free cloud data storage service. Sign-up now and minutes later, you can start putting your data in the cloud..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var StellarDataStore = require('index'); // See note below*.
* var xxxSvc = new StellarDataStore.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new StellarDataStore.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new StellarDataStore.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new StellarDataStore.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AbstractObjectQueryResult model constructor.
     * @property {module:model/AbstractObjectQueryResult}
     */
    AbstractObjectQueryResult,

    /**
     * The AbstractObjectServiceResult model constructor.
     * @property {module:model/AbstractObjectServiceResult}
     */
    AbstractObjectServiceResult,

    /**
     * The CreateRecordRequest model constructor.
     * @property {module:model/CreateRecordRequest}
     */
    CreateRecordRequest,

    /**
     * The FieldRequest model constructor.
     * @property {module:model/FieldRequest}
     */
    FieldRequest,

    /**
     * The FieldResponse model constructor.
     * @property {module:model/FieldResponse}
     */
    FieldResponse,

    /**
     * The FieldResponseServiceResult model constructor.
     * @property {module:model/FieldResponseServiceResult}
     */
    FieldResponseServiceResult,

    /**
     * The IServiceResult model constructor.
     * @property {module:model/IServiceResult}
     */
    IServiceResult,

    /**
     * The ProjectRequest model constructor.
     * @property {module:model/ProjectRequest}
     */
    ProjectRequest,

    /**
     * The RevokeTokenRequest model constructor.
     * @property {module:model/RevokeTokenRequest}
     */
    RevokeTokenRequest,

    /**
     * The ServiceMessage model constructor.
     * @property {module:model/ServiceMessage}
     */
    ServiceMessage,

    /**
     * The ServiceMessageType model constructor.
     * @property {module:model/ServiceMessageType}
     */
    ServiceMessageType,

    /**
     * The ServiceResult model constructor.
     * @property {module:model/ServiceResult}
     */
    ServiceResult,

    /**
     * The Stream model constructor.
     * @property {module:model/Stream}
     */
    Stream,

    /**
     * The TableRequest model constructor.
     * @property {module:model/TableRequest}
     */
    TableRequest,

    /**
     * The TableResponse model constructor.
     * @property {module:model/TableResponse}
     */
    TableResponse,

    /**
     * The TableResponseIEnumerableServiceResult model constructor.
     * @property {module:model/TableResponseIEnumerableServiceResult}
     */
    TableResponseIEnumerableServiceResult,

    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse,

    /**
     * The UpdateRecordRequest model constructor.
     * @property {module:model/UpdateRecordRequest}
     */
    UpdateRecordRequest,

    /**
    * The DataApi service constructor.
    * @property {module:api/DataApi}
    */
    DataApi,

    /**
    * The FieldApi service constructor.
    * @property {module:api/FieldApi}
    */
    FieldApi,

    /**
    * The OAuthApi service constructor.
    * @property {module:api/OAuthApi}
    */
    OAuthApi,

    /**
    * The ProjectApi service constructor.
    * @property {module:api/ProjectApi}
    */
    ProjectApi,

    /**
    * The ProjectTierApi service constructor.
    * @property {module:api/ProjectTierApi}
    */
    ProjectTierApi,

    /**
    * The TableApi service constructor.
    * @property {module:api/TableApi}
    */
    TableApi,

    /**
    * The TestApi service constructor.
    * @property {module:api/TestApi}
    */
    TestApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
