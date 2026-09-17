# HubspotCommunicationPreferences JavaScript SDK



The JavaScript SDK for the HubspotCommunicationPreferences API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.SubscriptionsActionResponseWithResultsPublicStatus()` — each with a small set of operations (`list`, `load`, `create`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install hubspot-communication-preferences
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { HubspotCommunicationPreferencesSDK } = require('@voxgig-sdk/hubspot-communication-preferences-js')

const client = new HubspotCommunicationPreferencesSDK({
  apikey: process.env.HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY,
})
```

### Load a SubscriptionsActionResponseWithResultsPublicStatus

```js
const subscriptions_action_response_with_results_public_status = await client.SubscriptionsActionResponseWithResultsPublicStatus().load({ id: 'subscriptions_action_response_with_results_public_status_id', channel: 'example_channel' })
console.log(subscriptions_action_response_with_results_public_status)
```

### Create a SubscriptionsActionResponseWithResultsPublicStatus

```js
const created = await client.SubscriptionsActionResponseWithResultsPublicStatus().create({
  id: 'example_id',
  channel: 'example_channel',
  completedAt: 'example_completedAt',
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
  statusState: 'example_statusState',
  subscriptionId: 1,
})
console.log(created)
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const subscriptionsactionresponsewithresultspublicwidestatuss = await client.SubscriptionsActionResponseWithResultsPublicWideStatus().list()
  console.log(subscriptionsactionresponsewithresultspublicwidestatuss)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```js
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```js
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```js
const client = HubspotCommunicationPreferencesSDK.test()

const subscriptionsactionresponsewithresultspublicwidestatus = await client.SubscriptionsActionResponseWithResultsPublicWideStatus().list()
// subscriptionsactionresponsewithresultspublicwidestatus is the entity, populated with mock response data
// — call subscriptionsactionresponsewithresultspublicwidestatus.data() for the record itself
console.log(subscriptionsactionresponsewithresultspublicwidestatus)
```

You can also use the instance method:

```js
const client = new HubspotCommunicationPreferencesSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.SubscriptionsActionResponseWithResultsPublicWideStatus()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new HubspotCommunicationPreferencesSDK({
  apikey: '...',
  extend: [logger],
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
cd js && npm test
```


## Reference

### HubspotCommunicationPreferencesSDK

#### Constructor

```js
new HubspotCommunicationPreferencesSDK(options?)
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `SubscriptionsActionResponseWithResultsPublicStatus(data?)` | `SubscriptionsActionResponseWithResultsPublicStatusEntity` | Create a SubscriptionsActionResponseWithResultsPublicStatus entity instance. |
| `SubscriptionsActionResponseWithResultsPublicWideStatus(data?)` | `SubscriptionsActionResponseWithResultsPublicWideStatusEntity` | Create a SubscriptionsActionResponseWithResultsPublicWideStatus entity instance. |
| `SubscriptionsActionResponseWithResultsSubscriptionDefinition(data?)` | `SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity` | Create a SubscriptionsActionResponseWithResultsSubscriptionDefinition entity instance. |
| `SubscriptionsBatchResponsePublicBulkOptOutFromAll(data?)` | `SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity` | Create a SubscriptionsBatchResponsePublicBulkOptOutFromAll entity instance. |
| `SubscriptionsBatchResponsePublicStatus(data?)` | `SubscriptionsBatchResponsePublicStatusEntity` | Create a SubscriptionsBatchResponsePublicStatus entity instance. |
| `SubscriptionsBatchResponsePublicStatusBulk(data?)` | `SubscriptionsBatchResponsePublicStatusBulkEntity` | Create a SubscriptionsBatchResponsePublicStatusBulk entity instance. |
| `SubscriptionsBatchResponsePublicWideStatusBulk(data?)` | `SubscriptionsBatchResponsePublicWideStatusBulkEntity` | Create a SubscriptionsBatchResponsePublicWideStatusBulk entity instance. |
| `SubscriptionsLinkGeneration(data?)` | `SubscriptionsLinkGenerationEntity` | Create a SubscriptionsLinkGeneration entity instance. |
| `tester(testopts?, sdkopts?)` | `HubspotCommunicationPreferencesSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `HubspotCommunicationPreferencesSDK.test(testopts?, sdkopts?)` | `HubspotCommunicationPreferencesSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): HubspotCommunicationPreferencesSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` and `create` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

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

Operations: create, load.

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

Operations: list.

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

Operations: list.

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

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: create.

API path: `/communication-preferences/2026-09/links/generate`



## Entities


### SubscriptionsActionResponseWithResultsPublicStatus

Create an instance: `const subscriptions_action_response_with_results_public_status = client.SubscriptionsActionResponseWithResultsPublicStatus()`

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
| `errors` | `Array` | A list of errors that occurred during the operation. |
| `id` | `string` |  |
| `legalBasis` | `string` | The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'. |
| `legalBasisExplanation` | `string` | An explanation for the legal basis used for communication. |
| `links` | `Object` | Contains URLs related to the response, such as documentation or resources. |
| `numErrors` | `number` | The number of errors that occurred during the operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `Array` | An array of results from the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |
| `statusState` | `string` | The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'. |
| `subscriptionId` | `number` | The unique identifier of the subscription to be updated. |

#### Example: Load

```ts
const subscriptions_action_response_with_results_public_status = await client.SubscriptionsActionResponseWithResultsPublicStatus().load({ id: 'subscriptions_action_response_with_results_public_status_id', channel: 'channel' })
```

#### Example: Create

```ts
const subscriptions_action_response_with_results_public_status = await client.SubscriptionsActionResponseWithResultsPublicStatus().create({
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


### SubscriptionsActionResponseWithResultsPublicWideStatus

Create an instance: `const subscriptions_action_response_with_results_public_wide_status = client.SubscriptionsActionResponseWithResultsPublicWideStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the operation was completed. |
| `errors` | `Array` | An array of error objects detailing any issues encountered during the operation. |
| `links` | `Object` | An object containing related links, where each key is a link name and each value is a URL. |
| `numErrors` | `number` | The number of errors encountered during the operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `Array` | An array containing the results of the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: List

```ts
const subscriptions_action_response_with_results_public_wide_statuss = await client.SubscriptionsActionResponseWithResultsPublicWideStatus().list({ subscriber_id_string: "example", channel: "example" })
```


### SubscriptionsActionResponseWithResultsSubscriptionDefinition

Create an instance: `const subscriptions_action_response_with_results_subscription_definition = client.SubscriptionsActionResponseWithResultsSubscriptionDefinition()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the operation was completed. |
| `errors` | `Array` | An array of errors that occurred during the operation. |
| `links` | `Object` | A collection of related links associated with the operation. |
| `numErrors` | `number` | The number of errors encountered during the operation. |
| `requestedAt` | `string` | The date and time when the operation was requested. |
| `results` | `Array` | An array containing the results of the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: List

```ts
const subscriptions_action_response_with_results_subscription_definitions = await client.SubscriptionsActionResponseWithResultsSubscriptionDefinition().list()
```


### SubscriptionsBatchResponsePublicBulkOptOutFromAll

Create an instance: `const subscriptions_batch_response_public_bulk_opt_out_from_all = client.SubscriptionsBatchResponsePublicBulkOptOutFromAll()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the bulk opt-out operation was completed. |
| `errors` | `Array` | An array of error objects detailing any issues encountered during the bulk opt-out operation. |
| `inputs` | `Array` | A list of strings representing the inputs for batch operations. |
| `links` | `Object` | A collection of URLs linking to related resources or documentation. |
| `numErrors` | `number` | The total number of errors encountered during the bulk opt-out operation. |
| `requestedAt` | `string` | The date and time when the bulk opt-out request was made. |
| `results` | `Array` | An array containing the results of the bulk opt-out from all communications operation. |
| `startedAt` | `string` | The date and time when the bulk opt-out operation began. |
| `status` | `string` | The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: Create

```ts
const subscriptions_batch_response_public_bulk_opt_out_from_all = await client.SubscriptionsBatchResponsePublicBulkOptOutFromAll().create({
  channel: 'example_channel',
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### SubscriptionsBatchResponsePublicStatus

Create an instance: `const subscriptions_batch_response_public_status = client.SubscriptionsBatchResponsePublicStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed. |
| `errors` | `Array` | An array of error objects detailing any issues encountered. |
| `inputs` | `Array` | An array of PublicStatusRequest objects, each representing a subscription status update request. |
| `links` | `Object` | URLs linking to related resources or documentation. |
| `numErrors` | `number` | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `Array` | An array containing the results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started. |
| `status` | `string` | The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: Create

```ts
const subscriptions_batch_response_public_status = await client.SubscriptionsBatchResponsePublicStatus().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### SubscriptionsBatchResponsePublicStatusBulk

Create an instance: `const subscriptions_batch_response_public_status_bulk = client.SubscriptionsBatchResponsePublicStatusBulk()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed. |
| `inputs` | `Array` | A list of strings representing the inputs for batch operations. |
| `links` | `Object` | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | The date and time when the batch request was made. |
| `results` | `Array` | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | The date and time when the batch process began. |
| `status` | `string` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

#### Example: Create

```ts
const subscriptions_batch_response_public_status_bulk = await client.SubscriptionsBatchResponsePublicStatusBulk().create({
  channel: 'example_channel',
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### SubscriptionsBatchResponsePublicWideStatusBulk

Create an instance: `const subscriptions_batch_response_public_wide_status_bulk = client.SubscriptionsBatchResponsePublicWideStatusBulk()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed. |
| `inputs` | `Array` | A list of strings representing the inputs for batch operations. |
| `links` | `Object` | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | The date and time when the batch request was made. |
| `results` | `Array` | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | The date and time when the batch process began. |
| `status` | `string` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

#### Example: Create

```ts
const subscriptions_batch_response_public_wide_status_bulk = await client.SubscriptionsBatchResponsePublicWideStatusBulk().create({
  channel: 'example_channel',
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### SubscriptionsLinkGeneration

Create an instance: `const subscriptions_link_generation = client.SubscriptionsLinkGeneration()`

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

```ts
const subscriptions_link_generation = await client.SubscriptionsLinkGeneration().create({
  channel: 'example_channel',
  managePreferencesUrl: 'example_managePreferencesUrl',
  subscriberIdString: 'example_subscriberIdString',
  unsubscribeAllUrl: 'example_unsubscribeAllUrl',
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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

### Module structure

```
hubspot-communication-preferences/
├── src/
│   ├── HubspotCommunicationPreferencesSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { HubspotCommunicationPreferencesSDK } = require('@voxgig-sdk/hubspot-communication-preferences-js')
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const subscriptionsactionresponsewithresultspublicwidestatus = client.SubscriptionsActionResponseWithResultsPublicWideStatus()
await subscriptionsactionresponsewithresultspublicwidestatus.list()

// subscriptionsactionresponsewithresultspublicwidestatus.data() now returns the subscriptionsactionresponsewithresultspublicwidestatus data from the last `list`
// subscriptionsactionresponsewithresultspublicwidestatus.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
