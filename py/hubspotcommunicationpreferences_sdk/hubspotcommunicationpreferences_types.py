# Typed models for the HubspotCommunicationPreferences SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class SubscriptionsActionResponseWithResultsPublicStatusRequired(TypedDict):
    channel: str
    completedAt: str
    results: list
    startedAt: str
    status: str
    statusState: str
    subscriptionId: int


class SubscriptionsActionResponseWithResultsPublicStatus(SubscriptionsActionResponseWithResultsPublicStatusRequired, total=False):
    errors: list
    id: str
    legalBasis: str
    legalBasisExplanation: str
    links: dict
    numErrors: int
    requestedAt: str


class SubscriptionsActionResponseWithResultsPublicStatusLoadMatchRequired(TypedDict):
    id: str
    channel: str


class SubscriptionsActionResponseWithResultsPublicStatusLoadMatch(SubscriptionsActionResponseWithResultsPublicStatusLoadMatchRequired, total=False):
    business_unit_id: int


class SubscriptionsActionResponseWithResultsPublicStatusCreateDataRequired(TypedDict):
    id: str
    channel: str
    completedAt: str
    results: list
    startedAt: str
    status: str
    statusState: str
    subscriptionId: int


class SubscriptionsActionResponseWithResultsPublicStatusCreateData(SubscriptionsActionResponseWithResultsPublicStatusCreateDataRequired, total=False):
    errors: list
    legalBasis: str
    legalBasisExplanation: str
    links: dict
    numErrors: int
    requestedAt: str


class SubscriptionsActionResponseWithResultsPublicWideStatusRequired(TypedDict):
    completedAt: str
    results: list
    startedAt: str
    status: str


class SubscriptionsActionResponseWithResultsPublicWideStatus(SubscriptionsActionResponseWithResultsPublicWideStatusRequired, total=False):
    errors: list
    links: dict
    numErrors: int
    requestedAt: str


class SubscriptionsActionResponseWithResultsPublicWideStatusListMatchRequired(TypedDict):
    subscriber_id_string: str
    channel: str


class SubscriptionsActionResponseWithResultsPublicWideStatusListMatch(SubscriptionsActionResponseWithResultsPublicWideStatusListMatchRequired, total=False):
    business_unit_id: int
    verbose: bool


class SubscriptionsActionResponseWithResultsSubscriptionDefinitionRequired(TypedDict):
    completedAt: str
    results: list
    startedAt: str
    status: str


class SubscriptionsActionResponseWithResultsSubscriptionDefinition(SubscriptionsActionResponseWithResultsSubscriptionDefinitionRequired, total=False):
    errors: list
    links: dict
    numErrors: int
    requestedAt: str


class SubscriptionsActionResponseWithResultsSubscriptionDefinitionListMatch(TypedDict, total=False):
    business_unit_id: int
    include_translation: bool


class SubscriptionsBatchResponsePublicBulkOptOutFromAllRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class SubscriptionsBatchResponsePublicBulkOptOutFromAll(SubscriptionsBatchResponsePublicBulkOptOutFromAllRequired, total=False):
    errors: list
    links: dict
    numErrors: int
    requestedAt: str


class SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateDataRequired(TypedDict):
    channel: str
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateData(SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateDataRequired, total=False):
    business_unit_id: int
    verbose: bool
    errors: list
    links: dict
    numErrors: int
    requestedAt: str


class SubscriptionsBatchResponsePublicStatusRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class SubscriptionsBatchResponsePublicStatus(SubscriptionsBatchResponsePublicStatusRequired, total=False):
    errors: list
    links: dict
    numErrors: int
    requestedAt: str


class SubscriptionsBatchResponsePublicStatusCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class SubscriptionsBatchResponsePublicStatusCreateData(SubscriptionsBatchResponsePublicStatusCreateDataRequired, total=False):
    errors: list
    links: dict
    numErrors: int
    requestedAt: str


class SubscriptionsBatchResponsePublicStatusBulkRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class SubscriptionsBatchResponsePublicStatusBulk(SubscriptionsBatchResponsePublicStatusBulkRequired, total=False):
    links: dict
    requestedAt: str


class SubscriptionsBatchResponsePublicStatusBulkCreateDataRequired(TypedDict):
    channel: str
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class SubscriptionsBatchResponsePublicStatusBulkCreateData(SubscriptionsBatchResponsePublicStatusBulkCreateDataRequired, total=False):
    business_unit_id: int
    links: dict
    requestedAt: str


class SubscriptionsBatchResponsePublicWideStatusBulkRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class SubscriptionsBatchResponsePublicWideStatusBulk(SubscriptionsBatchResponsePublicWideStatusBulkRequired, total=False):
    links: dict
    requestedAt: str


class SubscriptionsBatchResponsePublicWideStatusBulkCreateDataRequired(TypedDict):
    channel: str
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class SubscriptionsBatchResponsePublicWideStatusBulkCreateData(SubscriptionsBatchResponsePublicWideStatusBulkCreateDataRequired, total=False):
    business_unit_id: int
    links: dict
    requestedAt: str


class SubscriptionsLinkGenerationRequired(TypedDict):
    managePreferencesUrl: str
    subscriberIdString: str
    unsubscribeAllUrl: str


class SubscriptionsLinkGeneration(SubscriptionsLinkGenerationRequired, total=False):
    language: str
    subscriptionId: int
    unsubscribeSingleUrl: str


class SubscriptionsLinkGenerationCreateDataRequired(TypedDict):
    channel: str
    managePreferencesUrl: str
    subscriberIdString: str
    unsubscribeAllUrl: str


class SubscriptionsLinkGenerationCreateData(SubscriptionsLinkGenerationCreateDataRequired, total=False):
    business_unit_id: int
    language: str
    subscriptionId: int
    unsubscribeSingleUrl: str
