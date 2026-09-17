import { HubspotCommunicationPreferencesEntityBase } from '../HubspotCommunicationPreferencesEntityBase';
import type { HubspotCommunicationPreferencesSDK } from '../HubspotCommunicationPreferencesSDK';
import type { Control } from '../types';
import type { SubscriptionsActionResponseWithResultsPublicStatus, SubscriptionsActionResponseWithResultsPublicStatusLoadMatch, SubscriptionsActionResponseWithResultsPublicStatusCreateData } from '../HubspotCommunicationPreferencesTypes';
declare class SubscriptionsActionResponseWithResultsPublicStatusEntity extends HubspotCommunicationPreferencesEntityBase<SubscriptionsActionResponseWithResultsPublicStatus> {
    constructor(client: HubspotCommunicationPreferencesSDK, entopts: any);
    make(this: SubscriptionsActionResponseWithResultsPublicStatusEntity): SubscriptionsActionResponseWithResultsPublicStatusEntity;
    load(this: any, reqmatch?: SubscriptionsActionResponseWithResultsPublicStatusLoadMatch, ctrl?: Control): Promise<SubscriptionsActionResponseWithResultsPublicStatusEntity>;
    create(this: any, reqdata?: SubscriptionsActionResponseWithResultsPublicStatusCreateData, ctrl?: Control): Promise<SubscriptionsActionResponseWithResultsPublicStatusEntity>;
}
export { SubscriptionsActionResponseWithResultsPublicStatusEntity };
