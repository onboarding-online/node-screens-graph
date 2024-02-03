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
 * Describe of action kind
 * @export
 */
export const ActionKind = {
    Purchase: 'Purchase',
    Restore: 'Restore',
    Next: 'Next',
    Back: 'Back',
    Finish: 'Finish',
    Dummy: 'Dummy'
} as const;
export type ActionKind = typeof ActionKind[keyof typeof ActionKind];


export function ActionKindFromJSON(json: any): ActionKind {
    return ActionKindFromJSONTyped(json, false);
}

export function ActionKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionKind {
    return json as ActionKind;
}

export function ActionKindToJSON(value?: ActionKind | null): any {
    return value as any;
}

