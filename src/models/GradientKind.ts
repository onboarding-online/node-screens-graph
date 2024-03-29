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
 * Gradient kind
 * @export
 */
export const GradientKind = {
    GradientKind1: 'GradientKind1',
    GradientKind2: 'GradientKind2',
    GradientKind3: 'GradientKind3',
    GradientKind4: 'GradientKind4',
    GradientKind5: 'GradientKind5',
    GradientKind6: 'GradientKind6',
    GradientKind7: 'GradientKind7',
    GradientKind8: 'GradientKind8',
    GradientKind9: 'GradientKind9',
    GradientKind10: 'GradientKind10'
} as const;
export type GradientKind = typeof GradientKind[keyof typeof GradientKind];


export function GradientKindFromJSON(json: any): GradientKind {
    return GradientKindFromJSONTyped(json, false);
}

export function GradientKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): GradientKind {
    return json as GradientKind;
}

export function GradientKindToJSON(value?: GradientKind | null): any {
    return value as any;
}

