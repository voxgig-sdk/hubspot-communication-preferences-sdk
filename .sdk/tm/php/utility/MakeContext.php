<?php
declare(strict_types=1);

// HubspotCommunicationPreferences SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HubspotCommunicationPreferencesMakeContext
{
    public static function call(array $ctxmap, ?HubspotCommunicationPreferencesContext $basectx): HubspotCommunicationPreferencesContext
    {
        return new HubspotCommunicationPreferencesContext($ctxmap, $basectx);
    }
}
