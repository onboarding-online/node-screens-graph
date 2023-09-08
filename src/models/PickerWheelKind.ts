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
 * Picker wheel kind
 * @export
 */
export const PickerWheelKind = {
    List: 'list',
    Range: 'range'
} as const;
export type PickerWheelKind = typeof PickerWheelKind[keyof typeof PickerWheelKind];


export function PickerWheelKindFromJSON(json: any): PickerWheelKind {
    return PickerWheelKindFromJSONTyped(json, false);
}

export function PickerWheelKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickerWheelKind {
    return json as PickerWheelKind;
}

export function PickerWheelKindToJSON(value?: PickerWheelKind | null): any {
    return value as any;
}

