package voxgighubspotcommunicationpreferencessdk

import (
	"github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go/core"
	"github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go/entity"
	"github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go/feature"
	_ "github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go/utility"
)

// Type aliases preserve external API.
type HubspotCommunicationPreferencesSDK = core.HubspotCommunicationPreferencesSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HubspotCommunicationPreferencesEntity = core.HubspotCommunicationPreferencesEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HubspotCommunicationPreferencesError = core.HubspotCommunicationPreferencesError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewSubscriptionsActionResponseWithResultsPublicStatusEntityFunc = func(client *core.HubspotCommunicationPreferencesSDK, entopts map[string]any) core.HubspotCommunicationPreferencesEntity {
		return entity.NewSubscriptionsActionResponseWithResultsPublicStatusEntity(client, entopts)
	}
	core.NewSubscriptionsActionResponseWithResultsPublicWideStatusEntityFunc = func(client *core.HubspotCommunicationPreferencesSDK, entopts map[string]any) core.HubspotCommunicationPreferencesEntity {
		return entity.NewSubscriptionsActionResponseWithResultsPublicWideStatusEntity(client, entopts)
	}
	core.NewSubscriptionsActionResponseWithResultsSubscriptionDefinitionEntityFunc = func(client *core.HubspotCommunicationPreferencesSDK, entopts map[string]any) core.HubspotCommunicationPreferencesEntity {
		return entity.NewSubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity(client, entopts)
	}
	core.NewSubscriptionsBatchResponsePublicBulkOptOutFromAllEntityFunc = func(client *core.HubspotCommunicationPreferencesSDK, entopts map[string]any) core.HubspotCommunicationPreferencesEntity {
		return entity.NewSubscriptionsBatchResponsePublicBulkOptOutFromAllEntity(client, entopts)
	}
	core.NewSubscriptionsBatchResponsePublicStatusEntityFunc = func(client *core.HubspotCommunicationPreferencesSDK, entopts map[string]any) core.HubspotCommunicationPreferencesEntity {
		return entity.NewSubscriptionsBatchResponsePublicStatusEntity(client, entopts)
	}
	core.NewSubscriptionsBatchResponsePublicStatusBulkEntityFunc = func(client *core.HubspotCommunicationPreferencesSDK, entopts map[string]any) core.HubspotCommunicationPreferencesEntity {
		return entity.NewSubscriptionsBatchResponsePublicStatusBulkEntity(client, entopts)
	}
	core.NewSubscriptionsBatchResponsePublicWideStatusBulkEntityFunc = func(client *core.HubspotCommunicationPreferencesSDK, entopts map[string]any) core.HubspotCommunicationPreferencesEntity {
		return entity.NewSubscriptionsBatchResponsePublicWideStatusBulkEntity(client, entopts)
	}
	core.NewSubscriptionsLinkGenerationEntityFunc = func(client *core.HubspotCommunicationPreferencesSDK, entopts map[string]any) core.HubspotCommunicationPreferencesEntity {
		return entity.NewSubscriptionsLinkGenerationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHubspotCommunicationPreferencesSDK = core.NewHubspotCommunicationPreferencesSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewHubspotCommunicationPreferencesSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *HubspotCommunicationPreferencesSDK  { return NewHubspotCommunicationPreferencesSDK(nil) }
func Test() *HubspotCommunicationPreferencesSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
