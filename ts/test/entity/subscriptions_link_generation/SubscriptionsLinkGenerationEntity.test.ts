

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HubspotCommunicationPreferencesSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SubscriptionsLinkGenerationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommunicationPreferencesSDK.test()
    const ent = testsdk.SubscriptionsLinkGeneration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscriptions_link_generation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"language","req":false,"short":"The language in which the generated link should be presented, represented as a string.","type":"`$STRING`","index$":0},{"active":true,"name":"managePreferencesUrl","req":true,"short":"The URL where the subscriber can manage their communication preferences.","type":"`$STRING`","index$":1},{"active":true,"name":"subscriberIdString","req":true,"short":"A string representing the unique identifier of the subscriber.","type":"`$STRING`","index$":2},{"active":true,"format":"int64","name":"subscriptionId","req":false,"short":"The unique identifier for the subscription, represented as an integer in int64 format.","type":"`$INTEGER`","index$":3},{"active":true,"name":"unsubscribeAllUrl","req":true,"short":"A string containing the URL for unsubscribing the subscriber from all communications.","type":"`$STRING`","index$":4},{"active":true,"name":"unsubscribeSingleUrl","req":false,"short":"A string containing the URL to unsubscribe the subscriber from a single communication.","type":"`$STRING`","index$":5}],"name":"subscriptions_link_generation","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"example":null,"kind":"query","name":"business_unit_id","orig":"business_unit_id","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":null,"kind":"query","name":"channel","orig":"channel","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /communication-preferences/2026-09/links/generate","json":"{\"operationId\":\"post-/communication-preferences/2026-09/links/generate_/communication-preferences/v4/links/generate\",\"parameters\":[{\"description\":\"The communication channel for which the links are generated. Currently, only 'EMAIL' is supported.\",\"explode\":true,\"in\":\"query\",\"name\":\"channel\",\"required\":true,\"schema\":{\"enum\":[\"EMAIL\"],\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The ID of the business unit for which the links are generated. It is an optional parameter and defaults to 0.\",\"explode\":true,\"in\":\"query\",\"name\":\"businessUnitId\",\"required\":false,\"schema\":{\"default\":0,\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"form\"}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"language\":{\"description\":\"The language in which the generated link should be presented, represented as a string.\",\"example\":null,\"type\":\"string\"},\"subscriberIdString\":{\"description\":\"A string representing the unique identifier of the subscriber. This property is required.\",\"example\":null,\"type\":\"string\"},\"subscriptionId\":{\"description\":\"The unique identifier for the subscription, represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"subscriberIdString\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"managePreferencesUrl\":{\"description\":\"The URL where the subscriber can manage their communication preferences.\",\"example\":null,\"type\":\"string\"},\"subscriberIdString\":{\"description\":\"A string representing the unique identifier of the subscriber.\",\"example\":null,\"type\":\"string\"},\"unsubscribeAllUrl\":{\"description\":\"A string containing the URL for unsubscribing the subscriber from all communications.\",\"example\":null,\"type\":\"string\"},\"unsubscribeSingleUrl\":{\"description\":\"A string containing the URL to unsubscribe the subscriber from a single communication.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"managePreferencesUrl\",\"subscriberIdString\",\"unsubscribeAllUrl\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"communication_preferences.read_write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"communication_preferences.read_write\":\"\",\"communication_preferences.statuses.batch.read\":\"\",\"communication_preferences.statuses.batch.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/communication-preferences/2026-09/links/generate","segments":[{"lit":"communication-preferences"},{"lit":"2026-09"},{"lit":"links"},{"lit":"generate"}],"select":{"exist":["business_unit_id","channel"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"subscriptions_link_generation","name__orig":"subscriptions_link_generation","Name":"SubscriptionsLinkGeneration","name_":"subscriptions_link_generation","name-":"subscriptions-link-generation","NAME":"SUBSCRIPTIONS_LINK_GENERATION","index$":7}, {"active":true,"entity":"subscriptions_link_generation","key$":"BasicSubscriptionsLinkGenerationFlow","kind":"basic","name":"BasicSubscriptionsLinkGenerationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"subscriptions_link_generation_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'SubscriptionsLinkGeneration')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const subscriptions_link_generation_ref01_ent = client.SubscriptionsLinkGeneration()
    let subscriptions_link_generation_ref01_data = setup.data.new.subscriptions_link_generation['subscriptions_link_generation_ref01']

    subscriptions_link_generation_ref01_data = (await subscriptions_link_generation_ref01_ent.create(subscriptions_link_generation_ref01_data)).data()
    assert(null != subscriptions_link_generation_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscriptions_link_generation/SubscriptionsLinkGenerationTestData.json')

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
    ['subscriptions_link_generation01','subscriptions_link_generation02','subscriptions_link_generation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_LINK_GENERATION_ENTID': idmap,
    'HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMUNICATION_PREFERENCES_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMUNICATION_PREFERENCES_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_LINK_GENERATION_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMUNICATION_PREFERENCES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMUNICATION_PREFERENCES_TEST_SUBSCRIPTIONS_LINK_GENERATION_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
