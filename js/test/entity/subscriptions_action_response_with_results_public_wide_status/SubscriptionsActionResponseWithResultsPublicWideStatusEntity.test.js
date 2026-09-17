
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { HubspotCommunicationPreferencesSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('SubscriptionsActionResponseWithResultsPublicWideStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommunicationPreferencesSDK.test()
    const ent = testsdk.SubscriptionsActionResponseWithResultsPublicWideStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"completedAt","req":true,"short":"The date and time when the operation was completed.","type":"`$STRING`","index$":0},{"active":true,"name":"errors","req":false,"short":"An array of error objects detailing any issues encountered during the operation.","type":"`$ARRAY`","index$":1},{"active":true,"name":"links","req":false,"short":"An object containing related links, where each key is a link name and each value is a URL.","type":"`$OBJECT`","index$":2},{"active":true,"format":"int32","name":"numErrors","req":false,"short":"The number of errors encountered during the operation.","type":"`$INTEGER`","index$":3},{"active":true,"format":"date-time","name":"requestedAt","req":false,"short":"The date and time when the request was made.","type":"`$STRING`","index$":4},{"active":true,"name":"results","req":true,"short":"An array containing the results of the operation.","type":"`$ARRAY`","index$":5},{"active":true,"format":"date-time","name":"startedAt","req":true,"short":"The date and time when the operation started.","type":"`$STRING`","index$":6},{"active":true,"name":"status","req":true,"short":"The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.","type":"`$STRING`","index$":7}],"name":"subscriptions_action_response_with_results_public_wide_status","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"subscriber_id_string","orig":"subscriber_id_string","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":null,"kind":"query","name":"business_unit_id","orig":"business_unit_id","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":null,"kind":"query","name":"channel","orig":"channel","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"example":null,"kind":"query","name":"verbose","orig":"verbose","reqd":false,"type":"`$BOOLEAN`","index$":2}]},"contract":{"id":"GET /communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all","json":"{\"operationId\":\"get-/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all\",\"parameters\":[{\"description\":\"The unique identifier of the subscriber whose unsubscribe status is being retrieved.\",\"explode\":false,\"in\":\"path\",\"name\":\"subscriberIdString\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"The communication channel for which the unsubscribe status is being checked. Must be 'EMAIL'.\",\"explode\":true,\"in\":\"query\",\"name\":\"channel\",\"required\":true,\"schema\":{\"enum\":[\"EMAIL\"],\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"An optional integer representing the business unit ID.\",\"explode\":true,\"in\":\"query\",\"name\":\"businessUnitId\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"A boolean indicating whether to include detailed information. Defaults to false.\",\"explode\":true,\"in\":\"query\",\"name\":\"verbose\",\"required\":false,\"schema\":{\"default\":false,\"example\":null,\"type\":\"boolean\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"completedAt\":{\"description\":\"The date and time when the operation was completed.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"errors\":{\"description\":\"An array of error objects detailing any issues encountered during the operation.\",\"example\":null,\"items\":{\"description\":\"Ye olde error\",\"example\":null,\"properties\":{\"category\":{\"description\":\"A string that categorizes the type of error.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object containing additional context about the error condition, with keys as context names and values as arrays of strings.\",\"example\":null,\"type\":\"object\"},\"errors\":{\"description\":\"An array of ErrorDetail objects providing further information about the error.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"A string representing the unique identifier of the error.\",\"example\":null,\"type\":\"string\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"An object mapping link names to associated URIs that contain documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A string containing a human-readable message describing the error.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"A string indicating the status of the error.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"An object providing more specific categorization of the error.\",\"example\":null,\"properties\":{},\"type\":\"object\"}},\"required\":[\"category\",\"context\",\"errors\",\"links\",\"message\",\"status\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"An object containing related links, where each key is a link name and each value is a URL.\",\"example\":null,\"type\":\"object\"},\"numErrors\":{\"description\":\"The number of errors encountered during the operation.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"requestedAt\":{\"description\":\"The date and time when the request was made.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"results\":{\"description\":\"An array containing the results of the operation.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"businessUnitId\":{\"description\":\"The ID of the business unit associated with the status.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"channel\":{\"description\":\"The type of communication channel, with 'EMAIL' as the only supported option.\",\"enum\":[\"EMAIL\"],\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"The subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.\",\"enum\":[\"NOT_SPECIFIED\",\"SUBSCRIBED\",\"UNSUBSCRIBED\"],\"example\":null,\"type\":\"string\"},\"subscriberIdString\":{\"description\":\"The email address of the contact.\",\"example\":null,\"type\":\"string\"},\"timestamp\":{\"description\":\"The date and time when the status was recorded.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"wideStatusType\":{\"description\":\"The type of wide status, which can be 'PORTAL_WIDE' or 'BUSINESS_UNIT_WIDE'.\",\"enum\":[\"BUSINESS_UNIT_WIDE\",\"PORTAL_WIDE\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"channel\",\"status\",\"subscriberIdString\",\"timestamp\",\"wideStatusType\"],\"type\":\"object\"},\"type\":\"array\"},\"startedAt\":{\"description\":\"The date and time when the operation started.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"description\":\"The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.\",\"enum\":[\"CANCELED\",\"COMPLETE\",\"PENDING\",\"PROCESSING\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"completedAt\",\"results\",\"startedAt\",\"status\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/errors/items/properties/errors/items/properties/context/additionalProperties\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"communication_preferences.read_write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"communication_preferences.read_write\":\"\",\"communication_preferences.statuses.batch.read\":\"\",\"communication_preferences.statuses.batch.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all","rename":{"param":{"subscriberIdString":"subscriber_id_string"}},"segments":[{"lit":"communication-preferences"},{"lit":"2026-09"},{"lit":"statuses"},{"var":"subscriber_id_string"},{"lit":"unsubscribe-all"}],"select":{"exist":["business_unit_id","channel","subscriber_id_string","verbose"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["status"]]},"key$":"subscriptions_action_response_with_results_public_wide_status","name__orig":"subscriptions_action_response_with_results_public_wide_status","Name":"SubscriptionsActionResponseWithResultsPublicWideStatus","name_":"subscriptions_action_response_with_results_public_wide_status","name-":"subscriptions-action-response-with-results-public-wide-status","NAME":"SUBSCRIPTIONS_ACTION_RESPONSE_WITH_RESULTS_PUBLIC_WIDE_STATUS","index$":1}, {"active":true,"entity":"subscriptions_action_response_with_results_public_wide_status","key$":"BasicSubscriptionsActionResponseWithResultsPublicWideStatusFlow","kind":"basic","name":"BasicSubscriptionsActionResponseWithResultsPublicWideStatusFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"subscriber_id_string":"subscriber_string01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"subscriptions_action_response_with_results_public_wide_status_ref01"}}],"index$":0}]}, 'SubscriptionsActionResponseWithResultsPublicWideStatus')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let subscriptions_action_response_with_results_public_wide_status_ref01_data = Object.values(setup.data.existing.subscriptions_action_response_with_results_public_wide_status)[0]

    // LIST
    const subscriptions_action_response_with_results_public_wide_status_ref01_ent = client.SubscriptionsActionResponseWithResultsPublicWideStatus()
    const subscriptions_action_response_with_results_public_wide_status_ref01_match = {}
    subscriptions_action_response_with_results_public_wide_status_ref01_match['subscriber_id_string'] = setup.idmap['subscriber_string01']

    const subscriptions_action_response_with_results_public_wide_status_ref01_list = (await subscriptions_action_response_with_results_public_wide_status_ref01_ent.list(subscriptions_action_response_with_results_public_wide_status_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/subscriptions_action_response_with_results_public_wide_status/SubscriptionsActionResponseWithResultsPublicWideStatusTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HubspotCommunicationPreferencesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['subscriptions_action_response_with_results_public_wide_status01','subscriptions_action_response_with_results_public_wide_status02','subscriptions_action_response_with_results_public_wide_status03','status01','status02','status03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_ACTION_RESPONSE_WITH_RESULTS_PUBLIC_WIDE_STATUS_ENTID': idmap,
    'HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMUNICATION_PREFERENCES_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_ACTION_RESPONSE_WITH_RESULTS_PUBLIC_WIDE_STATUS_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_ACTION_RESPONSE_WITH_RESULTS_PUBLIC_WIDE_STATUS_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HubspotCommunicationPreferencesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
