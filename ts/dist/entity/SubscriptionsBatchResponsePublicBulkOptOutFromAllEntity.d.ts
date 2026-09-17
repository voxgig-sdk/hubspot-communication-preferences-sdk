import { HubspotCommunicationPreferencesEntityBase } from '../HubspotCommunicationPreferencesEntityBase';
import type { HubspotCommunicationPreferencesSDK } from '../HubspotCommunicationPreferencesSDK';
import type { Control } from '../types';
import type { SubscriptionsBatchResponsePublicBulkOptOutFromAll, SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateData } from '../HubspotCommunicationPreferencesTypes';
declare class SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity extends HubspotCommunicationPreferencesEntityBase<SubscriptionsBatchResponsePublicBulkOptOutFromAll> {
    constructor(client: HubspotCommunicationPreferencesSDK, entopts: any);
    make(this: SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity): SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity;
    create(this: any, reqdata?: SubscriptionsBatchResponsePublicBulkOptOutFromAllCreateData, ctrl?: Control): Promise<SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity>;
}
export { SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity };
