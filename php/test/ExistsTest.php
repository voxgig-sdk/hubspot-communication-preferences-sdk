<?php
declare(strict_types=1);

// HubspotCommunicationPreferences SDK exists test

require_once __DIR__ . '/../hubspotcommunicationpreferences_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HubspotCommunicationPreferencesSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
