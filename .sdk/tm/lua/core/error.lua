-- HubspotCommunicationPreferences SDK error

local HubspotCommunicationPreferencesError = {}
HubspotCommunicationPreferencesError.__index = HubspotCommunicationPreferencesError


function HubspotCommunicationPreferencesError.new(code, msg, ctx)
  local self = setmetatable({}, HubspotCommunicationPreferencesError)
  self.is_sdk_error = true
  self.sdk = "HubspotCommunicationPreferences"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HubspotCommunicationPreferencesError:error()
  return self.msg
end


function HubspotCommunicationPreferencesError:__tostring()
  return self.msg
end


return HubspotCommunicationPreferencesError
