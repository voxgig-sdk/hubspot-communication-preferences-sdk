<?php
declare(strict_types=1);

// HubspotCommunicationPreferences SDK utility: result_body

class HubspotCommunicationPreferencesResultBody
{
    public static function call(HubspotCommunicationPreferencesContext $ctx): ?HubspotCommunicationPreferencesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
