# StellarDataStore.ProjectApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SchemaProjectGet**](ProjectApi.md#v1SchemaProjectGet) | **GET** /v1/schema/project | Gets project(s) from the logged in user.
[**v1SchemaProjectPut**](ProjectApi.md#v1SchemaProjectPut) | **PUT** /v1/schema/project | Updates a project.



## v1SchemaProjectGet

> IServiceResult v1SchemaProjectGet(opts)

Gets project(s) from the logged in user.

### Example

```javascript
import StellarDataStore from 'stellar_data_store';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.ProjectApi();
let opts = {
  'project': "project_example" // String | The optional project guid to be fetched.
};
apiInstance.v1SchemaProjectGet(opts, (error, data, response) => {
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
 **project** | **String**| The optional project guid to be fetched. | [optional] 

### Return type

[**IServiceResult**](IServiceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1SchemaProjectPut

> TableResponseIEnumerableServiceResult v1SchemaProjectPut(project, opts)

Updates a project.

### Example

```javascript
import StellarDataStore from 'stellar_data_store';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.ProjectApi();
let project = "project_example"; // String | The project to be updated.
let opts = {
  'projectRequest': new StellarDataStore.ProjectRequest() // ProjectRequest | 
};
apiInstance.v1SchemaProjectPut(project, opts, (error, data, response) => {
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
 **project** | **String**| The project to be updated. | 
 **projectRequest** | [**ProjectRequest**](ProjectRequest.md)|  | [optional] 

### Return type

[**TableResponseIEnumerableServiceResult**](TableResponseIEnumerableServiceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

