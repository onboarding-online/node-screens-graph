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
 * Combination of fields for regular list item
 * @export
 */
export const RegularListItemType = {
    ImageTitle: 'ImageTitle',
    TitleImage: 'TitleImage'
} as const;
export type RegularListItemType = typeof RegularListItemType[keyof typeof RegularListItemType];


export function RegularListItemTypeFromJSON(json: any): RegularListItemType {
    return RegularListItemTypeFromJSONTyped(json, false);
}

export function RegularListItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegularListItemType {
    return json as RegularListItemType;
}

export function RegularListItemTypeToJSON(value?: RegularListItemType | null): any {
    return value as any;
}

