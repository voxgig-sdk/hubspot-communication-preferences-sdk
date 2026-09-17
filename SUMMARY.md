# HubSpot Communication Preferences API

HubSpot Communication Preferences API, merged from the vendor&#39;s per-API OpenAPI documents.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 8 entities and 10 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [SubscriptionsActionResponseWithResultsPublicStatus](docs/api/subscriptions_action_response_with_results_public_status.html)

Results: successful operation.

SDK operations: `create`, `load`.

Key fields to recognise:

- `channel`: The type of communication channel, with &#39;EMAIL&#39; as the only supported option.
- `completedAt`: The date and time when the operation was completed.
- `errors`: A list of errors that occurred during the operation.
- `legalBasis`: The legal basis for communication, with options including &#39;LEGITIMATE_INTEREST_PQL&#39;, &#39;LEGITIMATE_INTEREST_CLIENT&#39;, &#39;PERFORMANCE_OF_CONTRACT&#39;, &#39;CONSENT_WITH_NOTICE&#39;, &#39;NON_GDPR&#39;, &#39;PROCESS_AND_STORE&#39;, and &#39;LEGITIMATE_INTEREST_OTHER&#39;.
- `legalBasisExplanation`: An explanation for the legal basis used for communication.

### [SubscriptionsActionResponseWithResultsPublicWideStatus](docs/api/subscriptions_action_response_with_results_public_wide_status.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `completedAt`: The date and time when the operation was completed.
- `errors`: An array of error objects detailing any issues encountered during the operation.
- `links`: An object containing related links, where each key is a link name and each value is a URL.
- `numErrors`: The number of errors encountered during the operation.
- `requestedAt`: The date and time when the request was made.

### [SubscriptionsActionResponseWithResultsSubscriptionDefinition](docs/api/subscriptions_action_response_with_results_subscription_definition.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `completedAt`: The date and time when the operation was completed.
- `errors`: An array of errors that occurred during the operation.
- `links`: A collection of related links associated with the operation.
- `numErrors`: The number of errors encountered during the operation.
- `requestedAt`: The date and time when the operation was requested.

### [SubscriptionsBatchResponsePublicBulkOptOutFromAll](docs/api/subscriptions_batch_response_public_bulk_opt_out_from_all.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the bulk opt-out operation was completed.
- `errors`: An array of error objects detailing any issues encountered during the bulk opt-out operation.
- `inputs`: A list of strings representing the inputs for batch operations.
- `links`: A collection of URLs linking to related resources or documentation.
- `numErrors`: The total number of errors encountered during the bulk opt-out operation.

### [SubscriptionsBatchResponsePublicStatus](docs/api/subscriptions_batch_response_public_status.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the batch operation was completed.
- `errors`: An array of error objects detailing any issues encountered.
- `inputs`: An array of PublicStatusRequest objects, each representing a subscription status update request.
- `links`: URLs linking to related resources or documentation.
- `numErrors`: The number of errors encountered during the batch operation.

### [SubscriptionsBatchResponsePublicStatusBulk](docs/api/subscriptions_batch_response_public_status_bulk.html)

Results: successful operation; multiple statuses.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the batch process was completed.
- `inputs`: A list of strings representing the inputs for batch operations.
- `links`: A collection of related links associated with the batch response.
- `requestedAt`: The date and time when the batch request was made.
- `results`: The array of results from the batch process, each containing subscription status information.

### [SubscriptionsBatchResponsePublicWideStatusBulk](docs/api/subscriptions_batch_response_public_wide_status_bulk.html)

Results: successful operation; multiple statuses.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the batch process was completed.
- `inputs`: A list of strings representing the inputs for batch operations.
- `links`: A collection of related links associated with the batch response.
- `requestedAt`: The date and time when the batch request was made.
- `results`: The array of results from the batch process, each containing subscription status information.

### [SubscriptionsLinkGeneration](docs/api/subscriptions_link_generation.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `language`: The language in which the generated link should be presented, represented as a string.
- `managePreferencesUrl`: The URL where the subscriber can manage their communication preferences.
- `subscriberIdString`: A string representing the unique identifier of the subscriber.
- `subscriptionId`: The unique identifier for the subscription, represented as an integer in int64 format.
- `unsubscribeAllUrl`: A string containing the URL for unsubscribing the subscriber from all communications.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [SubscriptionsActionResponseWithResultsPublicStatus](docs/api/subscriptions_action_response_with_results_public_status.html) | `create` | `POST /communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all` | Required |
| [SubscriptionsActionResponseWithResultsPublicStatus](docs/api/subscriptions_action_response_with_results_public_status.html) | `create` | `POST /communication-preferences/2026-09/statuses/{subscriberIdString}` | Required |
| [SubscriptionsActionResponseWithResultsPublicStatus](docs/api/subscriptions_action_response_with_results_public_status.html) | `load` | `GET /communication-preferences/2026-09/statuses/{subscriberIdString}` | Required |
| [SubscriptionsActionResponseWithResultsPublicWideStatus](docs/api/subscriptions_action_response_with_results_public_wide_status.html) | `list` | `GET /communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all` | Required |
| [SubscriptionsActionResponseWithResultsSubscriptionDefinition](docs/api/subscriptions_action_response_with_results_subscription_definition.html) | `list` | `GET /communication-preferences/2026-09/definitions` | Required |
| [SubscriptionsBatchResponsePublicBulkOptOutFromAll](docs/api/subscriptions_batch_response_public_bulk_opt_out_from_all.html) | `create` | `POST /communication-preferences/2026-09/statuses/batch/unsubscribe-all` | Required |
| [SubscriptionsBatchResponsePublicStatus](docs/api/subscriptions_batch_response_public_status.html) | `create` | `POST /communication-preferences/2026-09/statuses/batch/write` | Required |
| [SubscriptionsBatchResponsePublicStatusBulk](docs/api/subscriptions_batch_response_public_status_bulk.html) | `create` | `POST /communication-preferences/2026-09/statuses/batch/read` | Required |
| [SubscriptionsBatchResponsePublicWideStatusBulk](docs/api/subscriptions_batch_response_public_wide_status_bulk.html) | `create` | `POST /communication-preferences/2026-09/statuses/batch/unsubscribe-all/read` | Required |
| [SubscriptionsLinkGeneration](docs/api/subscriptions_link_generation.html) | `create` | `POST /communication-preferences/2026-09/links/generate` | Required |

## Connect to the API

- API server: `https://api.hubapi.com`

The default credential is sent in the `hapikey` query.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `hubspot-communication-preferences_list`: List records for an entity. Supported entities: `subscriptions_action_response_with_results_public_wide_status`, `subscriptions_action_response_with_results_subscription_definition`.
- `hubspot-communication-preferences_load`: Load one record for an entity. Supported entities: `subscriptions_action_response_with_results_public_status`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

