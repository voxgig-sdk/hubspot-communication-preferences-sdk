import { HubspotCommunicationPreferencesEntityBase } from '../HubspotCommunicationPreferencesEntityBase';
import type { HubspotCommunicationPreferencesSDK } from '../HubspotCommunicationPreferencesSDK';
import type { Control } from '../types';
import type { SubscriptionsActionResponseWithResultsSubscriptionDefinition, SubscriptionsActionResponseWithResultsSubscriptionDefinitionListMatch } from '../HubspotCommunicationPreferencesTypes';
declare class SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity extends HubspotCommunicationPreferencesEntityBase<SubscriptionsActionResponseWithResultsSubscriptionDefinition> {
    constructor(client: HubspotCommunicationPreferencesSDK, entopts: any);
    make(this: SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity): SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity;
    list(this: any, reqmatch?: SubscriptionsActionResponseWithResultsSubscriptionDefinitionListMatch, ctrl?: Control): Promise<SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity[]>;
}
export { SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity };
