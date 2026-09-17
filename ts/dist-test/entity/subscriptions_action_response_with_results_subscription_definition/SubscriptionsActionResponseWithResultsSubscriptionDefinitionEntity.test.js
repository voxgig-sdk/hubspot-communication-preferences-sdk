"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommunicationPreferencesSDK.test();
        const ent = testsdk.SubscriptionsActionResponseWithResultsSubscriptionDefinition();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subscriptions_action_response_with_results_subscription_definition.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "completedAt", "req": true, "short": "The date and time when the operation was completed.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "errors", "req": false, "short": "An array of errors that occurred during the operation.", "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "links", "req": false, "short": "A collection of related links associated with the operation.", "type": "`$OBJECT`", "index$": 2 }, { "active": true, "format": "int32", "name": "numErrors", "req": false, "short": "The number of errors encountered during the operation.", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "format": "date-time", "name": "requestedAt", "req": false, "short": "The date and time when the operation was requested.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "results", "req": true, "short": "An array containing the results of the operation.", "type": "`$ARRAY`", "index$": 5 }, { "active": true, "format": "date-time", "name": "startedAt", "req": true, "short": "The date and time when the operation started.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "status", "req": true, "short": "The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.", "type": "`$STRING`", "index$": 7 }], "name": "subscriptions_action_response_with_results_subscription_definition", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": null, "kind": "query", "name": "business_unit_id", "orig": "business_unit_id", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": null, "kind": "query", "name": "include_translation", "orig": "include_translation", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }] }, "contract": { "id": "GET /communication-preferences/2026-09/definitions", "json": "{\"operationId\":\"get-/communication-preferences/2026-09/definitions\",\"parameters\":[{\"description\":\"An integer representing the unique identifier of the business unit for which to retrieve communication preferences definitions.\",\"explode\":true,\"in\":\"query\",\"name\":\"businessUnitId\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"A boolean indicating whether to include translations for the subscription definitions. Defaults to false if not specified.\",\"explode\":true,\"in\":\"query\",\"name\":\"includeTranslations\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"boolean\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"completedAt\":{\"description\":\"The date and time when the operation was completed.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"errors\":{\"description\":\"An array of errors that occurred during the operation.\",\"example\":null,\"items\":{\"description\":\"Ye olde error\",\"example\":null,\"properties\":{\"category\":{\"description\":\"A string that categorizes the type of error.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object containing additional context about the error condition, with keys as context names and values as arrays of strings.\",\"example\":null,\"type\":\"object\"},\"errors\":{\"description\":\"An array of ErrorDetail objects providing further information about the error.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"A string representing the unique identifier of the error.\",\"example\":null,\"type\":\"string\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"An object mapping link names to associated URIs that contain documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A string containing a human-readable message describing the error.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"A string indicating the status of the error.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"An object providing more specific categorization of the error.\",\"example\":null,\"properties\":{},\"type\":\"object\"}},\"required\":[\"category\",\"context\",\"errors\",\"links\",\"message\",\"status\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A collection of related links associated with the operation.\",\"example\":null,\"type\":\"object\"},\"numErrors\":{\"description\":\"The number of errors encountered during the operation.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"requestedAt\":{\"description\":\"The date and time when the operation was requested.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"results\":{\"description\":\"An array containing the results of the operation.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"businessUnitId\":{\"description\":\"The ID of the business unit associated with the subscription.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"communicationMethod\":{\"description\":\"The method of communication for the subscription.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"description\":\"The date and time when the subscription was created.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"A description of the subscription.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the subscription.\",\"example\":null,\"type\":\"string\"},\"isActive\":{\"description\":\"Indicates whether the subscription is active.\",\"example\":null,\"type\":\"boolean\"},\"isDefault\":{\"description\":\"Indicates whether the subscription is the default option.\",\"example\":null,\"type\":\"boolean\"},\"isInternal\":{\"description\":\"Indicates whether the subscription is internal.\",\"example\":null,\"type\":\"boolean\"},\"name\":{\"description\":\"The name of the subscription.\",\"example\":null,\"type\":\"string\"},\"purpose\":{\"description\":\"The purpose of the subscription.\",\"example\":null,\"type\":\"string\"},\"subscriptionTranslations\":{\"description\":\"A list of translations associated with the subscription.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"createdAt\":{\"description\":\"The timestamp indicating when the subscription translation was created.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"description\":{\"description\":\"A text description of the subscription translation.\",\"example\":null,\"type\":\"string\"},\"languageCode\":{\"description\":\"The code representing the language of the subscription translation.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the subscription translation.\",\"example\":null,\"type\":\"string\"},\"subscriptionId\":{\"description\":\"The unique identifier for the subscription associated with the translation.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"updatedAt\":{\"description\":\"The timestamp indicating when the subscription translation was last updated.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"createdAt\",\"description\",\"languageCode\",\"name\",\"subscriptionId\",\"updatedAt\"],\"type\":\"object\"},\"type\":\"array\"},\"updatedAt\":{\"description\":\"The date and time when the subscription was last updated.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"createdAt\",\"description\",\"id\",\"isActive\",\"isDefault\",\"isInternal\",\"name\",\"updatedAt\"],\"type\":\"object\"},\"type\":\"array\"},\"startedAt\":{\"description\":\"The date and time when the operation started.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"description\":\"The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.\",\"enum\":[\"CANCELED\",\"COMPLETE\",\"PENDING\",\"PROCESSING\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"completedAt\",\"results\",\"startedAt\",\"status\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/errors/items/properties/errors/items/properties/context/additionalProperties\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"communication_preferences.read_write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"communication_preferences.read_write\":\"\",\"communication_preferences.statuses.batch.read\":\"\",\"communication_preferences.statuses.batch.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/communication-preferences/2026-09/definitions", "segments": [{ "lit": "communication-preferences" }, { "lit": "2026-09" }, { "lit": "definitions" }], "select": { "exist": ["business_unit_id", "include_translation"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "subscriptions_action_response_with_results_subscription_definition", "name__orig": "subscriptions_action_response_with_results_subscription_definition", "Name": "SubscriptionsActionResponseWithResultsSubscriptionDefinition", "name_": "subscriptions_action_response_with_results_subscription_definition", "name-": "subscriptions-action-response-with-results-subscription-definition", "NAME": "SUBSCRIPTIONS_ACTION_RESPONSE_WITH_RESULTS_SUBSCRIPTION_DEFINITION", "index$": 2 }, { "active": true, "entity": "subscriptions_action_response_with_results_subscription_definition", "key$": "BasicSubscriptionsActionResponseWithResultsSubscriptionDefinitionFlow", "kind": "basic", "name": "BasicSubscriptionsActionResponseWithResultsSubscriptionDefinitionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "subscriptions_action_response_with_results_subscription_definition_ref01" } }], "index$": 0 }] }, 'SubscriptionsActionResponseWithResultsSubscriptionDefinition');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let subscriptions_action_response_with_results_subscription_definition_ref01_data = Object.values(setup.data.existing.subscriptions_action_response_with_results_subscription_definition)[0];
        // LIST
        const subscriptions_action_response_with_results_subscription_definition_ref01_ent = client.SubscriptionsActionResponseWithResultsSubscriptionDefinition();
        const subscriptions_action_response_with_results_subscription_definition_ref01_match = {};
        const subscriptions_action_response_with_results_subscription_definition_ref01_list = (await subscriptions_action_response_with_results_subscription_definition_ref01_ent.list(subscriptions_action_response_with_results_subscription_definition_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subscriptions_action_response_with_results_subscription_definition/SubscriptionsActionResponseWithResultsSubscriptionDefinitionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommunicationPreferencesSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subscriptions_action_response_with_results_subscription_definition01', 'subscriptions_action_response_with_results_subscription_definition02', 'subscriptions_action_response_with_results_subscription_definition03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_ACTION_RESPONSE_WITH_RESULTS_SUBSCRIPTION_DEFINITION_ENTID': idmap,
        'HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMUNICATION_PREFERENCES_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_ACTION_RESPONSE_WITH_RESULTS_SUBSCRIPTION_DEFINITION_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_ACTION_RESPONSE_WITH_RESULTS_SUBSCRIPTION_DEFINITION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.HubspotCommunicationPreferencesSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.HUBSPOT_COMMUNICATION_PREFERENCES_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity.test.js.map