# HubspotCommunicationPreferences PHP SDK



The PHP SDK for the HubspotCommunicationPreferences API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->SubscriptionsActionResponseWithResultsPublicStatus()` — with named operations (`list`/`load`/`create`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/hubspot-communication-preferences-sdk/releases](https://github.com/voxgig-sdk/hubspot-communication-preferences-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'hubspotcommunicationpreferences_sdk.php';

$client = new HubspotCommunicationPreferencesSDK([
    "apikey" => getenv("HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY"),
]);
```

### 3. Load a subscriptionsactionresponsewithresultspublicstatus

SubscriptionsActionResponseWithResultsPublicStatus is nested under channel, so provide the `channel`.

```php
try {
    // load() returns the ENTITY — call data_get() for the SubscriptionsActionResponseWithResultsPublicStatus record (throws on error).
    $subscriptionsactionresponsewithresultspublicstatus = $client->SubscriptionsActionResponseWithResultsPublicStatus()->load(["channel" => "example_channel", "id" => "example_id"]);
    print_r($subscriptionsactionresponsewithresultspublicstatus->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created SubscriptionsActionResponseWithResultsPublicStatus record.
$created = $client->SubscriptionsActionResponseWithResultsPublicStatus()->create(["id" => "example_id", "channel" => "example_channel", "completedAt" => "example_completedAt", "results" => [], "startedAt" => "example_startedAt", "status" => "example_status", "statusState" => "example_statusState", "subscriptionId" => 1]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $subscriptionsactionresponsewithresultspublicwidestatuss = $client->SubscriptionsActionResponseWithResultsPublicWideStatus()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = HubspotCommunicationPreferencesSDK::test([
    "entity" => ["subscriptionsactionresponsewithresultspublicstatus" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$subscriptionsactionresponsewithresultspublicstatus = $client->SubscriptionsActionResponseWithResultsPublicStatus()->load(["id" => "test01", "channel" => "example"]);
print_r($subscriptionsactionresponsewithresultspublicstatus->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new HubspotCommunicationPreferencesSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE=TRUE
HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### HubspotCommunicationPreferencesSDK

```php
require_once 'hubspotcommunicationpreferences_sdk.php';
$client = new HubspotCommunicationPreferencesSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = HubspotCommunicationPreferencesSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### HubspotCommunicationPreferencesSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `SubscriptionsActionResponseWithResultsPublicStatus` | `($data): SubscriptionsActionResponseWithResultsPublicStatusEntity` | Create a SubscriptionsActionResponseWithResultsPublicStatus entity instance. |
| `SubscriptionsActionResponseWithResultsPublicWideStatus` | `($data): SubscriptionsActionResponseWithResultsPublicWideStatusEntity` | Create a SubscriptionsActionResponseWithResultsPublicWideStatus entity instance. |
| `SubscriptionsActionResponseWithResultsSubscriptionDefinition` | `($data): SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity` | Create a SubscriptionsActionResponseWithResultsSubscriptionDefinition entity instance. |
| `SubscriptionsBatchResponsePublicBulkOptOutFromAll` | `($data): SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity` | Create a SubscriptionsBatchResponsePublicBulkOptOutFromAll entity instance. |
| `SubscriptionsBatchResponsePublicStatus` | `($data): SubscriptionsBatchResponsePublicStatusEntity` | Create a SubscriptionsBatchResponsePublicStatus entity instance. |
| `SubscriptionsBatchResponsePublicStatusBulk` | `($data): SubscriptionsBatchResponsePublicStatusBulkEntity` | Create a SubscriptionsBatchResponsePublicStatusBulk entity instance. |
| `SubscriptionsBatchResponsePublicWideStatusBulk` | `($data): SubscriptionsBatchResponsePublicWideStatusBulkEntity` | Create a SubscriptionsBatchResponsePublicWideStatusBulk entity instance. |
| `SubscriptionsLinkGeneration` | `($data): SubscriptionsLinkGenerationEntity` | Create a SubscriptionsLinkGeneration entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$subscriptions_action_response_with_results_public_status = $client->SubscriptionsActionResponseWithResultsPublicStatus();`

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
| `errors` | `array` | A list of errors that occurred during the operation. |
| `id` | `string` |  |
| `legalBasis` | `string` | The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'. |
| `legalBasisExplanation` | `string` | An explanation for the legal basis used for communication. |
| `links` | `array` | Contains URLs related to the response, such as documentation or resources. |
| `numErrors` | `int` | The number of errors that occurred during the operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `array` | An array of results from the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |
| `statusState` | `string` | The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'. |
| `subscriptionId` | `int` | The unique identifier of the subscription to be updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SubscriptionsActionResponseWithResultsPublicStatus record (throws on error).
$subscriptions_action_response_with_results_public_status = $client->SubscriptionsActionResponseWithResultsPublicStatus()->load(["id" => "subscriptions_action_response_with_results_public_status_id", "channel" => "channel"]);
```

#### Example: Create

```php
$subscriptions_action_response_with_results_public_status = $client->SubscriptionsActionResponseWithResultsPublicStatus()->create([
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


### SubscriptionsActionResponseWithResultsPublicWideStatus

Create an instance: `$subscriptions_action_response_with_results_public_wide_status = $client->SubscriptionsActionResponseWithResultsPublicWideStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the operation was completed. |
| `errors` | `array` | An array of error objects detailing any issues encountered during the operation. |
| `links` | `array` | An object containing related links, where each key is a link name and each value is a URL. |
| `numErrors` | `int` | The number of errors encountered during the operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `array` | An array containing the results of the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: List

```php
// list() returns an array of SubscriptionsActionResponseWithResultsPublicWideStatus records (throws on error).
$subscriptions_action_response_with_results_public_wide_statuss = $client->SubscriptionsActionResponseWithResultsPublicWideStatus()->list();
```


### SubscriptionsActionResponseWithResultsSubscriptionDefinition

Create an instance: `$subscriptions_action_response_with_results_subscription_definition = $client->SubscriptionsActionResponseWithResultsSubscriptionDefinition();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the operation was completed. |
| `errors` | `array` | An array of errors that occurred during the operation. |
| `links` | `array` | A collection of related links associated with the operation. |
| `numErrors` | `int` | The number of errors encountered during the operation. |
| `requestedAt` | `string` | The date and time when the operation was requested. |
| `results` | `array` | An array containing the results of the operation. |
| `startedAt` | `string` | The date and time when the operation started. |
| `status` | `string` | The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: List

```php
// list() returns an array of SubscriptionsActionResponseWithResultsSubscriptionDefinition records (throws on error).
$subscriptions_action_response_with_results_subscription_definitions = $client->SubscriptionsActionResponseWithResultsSubscriptionDefinition()->list();
```


### SubscriptionsBatchResponsePublicBulkOptOutFromAll

Create an instance: `$subscriptions_batch_response_public_bulk_opt_out_from_all = $client->SubscriptionsBatchResponsePublicBulkOptOutFromAll();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the bulk opt-out operation was completed. |
| `errors` | `array` | An array of error objects detailing any issues encountered during the bulk opt-out operation. |
| `inputs` | `array` | A list of strings representing the inputs for batch operations. |
| `links` | `array` | A collection of URLs linking to related resources or documentation. |
| `numErrors` | `int` | The total number of errors encountered during the bulk opt-out operation. |
| `requestedAt` | `string` | The date and time when the bulk opt-out request was made. |
| `results` | `array` | An array containing the results of the bulk opt-out from all communications operation. |
| `startedAt` | `string` | The date and time when the bulk opt-out operation began. |
| `status` | `string` | The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: Create

```php
$subscriptions_batch_response_public_bulk_opt_out_from_all = $client->SubscriptionsBatchResponsePublicBulkOptOutFromAll()->create([
    "channel" => null, // string
    "completedAt" => null, // string
    "inputs" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### SubscriptionsBatchResponsePublicStatus

Create an instance: `$subscriptions_batch_response_public_status = $client->SubscriptionsBatchResponsePublicStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed. |
| `errors` | `array` | An array of error objects detailing any issues encountered. |
| `inputs` | `array` | An array of PublicStatusRequest objects, each representing a subscription status update request. |
| `links` | `array` | URLs linking to related resources or documentation. |
| `numErrors` | `int` | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | The date and time when the request was made. |
| `results` | `array` | An array containing the results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started. |
| `status` | `string` | The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE. |

#### Example: Create

```php
$subscriptions_batch_response_public_status = $client->SubscriptionsBatchResponsePublicStatus()->create([
    "completedAt" => null, // string
    "inputs" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### SubscriptionsBatchResponsePublicStatusBulk

Create an instance: `$subscriptions_batch_response_public_status_bulk = $client->SubscriptionsBatchResponsePublicStatusBulk();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed. |
| `inputs` | `array` | A list of strings representing the inputs for batch operations. |
| `links` | `array` | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | The date and time when the batch request was made. |
| `results` | `array` | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | The date and time when the batch process began. |
| `status` | `string` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

#### Example: Create

```php
$subscriptions_batch_response_public_status_bulk = $client->SubscriptionsBatchResponsePublicStatusBulk()->create([
    "channel" => null, // string
    "completedAt" => null, // string
    "inputs" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### SubscriptionsBatchResponsePublicWideStatusBulk

Create an instance: `$subscriptions_batch_response_public_wide_status_bulk = $client->SubscriptionsBatchResponsePublicWideStatusBulk();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed. |
| `inputs` | `array` | A list of strings representing the inputs for batch operations. |
| `links` | `array` | A collection of related links associated with the batch response. |
| `requestedAt` | `string` | The date and time when the batch request was made. |
| `results` | `array` | The array of results from the batch process, each containing subscription status information. |
| `startedAt` | `string` | The date and time when the batch process began. |
| `status` | `string` | The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE. |

#### Example: Create

```php
$subscriptions_batch_response_public_wide_status_bulk = $client->SubscriptionsBatchResponsePublicWideStatusBulk()->create([
    "channel" => null, // string
    "completedAt" => null, // string
    "inputs" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### SubscriptionsLinkGeneration

Create an instance: `$subscriptions_link_generation = $client->SubscriptionsLinkGeneration();`

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
| `subscriptionId` | `int` | The unique identifier for the subscription, represented as an integer in int64 format. |
| `unsubscribeAllUrl` | `string` | A string containing the URL for unsubscribing the subscriber from all communications. |
| `unsubscribeSingleUrl` | `string` | A string containing the URL to unsubscribe the subscriber from a single communication. |

#### Example: Create

```php
$subscriptions_link_generation = $client->SubscriptionsLinkGeneration()->create([
    "channel" => null, // string
    "managePreferencesUrl" => null, // string
    "subscriberIdString" => null, // string
    "unsubscribeAllUrl" => null, // string
]);
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

Features are the extension mechanism. A feature is a PHP class
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

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── hubspotcommunicationpreferences_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`hubspotcommunicationpreferences_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$subscriptionsactionresponsewithresultspublicwidestatus = $client->SubscriptionsActionResponseWithResultsPublicWideStatus();
$subscriptionsactionresponsewithresultspublicwidestatus->list();

// $subscriptionsactionresponsewithresultspublicwidestatus->data_get() now returns the subscriptionsactionresponsewithresultspublicwidestatus data from the last list
// $subscriptionsactionresponsewithresultspublicwidestatus->match_get() returns the last match criteria
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
