<?php
declare(strict_types=1);

// HubspotCommunicationPreferences SDK utility: result_headers

class HubspotCommunicationPreferencesResultHeaders
{
    public static function call(HubspotCommunicationPreferencesContext $ctx): ?HubspotCommunicationPreferencesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
