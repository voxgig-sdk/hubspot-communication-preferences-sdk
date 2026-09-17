# HubspotCommunicationPreferences PHP SDK Reference

Complete API reference for the HubspotCommunicationPreferences PHP SDK.


## HubspotCommunicationPreferencesSDK

### Constructor

```php
require_once __DIR__ . '/hubspotcommunicationpreferences_sdk.php';

$client = new HubspotCommunicationPreferencesSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotCommunicationPreferencesSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = HubspotCommunicationPreferencesSDK::test();
```


### Instance Methods

#### `SubscriptionsActionResponseWithResultsPublicStatus($data = null)`

Create a new `SubscriptionsActionResponseWithResultsPublicStatusEntity` instance. Pass `null` for no initial data.

#### `SubscriptionsActionResponseWithResultsPublicWideStatus($data = null)`

Create a new `SubscriptionsActionResponseWithResultsPublicWideStatusEntity` instance. Pass `null` for no initial data.

#### `SubscriptionsActionResponseWithResultsSubscriptionDefinition($data = null)`

Create a new `SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity` instance. Pass `null` for no initial data.

#### `SubscriptionsBatchResponsePublicBulkOptOutFromAll($data = null)`

Create a new `SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity` instance. Pass `null` for no initial data.

#### `SubscriptionsBatchResponsePublicStatus($data = null)`

Create a new `SubscriptionsBatchResponsePublicStatusEntity` instance. Pass `null` for no initial data.

#### `SubscriptionsBatchResponsePublicStatusBulk($data = null)`

Create a new `SubscriptionsBatchResponsePublicStatusBulkEntity` instance. Pass `null` for no initial data.

#### `SubscriptionsBatchResponsePublicWideStatusBulk($data = null)`

Create a new `SubscriptionsBatchResponsePublicWideStatusBulkEntity` instance. Pass `null` for no initial data.

#### `SubscriptionsLinkGeneration($data = null)`

Create a new `SubscriptionsLinkGenerationEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): HubspotCommunicationPreferencesUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## SubscriptionsActionResponseWithResultsPublicStatusEntity

```php
$subscriptions_action_response_with_results_public_status = $client->SubscriptionsActionResponseWithResultsPublicStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | The type of communication channel, with 'EMAIL' as the only supported option. |
| `completedAt` | `string` | Yes | The date and time when the operation was completed. |
| `errors` | `array` | No | A list of errors that occurred during the operation. |
| `id` | `string` | No |  |
| `legalBasis` | `string` | No | The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'. |
| `legalBasisExplanation` | `string` | No | An explanation for the legal basis used for communication. |
| `links` | `array` | No | Contains URLs related to the response, such as documentation or resources. |
| `numErrors` | `int` | No | The number of errors that occurred during the operation. |
| `requestedAt` | `string` | No | The date and time when the request was made. |
| `results` | `array` | Yes | An array of results from the operation. |
| `startedAt` | `string` | Yes | The date and time when the operation started. |
| `status` | `string` | Yes | Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |
| `statusState` | `string` | Yes | The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'. |
| `subscriptionId` | `int` | Yes | The unique identifier of the subscription to be updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionsActionResponseWithResultsPublicStatus()->create([
  "id" => null, // string
  "channel" => null, // string
  "completedAt" => null, // string
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
  "statusState" => null, // string
  "subscriptionId" => null, // int
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionsActionResponseWithResultsPublicStatus()->load(["id" => "subscriptions_action_response_with_results_public_status_id", "channel" => "channel"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionsActionResponseWithResultsPublicStatusEntity`

Create a new `SubscriptionsActionResponseWithResultsPublicStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionsActionResponseWithResultsPublicWideStatusEntity

```php
$subscriptions_action_response_with_results_public_wide_status = $client->SubscriptionsActionResponseWithResultsPublicWideStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the operation was completed. |
| `errors` | `array` | No | An array of error objects detailing any issues encountered during the operation. |
| `links` | `array` | No | An object containing related links, where each key is a link name and each value is a URL. |
| `numErrors` | `int` | No | The number of errors encountered during the operation. |
| `requestedAt` | `string` | No | The date and time when the request was made. |
| `results` | `array` | Yes | An array containing the results of the operation. |
| `startedAt` | `string` | Yes | The date and time when the operation started. |
| `status` | `string` | Yes | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionsActionResponseWithResultsPublicWideStatus()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionsActionResponseWithResultsPublicWideStatusEntity`

Create a new `SubscriptionsActionResponseWithResultsPublicWideStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity

```php
$subscriptions_action_response_with_results_subscription_definition = $client->SubscriptionsActionResponseWithResultsSubscriptionDefinition();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the operation was completed. |
| `errors` | `array` | No | An array of errors that occurred during the operation. |
| `links` | `array` | No | A collection of related links associated with the operation. |
| `numErrors` | `int` | No | The number of errors encountered during the operation. |
| `requestedAt` | `string` | No | The date and time when the operation was requested. |
| `results` | `array` | Yes | An array containing the results of the operation. |
| `startedAt` | `string` | Yes | The date and time when the operation started. |
| `status` | `string` | Yes | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionsActionResponseWithResultsSubscriptionDefinition()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity`

Create a new `SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity

```php
$subscriptions_batch_response_public_bulk_opt_out_from_all = $client->SubscriptionsBatchResponsePublicBulkOptOutFromAll();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the bulk opt-out operation was completed. |
| `errors` | `array` | No | An array of error objects detailing any issues encountered during the bulk opt-out operation. |
| `inputs` | `array` | Yes | A list of strings representing the inputs for batch operations. |
| `links` | `array` | No | A collection of URLs linking to related resources or documentation. |
| `numErrors` | `int` | No | The total number of errors encountered during the bulk opt-out operation. |
| `requestedAt` | `string` | No | The date and time when the bulk opt-out request was made. |
| `results` | `array` | Yes | An array containing the results of the bulk opt-out from all communications operation. |
| `startedAt` | `string` | Yes | The date and time when the bulk opt-out operation began. |
| `status` | `string` | Yes | The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionsBatchResponsePublicBulkOptOutFromAll()->create([
  "channel" => null, // string
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity`

Create a new `SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionsBatchResponsePublicStatusEntity

```php
$subscriptions_batch_response_public_status = $client->SubscriptionsBatchResponsePublicStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed. |
| `errors` | `array` | No | An array of error objects detailing any issues encountered. |
| `inputs` | `array` | Yes | An array of PublicStatusRequest objects, each representing a subscription status update request. |
| `links` | `array` | No | URLs linking to related resources or documentation. |
| `numErrors` | `int` | No | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | No | The date and time when the request was made. |
| `results` | `array` | Yes | An array containing the results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started. |
| `status` | `string` | Yes | The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionsBatchResponsePublicStatus()->create([
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionsBatchResponsePublicStatusEntity`

Create a new `SubscriptionsBatchResponsePublicStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionsBatchResponsePublicStatusBulkEntity

```php
$subscriptions_batch_response_public_status_bulk = $client->SubscriptionsBatchResponsePublicStatusBulk();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed. |
| `inputs` | `array` | Yes | A list of strings representing the inputs for batch operations. |
| `links` | `array` | No | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | No | The date and time when the batch request was made. |
| `results` | `array` | Yes | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | Yes | The date and time when the batch process began. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionsBatchResponsePublicStatusBulk()->create([
  "channel" => null, // string
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionsBatchResponsePublicStatusBulkEntity`

Create a new `SubscriptionsBatchResponsePublicStatusBulkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionsBatchResponsePublicWideStatusBulkEntity

```php
$subscriptions_batch_response_public_wide_status_bulk = $client->SubscriptionsBatchResponsePublicWideStatusBulk();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed. |
| `inputs` | `array` | Yes | A list of strings representing the inputs for batch operations. |
| `links` | `array` | No | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | No | The date and time when the batch request was made. |
| `results` | `array` | Yes | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | Yes | The date and time when the batch process began. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionsBatchResponsePublicWideStatusBulk()->create([
  "channel" => null, // string
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionsBatchResponsePublicWideStatusBulkEntity`

Create a new `SubscriptionsBatchResponsePublicWideStatusBulkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionsLinkGenerationEntity

```php
$subscriptions_link_generation = $client->SubscriptionsLinkGeneration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `language` | `string` | No | The language in which the generated link should be presented, represented as a string. |
| `managePreferencesUrl` | `string` | Yes | The URL where the subscriber can manage their communication preferences. |
| `subscriberIdString` | `string` | Yes | A string representing the unique identifier of the subscriber. |
| `subscriptionId` | `int` | No | The unique identifier for the subscription, represented as an integer in int64 format. |
| `unsubscribeAllUrl` | `string` | Yes | A string containing the URL for unsubscribing the subscriber from all communications. |
| `unsubscribeSingleUrl` | `string` | No | A string containing the URL to unsubscribe the subscriber from a single communication. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionsLinkGeneration()->create([
  "channel" => null, // string
  "managePreferencesUrl" => null, // string
  "subscriberIdString" => null, // string
  "unsubscribeAllUrl" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionsLinkGenerationEntity`

Create a new `SubscriptionsLinkGenerationEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new HubspotCommunicationPreferencesSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

