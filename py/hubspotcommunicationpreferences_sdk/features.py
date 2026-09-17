# HubspotCommunicationPreferences SDK feature factory

from hubspotcommunicationpreferences_sdk.feature.base_feature import HubspotCommunicationPreferencesBaseFeature
from hubspotcommunicationpreferences_sdk.feature.debug_feature import HubspotCommunicationPreferencesDebugFeature
from hubspotcommunicationpreferences_sdk.feature.idempotency_feature import HubspotCommunicationPreferencesIdempotencyFeature
from hubspotcommunicationpreferences_sdk.feature.metrics_feature import HubspotCommunicationPreferencesMetricsFeature
from hubspotcommunicationpreferences_sdk.feature.paging_feature import HubspotCommunicationPreferencesPagingFeature
from hubspotcommunicationpreferences_sdk.feature.ratelimit_feature import HubspotCommunicationPreferencesRatelimitFeature
from hubspotcommunicationpreferences_sdk.feature.retry_feature import HubspotCommunicationPreferencesRetryFeature
from hubspotcommunicationpreferences_sdk.feature.test_feature import HubspotCommunicationPreferencesTestFeature
from hubspotcommunicationpreferences_sdk.feature.timeout_feature import HubspotCommunicationPreferencesTimeoutFeature


_FEATURES = {
    "base": lambda: HubspotCommunicationPreferencesBaseFeature(),
    "debug": lambda: HubspotCommunicationPreferencesDebugFeature(),
    "idempotency": lambda: HubspotCommunicationPreferencesIdempotencyFeature(),
    "metrics": lambda: HubspotCommunicationPreferencesMetricsFeature(),
    "paging": lambda: HubspotCommunicationPreferencesPagingFeature(),
    "ratelimit": lambda: HubspotCommunicationPreferencesRatelimitFeature(),
    "retry": lambda: HubspotCommunicationPreferencesRetryFeature(),
    "test": lambda: HubspotCommunicationPreferencesTestFeature(),
    "timeout": lambda: HubspotCommunicationPreferencesTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
