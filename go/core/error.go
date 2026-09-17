package core

type HubspotCommunicationPreferencesError struct {
	IsHubspotCommunicationPreferencesError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHubspotCommunicationPreferencesError(code string, msg string, ctx *Context) *HubspotCommunicationPreferencesError {
	return &HubspotCommunicationPreferencesError{
		IsHubspotCommunicationPreferencesError: true,
		Sdk:              "HubspotCommunicationPreferences",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HubspotCommunicationPreferencesError) Error() string {
	return e.Msg
}
