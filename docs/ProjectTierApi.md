# StellarDataStore.ProjectTierApi

All URIs are relative to *https://api.stellards.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ProjectTierCurrentGet**](ProjectTierApi.md#v1ProjectTierCurrentGet) | **GET** /v1/project-tier/current | 
[**v1ProjectTierGet**](ProjectTierApi.md#v1ProjectTierGet) | **GET** /v1/project-tier | 



## v1ProjectTierCurrentGet

> IServiceResult v1ProjectTierCurrentGet(project)



### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.ProjectTierApi();
let project = "project_example"; // String | 
apiInstance.v1ProjectTierCurrentGet(project, (error, data, response) => {
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
 **project** | **String**|  | 

### Return type

[**IServiceResult**](IServiceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1ProjectTierGet

> IServiceResult v1ProjectTierGet(project)



### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.ProjectTierApi();
let project = "project_example"; // String | 
apiInstance.v1ProjectTierGet(project, (error, data, response) => {
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
 **project** | **String**|  | 

### Return type

[**IServiceResult**](IServiceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

