// Typed models for the HubspotCommunicationPreferences SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go/core"
)

// SubscriptionsActionResponseWithResultsPublicStatus is the typed data model for the subscriptions_action_response_with_results_public_status entity.
type SubscriptionsActionResponseWithResultsPublicStatus struct {
	Channel string `json:"channel"`
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	Id *string `json:"id,omitempty"`
	LegalBasis *string `json:"legalBasis,omitempty"`
	LegalBasisExplanation *string `json:"legalBasisExplanation,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
	StatusState string `json:"statusState"`
	SubscriptionId int `json:"subscriptionId"`
}

// SubscriptionsActionResponseWithResultsPublicStatusLoadMatch is the typed request payload for SubscriptionsActionResponseWithResultsPublicStatus.LoadTyped.
type SubscriptionsActionResponseWithResultsPublicStatusLoadMatch struct {
	Id string `json:"id"`
	BusinessUnitId *int `json:"business_unit_id,omitempty"`
	Channel string `json:"channel"`
}

// SubscriptionsActionResponseWithResultsPublicStatusCreateData is the typed request payload for SubscriptionsActionResponseWithResultsPublicStatus.CreateTyped.
type SubscriptionsActionResponseWithResultsPublicStatusCreateData struct {
	Id string `json:"id"`
	Channel string `json:"channel"`
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	LegalBasis *string `json:"legalBasis,omitempty"`
	LegalBasisExplanation *string `json:"legalBasisExplanation,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
	StatusState string `json:"statusState"`
	SubscriptionId int `json:"subscriptionId"`
}

// SubscriptionsActionResponseWithResultsPublicWideStatus is the typed data model for the subscriptions_action_response_with_results_public_wide_status entity.
type SubscriptionsActionResponseWithResultsPublicWideStatus struct {
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// SubscriptionsActionResponseWithResultsPublicWideStatusListMatch is the typed request payload for SubscriptionsActionResponseWithResultsPublicWideStatus.ListTyped.
type SubscriptionsActionResponseWithResultsPublicWideStatusListMatch struct {
	SubscriberIdString string `json:"subscriber_id_string"`
	BusinessUnitId *int `json:"business_unit_id,omitempty"`
	Channel string `json:"channel"`
	Verbose *bool `json:"verbose,omitempty"`
}

// SubscriptionsActionResponseWithResultsSubscriptionDefinition is the typed data model for the subscriptions_action_response_with_results_subscription_definition entity.
type SubscriptionsActionResponseWithResultsSubscriptionDefinition struct {
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// SubscriptionsActionResponseWithResultsSubscriptionDefinitionListMatch is the typed request payload for SubscriptionsActionResponseWithResultsSubscriptionDefinition.ListTyped.
type SubscriptionsActionResponseWithResultsSubscriptionDefinitionListMatch struct {
	BusinessUnitId *int `json:"business_unit_id,omitempty"`
	IncludeTranslation *bool `json:"include_translation,omitempty"`
}

// SubscriptionsBatchResponsePublicBulkOptOutFromAll is the typed data model for the subscriptions_batch_response_public_bulk_opt_out_from_all entity.
type SubscriptionsBatchResponsePublicBulkOptOutFromAll struct {
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateData is the typed request payload for SubscriptionsBatchResponsePublicBulkOptOutFromAll.CreateTyped.
type SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateData struct {
	BusinessUnitId *int `json:"business_unit_id,omitempty"`
	Channel string `json:"channel"`
	Verbose *bool `json:"verbose,omitempty"`
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// SubscriptionsBatchResponsePublicStatus is the typed data model for the subscriptions_batch_response_public_status entity.
type SubscriptionsBatchResponsePublicStatus struct {
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// SubscriptionsBatchResponsePublicStatusCreateData is the typed request payload for SubscriptionsBatchResponsePublicStatus.CreateTyped.
type SubscriptionsBatchResponsePublicStatusCreateData struct {
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// SubscriptionsBatchResponsePublicStatusBulk is the typed data model for the subscriptions_batch_response_public_status_bulk entity.
type SubscriptionsBatchResponsePublicStatusBulk struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// SubscriptionsBatchResponsePublicStatusBulkCreateData is the typed request payload for SubscriptionsBatchResponsePublicStatusBulk.CreateTyped.
type SubscriptionsBatchResponsePublicStatusBulkCreateData struct {
	BusinessUnitId *int `json:"business_unit_id,omitempty"`
	Channel string `json:"channel"`
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// SubscriptionsBatchResponsePublicWideStatusBulk is the typed data model for the subscriptions_batch_response_public_wide_status_bulk entity.
type SubscriptionsBatchResponsePublicWideStatusBulk struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// SubscriptionsBatchResponsePublicWideStatusBulkCreateData is the typed request payload for SubscriptionsBatchResponsePublicWideStatusBulk.CreateTyped.
type SubscriptionsBatchResponsePublicWideStatusBulkCreateData struct {
	BusinessUnitId *int `json:"business_unit_id,omitempty"`
	Channel string `json:"channel"`
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// SubscriptionsLinkGeneration is the typed data model for the subscriptions_link_generation entity.
type SubscriptionsLinkGeneration struct {
	Language *string `json:"language,omitempty"`
	ManagePreferencesUrl string `json:"managePreferencesUrl"`
	SubscriberIdString string `json:"subscriberIdString"`
	SubscriptionId *int `json:"subscriptionId,omitempty"`
	UnsubscribeAllUrl string `json:"unsubscribeAllUrl"`
	UnsubscribeSingleUrl *string `json:"unsubscribeSingleUrl,omitempty"`
}

// SubscriptionsLinkGenerationCreateData is the typed request payload for SubscriptionsLinkGeneration.CreateTyped.
type SubscriptionsLinkGenerationCreateData struct {
	BusinessUnitId *int `json:"business_unit_id,omitempty"`
	Channel string `json:"channel"`
	Language *string `json:"language,omitempty"`
	ManagePreferencesUrl string `json:"managePreferencesUrl"`
	SubscriberIdString string `json:"subscriberIdString"`
	SubscriptionId *int `json:"subscriptionId,omitempty"`
	UnsubscribeAllUrl string `json:"unsubscribeAllUrl"`
	UnsubscribeSingleUrl *string `json:"unsubscribeSingleUrl,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
