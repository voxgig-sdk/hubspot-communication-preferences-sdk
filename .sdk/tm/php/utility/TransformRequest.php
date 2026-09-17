<?php
declare(strict_types=1);

// HubspotCommunicationPreferences SDK utility: transform_request

require_once __DIR__ . '/../core/Helpers.php';

class HubspotCommunicationPreferencesTransformRequest
{
    public static function call(HubspotCommunicationPreferencesContext $ctx): mixed
    {
        $spec = $ctx->spec;
        $point = $ctx->point;
        if ($spec) {
            $spec->step = 'reqform';
        }
        $transform = HubspotCommunicationPreferencesHelpers::to_map(\Voxgig\Struct\Struct::getprop($point, 'transform'));
        if (!$transform) {
            return $ctx->reqdata;
        }
        $reqform = \Voxgig\Struct\Struct::getprop($transform, 'req');
        if (!$reqform) {
            return $ctx->reqdata;
        }
        return \Voxgig\Struct\Struct::transform(['reqdata' => $ctx->reqdata], $reqform);
    }
}
