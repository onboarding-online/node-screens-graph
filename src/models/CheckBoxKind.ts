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
 * Kind of checkbox
 * @export
 */
export const CheckBoxKind = {
    Square: 'square',
    Circle: 'circle'
} as const;
export type CheckBoxKind = typeof CheckBoxKind[keyof typeof CheckBoxKind];


export function CheckBoxKindFromJSON(json: any): CheckBoxKind {
    return CheckBoxKindFromJSONTyped(json, false);
}

export function CheckBoxKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckBoxKind {
    return json as CheckBoxKind;
}

export function CheckBoxKindToJSON(value?: CheckBoxKind | null): any {
    return value as any;
}

