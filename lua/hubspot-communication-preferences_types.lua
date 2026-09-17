-- Typed models for the HubspotCommunicationPreferences SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class SubscriptionsActionResponseWithResultsPublicStatus
---@field channel string
---@field completedAt string
---@field errors? table
---@field id? string
---@field legalBasis? string
---@field legalBasisExplanation? string
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string
---@field statusState string
---@field subscriptionId number

---@class SubscriptionsActionResponseWithResultsPublicStatusLoadMatch
---@field id string
---@field business_unit_id? number
---@field channel string

---@class SubscriptionsActionResponseWithResultsPublicStatusCreateData
---@field id string
---@field channel string
---@field completedAt string
---@field errors? table
---@field legalBasis? string
---@field legalBasisExplanation? string
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string
---@field statusState string
---@field subscriptionId number

---@class SubscriptionsActionResponseWithResultsPublicWideStatus
---@field completedAt string
---@field errors? table
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class SubscriptionsActionResponseWithResultsPublicWideStatusListMatch
---@field subscriber_id_string string
---@field business_unit_id? number
---@field channel string
---@field verbose? boolean

---@class SubscriptionsActionResponseWithResultsSubscriptionDefinition
---@field completedAt string
---@field errors? table
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class SubscriptionsActionResponseWithResultsSubscriptionDefinitionListMatch
---@field business_unit_id? number
---@field include_translation? boolean

---@class SubscriptionsBatchResponsePublicBulkOptOutFromAll
---@field completedAt string
---@field errors? table
---@field inputs table
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateData
---@field business_unit_id? number
---@field channel string
---@field verbose? boolean
---@field completedAt string
---@field errors? table
---@field inputs table
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class SubscriptionsBatchResponsePublicStatus
---@field completedAt string
---@field errors? table
---@field inputs table
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class SubscriptionsBatchResponsePublicStatusCreateData
---@field completedAt string
---@field errors? table
---@field inputs table
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class SubscriptionsBatchResponsePublicStatusBulk
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class SubscriptionsBatchResponsePublicStatusBulkCreateData
---@field business_unit_id? number
---@field channel string
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class SubscriptionsBatchResponsePublicWideStatusBulk
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class SubscriptionsBatchResponsePublicWideStatusBulkCreateData
---@field business_unit_id? number
---@field channel string
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class SubscriptionsLinkGeneration
---@field language? string
---@field managePreferencesUrl string
---@field subscriberIdString string
---@field subscriptionId? number
---@field unsubscribeAllUrl string
---@field unsubscribeSingleUrl? string

---@class SubscriptionsLinkGenerationCreateData
---@field business_unit_id? number
---@field channel string
---@field language? string
---@field managePreferencesUrl string
---@field subscriberIdString string
---@field subscriptionId? number
---@field unsubscribeAllUrl string
---@field unsubscribeSingleUrl? string

local M = {}

return M
