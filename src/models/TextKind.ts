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
 * Text kind
 * @export
 */
export const TextKind = {
    Default: 'default',
    Template: 'template'
} as const;
export type TextKind = typeof TextKind[keyof typeof TextKind];


export function TextKindFromJSON(json: any): TextKind {
    return TextKindFromJSONTyped(json, false);
}

export function TextKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextKind {
    return json as TextKind;
}

export function TextKindToJSON(value?: TextKind | null): any {
    return value as any;
}

