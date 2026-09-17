<?php
declare(strict_types=1);

// HubspotCommunicationPreferences SDK base feature

class HubspotCommunicationPreferencesBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HubspotCommunicationPreferencesContext $ctx, array $options): void {}
    public function PostConstruct(HubspotCommunicationPreferencesContext $ctx): void {}
    public function PostConstructEntity(HubspotCommunicationPreferencesContext $ctx): void {}
    public function SetData(HubspotCommunicationPreferencesContext $ctx): void {}
    public function GetData(HubspotCommunicationPreferencesContext $ctx): void {}
    public function GetMatch(HubspotCommunicationPreferencesContext $ctx): void {}
    public function SetMatch(HubspotCommunicationPreferencesContext $ctx): void {}
    public function PrePoint(HubspotCommunicationPreferencesContext $ctx): void {}
    public function PreSpec(HubspotCommunicationPreferencesContext $ctx): void {}
    public function PreRequest(HubspotCommunicationPreferencesContext $ctx): void {}
    public function PreResponse(HubspotCommunicationPreferencesContext $ctx): void {}
    public function PreResult(HubspotCommunicationPreferencesContext $ctx): void {}
    public function PreDone(HubspotCommunicationPreferencesContext $ctx): void {}
    public function PreUnexpected(HubspotCommunicationPreferencesContext $ctx): void {}
}
