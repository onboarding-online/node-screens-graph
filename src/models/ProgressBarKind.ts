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
 * Kind of progress bar
 * @export
 */
export const ProgressBarKind = {
    Circle: 'circle',
    Line: 'line'
} as const;
export type ProgressBarKind = typeof ProgressBarKind[keyof typeof ProgressBarKind];


export function ProgressBarKindFromJSON(json: any): ProgressBarKind {
    return ProgressBarKindFromJSONTyped(json, false);
}

export function ProgressBarKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgressBarKind {
    return json as ProgressBarKind;
}

export function ProgressBarKindToJSON(value?: ProgressBarKind | null): any {
    return value as any;
}

