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
 * Basic footer kind
 * @export
 */
export const BasicFooterKind = {
    Vertical: 'Vertical',
    Horizontal: 'Horizontal',
    BasicFooterKind1: 'BasicFooterKind1',
    BasicFooterKind2: 'BasicFooterKind2',
    BasicFooterKind3: 'BasicFooterKind3',
    BasicFooterKind4: 'BasicFooterKind4',
    BasicFooterKind5: 'BasicFooterKind5'
} as const;
export type BasicFooterKind = typeof BasicFooterKind[keyof typeof BasicFooterKind];


export function BasicFooterKindFromJSON(json: any): BasicFooterKind {
    return BasicFooterKindFromJSONTyped(json, false);
}

export function BasicFooterKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicFooterKind {
    return json as BasicFooterKind;
}

export function BasicFooterKindToJSON(value?: BasicFooterKind | null): any {
    return value as any;
}
