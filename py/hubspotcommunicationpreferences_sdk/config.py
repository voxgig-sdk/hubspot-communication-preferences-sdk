# HubspotCommunicationPreferences SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "HubspotCommunicationPreferences",
            "slug": "hubspot-communication-preferences",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.hubapi.com",
            "auth": {
                "prefix": "",
                "in": "query",
                "name": "hapikey",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "subscriptions_action_response_with_results_public_status": {},
                "subscriptions_action_response_with_results_public_wide_status": {},
                "subscriptions_action_response_with_results_subscription_definition": {},
                "subscriptions_batch_response_public_bulk_opt_out_from_all": {},
                "subscriptions_batch_response_public_status": {},
                "subscriptions_batch_response_public_status_bulk": {},
                "subscriptions_batch_response_public_wide_status_bulk": {},
                "subscriptions_link_generation": {},
            },
        },
        "entity": {
      "subscriptions_action_response_with_results_public_status": {
        "fields": [
          {
            "name": "channel",
            "req": True,
            "short": "The type of communication channel, with 'EMAIL' as the only supported option.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "short": "The date and time when the operation was completed.",
            "type": "`$STRING`",
          },
          {
            "name": "errors",
            "short": "A list of errors that occurred during the operation.",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "legalBasis",
            "short": "The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.",
            "type": "`$STRING`",
          },
          {
            "name": "legalBasisExplanation",
            "short": "An explanation for the legal basis used for communication.",
            "type": "`$STRING`",
          },
          {
            "name": "links",
            "short": "Contains URLs related to the response, such as documentation or resources.",
            "type": "`$OBJECT`",
          },
          {
            "format": "int32",
            "name": "numErrors",
            "short": "The number of errors that occurred during the operation.",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "short": "The date and time when the request was made.",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "short": "An array of results from the operation.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "short": "The date and time when the operation started.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.",
            "type": "`$STRING`",
          },
          {
            "name": "statusState",
            "req": True,
            "short": "The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.",
            "type": "`$STRING`",
          },
          {
            "format": "int64",
            "name": "subscriptionId",
            "req": True,
            "short": "The unique identifier of the subscription to be updated.",
            "type": "`$INTEGER`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "subscriptions_action_response_with_results_public_status",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "subscriber_id_string",
                      "orig": "subscriber_id_string",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "business_unit_id",
                      "orig": "business_unit_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "verbose",
                      "orig": "verbose",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all",
                "rename": {
                  "param": {
                    "subscriberIdString": "subscriber_id_string",
                  },
                },
                "segments": [
                  {
                    "lit": "communication-preferences",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "statuses",
                  },
                  {
                    "var": "subscriber_id_string",
                  },
                  {
                    "lit": "unsubscribe-all",
                  },
                ],
                "select": {
                  "exist": [
                    "business_unit_id",
                    "channel",
                    "subscriber_id_string",
                    "verbose",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "communication-preferences",
                  "2026-09",
                  "statuses",
                  "{subscriber_id_string}",
                  "unsubscribe-all",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "subscriber_id_string",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/communication-preferences/2026-09/statuses/{subscriberIdString}",
                "rename": {
                  "param": {
                    "subscriberIdString": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "communication-preferences",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "statuses",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "communication-preferences",
                  "2026-09",
                  "statuses",
                  "{id}",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "subscriber_id_string",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "business_unit_id",
                      "orig": "business_unit_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/communication-preferences/2026-09/statuses/{subscriberIdString}",
                "rename": {
                  "param": {
                    "subscriberIdString": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "communication-preferences",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "statuses",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "business_unit_id",
                    "channel",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "communication-preferences",
                  "2026-09",
                  "statuses",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "status",
            ],
          ],
        },
      },
      "subscriptions_action_response_with_results_public_wide_status": {
        "fields": [
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "short": "The date and time when the operation was completed.",
            "type": "`$STRING`",
          },
          {
            "name": "errors",
            "short": "An array of error objects detailing any issues encountered during the operation.",
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "short": "An object containing related links, where each key is a link name and each value is a URL.",
            "type": "`$OBJECT`",
          },
          {
            "format": "int32",
            "name": "numErrors",
            "short": "The number of errors encountered during the operation.",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "short": "The date and time when the request was made.",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "short": "An array containing the results of the operation.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "short": "The date and time when the operation started.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.",
            "type": "`$STRING`",
          },
        ],
        "name": "subscriptions_action_response_with_results_public_wide_status",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "subscriber_id_string",
                      "orig": "subscriber_id_string",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "business_unit_id",
                      "orig": "business_unit_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "verbose",
                      "orig": "verbose",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all",
                "rename": {
                  "param": {
                    "subscriberIdString": "subscriber_id_string",
                  },
                },
                "segments": [
                  {
                    "lit": "communication-preferences",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "statuses",
                  },
                  {
                    "var": "subscriber_id_string",
                  },
                  {
                    "lit": "unsubscribe-all",
                  },
                ],
                "select": {
                  "exist": [
                    "business_unit_id",
                    "channel",
                    "subscriber_id_string",
                    "verbose",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "communication-preferences",
                  "2026-09",
                  "statuses",
                  "{subscriber_id_string}",
                  "unsubscribe-all",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "status",
            ],
          ],
        },
      },
      "subscriptions_action_response_with_results_subscription_definition": {
        "fields": [
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "short": "The date and time when the operation was completed.",
            "type": "`$STRING`",
          },
          {
            "name": "errors",
            "short": "An array of errors that occurred during the operation.",
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "short": "A collection of related links associated with the operation.",
            "type": "`$OBJECT`",
          },
          {
            "format": "int32",
            "name": "numErrors",
            "short": "The number of errors encountered during the operation.",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "short": "The date and time when the operation was requested.",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "short": "An array containing the results of the operation.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "short": "The date and time when the operation started.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.",
            "type": "`$STRING`",
          },
        ],
        "name": "subscriptions_action_response_with_results_subscription_definition",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "business_unit_id",
                      "orig": "business_unit_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "include_translation",
                      "orig": "include_translation",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/communication-preferences/2026-09/definitions",
                "segments": [
                  {
                    "lit": "communication-preferences",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "definitions",
                  },
                ],
                "select": {
                  "exist": [
                    "business_unit_id",
                    "include_translation",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "communication-preferences",
                  "2026-09",
                  "definitions",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "subscriptions_batch_response_public_bulk_opt_out_from_all": {
        "fields": [
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "short": "The date and time when the bulk opt-out operation was completed.",
            "type": "`$STRING`",
          },
          {
            "name": "errors",
            "short": "An array of error objects detailing any issues encountered during the bulk opt-out operation.",
            "type": "`$ARRAY`",
          },
          {
            "name": "inputs",
            "req": True,
            "short": "A list of strings representing the inputs for batch operations.",
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "short": "A collection of URLs linking to related resources or documentation.",
            "type": "`$OBJECT`",
          },
          {
            "format": "int32",
            "name": "numErrors",
            "short": "The total number of errors encountered during the bulk opt-out operation.",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "short": "The date and time when the bulk opt-out request was made.",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "short": "An array containing the results of the bulk opt-out from all communications operation.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "short": "The date and time when the bulk opt-out operation began.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.",
            "type": "`$STRING`",
          },
        ],
        "name": "subscriptions_batch_response_public_bulk_opt_out_from_all",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "business_unit_id",
                      "orig": "business_unit_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "verbose",
                      "orig": "verbose",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/communication-preferences/2026-09/statuses/batch/unsubscribe-all",
                "segments": [
                  {
                    "lit": "communication-preferences",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "statuses",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "unsubscribe-all",
                  },
                ],
                "select": {
                  "exist": [
                    "business_unit_id",
                    "channel",
                    "verbose",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "communication-preferences",
                  "2026-09",
                  "statuses",
                  "batch",
                  "unsubscribe-all",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "subscriptions_batch_response_public_status": {
        "fields": [
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "short": "The date and time when the batch operation was completed.",
            "type": "`$STRING`",
          },
          {
            "name": "errors",
            "short": "An array of error objects detailing any issues encountered.",
            "type": "`$ARRAY`",
          },
          {
            "name": "inputs",
            "req": True,
            "short": "An array of PublicStatusRequest objects, each representing a subscription status update request.",
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "short": "URLs linking to related resources or documentation.",
            "type": "`$OBJECT`",
          },
          {
            "format": "int32",
            "name": "numErrors",
            "short": "The number of errors encountered during the batch operation.",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "short": "The date and time when the request was made.",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "short": "An array containing the results of the batch operation.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "short": "The date and time when the batch operation started.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.",
            "type": "`$STRING`",
          },
        ],
        "name": "subscriptions_batch_response_public_status",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/communication-preferences/2026-09/statuses/batch/write",
                "segments": [
                  {
                    "lit": "communication-preferences",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "statuses",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "write",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "communication-preferences",
                  "2026-09",
                  "statuses",
                  "batch",
                  "write",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "subscriptions_batch_response_public_status_bulk": {
        "fields": [
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "short": "The date and time when the batch process was completed.",
            "type": "`$STRING`",
          },
          {
            "name": "inputs",
            "req": True,
            "short": "A list of strings representing the inputs for batch operations.",
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "short": "A collection of related links associated with the batch response.",
            "type": "`$OBJECT`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "short": "The date and time when the batch request was made.",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "short": "The array of results from the batch process, each containing subscription status information.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "short": "The date and time when the batch process began.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.",
            "type": "`$STRING`",
          },
        ],
        "name": "subscriptions_batch_response_public_status_bulk",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "business_unit_id",
                      "orig": "business_unit_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/communication-preferences/2026-09/statuses/batch/read",
                "segments": [
                  {
                    "lit": "communication-preferences",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "statuses",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "read",
                  },
                ],
                "select": {
                  "exist": [
                    "business_unit_id",
                    "channel",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "communication-preferences",
                  "2026-09",
                  "statuses",
                  "batch",
                  "read",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "subscriptions_batch_response_public_wide_status_bulk": {
        "fields": [
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "short": "The date and time when the batch process was completed.",
            "type": "`$STRING`",
          },
          {
            "name": "inputs",
            "req": True,
            "short": "A list of strings representing the inputs for batch operations.",
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "short": "A collection of related links associated with the batch response.",
            "type": "`$OBJECT`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "short": "The date and time when the batch request was made.",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "short": "The array of results from the batch process, each containing subscription status information.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "short": "The date and time when the batch process began.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.",
            "type": "`$STRING`",
          },
        ],
        "name": "subscriptions_batch_response_public_wide_status_bulk",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "business_unit_id",
                      "orig": "business_unit_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read",
                "segments": [
                  {
                    "lit": "communication-preferences",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "statuses",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "unsubscribe-all",
                  },
                  {
                    "lit": "read",
                  },
                ],
                "select": {
                  "exist": [
                    "business_unit_id",
                    "channel",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "communication-preferences",
                  "2026-09",
                  "statuses",
                  "batch",
                  "unsubscribe-all",
                  "read",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "subscriptions_link_generation": {
        "fields": [
          {
            "name": "language",
            "short": "The language in which the generated link should be presented, represented as a string.",
            "type": "`$STRING`",
          },
          {
            "name": "managePreferencesUrl",
            "req": True,
            "short": "The URL where the subscriber can manage their communication preferences.",
            "type": "`$STRING`",
          },
          {
            "name": "subscriberIdString",
            "req": True,
            "short": "A string representing the unique identifier of the subscriber.",
            "type": "`$STRING`",
          },
          {
            "format": "int64",
            "name": "subscriptionId",
            "short": "The unique identifier for the subscription, represented as an integer in int64 format.",
            "type": "`$INTEGER`",
          },
          {
            "name": "unsubscribeAllUrl",
            "req": True,
            "short": "A string containing the URL for unsubscribing the subscriber from all communications.",
            "type": "`$STRING`",
          },
          {
            "name": "unsubscribeSingleUrl",
            "short": "A string containing the URL to unsubscribe the subscriber from a single communication.",
            "type": "`$STRING`",
          },
        ],
        "name": "subscriptions_link_generation",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "business_unit_id",
                      "orig": "business_unit_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/communication-preferences/2026-09/links/generate",
                "segments": [
                  {
                    "lit": "communication-preferences",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "links",
                  },
                  {
                    "lit": "generate",
                  },
                ],
                "select": {
                  "exist": [
                    "business_unit_id",
                    "channel",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "communication-preferences",
                  "2026-09",
                  "links",
                  "generate",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
