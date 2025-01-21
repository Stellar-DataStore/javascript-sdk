# StellarDataStore.FieldApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SchemaTableFieldDelete**](FieldApi.md#v1SchemaTableFieldDelete) | **DELETE** /v1/schema/table/field | Deletes the given field within the given table.
[**v1SchemaTableFieldGet**](FieldApi.md#v1SchemaTableFieldGet) | **GET** /v1/schema/table/field | Gets field(s) from given table.
[**v1SchemaTableFieldPost**](FieldApi.md#v1SchemaTableFieldPost) | **POST** /v1/schema/table/field | Adds a field to the given table.
[**v1SchemaTableFieldPut**](FieldApi.md#v1SchemaTableFieldPut) | **PUT** /v1/schema/table/field | Updates the given field in the given table.



## v1SchemaTableFieldDelete

> v1SchemaTableFieldDelete(project, table, field)

Deletes the given field within the given table.

### Example

```javascript
import StellarDataStore from 'stellar_data_store';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.FieldApi();
let project = "project_example"; // String | The project containing the table.
let table = 56; // Number | The table containing the given field.
let field = 56; // Number | The field to be deleted
apiInstance.v1SchemaTableFieldDelete(project, table, field, (error, data, response) => {
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
 **table** | **Number**| The table containing the given field. | 
 **field** | **Number**| The field to be deleted | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1SchemaTableFieldGet

> IServiceResult v1SchemaTableFieldGet(project, table, opts)

Gets field(s) from given table.

### Example

```javascript
import StellarDataStore from 'stellar_data_store';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.FieldApi();
let project = "project_example"; // String | The project containing the table.
let table = 56; // Number | The table containing the fields.
let opts = {
  'field': 56 // Number | The optional field to get.
};
apiInstance.v1SchemaTableFieldGet(project, table, opts, (error, data, response) => {
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
 **table** | **Number**| The table containing the fields. | 
 **field** | **Number**| The optional field to get. | [optional] 

### Return type

[**IServiceResult**](IServiceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1SchemaTableFieldPost

> FieldResponseServiceResult v1SchemaTableFieldPost(project, table, opts)

Adds a field to the given table.

### Example

```javascript
import StellarDataStore from 'stellar_data_store';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.FieldApi();
let project = "project_example"; // String | The project containing the table.
let table = 56; // Number | The table to be added to.
let opts = {
  'fieldRequest': new StellarDataStore.FieldRequest() // FieldRequest | 
};
apiInstance.v1SchemaTableFieldPost(project, table, opts, (error, data, response) => {
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
 **table** | **Number**| The table to be added to. | 
 **fieldRequest** | [**FieldRequest**](FieldRequest.md)|  | [optional] 

### Return type

[**FieldResponseServiceResult**](FieldResponseServiceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## v1SchemaTableFieldPut

> FieldResponseServiceResult v1SchemaTableFieldPut(project, table, field, opts)

Updates the given field in the given table.

### Example

```javascript
import StellarDataStore from 'stellar_data_store';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.FieldApi();
let project = "project_example"; // String | The project containing the table.
let table = 56; // Number | The table containing the field.
let field = 56; // Number | The field to be updated.
let opts = {
  'fieldRequest': new StellarDataStore.FieldRequest() // FieldRequest | 
};
apiInstance.v1SchemaTableFieldPut(project, table, field, opts, (error, data, response) => {
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
 **table** | **Number**| The table containing the field. | 
 **field** | **Number**| The field to be updated. | 
 **fieldRequest** | [**FieldRequest**](FieldRequest.md)|  | [optional] 

### Return type

[**FieldResponseServiceResult**](FieldResponseServiceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

