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
 * Enum of all navigation bar elements
 * @export
 */
export const NavigationBarElement = {
    Back: 'Back',
    Skip: 'Skip',
    PageIndicator: 'PageIndicator'
} as const;
export type NavigationBarElement = typeof NavigationBarElement[keyof typeof NavigationBarElement];


export function NavigationBarElementFromJSON(json: any): NavigationBarElement {
    return NavigationBarElementFromJSONTyped(json, false);
}

export function NavigationBarElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): NavigationBarElement {
    return json as NavigationBarElement;
}

export function NavigationBarElementToJSON(value?: NavigationBarElement | null): any {
    return value as any;
}

