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
 * Button visibility
 * @export
 */
export const ButtonVisibility = {
    Default: 'default',
    DisabledUntilValueEntered: 'disabledUntilValueEntered',
    HiddenUntilValueEntered: 'hiddenUntilValueEntered'
} as const;
export type ButtonVisibility = typeof ButtonVisibility[keyof typeof ButtonVisibility];


export function ButtonVisibilityFromJSON(json: any): ButtonVisibility {
    return ButtonVisibilityFromJSONTyped(json, false);
}

export function ButtonVisibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ButtonVisibility {
    return json as ButtonVisibility;
}

export function ButtonVisibilityToJSON(value?: ButtonVisibility | null): any {
    return value as any;
}

