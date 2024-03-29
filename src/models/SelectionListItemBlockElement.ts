/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Possible elements on selection list
 * @export
 */
export const SelectionListItemBlockElement = {
    Image: 'Image',
    Title: 'Title',
    Subtitle: 'Subtitle',
    CheckBox: 'CheckBox'
} as const;
export type SelectionListItemBlockElement = typeof SelectionListItemBlockElement[keyof typeof SelectionListItemBlockElement];


export function SelectionListItemBlockElementFromJSON(json: any): SelectionListItemBlockElement {
    return SelectionListItemBlockElementFromJSONTyped(json, false);
}

export function SelectionListItemBlockElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectionListItemBlockElement {
    return json as SelectionListItemBlockElement;
}

export function SelectionListItemBlockElementToJSON(value?: SelectionListItemBlockElement | null): any {
    return value as any;
}

