/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Purchase flag
 * @export
 */
export const PurchaseFlag = {
    ShouldCloseAfterRestore: 'ShouldCloseAfterRestore',
    ShouldCloseAfterSubscriptionError: 'ShouldCloseAfterSubscriptionError'
} as const;
export type PurchaseFlag = typeof PurchaseFlag[keyof typeof PurchaseFlag];


export function PurchaseFlagFromJSON(json: any): PurchaseFlag {
    return PurchaseFlagFromJSONTyped(json, false);
}

export function PurchaseFlagFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseFlag {
    return json as PurchaseFlag;
}

export function PurchaseFlagToJSON(value?: PurchaseFlag | null): any {
    return value as any;
}

