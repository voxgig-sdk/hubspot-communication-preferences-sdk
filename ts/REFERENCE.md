# HubspotCommunicationPreferences TypeScript SDK Reference

Complete API reference for the HubspotCommunicationPreferences TypeScript SDK.


## HubspotCommunicationPreferencesSDK

### Constructor

```ts
new HubspotCommunicationPreferencesSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotCommunicationPreferencesSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = HubspotCommunicationPreferencesSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `HubspotCommunicationPreferencesSDK` instance in test mode.


### Instance Methods

#### `SubscriptionsActionResponseWithResultsPublicStatus(data?: object)`

Create a new `SubscriptionsActionResponseWithResultsPublicStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionsActionResponseWithResultsPublicStatusEntity` instance.

#### `SubscriptionsActionResponseWithResultsPublicWideStatus(data?: object)`

Create a new `SubscriptionsActionResponseWithResultsPublicWideStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionsActionResponseWithResultsPublicWideStatusEntity` instance.

#### `SubscriptionsActionResponseWithResultsSubscriptionDefinition(data?: object)`

Create a new `SubscriptionsActionResponseWithResultsSubscriptionDefinition` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity` instance.

#### `SubscriptionsBatchResponsePublicBulkOptOutFromAll(data?: object)`

Create a new `SubscriptionsBatchResponsePublicBulkOptOutFromAll` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity` instance.

#### `SubscriptionsBatchResponsePublicStatus(data?: object)`

Create a new `SubscriptionsBatchResponsePublicStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionsBatchResponsePublicStatusEntity` instance.

#### `SubscriptionsBatchResponsePublicStatusBulk(data?: object)`

Create a new `SubscriptionsBatchResponsePublicStatusBulk` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionsBatchResponsePublicStatusBulkEntity` instance.

#### `SubscriptionsBatchResponsePublicWideStatusBulk(data?: object)`

Create a new `SubscriptionsBatchResponsePublicWideStatusBulk` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionsBatchResponsePublicWideStatusBulkEntity` instance.

#### `SubscriptionsLinkGeneration(data?: object)`

Create a new `SubscriptionsLinkGeneration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionsLinkGenerationEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `HubspotCommunicationPreferencesSDK.test()`.

**Returns:** `HubspotCommunicationPreferencesSDK` instance in test mode.


---

## SubscriptionsActionResponseWithResultsPublicStatusEntity

```ts
const subscriptions_action_response_with_results_public_status = client.SubscriptionsActionResponseWithResultsPublicStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | The type of communication channel, with 'EMAIL' as the only supported option. |
| `completedAt` | `string` | Yes | The date and time when the operation was completed. |
| `errors` | `any[]` | No | A list of errors that occurred during the operation. |
| `id` | `string` | No |  |
| `legalBasis` | `string` | No | The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'. |
| `legalBasisExplanation` | `string` | No | An explanation for the legal basis used for communication. |
| `links` | `Record<string, any>` | No | Contains URLs related to the response, such as documentation or resources. |
| `numErrors` | `number` | No | The number of errors that occurred during the operation. |
| `requestedAt` | `string` | No | The date and time when the request was made. |
| `results` | `any[]` | Yes | An array of results from the operation. |
| `startedAt` | `string` | Yes | The date and time when the operation started. |
| `status` | `string` | Yes | Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |
| `statusState` | `string` | Yes | The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'. |
| `subscriptionId` | `number` | Yes | The unique identifier of the subscription to be updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionsActionResponseWithResultsPublicStatus().create({
  id: 'example_id',
  channel: 'example_channel',
  completedAt: 'example_completedAt',
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
  statusState: 'example_statusState',
  subscriptionId: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SubscriptionsActionResponseWithResultsPublicStatus().load({ id: 'subscriptions_action_response_with_results_public_status_id', channel: 'channel' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionsActionResponseWithResultsPublicStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommunicationPreferencesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionsActionResponseWithResultsPublicWideStatusEntity

```ts
const subscriptions_action_response_with_results_public_wide_status = client.SubscriptionsActionResponseWithResultsPublicWideStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the operation was completed. |
| `errors` | `any[]` | No | An array of error objects detailing any issues encountered during the operation. |
| `links` | `Record<string, any>` | No | An object containing related links, where each key is a link name and each value is a URL. |
| `numErrors` | `number` | No | The number of errors encountered during the operation. |
| `requestedAt` | `string` | No | The date and time when the request was made. |
| `results` | `any[]` | Yes | An array containing the results of the operation. |
| `startedAt` | `string` | Yes | The date and time when the operation started. |
| `status` | `string` | Yes | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionsActionResponseWithResultsPublicWideStatus().list({ subscriber_id_string: "example", channel: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionsActionResponseWithResultsPublicWideStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommunicationPreferencesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity

```ts
const subscriptions_action_response_with_results_subscription_definition = client.SubscriptionsActionResponseWithResultsSubscriptionDefinition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the operation was completed. |
| `errors` | `any[]` | No | An array of errors that occurred during the operation. |
| `links` | `Record<string, any>` | No | A collection of related links associated with the operation. |
| `numErrors` | `number` | No | The number of errors encountered during the operation. |
| `requestedAt` | `string` | No | The date and time when the operation was requested. |
| `results` | `any[]` | Yes | An array containing the results of the operation. |
| `startedAt` | `string` | Yes | The date and time when the operation started. |
| `status` | `string` | Yes | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionsActionResponseWithResultsSubscriptionDefinition().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommunicationPreferencesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity

```ts
const subscriptions_batch_response_public_bulk_opt_out_from_all = client.SubscriptionsBatchResponsePublicBulkOptOutFromAll()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the bulk opt-out operation was completed. |
| `errors` | `any[]` | No | An array of error objects detailing any issues encountered during the bulk opt-out operation. |
| `inputs` | `any[]` | Yes | A list of strings representing the inputs for batch operations. |
| `links` | `Record<string, any>` | No | A collection of URLs linking to related resources or documentation. |
| `numErrors` | `number` | No | The total number of errors encountered during the bulk opt-out operation. |
| `requestedAt` | `string` | No | The date and time when the bulk opt-out request was made. |
| `results` | `any[]` | Yes | An array containing the results of the bulk opt-out from all communications operation. |
| `startedAt` | `string` | Yes | The date and time when the bulk opt-out operation began. |
| `status` | `string` | Yes | The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionsBatchResponsePublicBulkOptOutFromAll().create({
  channel: 'example_channel',
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommunicationPreferencesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionsBatchResponsePublicStatusEntity

```ts
const subscriptions_batch_response_public_status = client.SubscriptionsBatchResponsePublicStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed. |
| `errors` | `any[]` | No | An array of error objects detailing any issues encountered. |
| `inputs` | `any[]` | Yes | An array of PublicStatusRequest objects, each representing a subscription status update request. |
| `links` | `Record<string, any>` | No | URLs linking to related resources or documentation. |
| `numErrors` | `number` | No | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | No | The date and time when the request was made. |
| `results` | `any[]` | Yes | An array containing the results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started. |
| `status` | `string` | Yes | The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionsBatchResponsePublicStatus().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionsBatchResponsePublicStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommunicationPreferencesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionsBatchResponsePublicStatusBulkEntity

```ts
const subscriptions_batch_response_public_status_bulk = client.SubscriptionsBatchResponsePublicStatusBulk()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed. |
| `inputs` | `any[]` | Yes | A list of strings representing the inputs for batch operations. |
| `links` | `Record<string, any>` | No | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | No | The date and time when the batch request was made. |
| `results` | `any[]` | Yes | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | Yes | The date and time when the batch process began. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionsBatchResponsePublicStatusBulk().create({
  channel: 'example_channel',
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionsBatchResponsePublicStatusBulkEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommunicationPreferencesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionsBatchResponsePublicWideStatusBulkEntity

```ts
const subscriptions_batch_response_public_wide_status_bulk = client.SubscriptionsBatchResponsePublicWideStatusBulk()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed. |
| `inputs` | `any[]` | Yes | A list of strings representing the inputs for batch operations. |
| `links` | `Record<string, any>` | No | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | No | The date and time when the batch request was made. |
| `results` | `any[]` | Yes | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | Yes | The date and time when the batch process began. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionsBatchResponsePublicWideStatusBulk().create({
  channel: 'example_channel',
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionsBatchResponsePublicWideStatusBulkEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommunicationPreferencesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionsLinkGenerationEntity

```ts
const subscriptions_link_generation = client.SubscriptionsLinkGeneration()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionsLinkGeneration().create({
  channel: 'example_channel',
  managePreferencesUrl: 'example_managePreferencesUrl',
  subscriberIdString: 'example_subscriberIdString',
  unsubscribeAllUrl: 'example_unsubscribeAllUrl',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionsLinkGenerationEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommunicationPreferencesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new HubspotCommunicationPreferencesSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

