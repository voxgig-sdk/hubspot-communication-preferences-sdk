<?php
declare(strict_types=1);

// Typed models for the HubspotCommunicationPreferences SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** SubscriptionsActionResponseWithResultsPublicStatus entity data model. */
class SubscriptionsActionResponseWithResultsPublicStatus
{
    public string $channel;
    public string $completedAt;
    public ?array $errors = null;
    public ?string $id = null;
    public ?string $legalBasis = null;
    public ?string $legalBasisExplanation = null;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
    public string $statusState;
    public int $subscriptionId;
}

/** Request payload for SubscriptionsActionResponseWithResultsPublicStatus#load. */
class SubscriptionsActionResponseWithResultsPublicStatusLoadMatch
{
    public string $id;
    public ?int $business_unit_id = null;
    public string $channel;
}

/** Request payload for SubscriptionsActionResponseWithResultsPublicStatus#create. */
class SubscriptionsActionResponseWithResultsPublicStatusCreateData
{
    public string $id;
    public string $channel;
    public string $completedAt;
    public ?array $errors = null;
    public ?string $legalBasis = null;
    public ?string $legalBasisExplanation = null;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
    public string $statusState;
    public int $subscriptionId;
}

/** SubscriptionsActionResponseWithResultsPublicWideStatus entity data model. */
class SubscriptionsActionResponseWithResultsPublicWideStatus
{
    public string $completedAt;
    public ?array $errors = null;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for SubscriptionsActionResponseWithResultsPublicWideStatus#list. */
class SubscriptionsActionResponseWithResultsPublicWideStatusListMatch
{
    public string $subscriber_id_string;
    public ?int $business_unit_id = null;
    public string $channel;
    public ?bool $verbose = null;
}

/** SubscriptionsActionResponseWithResultsSubscriptionDefinition entity data model. */
class SubscriptionsActionResponseWithResultsSubscriptionDefinition
{
    public string $completedAt;
    public ?array $errors = null;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for SubscriptionsActionResponseWithResultsSubscriptionDefinition#list. */
class SubscriptionsActionResponseWithResultsSubscriptionDefinitionListMatch
{
    public ?int $business_unit_id = null;
    public ?bool $include_translation = null;
}

/** SubscriptionsBatchResponsePublicBulkOptOutFromAll entity data model. */
class SubscriptionsBatchResponsePublicBulkOptOutFromAll
{
    public string $completedAt;
    public ?array $errors = null;
    public array $inputs;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for SubscriptionsBatchResponsePublicBulkOptOutFromAll#create. */
class SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateData
{
    public ?int $business_unit_id = null;
    public string $channel;
    public ?bool $verbose = null;
    public string $completedAt;
    public ?array $errors = null;
    public array $inputs;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** SubscriptionsBatchResponsePublicStatus entity data model. */
class SubscriptionsBatchResponsePublicStatus
{
    public string $completedAt;
    public ?array $errors = null;
    public array $inputs;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for SubscriptionsBatchResponsePublicStatus#create. */
class SubscriptionsBatchResponsePublicStatusCreateData
{
    public string $completedAt;
    public ?array $errors = null;
    public array $inputs;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** SubscriptionsBatchResponsePublicStatusBulk entity data model. */
class SubscriptionsBatchResponsePublicStatusBulk
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for SubscriptionsBatchResponsePublicStatusBulk#create. */
class SubscriptionsBatchResponsePublicStatusBulkCreateData
{
    public ?int $business_unit_id = null;
    public string $channel;
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** SubscriptionsBatchResponsePublicWideStatusBulk entity data model. */
class SubscriptionsBatchResponsePublicWideStatusBulk
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for SubscriptionsBatchResponsePublicWideStatusBulk#create. */
class SubscriptionsBatchResponsePublicWideStatusBulkCreateData
{
    public ?int $business_unit_id = null;
    public string $channel;
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** SubscriptionsLinkGeneration entity data model. */
class SubscriptionsLinkGeneration
{
    public ?string $language = null;
    public string $managePreferencesUrl;
    public string $subscriberIdString;
    public ?int $subscriptionId = null;
    public string $unsubscribeAllUrl;
    public ?string $unsubscribeSingleUrl = null;
}

/** Request payload for SubscriptionsLinkGeneration#create. */
class SubscriptionsLinkGenerationCreateData
{
    public ?int $business_unit_id = null;
    public string $channel;
    public ?string $language = null;
    public string $managePreferencesUrl;
    public string $subscriberIdString;
    public ?int $subscriptionId = null;
    public string $unsubscribeAllUrl;
    public ?string $unsubscribeSingleUrl = null;
}

