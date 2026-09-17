# HubspotCommunicationPreferences SDK exists test

import pytest
from hubspotcommunicationpreferences_sdk import HubspotCommunicationPreferencesSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HubspotCommunicationPreferencesSDK.test(None, None)
        assert testsdk is not None
