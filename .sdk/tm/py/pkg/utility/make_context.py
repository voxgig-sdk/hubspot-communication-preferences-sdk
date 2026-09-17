# HubspotCommunicationPreferences SDK utility: make_context

from projectname_sdk.core.context import HubspotCommunicationPreferencesContext


def make_context_util(ctxmap, basectx):
    return HubspotCommunicationPreferencesContext(ctxmap, basectx)
