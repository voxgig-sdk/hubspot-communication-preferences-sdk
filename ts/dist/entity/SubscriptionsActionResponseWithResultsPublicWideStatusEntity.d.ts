import { HubspotCommunicationPreferencesEntityBase } from '../HubspotCommunicationPreferencesEntityBase';
import type { HubspotCommunicationPreferencesSDK } from '../HubspotCommunicationPreferencesSDK';
import type { Control } from '../types';
import type { SubscriptionsActionResponseWithResultsPublicWideStatus, SubscriptionsActionResponseWithResultsPublicWideStatusListMatch } from '../HubspotCommunicationPreferencesTypes';
declare class SubscriptionsActionResponseWithResultsPublicWideStatusEntity extends HubspotCommunicationPreferencesEntityBase<SubscriptionsActionResponseWithResultsPublicWideStatus> {
    constructor(client: HubspotCommunicationPreferencesSDK, entopts: any);
    make(this: SubscriptionsActionResponseWithResultsPublicWideStatusEntity): SubscriptionsActionResponseWithResultsPublicWideStatusEntity;
    list(this: any, reqmatch?: SubscriptionsActionResponseWithResultsPublicWideStatusListMatch, ctrl?: Control): Promise<SubscriptionsActionResponseWithResultsPublicWideStatusEntity[]>;
}
export { SubscriptionsActionResponseWithResultsPublicWideStatusEntity };
