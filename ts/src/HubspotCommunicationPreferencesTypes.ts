// Typed models for the HubspotCommunicationPreferences SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface SubscriptionsActionResponseWithResultsPublicStatus {
  channel: string
  completedAt: string
  errors?: any[]
  id?: string
  legalBasis?: string
  legalBasisExplanation?: string
  links?: Record<string, any>
  numErrors?: number
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
  statusState: string
  subscriptionId: number
}

export interface SubscriptionsActionResponseWithResultsPublicStatusLoadMatch {
  id: string
  business_unit_id?: number
  channel: string
}

export interface SubscriptionsActionResponseWithResultsPublicStatusCreateData {
  id: string
  channel: string
  completedAt: string
  errors?: any[]
  legalBasis?: string
  legalBasisExplanation?: string
  links?: Record<string, any>
  numErrors?: number
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
  statusState: string
  subscriptionId: number
}

export interface SubscriptionsActionResponseWithResultsPublicWideStatus {
  completedAt: string
  errors?: any[]
  links?: Record<string, any>
  numErrors?: number
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface SubscriptionsActionResponseWithResultsPublicWideStatusListMatch {
  subscriber_id_string: string
  business_unit_id?: number
  channel: string
  verbose?: boolean
}

export interface SubscriptionsActionResponseWithResultsSubscriptionDefinition {
  completedAt: string
  errors?: any[]
  links?: Record<string, any>
  numErrors?: number
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface SubscriptionsActionResponseWithResultsSubscriptionDefinitionListMatch {
  business_unit_id?: number
  include_translation?: boolean
}

export interface SubscriptionsBatchResponsePublicBulkOptOutFromAll {
  completedAt: string
  errors?: any[]
  inputs: any[]
  links?: Record<string, any>
  numErrors?: number
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateData {
  business_unit_id?: number
  channel: string
  verbose?: boolean
  completedAt: string
  errors?: any[]
  inputs: any[]
  links?: Record<string, any>
  numErrors?: number
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface SubscriptionsBatchResponsePublicStatus {
  completedAt: string
  errors?: any[]
  inputs: any[]
  links?: Record<string, any>
  numErrors?: number
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface SubscriptionsBatchResponsePublicStatusCreateData {
  completedAt: string
  errors?: any[]
  inputs: any[]
  links?: Record<string, any>
  numErrors?: number
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface SubscriptionsBatchResponsePublicStatusBulk {
  completedAt: string
  inputs: any[]
  links?: Record<string, any>
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface SubscriptionsBatchResponsePublicStatusBulkCreateData {
  business_unit_id?: number
  channel: string
  completedAt: string
  inputs: any[]
  links?: Record<string, any>
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface SubscriptionsBatchResponsePublicWideStatusBulk {
  completedAt: string
  inputs: any[]
  links?: Record<string, any>
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface SubscriptionsBatchResponsePublicWideStatusBulkCreateData {
  business_unit_id?: number
  channel: string
  completedAt: string
  inputs: any[]
  links?: Record<string, any>
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface SubscriptionsLinkGeneration {
  language?: string
  managePreferencesUrl: string
  subscriberIdString: string
  subscriptionId?: number
  unsubscribeAllUrl: string
  unsubscribeSingleUrl?: string
}

export interface SubscriptionsLinkGenerationCreateData {
  business_unit_id?: number
  channel: string
  language?: string
  managePreferencesUrl: string
  subscriberIdString: string
  subscriptionId?: number
  unsubscribeAllUrl: string
  unsubscribeSingleUrl?: string
}

