# StellarDataStore.OAuthApi

All URIs are relative to *https://api.stellards.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OauthRevokePost**](OAuthApi.md#v1OauthRevokePost) | **POST** /v1/oauth/revoke | 
[**v1OauthTokenPost**](OAuthApi.md#v1OauthTokenPost) | **POST** /v1/oauth/token | 



## v1OauthRevokePost

> v1OauthRevokePost(revokeTokenRequest)



### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.OAuthApi();
let revokeTokenRequest = new StellarDataStore.RevokeTokenRequest(); // RevokeTokenRequest | 
apiInstance.v1OauthRevokePost(revokeTokenRequest, (error, data, response) => {
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
 **revokeTokenRequest** | [**RevokeTokenRequest**](RevokeTokenRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## v1OauthTokenPost

> TokenResponse v1OauthTokenPost(grantType, clientId, clientSecret, opts)



### Example

```javascript
import StellarDataStore from 'stellards-js-sdk';
let defaultClient = StellarDataStore.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new StellarDataStore.OAuthApi();
let grantType = "grantType_example"; // String | 
let clientId = "clientId_example"; // String | 
let clientSecret = "clientSecret_example"; // String | 
let opts = {
  'redirectUri': "''", // String | 
  'code': "''", // String | 
  'refreshToken': "''" // String | 
};
apiInstance.v1OauthTokenPost(grantType, clientId, clientSecret, opts, (error, data, response) => {
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
 **grantType** | **String**|  | 
 **clientId** | **String**|  | 
 **clientSecret** | **String**|  | 
 **redirectUri** | **String**|  | [optional] [default to &#39;&#39;]
 **code** | **String**|  | [optional] [default to &#39;&#39;]
 **refreshToken** | **String**|  | [optional] [default to &#39;&#39;]

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

