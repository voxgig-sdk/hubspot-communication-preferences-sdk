import { Context } from './Context';
declare class HubspotCommunicationPreferencesError extends Error {
    isHubspotCommunicationPreferencesError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { HubspotCommunicationPreferencesError };
