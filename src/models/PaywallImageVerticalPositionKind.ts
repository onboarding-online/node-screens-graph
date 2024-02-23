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
 * Paywall image vertical position kind
 * @export
 */
export const PaywallImageVerticalPositionKind = {
    HeaderTitle: 'HeaderTitle',
    HeaderSubtitle: 'HeaderSubtitle',
    HeaderListTop: 'HeaderListTop',
    HeaderListBottom: 'HeaderListBottom',
    HeaderBottom: 'HeaderBottom',
    HeaderCenter: 'HeaderCenter',
    HeaderTop: 'HeaderTop',
    BodyBottom: 'BodyBottom',
    FooterTop: 'FooterTop',
    PaywallImageVerticalPositionKind1: 'PaywallImageVerticalPositionKind1',
    PaywallImageVerticalPositionKind2: 'PaywallImageVerticalPositionKind2',
    PaywallImageVerticalPositionKind3: 'PaywallImageVerticalPositionKind3',
    PaywallImageVerticalPositionKind4: 'PaywallImageVerticalPositionKind4',
    PaywallImageVerticalPositionKind5: 'PaywallImageVerticalPositionKind5'
} as const;
export type PaywallImageVerticalPositionKind = typeof PaywallImageVerticalPositionKind[keyof typeof PaywallImageVerticalPositionKind];


export function PaywallImageVerticalPositionKindFromJSON(json: any): PaywallImageVerticalPositionKind {
    return PaywallImageVerticalPositionKindFromJSONTyped(json, false);
}

export function PaywallImageVerticalPositionKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaywallImageVerticalPositionKind {
    return json as PaywallImageVerticalPositionKind;
}

export function PaywallImageVerticalPositionKindToJSON(value?: PaywallImageVerticalPositionKind | null): any {
    return value as any;
}

