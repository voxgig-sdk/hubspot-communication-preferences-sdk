# HubspotCommunicationPreferences Lua SDK



The Lua SDK for the HubspotCommunicationPreferences API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:SubscriptionsActionResponseWithResultsPublicStatus()` — each with the same small set of operations (`list`, `load`, `create`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/hubspot-communication-preferences-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("hubspot-communication-preferences_sdk")

local client = sdk.new({
  apikey = os.getenv("HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY"),
})
```

### 3. Load a subscriptionsactionresponsewithresultspublicstatus

SubscriptionsActionResponseWithResultsPublicStatus is nested under channel, so provide the `channel`.

```lua
local subscriptionsactionresponsewithresultspublicstatus, err = client:SubscriptionsActionResponseWithResultsPublicStatus():load({ channel = "example_channel", id = "example_id" })
if err then error(err) end
print(subscriptionsactionresponsewithresultspublicstatus)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:SubscriptionsActionResponseWithResultsPublicStatus():create({ id = "example_id", channel = "example_channel", completedAt = "example_completedAt", results = {}, startedAt = "example_startedAt", status = "example_status", statusState = "example_statusState", subscriptionId = 1 })
if err then error(err) end

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local subscriptionsactionresponsewithresultspublicwidestatuss, err = client:SubscriptionsActionResponseWithResultsPublicWideStatus():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:SubscriptionsActionResponseWithResultsPublicWideStatus():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### HubspotCommunicationPreferencesSDK

```lua
local sdk = require("hubspot-communication-preferences_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotCommunicationPreferencesSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `SubscriptionsActionResponseWithResultsPublicStatus` | `(data) -> SubscriptionsActionResponseWithResultsPublicStatusEntity` | Create a SubscriptionsActionResponseWithResultsPublicStatus entity instance. |
| `SubscriptionsActionResponseWithResultsPublicWideStatus` | `(data) -> SubscriptionsActionResponseWithResultsPublicWideStatusEntity` | Create a SubscriptionsActionResponseWithResultsPublicWideStatus entity instance. |
| `SubscriptionsActionResponseWithResultsSubscriptionDefinition` | `(data) -> SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity` | Create a SubscriptionsActionResponseWithResultsSubscriptionDefinition entity instance. |
| `SubscriptionsBatchResponsePublicBulkOptOutFromAll` | `(data) -> SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity` | Create a SubscriptionsBatchResponsePublicBulkOptOutFromAll entity instance. |
| `SubscriptionsBatchResponsePublicStatus` | `(data) -> SubscriptionsBatchResponsePublicStatusEntity` | Create a SubscriptionsBatchResponsePublicStatus entity instance. |
| `SubscriptionsBatchResponsePublicStatusBulk` | `(data) -> SubscriptionsBatchResponsePublicStatusBulkEntity` | Create a SubscriptionsBatchResponsePublicStatusBulk entity instance. |
| `SubscriptionsBatchResponsePublicWideStatusBulk` | `(data) -> SubscriptionsBatchResponsePublicWideStatusBulkEntity` | Create a SubscriptionsBatchResponsePublicWideStatusBulk entity instance. |
| `SubscriptionsLinkGeneration` | `(data) -> SubscriptionsLinkGenerationEntity` | Create a SubscriptionsLinkGeneration entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local subscriptions_action_response_with_results_public_status, err = client:SubscriptionsActionResponseWithResultsPublicStatus():load({ id = "example_id" })
    if err then error(err) end
    -- subscriptions_action_response_with_results_public_status is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### SubscriptionsActionResponseWithResultsPublicStatus

| Field | Description |
| --- | --- |
| `channel` | The type of communication channel, with 'EMAIL' as the only supported option. |
| `completedAt` | The date and time when the operation was completed. |
| `errors` | A list of errors that occurred during the operation. |
| `id` |  |
| `legalBasis` | The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'. |
| `legalBasisExplanation` | An explanation for the legal basis used for communication. |
| `links` | Contains URLs related to the response, such as documentation or resources. |
| `numErrors` | The number of errors that occurred during the operation. |
| `requestedAt` | The date and time when the request was made. |
| `results` | An array of results from the operation. |
| `startedAt` | The date and time when the operation started. |
| `status` | Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |
| `statusState` | The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'. |
| `subscriptionId` | The unique identifier of the subscription to be updated. |

Operations: Create, Load.

API path: `/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all`

#### SubscriptionsActionResponseWithResultsPublicWideStatus

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the operation was completed. |
| `errors` | An array of error objects detailing any issues encountered during the operation. |
| `links` | An object containing related links, where each key is a link name and each value is a URL. |
| `numErrors` | The number of errors encountered during the operation. |
| `requestedAt` | The date and time when the request was made. |
| `results` | An array containing the results of the operation. |
| `startedAt` | The date and time when the operation started. |
| `status` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

Operations: List.

API path: `/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all`

#### SubscriptionsActionResponseWithResultsSubscriptionDefinition

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the operation was completed. |
| `errors` | An array of errors that occurred during the operation. |
| `links` | A collection of related links associated with the operation. |
| `numErrors` | The number of errors encountered during the operation. |
| `requestedAt` | The date and time when the operation was requested. |
| `results` | An array containing the results of the operation. |
| `startedAt` | The date and time when the operation started. |
| `status` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

Operations: List.

API path: `/communication-preferences/2026-09/definitions`

#### SubscriptionsBatchResponsePublicBulkOptOutFromAll

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the bulk opt-out operation was completed. |
| `errors` | An array of error objects detailing any issues encountered during the bulk opt-out operation. |
| `inputs` | A list of strings representing the inputs for batch operations. |
| `links` | A collection of URLs linking to related resources or documentation. |
| `numErrors` | The total number of errors encountered during the bulk opt-out operation. |
| `requestedAt` | The date and time when the bulk opt-out request was made. |
| `results` | An array containing the results of the bulk opt-out from all communications operation. |
| `startedAt` | The date and time when the bulk opt-out operation began. |
| `status` | The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

Operations: Create.

API path: `/communication-preferences/2026-09/statuses/batch/unsubscribe-all`

#### SubscriptionsBatchResponsePublicStatus

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch operation was completed. |
| `errors` | An array of error objects detailing any issues encountered. |
| `inputs` | An array of PublicStatusRequest objects, each representing a subscription status update request. |
| `links` | URLs linking to related resources or documentation. |
| `numErrors` | The number of errors encountered during the batch operation. |
| `requestedAt` | The date and time when the request was made. |
| `results` | An array containing the results of the batch operation. |
| `startedAt` | The date and time when the batch operation started. |
| `status` | The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

Operations: Create.

API path: `/communication-preferences/2026-09/statuses/batch/write`

#### SubscriptionsBatchResponsePublicStatusBulk

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch process was completed. |
| `inputs` | A list of strings representing the inputs for batch operations. |
| `links` | A collection of related links associated with the batch response. |
| `requestedAt` | The date and time when the batch request was made. |
| `results` | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | The date and time when the batch process began. |
| `status` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

Operations: Create.

API path: `/communication-preferences/2026-09/statuses/batch/read`

#### SubscriptionsBatchResponsePublicWideStatusBulk

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch process was completed. |
| `inputs` | A list of strings representing the inputs for batch operations. |
| `links` | A collection of related links associated with the batch response. |
| `requestedAt` | The date and time when the batch request was made. |
| `results` | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | The date and time when the batch process began. |
| `status` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

Operations: Create.

API path: `/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read`

#### SubscriptionsLinkGeneration

| Field | Description |
| --- | --- |
| `language` | The language in which the generated link should be presented, represented as a string. |
| `managePreferencesUrl` | The URL where the subscriber can manage their communication preferences. |
| `subscriberIdString` | A string representing the unique identifier of the subscriber. |
| `subscriptionId` | The unique identifier for the subscription, represented as an integer in int64 format. |
| `unsubscribeAllUrl` | A string containing the URL for unsubscribing the subscriber from all communications. |
| `unsubscribeSingleUrl` | A string containing the URL to unsubscribe the subscriber from a single communication. |

Operations: Create.

API path: `/communication-preferences/2026-09/links/generate`



## Entities


### SubscriptionsActionResponseWithResultsPublicStatus

Create an instance: `local subscriptions_action_response_with_results_public_status = client:SubscriptionsActionResponseWithResultsPublicStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `string` | The type of communication channel, with 'EMAIL' as the only supported option. |
| `completedAt` | `string` | The date and time when the operation was completed. |
| `errors` | `table` | A list of errors that occurred during the operation. |
| `id` | `string` |  |
| `legalBasis` | `string` | The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'. |
| `legalBasisExplanation` | `string` | An explanation for the legal basis used for communication. |
| `links` | `table` | Contains URLs related to the response, such as documentation or resources. |
| `numErrors` | `number` | The number of errors that occurred during the operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `table` | An array of results from the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |
| `statusState` | `string` | The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'. |
| `subscriptionId` | `number` | The unique identifier of the subscription to be updated. |

#### Example: Load

```lua
local subscriptions_action_response_with_results_public_status, err = client:SubscriptionsActionResponseWithResultsPublicStatus():load({ id = "subscriptions_action_response_with_results_public_status_id", channel = "channel" })
```

#### Example: Create

```lua
local subscriptions_action_response_with_results_public_status, err = client:SubscriptionsActionResponseWithResultsPublicStatus():create({
  id = "example_id", -- string
  channel = "example_channel", -- string
  completedAt = "example_completedAt", -- string
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
  statusState = "example_statusState", -- string
  subscriptionId = 1, -- number
})
```


### SubscriptionsActionResponseWithResultsPublicWideStatus

Create an instance: `local subscriptions_action_response_with_results_public_wide_status = client:SubscriptionsActionResponseWithResultsPublicWideStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the operation was completed. |
| `errors` | `table` | An array of error objects detailing any issues encountered during the operation. |
| `links` | `table` | An object containing related links, where each key is a link name and each value is a URL. |
| `numErrors` | `number` | The number of errors encountered during the operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `table` | An array containing the results of the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: List

```lua
local subscriptions_action_response_with_results_public_wide_statuss, err = client:SubscriptionsActionResponseWithResultsPublicWideStatus():list()
```


### SubscriptionsActionResponseWithResultsSubscriptionDefinition

Create an instance: `local subscriptions_action_response_with_results_subscription_definition = client:SubscriptionsActionResponseWithResultsSubscriptionDefinition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the operation was completed. |
| `errors` | `table` | An array of errors that occurred during the operation. |
| `links` | `table` | A collection of related links associated with the operation. |
| `numErrors` | `number` | The number of errors encountered during the operation. |
| `requestedAt` | `string` | The date and time when the operation was requested. |
| `results` | `table` | An array containing the results of the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: List

```lua
local subscriptions_action_response_with_results_subscription_definitions, err = client:SubscriptionsActionResponseWithResultsSubscriptionDefinition():list()
```


### SubscriptionsBatchResponsePublicBulkOptOutFromAll

Create an instance: `local subscriptions_batch_response_public_bulk_opt_out_from_all = client:SubscriptionsBatchResponsePublicBulkOptOutFromAll(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the bulk opt-out operation was completed. |
| `errors` | `table` | An array of error objects detailing any issues encountered during the bulk opt-out operation. |
| `inputs` | `table` | A list of strings representing the inputs for batch operations. |
| `links` | `table` | A collection of URLs linking to related resources or documentation. |
| `numErrors` | `number` | The total number of errors encountered during the bulk opt-out operation. |
| `requestedAt` | `string` | The date and time when the bulk opt-out request was made. |
| `results` | `table` | An array containing the results of the bulk opt-out from all communications operation. |
| `startedAt` | `string` | The date and time when the bulk opt-out operation began. |
| `status` | `string` | The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: Create

```lua
local subscriptions_batch_response_public_bulk_opt_out_from_all, err = client:SubscriptionsBatchResponsePublicBulkOptOutFromAll():create({
  channel = "example_channel", -- string
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### SubscriptionsBatchResponsePublicStatus

Create an instance: `local subscriptions_batch_response_public_status = client:SubscriptionsBatchResponsePublicStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed. |
| `errors` | `table` | An array of error objects detailing any issues encountered. |
| `inputs` | `table` | An array of PublicStatusRequest objects, each representing a subscription status update request. |
| `links` | `table` | URLs linking to related resources or documentation. |
| `numErrors` | `number` | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `table` | An array containing the results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started. |
| `status` | `string` | The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: Create

```lua
local subscriptions_batch_response_public_status, err = client:SubscriptionsBatchResponsePublicStatus():create({
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### SubscriptionsBatchResponsePublicStatusBulk

Create an instance: `local subscriptions_batch_response_public_status_bulk = client:SubscriptionsBatchResponsePublicStatusBulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed. |
| `inputs` | `table` | A list of strings representing the inputs for batch operations. |
| `links` | `table` | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | The date and time when the batch request was made. |
| `results` | `table` | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | The date and time when the batch process began. |
| `status` | `string` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

#### Example: Create

```lua
local subscriptions_batch_response_public_status_bulk, err = client:SubscriptionsBatchResponsePublicStatusBulk():create({
  channel = "example_channel", -- string
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### SubscriptionsBatchResponsePublicWideStatusBulk

Create an instance: `local subscriptions_batch_response_public_wide_status_bulk = client:SubscriptionsBatchResponsePublicWideStatusBulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed. |
| `inputs` | `table` | A list of strings representing the inputs for batch operations. |
| `links` | `table` | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | The date and time when the batch request was made. |
| `results` | `table` | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | The date and time when the batch process began. |
| `status` | `string` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

#### Example: Create

```lua
local subscriptions_batch_response_public_wide_status_bulk, err = client:SubscriptionsBatchResponsePublicWideStatusBulk():create({
  channel = "example_channel", -- string
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### SubscriptionsLinkGeneration

Create an instance: `local subscriptions_link_generation = client:SubscriptionsLinkGeneration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `language` | `string` | The language in which the generated link should be presented, represented as a string. |
| `managePreferencesUrl` | `string` | The URL where the subscriber can manage their communication preferences. |
| `subscriberIdString` | `string` | A string representing the unique identifier of the subscriber. |
| `subscriptionId` | `number` | The unique identifier for the subscription, represented as an integer in int64 format. |
| `unsubscribeAllUrl` | `string` | A string containing the URL for unsubscribing the subscriber from all communications. |
| `unsubscribeSingleUrl` | `string` | A string containing the URL to unsubscribe the subscriber from a single communication. |

#### Example: Create

```lua
local subscriptions_link_generation, err = client:SubscriptionsLinkGeneration():create({
  channel = "example_channel", -- string
  managePreferencesUrl = "example_managePreferencesUrl", -- string
  subscriberIdString = "example_subscriberIdString", -- string
  unsubscribeAllUrl = "example_unsubscribeAllUrl", -- string
})
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── hubspot-communication-preferences_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`hubspot-communication-preferences_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local subscriptionsactionresponsewithresultspublicwidestatus = client:SubscriptionsActionResponseWithResultsPublicWideStatus()
subscriptionsactionresponsewithresultspublicwidestatus:list()

-- subscriptionsactionresponsewithresultspublicwidestatus:data_get() now returns the subscriptionsactionresponsewithresultspublicwidestatus data from the last list
-- subscriptionsactionresponsewithresultspublicwidestatus:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
