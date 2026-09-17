import { SubscriptionsActionResponseWithResultsPublicStatusEntity } from './entity/SubscriptionsActionResponseWithResultsPublicStatusEntity';
import { SubscriptionsActionResponseWithResultsPublicWideStatusEntity } from './entity/SubscriptionsActionResponseWithResultsPublicWideStatusEntity';
import { SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity } from './entity/SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity';
import { SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity } from './entity/SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity';
import { SubscriptionsBatchResponsePublicStatusEntity } from './entity/SubscriptionsBatchResponsePublicStatusEntity';
import { SubscriptionsBatchResponsePublicStatusBulkEntity } from './entity/SubscriptionsBatchResponsePublicStatusBulkEntity';
import { SubscriptionsBatchResponsePublicWideStatusBulkEntity } from './entity/SubscriptionsBatchResponsePublicWideStatusBulkEntity';
import { SubscriptionsLinkGenerationEntity } from './entity/SubscriptionsLinkGenerationEntity';
export type * from './HubspotCommunicationPreferencesTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { HubspotCommunicationPreferencesEntityBase } from './HubspotCommunicationPreferencesEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class HubspotCommunicationPreferencesSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    SubscriptionsActionResponseWithResultsPublicStatus(entopts?: Record<string, any>): SubscriptionsActionResponseWithResultsPublicStatusEntity;
    SubscriptionsActionResponseWithResultsPublicWideStatus(entopts?: Record<string, any>): SubscriptionsActionResponseWithResultsPublicWideStatusEntity;
    SubscriptionsActionResponseWithResultsSubscriptionDefinition(entopts?: Record<string, any>): SubscriptionsActionResponseWithResultsSubscriptionDefinitionEntity;
    SubscriptionsBatchResponsePublicBulkOptOutFromAll(entopts?: Record<string, any>): SubscriptionsBatchResponsePublicBulkOptOutFromAllEntity;
    SubscriptionsBatchResponsePublicStatus(entopts?: Record<string, any>): SubscriptionsBatchResponsePublicStatusEntity;
    SubscriptionsBatchResponsePublicStatusBulk(entopts?: Record<string, any>): SubscriptionsBatchResponsePublicStatusBulkEntity;
    SubscriptionsBatchResponsePublicWideStatusBulk(entopts?: Record<string, any>): SubscriptionsBatchResponsePublicWideStatusBulkEntity;
    SubscriptionsLinkGeneration(entopts?: Record<string, any>): SubscriptionsLinkGenerationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): HubspotCommunicationPreferencesSDK;
    tester(testopts?: any, sdkopts?: any): HubspotCommunicationPreferencesSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof HubspotCommunicationPreferencesSDK;
export { stdutil, config, BaseFeature, HubspotCommunicationPreferencesEntityBase, HubspotCommunicationPreferencesSDK, SDK, };
