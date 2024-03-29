/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Close button horizontal alignment
 * @export
 */
export const CloseHorizontalAlignment = {
    Left: 'left',
    Right: 'right'
} as const;
export type CloseHorizontalAlignment = typeof CloseHorizontalAlignment[keyof typeof CloseHorizontalAlignment];


export function CloseHorizontalAlignmentFromJSON(json: any): CloseHorizontalAlignment {
    return CloseHorizontalAlignmentFromJSONTyped(json, false);
}

export function CloseHorizontalAlignmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloseHorizontalAlignment {
    return json as CloseHorizontalAlignment;
}

export function CloseHorizontalAlignmentToJSON(value?: CloseHorizontalAlignment | null): any {
    return value as any;
}

