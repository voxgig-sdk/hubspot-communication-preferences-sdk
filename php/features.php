<?php
declare(strict_types=1);

// HubspotCommunicationPreferences SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/DebugFeature.php';
require_once __DIR__ . '/feature/IdempotencyFeature.php';
require_once __DIR__ . '/feature/MetricsFeature.php';
require_once __DIR__ . '/feature/PagingFeature.php';
require_once __DIR__ . '/feature/RatelimitFeature.php';
require_once __DIR__ . '/feature/RetryFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';
require_once __DIR__ . '/feature/TimeoutFeature.php';


class HubspotCommunicationPreferencesFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new HubspotCommunicationPreferencesBaseFeature();
            case "debug":
                return new HubspotCommunicationPreferencesDebugFeature();
            case "idempotency":
                return new HubspotCommunicationPreferencesIdempotencyFeature();
            case "metrics":
                return new HubspotCommunicationPreferencesMetricsFeature();
            case "paging":
                return new HubspotCommunicationPreferencesPagingFeature();
            case "ratelimit":
                return new HubspotCommunicationPreferencesRatelimitFeature();
            case "retry":
                return new HubspotCommunicationPreferencesRetryFeature();
            case "test":
                return new HubspotCommunicationPreferencesTestFeature();
            case "timeout":
                return new HubspotCommunicationPreferencesTimeoutFeature();
            default:
                return new HubspotCommunicationPreferencesBaseFeature();
        }
    }

    /**
     * Does a generated feature class back this name? False for a name only
     * an options extend instance can supply (the station adopt path) - the
     * constructor uses this to skip make_feature for such names instead of
     * adding a stray BaseFeature.
     */
    public static function has_feature(string $name): bool
    {
        switch ($name) {
            case "base":
            case "debug":
            case "idempotency":
            case "metrics":
            case "paging":
            case "ratelimit":
            case "retry":
            case "test":
            case "timeout":
                return true;
            default:
                return false;
        }
    }
}
