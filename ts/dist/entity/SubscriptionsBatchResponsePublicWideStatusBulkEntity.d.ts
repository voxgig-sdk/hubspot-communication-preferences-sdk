import { HubspotCommunicationPreferencesEntityBase } from '../HubspotCommunicationPreferencesEntityBase';
import type { HubspotCommunicationPreferencesSDK } from '../HubspotCommunicationPreferencesSDK';
import type { Control } from '../types';
import type { SubscriptionsBatchResponsePublicWideStatusBulk, SubscriptionsBatchResponsePublicWideStatusBulkCreateData } from '../HubspotCommunicationPreferencesTypes';
declare class SubscriptionsBatchResponsePublicWideStatusBulkEntity extends HubspotCommunicationPreferencesEntityBase<SubscriptionsBatchResponsePublicWideStatusBulk> {
    constructor(client: HubspotCommunicationPreferencesSDK, entopts: any);
    make(this: SubscriptionsBatchResponsePublicWideStatusBulkEntity): SubscriptionsBatchResponsePublicWideStatusBulkEntity;
    create(this: any, reqdata?: SubscriptionsBatchResponsePublicWideStatusBulkCreateData, ctrl?: Control): Promise<SubscriptionsBatchResponsePublicWideStatusBulkEntity>;
}
export { SubscriptionsBatchResponsePublicWideStatusBulkEntity };
