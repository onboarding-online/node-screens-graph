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
 * Combination of fields for single selection list item
 * @export
 */
export const SingleSelectionListItemType = {
    ImageTitleSubtitle: 'ImageTitleSubtitle',
    TitleSubtitleImage: 'TitleSubtitleImage',
    TitleSubtitle: 'TitleSubtitle',
    TitleImage: 'TitleImage',
    ImageTitle: 'ImageTitle',
    Title: 'Title'
} as const;
export type SingleSelectionListItemType = typeof SingleSelectionListItemType[keyof typeof SingleSelectionListItemType];


export function SingleSelectionListItemTypeFromJSON(json: any): SingleSelectionListItemType {
    return SingleSelectionListItemTypeFromJSONTyped(json, false);
}

export function SingleSelectionListItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SingleSelectionListItemType {
    return json as SingleSelectionListItemType;
}

export function SingleSelectionListItemTypeToJSON(value?: SingleSelectionListItemType | null): any {
    return value as any;
}

