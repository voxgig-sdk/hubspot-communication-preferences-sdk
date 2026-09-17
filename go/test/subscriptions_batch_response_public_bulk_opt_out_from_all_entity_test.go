package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go"
	"github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go/core"

	vs "github.com/voxgig-sdk/hubspot-communication-preferences-sdk/go/utility/struct"
)

func TestSubscriptionsBatchResponsePublicBulkOptOutFromAllEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SubscriptionsBatchResponsePublicBulkOptOutFromAll(nil)
		if ent == nil {
			t.Fatal("expected non-nil SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := subscriptions_batch_response_public_bulk_opt_out_from_allBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "subscriptions_batch_response_public_bulk_opt_out_from_all." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_BATCH_RESPONSE_PUBLIC_BULK_OPT_OUT_FROM_ALL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		subscriptionsBatchResponsePublicBulkOptOutFromAllRef01Ent := client.SubscriptionsBatchResponsePublicBulkOptOutFromAll(nil)
		subscriptionsBatchResponsePublicBulkOptOutFromAllRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "subscriptions_batch_response_public_bulk_opt_out_from_all"}), "subscriptions_batch_response_public_bulk_opt_out_from_all_ref01"))

		subscriptionsBatchResponsePublicBulkOptOutFromAllRef01DataResult, err := subscriptionsBatchResponsePublicBulkOptOutFromAllRef01Ent.Create(subscriptionsBatchResponsePublicBulkOptOutFromAllRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		subscriptionsBatchResponsePublicBulkOptOutFromAllRef01Data = core.ToMapAny(entityData(subscriptionsBatchResponsePublicBulkOptOutFromAllRef01DataResult))
		if subscriptionsBatchResponsePublicBulkOptOutFromAllRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func subscriptions_batch_response_public_bulk_opt_out_from_allBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "subscriptions_batch_response_public_bulk_opt_out_from_all", "SubscriptionsBatchResponsePublicBulkOptOutFromAllTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read subscriptions_batch_response_public_bulk_opt_out_from_all test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse subscriptions_batch_response_public_bulk_opt_out_from_all test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"subscriptions_batch_response_public_bulk_opt_out_from_all01", "subscriptions_batch_response_public_bulk_opt_out_from_all02", "subscriptions_batch_response_public_bulk_opt_out_from_all03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_BATCH_RESPONSE_PUBLIC_BULK_OPT_OUT_FROM_ALL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_BATCH_RESPONSE_PUBLIC_BULK_OPT_OUT_FROM_ALL_ENTID": idmap,
		"HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE":      "FALSE",
		"HUBSPOT_COMMUNICATION_PREFERENCES_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_BATCH_RESPONSE_PUBLIC_BULK_OPT_OUT_FROM_ALL_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewHubspotCommunicationPreferencesSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HUBSPOT_COMMUNICATION_PREFERENCES_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
