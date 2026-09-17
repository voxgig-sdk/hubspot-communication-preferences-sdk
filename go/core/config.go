package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HubspotCommunicationPreferences",
			"slug": "hubspot-communication-preferences",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.hubapi.com",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "hapikey",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"subscriptions_action_response_with_results_public_status": map[string]any{},
				"subscriptions_action_response_with_results_public_wide_status": map[string]any{},
				"subscriptions_action_response_with_results_subscription_definition": map[string]any{},
				"subscriptions_batch_response_public_bulk_opt_out_from_all": map[string]any{},
				"subscriptions_batch_response_public_status": map[string]any{},
				"subscriptions_batch_response_public_status_bulk": map[string]any{},
				"subscriptions_batch_response_public_wide_status_bulk": map[string]any{},
				"subscriptions_link_generation": map[string]any{},
			},
		},
		"entity": map[string]any{
			"subscriptions_action_response_with_results_public_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "channel",
						"req": true,
						"short": "The type of communication channel, with 'EMAIL' as the only supported option.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the operation was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errors",
						"short": "A list of errors that occurred during the operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "legalBasis",
						"short": "The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "legalBasisExplanation",
						"short": "An explanation for the legal basis used for communication.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"short": "Contains URLs related to the response, such as documentation or resources.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int32",
						"name": "numErrors",
						"short": "The number of errors that occurred during the operation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the request was made.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array of results from the operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the operation started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "statusState",
						"req": true,
						"short": "The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "subscriptionId",
						"req": true,
						"short": "The unique identifier of the subscription to be updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscriptions_action_response_with_results_public_status",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "subscriber_id_string",
											"orig": "subscriber_id_string",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "verbose",
											"orig": "verbose",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all",
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberIdString": "subscriber_id_string",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "communication-preferences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "statuses",
									},
									map[string]any{
										"var": "subscriber_id_string",
									},
									map[string]any{
										"lit": "unsubscribe-all",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_unit_id",
										"channel",
										"subscriber_id_string",
										"verbose",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"communication-preferences",
									"2026-09",
									"statuses",
									"{subscriber_id_string}",
									"unsubscribe-all",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "subscriber_id_string",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/communication-preferences/2026-09/statuses/{subscriberIdString}",
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberIdString": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "communication-preferences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "statuses",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"communication-preferences",
									"2026-09",
									"statuses",
									"{id}",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "subscriber_id_string",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/communication-preferences/2026-09/statuses/{subscriberIdString}",
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberIdString": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "communication-preferences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "statuses",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_unit_id",
										"channel",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"communication-preferences",
									"2026-09",
									"statuses",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"status",
						},
					},
				},
			},
			"subscriptions_action_response_with_results_public_wide_status": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the operation was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errors",
						"short": "An array of error objects detailing any issues encountered during the operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "An object containing related links, where each key is a link name and each value is a URL.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int32",
						"name": "numErrors",
						"short": "The number of errors encountered during the operation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the request was made.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array containing the results of the operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the operation started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.",
						"type": "`$STRING`",
					},
				},
				"name": "subscriptions_action_response_with_results_public_wide_status",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "subscriber_id_string",
											"orig": "subscriber_id_string",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "verbose",
											"orig": "verbose",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all",
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberIdString": "subscriber_id_string",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "communication-preferences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "statuses",
									},
									map[string]any{
										"var": "subscriber_id_string",
									},
									map[string]any{
										"lit": "unsubscribe-all",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_unit_id",
										"channel",
										"subscriber_id_string",
										"verbose",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"communication-preferences",
									"2026-09",
									"statuses",
									"{subscriber_id_string}",
									"unsubscribe-all",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"status",
						},
					},
				},
			},
			"subscriptions_action_response_with_results_subscription_definition": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the operation was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errors",
						"short": "An array of errors that occurred during the operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A collection of related links associated with the operation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int32",
						"name": "numErrors",
						"short": "The number of errors encountered during the operation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the operation was requested.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array containing the results of the operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the operation started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.",
						"type": "`$STRING`",
					},
				},
				"name": "subscriptions_action_response_with_results_subscription_definition",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "include_translation",
											"orig": "include_translation",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/communication-preferences/2026-09/definitions",
								"segments": []any{
									map[string]any{
										"lit": "communication-preferences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "definitions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_unit_id",
										"include_translation",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"communication-preferences",
									"2026-09",
									"definitions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscriptions_batch_response_public_bulk_opt_out_from_all": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the bulk opt-out operation was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errors",
						"short": "An array of error objects detailing any issues encountered during the bulk opt-out operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "A list of strings representing the inputs for batch operations.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A collection of URLs linking to related resources or documentation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int32",
						"name": "numErrors",
						"short": "The total number of errors encountered during the bulk opt-out operation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the bulk opt-out request was made.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array containing the results of the bulk opt-out from all communications operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the bulk opt-out operation began.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.",
						"type": "`$STRING`",
					},
				},
				"name": "subscriptions_batch_response_public_bulk_opt_out_from_all",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "verbose",
											"orig": "verbose",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/communication-preferences/2026-09/statuses/batch/unsubscribe-all",
								"segments": []any{
									map[string]any{
										"lit": "communication-preferences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "statuses",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "unsubscribe-all",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_unit_id",
										"channel",
										"verbose",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"communication-preferences",
									"2026-09",
									"statuses",
									"batch",
									"unsubscribe-all",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscriptions_batch_response_public_status": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch operation was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errors",
						"short": "An array of error objects detailing any issues encountered.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "An array of PublicStatusRequest objects, each representing a subscription status update request.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "URLs linking to related resources or documentation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int32",
						"name": "numErrors",
						"short": "The number of errors encountered during the batch operation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the request was made.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array containing the results of the batch operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch operation started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.",
						"type": "`$STRING`",
					},
				},
				"name": "subscriptions_batch_response_public_status",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/communication-preferences/2026-09/statuses/batch/write",
								"segments": []any{
									map[string]any{
										"lit": "communication-preferences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "statuses",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "write",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"communication-preferences",
									"2026-09",
									"statuses",
									"batch",
									"write",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscriptions_batch_response_public_status_bulk": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch process was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "A list of strings representing the inputs for batch operations.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A collection of related links associated with the batch response.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the batch request was made.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "The array of results from the batch process, each containing subscription status information.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch process began.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.",
						"type": "`$STRING`",
					},
				},
				"name": "subscriptions_batch_response_public_status_bulk",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/communication-preferences/2026-09/statuses/batch/read",
								"segments": []any{
									map[string]any{
										"lit": "communication-preferences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "statuses",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_unit_id",
										"channel",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"communication-preferences",
									"2026-09",
									"statuses",
									"batch",
									"read",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscriptions_batch_response_public_wide_status_bulk": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch process was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "A list of strings representing the inputs for batch operations.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A collection of related links associated with the batch response.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the batch request was made.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "The array of results from the batch process, each containing subscription status information.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch process began.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.",
						"type": "`$STRING`",
					},
				},
				"name": "subscriptions_batch_response_public_wide_status_bulk",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read",
								"segments": []any{
									map[string]any{
										"lit": "communication-preferences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "statuses",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "unsubscribe-all",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_unit_id",
										"channel",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"communication-preferences",
									"2026-09",
									"statuses",
									"batch",
									"unsubscribe-all",
									"read",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscriptions_link_generation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "language",
						"short": "The language in which the generated link should be presented, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "managePreferencesUrl",
						"req": true,
						"short": "The URL where the subscriber can manage their communication preferences.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscriberIdString",
						"req": true,
						"short": "A string representing the unique identifier of the subscriber.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "subscriptionId",
						"short": "The unique identifier for the subscription, represented as an integer in int64 format.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "unsubscribeAllUrl",
						"req": true,
						"short": "A string containing the URL for unsubscribing the subscriber from all communications.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unsubscribeSingleUrl",
						"short": "A string containing the URL to unsubscribe the subscriber from a single communication.",
						"type": "`$STRING`",
					},
				},
				"name": "subscriptions_link_generation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/communication-preferences/2026-09/links/generate",
								"segments": []any{
									map[string]any{
										"lit": "communication-preferences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "links",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_unit_id",
										"channel",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"communication-preferences",
									"2026-09",
									"links",
									"generate",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
