/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Enum of all footer elements
 * @export
 */
export const FooterElement = {
    Button1: 'Button1',
    Button2: 'Button2'
} as const;
export type FooterElement = typeof FooterElement[keyof typeof FooterElement];


export function FooterElementFromJSON(json: any): FooterElement {
    return FooterElementFromJSONTyped(json, false);
}

export function FooterElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): FooterElement {
    return json as FooterElement;
}

export function FooterElementToJSON(value?: FooterElement | null): any {
    return value as any;
}

