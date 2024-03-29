/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Blur kind
 * @export
 */
export const BlurKind = {
    BlurKind1: 'BlurKind1',
    BlurKind2: 'BlurKind2',
    BlurKind3: 'BlurKind3',
    BlurKind4: 'BlurKind4',
    BlurKind5: 'BlurKind5',
    BlurKind6: 'BlurKind6',
    BlurKind7: 'BlurKind7',
    BlurKind8: 'BlurKind8',
    BlurKind9: 'BlurKind9',
    BlurKind10: 'BlurKind10'
} as const;
export type BlurKind = typeof BlurKind[keyof typeof BlurKind];


export function BlurKindFromJSON(json: any): BlurKind {
    return BlurKindFromJSONTyped(json, false);
}

export function BlurKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlurKind {
    return json as BlurKind;
}

export function BlurKindToJSON(value?: BlurKind | null): any {
    return value as any;
}

