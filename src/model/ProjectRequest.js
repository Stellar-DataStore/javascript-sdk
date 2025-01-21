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

import ApiClient from '../ApiClient';

/**
 * The ProjectRequest model module.
 * @module model/ProjectRequest
 * @version v1
 */
class ProjectRequest {
    /**
     * Constructs a new <code>ProjectRequest</code>.
     * @alias module:model/ProjectRequest
     * @param name {String} 
     * @param isMultitenant {Boolean} 
     * @param allowNewUsers {Boolean} 
     */
    constructor(name, isMultitenant, allowNewUsers) { 
        
        ProjectRequest.initialize(this, name, isMultitenant, allowNewUsers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, isMultitenant, allowNewUsers) { 
        obj['name'] = name;
        obj['isMultitenant'] = isMultitenant;
        obj['allowNewUsers'] = allowNewUsers;
    }

    /**
     * Constructs a <code>ProjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectRequest} obj Optional instance to populate.
     * @return {module:model/ProjectRequest} The populated <code>ProjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('isMultitenant')) {
                obj['isMultitenant'] = ApiClient.convertToType(data['isMultitenant'], 'Boolean');
            }
            if (data.hasOwnProperty('allowNewUsers')) {
                obj['allowNewUsers'] = ApiClient.convertToType(data['allowNewUsers'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProjectRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProjectRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

ProjectRequest.RequiredProperties = ["name", "isMultitenant", "allowNewUsers"];

/**
 * @member {String} name
 */
ProjectRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ProjectRequest.prototype['description'] = undefined;

/**
 * @member {Boolean} isMultitenant
 */
ProjectRequest.prototype['isMultitenant'] = undefined;

/**
 * @member {Boolean} allowNewUsers
 */
ProjectRequest.prototype['allowNewUsers'] = undefined;






export default ProjectRequest;

