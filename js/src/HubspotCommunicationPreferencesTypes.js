// Typed models for the HubspotCommunicationPreferences SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} SubscriptionsActionResponseWithResultsPublicStatus
 * @property {string} channel
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {string} [id]
 * @property {string} [legalBasis]
 * @property {string} [legalBasisExplanation]
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 * @property {string} statusState
 * @property {number} subscriptionId
 */

/**
 * @typedef {Object} SubscriptionsActionResponseWithResultsPublicStatusLoadMatch
 * @property {string} id
 * @property {number} [business_unit_id]
 * @property {string} channel
 */

/**
 * @typedef {Object} SubscriptionsActionResponseWithResultsPublicStatusCreateData
 * @property {string} id
 * @property {string} channel
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {string} [legalBasis]
 * @property {string} [legalBasisExplanation]
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 * @property {string} statusState
 * @property {number} subscriptionId
 */

/**
 * @typedef {Object} SubscriptionsActionResponseWithResultsPublicWideStatus
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} SubscriptionsActionResponseWithResultsPublicWideStatusListMatch
 * @property {string} subscriber_id_string
 * @property {number} [business_unit_id]
 * @property {string} channel
 * @property {boolean} [verbose]
 */

/**
 * @typedef {Object} SubscriptionsActionResponseWithResultsSubscriptionDefinition
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} SubscriptionsActionResponseWithResultsSubscriptionDefinitionListMatch
 * @property {number} [business_unit_id]
 * @property {boolean} [include_translation]
 */

/**
 * @typedef {Object} SubscriptionsBatchResponsePublicBulkOptOutFromAll
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateData
 * @property {number} [business_unit_id]
 * @property {string} channel
 * @property {boolean} [verbose]
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} SubscriptionsBatchResponsePublicStatus
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} SubscriptionsBatchResponsePublicStatusCreateData
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} SubscriptionsBatchResponsePublicStatusBulk
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} SubscriptionsBatchResponsePublicStatusBulkCreateData
 * @property {number} [business_unit_id]
 * @property {string} channel
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} SubscriptionsBatchResponsePublicWideStatusBulk
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} SubscriptionsBatchResponsePublicWideStatusBulkCreateData
 * @property {number} [business_unit_id]
 * @property {string} channel
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} SubscriptionsLinkGeneration
 * @property {string} [language]
 * @property {string} managePreferencesUrl
 * @property {string} subscriberIdString
 * @property {number} [subscriptionId]
 * @property {string} unsubscribeAllUrl
 * @property {string} [unsubscribeSingleUrl]
 */

/**
 * @typedef {Object} SubscriptionsLinkGenerationCreateData
 * @property {number} [business_unit_id]
 * @property {string} channel
 * @property {string} [language]
 * @property {string} managePreferencesUrl
 * @property {string} subscriberIdString
 * @property {number} [subscriptionId]
 * @property {string} unsubscribeAllUrl
 * @property {string} [unsubscribeSingleUrl]
 */

