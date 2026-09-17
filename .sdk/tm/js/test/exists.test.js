
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { HubspotCommunicationPreferencesSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await HubspotCommunicationPreferencesSDK.test()
    equal(null !== testsdk, true)
  })

})
