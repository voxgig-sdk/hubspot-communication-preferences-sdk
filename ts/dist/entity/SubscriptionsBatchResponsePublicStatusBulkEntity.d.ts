import { HubspotCommunicationPreferencesEntityBase } from '../HubspotCommunicationPreferencesEntityBase';
import type { HubspotCommunicationPreferencesSDK } from '../HubspotCommunicationPreferencesSDK';
import type { Control } from '../types';
import type { SubscriptionsBatchResponsePublicStatusBulk, SubscriptionsBatchResponsePublicStatusBulkCreateData } from '../HubspotCommunicationPreferencesTypes';
declare class SubscriptionsBatchResponsePublicStatusBulkEntity extends HubspotCommunicationPreferencesEntityBase<SubscriptionsBatchResponsePublicStatusBulk> {
    constructor(client: HubspotCommunicationPreferencesSDK, entopts: any);
    make(this: SubscriptionsBatchResponsePublicStatusBulkEntity): SubscriptionsBatchResponsePublicStatusBulkEntity;
    create(this: any, reqdata?: SubscriptionsBatchResponsePublicStatusBulkCreateData, ctrl?: Control): Promise<SubscriptionsBatchResponsePublicStatusBulkEntity>;
}
export { SubscriptionsBatchResponsePublicStatusBulkEntity };
