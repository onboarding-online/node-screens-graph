/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Screen transition kind
 * @export
 */
export const ScreenTransitionKind = {
    Default: 'Default',
    Modal: 'Modal'
} as const;
export type ScreenTransitionKind = typeof ScreenTransitionKind[keyof typeof ScreenTransitionKind];


export function ScreenTransitionKindFromJSON(json: any): ScreenTransitionKind {
    return ScreenTransitionKindFromJSONTyped(json, false);
}

export function ScreenTransitionKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTransitionKind {
    return json as ScreenTransitionKind;
}

export function ScreenTransitionKindToJSON(value?: ScreenTransitionKind | null): any {
    return value as any;
}

