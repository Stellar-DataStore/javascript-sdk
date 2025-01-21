# StellarDataStore.TableApi

All URIs are relative to *https://api.stellards.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SchemaTableDelete**](TableApi.md#v1SchemaTableDelete) | **DELETE** /v1/schema/table | Deletes a table from the database.
[**v1SchemaTableGet**](TableApi.md#v1SchemaTableGet) | **GET** /v1/schema/table | Gets table(s) from the logged in user.
[**v1SchemaTablePost**](TableApi.md#v1SchemaTablePost) | **POST** /v1/schema/table | Creates a new table in the database.
[**v1SchemaTablePut**](TableApi.md#v1SchemaTablePut) | **PUT** /v1/schema/table | Updates a table in the database.



## v1SchemaTableDelete

> v1SchemaTableDelete(project, table)

Deletes a table from the database.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.TableApi();
let project = "project_example"; // String | The project containing the table.
let table = 56; // Number | The table to be deleted.
apiInstance.v1SchemaTableDelete(project, table, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **String**| The project containing the table. | 
 **table** | **Number**| The table to be deleted. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1SchemaTableGet

> IServiceResult v1SchemaTableGet(project, opts)

Gets table(s) from the logged in user.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.TableApi();
let project = "project_example"; // String | The project containing the table.
let opts = {
  'table': "table_example" // String | name or id of the table to fetch (optional)
};
apiInstance.v1SchemaTableGet(project, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **String**| The project containing the table. | 
 **table** | **String**| name or id of the table to fetch (optional) | [optional] 

### Return type

[**IServiceResult**](IServiceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1SchemaTablePost

> AbstractObjectServiceResult v1SchemaTablePost(project, opts)

Creates a new table in the database.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.TableApi();
let project = "project_example"; // String | The project containing the table.
let opts = {
  'tableRequest': new StellarDataStore.TableRequest() // TableRequest | 
};
apiInstance.v1SchemaTablePost(project, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **String**| The project containing the table. | 
 **tableRequest** | [**TableRequest**](TableRequest.md)|  | [optional] 

### Return type

[**AbstractObjectServiceResult**](AbstractObjectServiceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## v1SchemaTablePut

> TableResponseIEnumerableServiceResult v1SchemaTablePut(project, opts)

Updates a table in the database.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.TableApi();
let project = "project_example"; // String | The project containing the table.
let opts = {
  'table': 56, // Number | The table to be updated.
  'tableRequest': new StellarDataStore.TableRequest() // TableRequest | 
};
apiInstance.v1SchemaTablePut(project, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **String**| The project containing the table. | 
 **table** | **Number**| The table to be updated. | [optional] 
 **tableRequest** | [**TableRequest**](TableRequest.md)|  | [optional] 

### Return type

[**TableResponseIEnumerableServiceResult**](TableResponseIEnumerableServiceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

