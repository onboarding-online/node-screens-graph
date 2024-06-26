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
 * Combination of fields for two column multiple selection list item
 * @export
 */
export const TwoColumnMultipleSelectionListItemType = {
    Tittle: 'Tittle',
    TitleSubtitle: 'TitleSubtitle',
    SmallImageTitle: 'SmallImageTitle',
    MediumImageTitle: 'MediumImageTitle',
    FullImage: 'FullImage',
    BigImageTitle: 'BigImageTitle'
} as const;
export type TwoColumnMultipleSelectionListItemType = typeof TwoColumnMultipleSelectionListItemType[keyof typeof TwoColumnMultipleSelectionListItemType];


export function TwoColumnMultipleSelectionListItemTypeFromJSON(json: any): TwoColumnMultipleSelectionListItemType {
    return TwoColumnMultipleSelectionListItemTypeFromJSONTyped(json, false);
}

export function TwoColumnMultipleSelectionListItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwoColumnMultipleSelectionListItemType {
    return json as TwoColumnMultipleSelectionListItemType;
}

export function TwoColumnMultipleSelectionListItemTypeToJSON(value?: TwoColumnMultipleSelectionListItemType | null): any {
    return value as any;
}

