import { HubspotCommunicationPreferencesEntityBase } from '../HubspotCommunicationPreferencesEntityBase';
import type { HubspotCommunicationPreferencesSDK } from '../HubspotCommunicationPreferencesSDK';
import type { Control } from '../types';
import type { SubscriptionsLinkGeneration, SubscriptionsLinkGenerationCreateData } from '../HubspotCommunicationPreferencesTypes';
declare class SubscriptionsLinkGenerationEntity extends HubspotCommunicationPreferencesEntityBase<SubscriptionsLinkGeneration> {
    constructor(client: HubspotCommunicationPreferencesSDK, entopts: any);
    make(this: SubscriptionsLinkGenerationEntity): SubscriptionsLinkGenerationEntity;
    create(this: any, reqdata?: SubscriptionsLinkGenerationCreateData, ctrl?: Control): Promise<SubscriptionsLinkGenerationEntity>;
}
export { SubscriptionsLinkGenerationEntity };
