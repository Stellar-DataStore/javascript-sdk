# StellarDataStore.DataApi

All URIs are relative to *https://api.stellards.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1DataTableBlobGet**](DataApi.md#v1DataTableBlobGet) | **GET** /v1/data/table/blob | Download a file from a blob field as a stream.
[**v1DataTableBlobPost**](DataApi.md#v1DataTableBlobPost) | **POST** /v1/data/table/blob | Upload a file to a blob field.
[**v1DataTableClearDelete**](DataApi.md#v1DataTableClearDelete) | **DELETE** /v1/data/table/clear | Deletes all records from the given table.
[**v1DataTableDelete**](DataApi.md#v1DataTableDelete) | **DELETE** /v1/data/table | Deletes records from the given table.
[**v1DataTableDeletePost**](DataApi.md#v1DataTableDeletePost) | **POST** /v1/data/table/delete | Deletes records from the given table.
[**v1DataTableGet**](DataApi.md#v1DataTableGet) | **GET** /v1/data/table | Gets the records for a given table.
[**v1DataTablePost**](DataApi.md#v1DataTablePost) | **POST** /v1/data/table | Adds records to the given table.
[**v1DataTablePut**](DataApi.md#v1DataTablePut) | **PUT** /v1/data/table | Updates records in the given table based on the values in record.



## v1DataTableBlobGet

> Stream v1DataTableBlobGet(project, table, record, field)

Download a file from a blob field as a stream.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.DataApi();
let project = "project_example"; // String | The project containing the table.
let table = 789; // Number | The table containing the records.
let record = 789; // Number | The record to be queried.
let field = "field_example"; // String | The field of the record.
apiInstance.v1DataTableBlobGet(project, table, record, field, (error, data, response) => {
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
 **table** | **Number**| The table containing the records. | 
 **record** | **Number**| The record to be queried. | 
 **field** | **String**| The field of the record. | 

### Return type

[**Stream**](Stream.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DataTableBlobPost

> Stream v1DataTableBlobPost(project, table, record, field, opts)

Upload a file to a blob field.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.DataApi();
let project = "project_example"; // String | The project containing the table.
let table = 789; // Number | The table containing the records.
let record = 789; // Number | The record to be queried.
let field = "field_example"; // String | The field of the record.
let opts = {
  'data': "/path/to/file" // File | 
};
apiInstance.v1DataTableBlobPost(project, table, record, field, opts, (error, data, response) => {
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
 **table** | **Number**| The table containing the records. | 
 **record** | **Number**| The record to be queried. | 
 **field** | **String**| The field of the record. | 
 **data** | **File**|  | [optional] 

### Return type

[**Stream**](Stream.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## v1DataTableClearDelete

> v1DataTableClearDelete(project, table)

Deletes all records from the given table.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.DataApi();
let project = "project_example"; // String | The project containing the table.
let table = 789; // Number | The table to delete from.
apiInstance.v1DataTableClearDelete(project, table, (error, data, response) => {
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
 **table** | **Number**| The table to delete from. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DataTableDelete

> v1DataTableDelete(project, table, opts)

Deletes records from the given table.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.DataApi();
let project = "project_example"; // String | The project containing the table.
let table = 789; // Number | Id of table where you want to delete a record.
let opts = {
  'record': 56 // Number | record id to delete.
};
apiInstance.v1DataTableDelete(project, table, opts, (error, data, response) => {
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
 **table** | **Number**| Id of table where you want to delete a record. | 
 **record** | **Number**| record id to delete. | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DataTableDeletePost

> v1DataTableDeletePost(project, table, opts)

Deletes records from the given table.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.DataApi();
let project = "project_example"; // String | The project containing the table.
let table = 56; // Number | The table to delete from.
let opts = {
  'requestBody': ["null"] // [String] | An array of ids
};
apiInstance.v1DataTableDeletePost(project, table, opts, (error, data, response) => {
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
 **table** | **Number**| The table to delete from. | 
 **requestBody** | [**[String]**](String.md)| An array of ids | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## v1DataTableGet

> AbstractObjectQueryResult v1DataTableGet(project, table, opts)

Gets the records for a given table.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.DataApi();
let project = "project_example"; // String | The project containing the table.
let table = 789; // Number | Id of the table containing the records.
let opts = {
  'offset': 789, // Number | The offset of the records.
  'take': 789, // Number | The amount of records.
  'joinQuery': "joinQuery_example", // String | The join queries to apply.
  'whereQuery': "whereQuery_example", // String | The where queries to apply.
  'sortQuery': "sortQuery_example", // String | The sort queries to apply.
  'distinct': false, // Boolean | 
  'select': "select_example" // String | 
};
apiInstance.v1DataTableGet(project, table, opts, (error, data, response) => {
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
 **table** | **Number**| Id of the table containing the records. | 
 **offset** | **Number**| The offset of the records. | [optional] 
 **take** | **Number**| The amount of records. | [optional] 
 **joinQuery** | **String**| The join queries to apply. | [optional] 
 **whereQuery** | **String**| The where queries to apply. | [optional] 
 **sortQuery** | **String**| The sort queries to apply. | [optional] 
 **distinct** | **Boolean**|  | [optional] [default to false]
 **select** | **String**|  | [optional] 

### Return type

[**AbstractObjectQueryResult**](AbstractObjectQueryResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DataTablePost

> AbstractObjectQueryResult v1DataTablePost(project, table, opts)

Adds records to the given table.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.DataApi();
let project = "project_example"; // String | The project containing the table.
let table = 789; // Number | The table to be added to.
let opts = {
  'createRecordRequest': new StellarDataStore.CreateRecordRequest() // CreateRecordRequest | 
};
apiInstance.v1DataTablePost(project, table, opts, (error, data, response) => {
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
 **createRecordRequest** | [**CreateRecordRequest**](CreateRecordRequest.md)|  | [optional] 

### Return type

[**AbstractObjectQueryResult**](AbstractObjectQueryResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## v1DataTablePut

> AbstractObjectQueryResult v1DataTablePut(project, table, opts)

Updates records in the given table based on the values in record.

### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.DataApi();
let project = "project_example"; // String | The project containing the table.
let table = 789; // Number | The table to be updated in.
let opts = {
  'force': false, // Boolean | If you are certain you want to update all your records in case no ids were included.
  'updateRecordRequest': new StellarDataStore.UpdateRecordRequest() // UpdateRecordRequest | 
};
apiInstance.v1DataTablePut(project, table, opts, (error, data, response) => {
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
 **table** | **Number**| The table to be updated in. | 
 **force** | **Boolean**| If you are certain you want to update all your records in case no ids were included. | [optional] [default to false]
 **updateRecordRequest** | [**UpdateRecordRequest**](UpdateRecordRequest.md)|  | [optional] 

### Return type

[**AbstractObjectQueryResult**](AbstractObjectQueryResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json

