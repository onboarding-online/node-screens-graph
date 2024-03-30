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
 * Combination of fields for two column single selection list item
 * @export
 */
export const TwoColumnSingleSelectionListItemType = {
    Tittle: 'Tittle',
    TitleSubtitle: 'TitleSubtitle',
    SmallImageTitle: 'SmallImageTitle',
    MediumImageTitle: 'MediumImageTitle',
    FullImage: 'FullImage',
    BigImageTitle: 'BigImageTitle'
} as const;
export type TwoColumnSingleSelectionListItemType = typeof TwoColumnSingleSelectionListItemType[keyof typeof TwoColumnSingleSelectionListItemType];


export function TwoColumnSingleSelectionListItemTypeFromJSON(json: any): TwoColumnSingleSelectionListItemType {
    return TwoColumnSingleSelectionListItemTypeFromJSONTyped(json, false);
}

export function TwoColumnSingleSelectionListItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwoColumnSingleSelectionListItemType {
    return json as TwoColumnSingleSelectionListItemType;
}

export function TwoColumnSingleSelectionListItemTypeToJSON(value?: TwoColumnSingleSelectionListItemType | null): any {
    return value as any;
}

