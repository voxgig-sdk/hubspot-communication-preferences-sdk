# HubspotCommunicationPreferences Golang SDK



The Golang SDK for the HubspotCommunicationPreferences API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.SubscriptionsActionResponseWithResultsPublicStatus(nil)` — each with the same small set of operations (`List`, `Load`, `Create`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/hubspot-communication-preferences-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go=../hubspot-communication-preferences-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go"
)

func main() {
    client := sdk.NewHubspotCommunicationPreferencesSDK(map[string]any{
        "apikey": os.Getenv("HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY"),
    })

    // Load a single subscriptionsActionResponseWithResultsPublicStatus — the value is the loaded record.
    subscriptionsActionResponseWithResultsPublicStatus, err := client.SubscriptionsActionResponseWithResultsPublicStatus(nil).Load(map[string]any{"id": "example_id", "channel": "example_channel"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(subscriptionsActionResponseWithResultsPublicStatus)

    // Create a subscriptionsActionResponseWithResultsPublicStatus.
    created, err := client.SubscriptionsActionResponseWithResultsPublicStatus(nil).Create(map[string]any{"id": "example_id", "channel": "example_channel", "completedAt": "example_completedAt", "results": []any{}, "startedAt": "example_startedAt", "status": "example_status", "statusState": "example_statusState", "subscriptionId": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
subscriptionsactionresponsewithresultspublicwidestatuss, err := client.SubscriptionsActionResponseWithResultsPublicWideStatus(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = subscriptionsactionresponsewithresultspublicwidestatuss
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

subscriptionsActionResponseWithResultsPublicWideStatus, err := client.SubscriptionsActionResponseWithResultsPublicWideStatus(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionsActionResponseWithResultsPublicWideStatus) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewHubspotCommunicationPreferencesSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE=TRUE
HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewHubspotCommunicationPreferencesSDK

```go
func NewHubspotCommunicationPreferencesSDK(options map[string]any) *HubspotCommunicationPreferencesSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotCommunicationPreferencesSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotCommunicationPreferencesSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `SubscriptionsActionResponseWithResultsPublicStatus` | `(data map[string]any) HubspotCommunicationPreferencesEntity` | Create a SubscriptionsActionResponseWithResultsPublicStatus entity instance. |
| `SubscriptionsActionResponseWithResultsPublicWideStatus` | `(data map[string]any) HubspotCommunicationPreferencesEntity` | Create a SubscriptionsActionResponseWithResultsPublicWideStatus entity instance. |
| `SubscriptionsActionResponseWithResultsSubscriptionDefinition` | `(data map[string]any) HubspotCommunicationPreferencesEntity` | Create a SubscriptionsActionResponseWithResultsSubscriptionDefinition entity instance. |
| `SubscriptionsBatchResponsePublicBulkOptOutFromAll` | `(data map[string]any) HubspotCommunicationPreferencesEntity` | Create a SubscriptionsBatchResponsePublicBulkOptOutFromAll entity instance. |
| `SubscriptionsBatchResponsePublicStatus` | `(data map[string]any) HubspotCommunicationPreferencesEntity` | Create a SubscriptionsBatchResponsePublicStatus entity instance. |
| `SubscriptionsBatchResponsePublicStatusBulk` | `(data map[string]any) HubspotCommunicationPreferencesEntity` | Create a SubscriptionsBatchResponsePublicStatusBulk entity instance. |
| `SubscriptionsBatchResponsePublicWideStatusBulk` | `(data map[string]any) HubspotCommunicationPreferencesEntity` | Create a SubscriptionsBatchResponsePublicWideStatusBulk entity instance. |
| `SubscriptionsLinkGeneration` | `(data map[string]any) HubspotCommunicationPreferencesEntity` | Create a SubscriptionsLinkGeneration entity instance. |

### Entity interface (HubspotCommunicationPreferencesEntity)

All entities implement the `HubspotCommunicationPreferencesEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    subscriptionsActionResponseWithResultsPublicStatus, err := client.SubscriptionsActionResponseWithResultsPublicStatus(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // subscriptionsActionResponseWithResultsPublicStatus is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### SubscriptionsActionResponseWithResultsPublicStatus

| Field | Description |
| --- | --- |
| `"channel"` | The type of communication channel, with 'EMAIL' as the only supported option. |
| `"completedAt"` | The date and time when the operation was completed. |
| `"errors"` | A list of errors that occurred during the operation. |
| `"id"` |  |
| `"legalBasis"` | The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'. |
| `"legalBasisExplanation"` | An explanation for the legal basis used for communication. |
| `"links"` | Contains URLs related to the response, such as documentation or resources. |
| `"numErrors"` | The number of errors that occurred during the operation. |
| `"requestedAt"` | The date and time when the request was made. |
| `"results"` | An array of results from the operation. |
| `"startedAt"` | The date and time when the operation started. |
| `"status"` | Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |
| `"statusState"` | The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'. |
| `"subscriptionId"` | The unique identifier of the subscription to be updated. |

Operations: Create, Load.

API path: `/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all`

#### SubscriptionsActionResponseWithResultsPublicWideStatus

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the operation was completed. |
| `"errors"` | An array of error objects detailing any issues encountered during the operation. |
| `"links"` | An object containing related links, where each key is a link name and each value is a URL. |
| `"numErrors"` | The number of errors encountered during the operation. |
| `"requestedAt"` | The date and time when the request was made. |
| `"results"` | An array containing the results of the operation. |
| `"startedAt"` | The date and time when the operation started. |
| `"status"` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

Operations: List.

API path: `/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all`

#### SubscriptionsActionResponseWithResultsSubscriptionDefinition

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the operation was completed. |
| `"errors"` | An array of errors that occurred during the operation. |
| `"links"` | A collection of related links associated with the operation. |
| `"numErrors"` | The number of errors encountered during the operation. |
| `"requestedAt"` | The date and time when the operation was requested. |
| `"results"` | An array containing the results of the operation. |
| `"startedAt"` | The date and time when the operation started. |
| `"status"` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

Operations: List.

API path: `/communication-preferences/2026-09/definitions`

#### SubscriptionsBatchResponsePublicBulkOptOutFromAll

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the bulk opt-out operation was completed. |
| `"errors"` | An array of error objects detailing any issues encountered during the bulk opt-out operation. |
| `"inputs"` | A list of strings representing the inputs for batch operations. |
| `"links"` | A collection of URLs linking to related resources or documentation. |
| `"numErrors"` | The total number of errors encountered during the bulk opt-out operation. |
| `"requestedAt"` | The date and time when the bulk opt-out request was made. |
| `"results"` | An array containing the results of the bulk opt-out from all communications operation. |
| `"startedAt"` | The date and time when the bulk opt-out operation began. |
| `"status"` | The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

Operations: Create.

API path: `/communication-preferences/2026-09/statuses/batch/unsubscribe-all`

#### SubscriptionsBatchResponsePublicStatus

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch operation was completed. |
| `"errors"` | An array of error objects detailing any issues encountered. |
| `"inputs"` | An array of PublicStatusRequest objects, each representing a subscription status update request. |
| `"links"` | URLs linking to related resources or documentation. |
| `"numErrors"` | The number of errors encountered during the batch operation. |
| `"requestedAt"` | The date and time when the request was made. |
| `"results"` | An array containing the results of the batch operation. |
| `"startedAt"` | The date and time when the batch operation started. |
| `"status"` | The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

Operations: Create.

API path: `/communication-preferences/2026-09/statuses/batch/write`

#### SubscriptionsBatchResponsePublicStatusBulk

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch process was completed. |
| `"inputs"` | A list of strings representing the inputs for batch operations. |
| `"links"` | A collection of related links associated with the batch response. |
| `"requestedAt"` | The date and time when the batch request was made. |
| `"results"` | The array of results from the batch process, each containing subscription status information. |
| `"startedAt"` | The date and time when the batch process began. |
| `"status"` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

Operations: Create.

API path: `/communication-preferences/2026-09/statuses/batch/read`

#### SubscriptionsBatchResponsePublicWideStatusBulk

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch process was completed. |
| `"inputs"` | A list of strings representing the inputs for batch operations. |
| `"links"` | A collection of related links associated with the batch response. |
| `"requestedAt"` | The date and time when the batch request was made. |
| `"results"` | The array of results from the batch process, each containing subscription status information. |
| `"startedAt"` | The date and time when the batch process began. |
| `"status"` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

Operations: Create.

API path: `/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read`

#### SubscriptionsLinkGeneration

| Field | Description |
| --- | --- |
| `"language"` | The language in which the generated link should be presented, represented as a string. |
| `"managePreferencesUrl"` | The URL where the subscriber can manage their communication preferences. |
| `"subscriberIdString"` | A string representing the unique identifier of the subscriber. |
| `"subscriptionId"` | The unique identifier for the subscription, represented as an integer in int64 format. |
| `"unsubscribeAllUrl"` | A string containing the URL for unsubscribing the subscriber from all communications. |
| `"unsubscribeSingleUrl"` | A string containing the URL to unsubscribe the subscriber from a single communication. |

Operations: Create.

API path: `/communication-preferences/2026-09/links/generate`



## Entities


### SubscriptionsActionResponseWithResultsPublicStatus

Create an instance: `subscriptionsActionResponseWithResultsPublicStatus := client.SubscriptionsActionResponseWithResultsPublicStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `string` | The type of communication channel, with 'EMAIL' as the only supported option. |
| `completedAt` | `string` | The date and time when the operation was completed. |
| `errors` | `[]any` | A list of errors that occurred during the operation. |
| `id` | `string` |  |
| `legalBasis` | `string` | The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'. |
| `legalBasisExplanation` | `string` | An explanation for the legal basis used for communication. |
| `links` | `map[string]any` | Contains URLs related to the response, such as documentation or resources. |
| `numErrors` | `int` | The number of errors that occurred during the operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `[]any` | An array of results from the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |
| `statusState` | `string` | The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'. |
| `subscriptionId` | `int` | The unique identifier of the subscription to be updated. |

#### Example: Load

```go
subscriptionsActionResponseWithResultsPublicStatus, err := client.SubscriptionsActionResponseWithResultsPublicStatus(nil).Load(map[string]any{"id": "subscriptions_action_response_with_results_public_status_id", "channel": "channel"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionsActionResponseWithResultsPublicStatus) // the loaded record
```

#### Example: Create

```go
result, err := client.SubscriptionsActionResponseWithResultsPublicStatus(nil).Create(map[string]any{
    "id": "example_id",
    "channel": "example_channel",
    "completedAt": "example_completedAt",
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
    "statusState": "example_statusState",
    "subscriptionId": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionsActionResponseWithResultsPublicWideStatus

Create an instance: `subscriptionsActionResponseWithResultsPublicWideStatus := client.SubscriptionsActionResponseWithResultsPublicWideStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the operation was completed. |
| `errors` | `[]any` | An array of error objects detailing any issues encountered during the operation. |
| `links` | `map[string]any` | An object containing related links, where each key is a link name and each value is a URL. |
| `numErrors` | `int` | The number of errors encountered during the operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `[]any` | An array containing the results of the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: List

```go
subscriptionsActionResponseWithResultsPublicWideStatuss, err := client.SubscriptionsActionResponseWithResultsPublicWideStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionsActionResponseWithResultsPublicWideStatuss) // the array of records
```


### SubscriptionsActionResponseWithResultsSubscriptionDefinition

Create an instance: `subscriptionsActionResponseWithResultsSubscriptionDefinition := client.SubscriptionsActionResponseWithResultsSubscriptionDefinition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the operation was completed. |
| `errors` | `[]any` | An array of errors that occurred during the operation. |
| `links` | `map[string]any` | A collection of related links associated with the operation. |
| `numErrors` | `int` | The number of errors encountered during the operation. |
| `requestedAt` | `string` | The date and time when the operation was requested. |
| `results` | `[]any` | An array containing the results of the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: List

```go
subscriptionsActionResponseWithResultsSubscriptionDefinitions, err := client.SubscriptionsActionResponseWithResultsSubscriptionDefinition(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionsActionResponseWithResultsSubscriptionDefinitions) // the array of records
```


### SubscriptionsBatchResponsePublicBulkOptOutFromAll

Create an instance: `subscriptionsBatchResponsePublicBulkOptOutFromAll := client.SubscriptionsBatchResponsePublicBulkOptOutFromAll(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the bulk opt-out operation was completed. |
| `errors` | `[]any` | An array of error objects detailing any issues encountered during the bulk opt-out operation. |
| `inputs` | `[]any` | A list of strings representing the inputs for batch operations. |
| `links` | `map[string]any` | A collection of URLs linking to related resources or documentation. |
| `numErrors` | `int` | The total number of errors encountered during the bulk opt-out operation. |
| `requestedAt` | `string` | The date and time when the bulk opt-out request was made. |
| `results` | `[]any` | An array containing the results of the bulk opt-out from all communications operation. |
| `startedAt` | `string` | The date and time when the bulk opt-out operation began. |
| `status` | `string` | The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: Create

```go
result, err := client.SubscriptionsBatchResponsePublicBulkOptOutFromAll(nil).Create(map[string]any{
    "channel": "example_channel",
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionsBatchResponsePublicStatus

Create an instance: `subscriptionsBatchResponsePublicStatus := client.SubscriptionsBatchResponsePublicStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed. |
| `errors` | `[]any` | An array of error objects detailing any issues encountered. |
| `inputs` | `[]any` | An array of PublicStatusRequest objects, each representing a subscription status update request. |
| `links` | `map[string]any` | URLs linking to related resources or documentation. |
| `numErrors` | `int` | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `[]any` | An array containing the results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started. |
| `status` | `string` | The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: Create

```go
result, err := client.SubscriptionsBatchResponsePublicStatus(nil).Create(map[string]any{
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionsBatchResponsePublicStatusBulk

Create an instance: `subscriptionsBatchResponsePublicStatusBulk := client.SubscriptionsBatchResponsePublicStatusBulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed. |
| `inputs` | `[]any` | A list of strings representing the inputs for batch operations. |
| `links` | `map[string]any` | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | The date and time when the batch request was made. |
| `results` | `[]any` | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | The date and time when the batch process began. |
| `status` | `string` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

#### Example: Create

```go
result, err := client.SubscriptionsBatchResponsePublicStatusBulk(nil).Create(map[string]any{
    "channel": "example_channel",
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionsBatchResponsePublicWideStatusBulk

Create an instance: `subscriptionsBatchResponsePublicWideStatusBulk := client.SubscriptionsBatchResponsePublicWideStatusBulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed. |
| `inputs` | `[]any` | A list of strings representing the inputs for batch operations. |
| `links` | `map[string]any` | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | The date and time when the batch request was made. |
| `results` | `[]any` | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | The date and time when the batch process began. |
| `status` | `string` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

#### Example: Create

```go
result, err := client.SubscriptionsBatchResponsePublicWideStatusBulk(nil).Create(map[string]any{
    "channel": "example_channel",
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionsLinkGeneration

Create an instance: `subscriptionsLinkGeneration := client.SubscriptionsLinkGeneration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `language` | `string` | The language in which the generated link should be presented, represented as a string. |
| `managePreferencesUrl` | `string` | The URL where the subscriber can manage their communication preferences. |
| `subscriberIdString` | `string` | A string representing the unique identifier of the subscriber. |
| `subscriptionId` | `int` | The unique identifier for the subscription, represented as an integer in int64 format. |
| `unsubscribeAllUrl` | `string` | A string containing the URL for unsubscribing the subscriber from all communications. |
| `unsubscribeSingleUrl` | `string` | A string containing the URL to unsubscribe the subscriber from a single communication. |

#### Example: Create

```go
result, err := client.SubscriptionsLinkGeneration(nil).Create(map[string]any{
    "channel": "example_channel",
    "managePreferencesUrl": "example_managePreferencesUrl",
    "subscriberIdString": "example_subscriberIdString",
    "unsubscribeAllUrl": "example_unsubscribeAllUrl",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go/
├── hubspot-communication-preferences.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
subscriptionsactionresponsewithresultspublicwidestatus := client.SubscriptionsActionResponseWithResultsPublicWideStatus(nil)
subscriptionsactionresponsewithresultspublicwidestatus.List(nil, nil)

// subscriptionsactionresponsewithresultspublicwidestatus.Data() now returns the subscriptionsactionresponsewithresultspublicwidestatus data from the last list
// subscriptionsactionresponsewithresultspublicwidestatus.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
