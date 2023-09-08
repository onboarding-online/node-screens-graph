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
 * Button kind
 * @export
 */
export const ButtonKind = {
    Text: 'text',
    Image: 'image'
} as const;
export type ButtonKind = typeof ButtonKind[keyof typeof ButtonKind];


export function ButtonKindFromJSON(json: any): ButtonKind {
    return ButtonKindFromJSONTyped(json, false);
}

export function ButtonKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): ButtonKind {
    return json as ButtonKind;
}

export function ButtonKindToJSON(value?: ButtonKind | null): any {
    return value as any;
}

