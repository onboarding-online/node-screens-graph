/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Variants of subscription view
 * @export
 */
export const SubscriptionViewKind = {
    Vertical: 'Vertical',
    Horizontal: 'Horizontal',
    SubscriptionViewKind1: 'SubscriptionViewKind1',
    SubscriptionViewKind2: 'SubscriptionViewKind2',
    SubscriptionViewKind3: 'SubscriptionViewKind3',
    SubscriptionViewKind4: 'SubscriptionViewKind4',
    SubscriptionViewKind5: 'SubscriptionViewKind5'
} as const;
export type SubscriptionViewKind = typeof SubscriptionViewKind[keyof typeof SubscriptionViewKind];


export function SubscriptionViewKindFromJSON(json: any): SubscriptionViewKind {
    return SubscriptionViewKindFromJSONTyped(json, false);
}

export function SubscriptionViewKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionViewKind {
    return json as SubscriptionViewKind;
}

export function SubscriptionViewKindToJSON(value?: SubscriptionViewKind | null): any {
    return value as any;
}

