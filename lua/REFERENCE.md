# HubspotCommunicationPreferences Lua SDK Reference

Complete API reference for the HubspotCommunicationPreferences Lua SDK.


## HubspotCommunicationPreferencesSDK

### Constructor

```lua
local sdk = require("hubspot-communication-preferences_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `SubscriptionsActionResponseWithResultsPublicStatus(data)`

Create a new `SubscriptionsActionResponseWithResultsPublicStatus` entity instance. Pass `nil` for no initial data.

#### `SubscriptionsActionResponseWithResultsPublicWideStatus(data)`

Create a new `SubscriptionsActionResponseWithResultsPublicWideStatus` entity instance. Pass `nil` for no initial data.

#### `SubscriptionsActionResponseWithResultsSubscriptionDefinition(data)`

Create a new `SubscriptionsActionResponseWithResultsSubscriptionDefinition` entity instance. Pass `nil` for no initial data.

#### `SubscriptionsBatchResponsePublicBulkOptOutFromAll(data)`

Create a new `SubscriptionsBatchResponsePublicBulkOptOutFromAll` entity instance. Pass `nil` for no initial data.

#### `SubscriptionsBatchResponsePublicStatus(data)`

Create a new `SubscriptionsBatchResponsePublicStatus` entity instance. Pass `nil` for no initial data.

#### `SubscriptionsBatchResponsePublicStatusBulk(data)`

Create a new `SubscriptionsBatchResponsePublicStatusBulk` entity instance. Pass `nil` for no initial data.

#### `SubscriptionsBatchResponsePublicWideStatusBulk(data)`

Create a new `SubscriptionsBatchResponsePublicWideStatusBulk` entity instance. Pass `nil` for no initial data.

#### `SubscriptionsLinkGeneration(data)`

Create a new `SubscriptionsLinkGeneration` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## SubscriptionsActionResponseWithResultsPublicStatusEntity

```lua
local subscriptions_action_response_with_results_public_status = client:SubscriptionsActionResponseWithResultsPublicStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | The type of communication channel, with 'EMAIL' as the only supported option. |
| `completedAt` | `string` | Yes | The date and time when the operation was completed. |
| `errors` | `table` | No | A list of errors that occurred during the operation. |
| `id` | `string` | No |  |
| `legalBasis` | `string` | No | The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'. |
| `legalBasisExplanation` | `string` | No | An explanation for the legal basis used for communication. |
| `links` | `table` | No | Contains URLs related to the response, such as documentation or resources. |
| `numErrors` | `number` | No | The number of errors that occurred during the operation. |
| `requestedAt` | `string` | No | The date and time when the request was made. |
| `results` | `table` | Yes | An array of results from the operation. |
| `startedAt` | `string` | Yes | The date and time when the operation started. |
| `status` | `string` | Yes | Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |
| `statusState` | `string` | Yes | The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'. |
| `subscriptionId` | `number` | Yes | The unique identifier of the subscription to be updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionsActionResponseWithResultsPublicStatus():create({
  id = --[[ string ]],
  channel = --[[ string ]],
  completedAt = --[[ string ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
  statusState = --[[ string ]],
  subscriptionId = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SubscriptionsActionResponseWithResultsPublicStatus():load({ id = "subscriptions_action_response_with_results_public_status_id", channel = "channel" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionsActionResponseWithResultsPublicStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionsActionResponseWithResultsPublicWideStatusEntity

```lua
local subscriptions_action_response_with_results_public_wide_status = client:SubscriptionsActionResponseWithResultsPublicWideStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the operation was completed. |
| `errors` | `table` | No | An array of error objects detailing any issues encountered during the operation. |
| `links` | `table` | No | An object containing related links, where each key is a link name and each value is a URL. |
| `numErrors` | `number` | No | The number of errors encountered during the operation. |
| `requestedAt` | `string` | No | The date and time when the request was made. |
| `results` | `table` | Yes | An array containing the results of the operation. |
| `startedAt` | `string` | Yes | The date and time when the operation started. |
| `status` | `string` | Yes | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionsActionResponseWithResultsPublicWideStatus():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionsActionResponseWithResultsPublicWideStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity

```lua
local subscriptions_action_response_with_results_subscription_definition = client:SubscriptionsActionResponseWithResultsSubscriptionDefinition(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the operation was completed. |
| `errors` | `table` | No | An array of errors that occurred during the operation. |
| `links` | `table` | No | A collection of related links associated with the operation. |
| `numErrors` | `number` | No | The number of errors encountered during the operation. |
| `requestedAt` | `string` | No | The date and time when the operation was requested. |
| `results` | `table` | Yes | An array containing the results of the operation. |
| `startedAt` | `string` | Yes | The date and time when the operation started. |
| `status` | `string` | Yes | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionsActionResponseWithResultsSubscriptionDefinition():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity

```lua
local subscriptions_batch_response_public_bulk_opt_out_from_all = client:SubscriptionsBatchResponsePublicBulkOptOutFromAll(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the bulk opt-out operation was completed. |
| `errors` | `table` | No | An array of error objects detailing any issues encountered during the bulk opt-out operation. |
| `inputs` | `table` | Yes | A list of strings representing the inputs for batch operations. |
| `links` | `table` | No | A collection of URLs linking to related resources or documentation. |
| `numErrors` | `number` | No | The total number of errors encountered during the bulk opt-out operation. |
| `requestedAt` | `string` | No | The date and time when the bulk opt-out request was made. |
| `results` | `table` | Yes | An array containing the results of the bulk opt-out from all communications operation. |
| `startedAt` | `string` | Yes | The date and time when the bulk opt-out operation began. |
| `status` | `string` | Yes | The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionsBatchResponsePublicBulkOptOutFromAll():create({
  channel = --[[ string ]],
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionsBatchResponsePublicStatusEntity

```lua
local subscriptions_batch_response_public_status = client:SubscriptionsBatchResponsePublicStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed. |
| `errors` | `table` | No | An array of error objects detailing any issues encountered. |
| `inputs` | `table` | Yes | An array of PublicStatusRequest objects, each representing a subscription status update request. |
| `links` | `table` | No | URLs linking to related resources or documentation. |
| `numErrors` | `number` | No | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | No | The date and time when the request was made. |
| `results` | `table` | Yes | An array containing the results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started. |
| `status` | `string` | Yes | The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionsBatchResponsePublicStatus():create({
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionsBatchResponsePublicStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionsBatchResponsePublicStatusBulkEntity

```lua
local subscriptions_batch_response_public_status_bulk = client:SubscriptionsBatchResponsePublicStatusBulk(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed. |
| `inputs` | `table` | Yes | A list of strings representing the inputs for batch operations. |
| `links` | `table` | No | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | No | The date and time when the batch request was made. |
| `results` | `table` | Yes | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | Yes | The date and time when the batch process began. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionsBatchResponsePublicStatusBulk():create({
  channel = --[[ string ]],
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionsBatchResponsePublicStatusBulkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionsBatchResponsePublicWideStatusBulkEntity

```lua
local subscriptions_batch_response_public_wide_status_bulk = client:SubscriptionsBatchResponsePublicWideStatusBulk(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed. |
| `inputs` | `table` | Yes | A list of strings representing the inputs for batch operations. |
| `links` | `table` | No | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | No | The date and time when the batch request was made. |
| `results` | `table` | Yes | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | Yes | The date and time when the batch process began. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionsBatchResponsePublicWideStatusBulk():create({
  channel = --[[ string ]],
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionsBatchResponsePublicWideStatusBulkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionsLinkGenerationEntity

```lua
local subscriptions_link_generation = client:SubscriptionsLinkGeneration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `language` | `string` | No | The language in which the generated link should be presented, represented as a string. |
| `managePreferencesUrl` | `string` | Yes | The URL where the subscriber can manage their communication preferences. |
| `subscriberIdString` | `string` | Yes | A string representing the unique identifier of the subscriber. |
| `subscriptionId` | `number` | No | The unique identifier for the subscription, represented as an integer in int64 format. |
| `unsubscribeAllUrl` | `string` | Yes | A string containing the URL for unsubscribing the subscriber from all communications. |
| `unsubscribeSingleUrl` | `string` | No | A string containing the URL to unsubscribe the subscriber from a single communication. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionsLinkGeneration():create({
  channel = --[[ string ]],
  managePreferencesUrl = --[[ string ]],
  subscriberIdString = --[[ string ]],
  unsubscribeAllUrl = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionsLinkGenerationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

