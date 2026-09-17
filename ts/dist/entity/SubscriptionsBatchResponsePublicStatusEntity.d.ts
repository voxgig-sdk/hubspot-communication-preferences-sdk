import { HubspotCommunicationPreferencesEntityBase } from '../HubspotCommunicationPreferencesEntityBase';
import type { HubspotCommunicationPreferencesSDK } from '../HubspotCommunicationPreferencesSDK';
import type { Control } from '../types';
import type { SubscriptionsBatchResponsePublicStatus, SubscriptionsBatchResponsePublicStatusCreateData } from '../HubspotCommunicationPreferencesTypes';
declare class SubscriptionsBatchResponsePublicStatusEntity extends HubspotCommunicationPreferencesEntityBase<SubscriptionsBatchResponsePublicStatus> {
    constructor(client: HubspotCommunicationPreferencesSDK, entopts: any);
    make(this: SubscriptionsBatchResponsePublicStatusEntity): SubscriptionsBatchResponsePublicStatusEntity;
    create(this: any, reqdata?: SubscriptionsBatchResponsePublicStatusCreateData, ctrl?: Control): Promise<SubscriptionsBatchResponsePublicStatusEntity>;
}
export { SubscriptionsBatchResponsePublicStatusEntity };
