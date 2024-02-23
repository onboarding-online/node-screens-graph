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
 * Position of label
 * @export
 */
export const LabelPosition = {
    Left: 'left',
    Right: 'right',
    Center: 'center'
} as const;
export type LabelPosition = typeof LabelPosition[keyof typeof LabelPosition];


export function LabelPositionFromJSON(json: any): LabelPosition {
    return LabelPositionFromJSONTyped(json, false);
}

export function LabelPositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LabelPosition {
    return json as LabelPosition;
}

export function LabelPositionToJSON(value?: LabelPosition | null): any {
    return value as any;
}

