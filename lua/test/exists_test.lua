-- HubspotCommunicationPreferences SDK exists test

local sdk = require("hubspot-communication-preferences_sdk")

describe("HubspotCommunicationPreferencesSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
