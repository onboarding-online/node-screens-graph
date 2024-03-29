/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Combination of fields for multiple selection list item
 * @export
 */
export const MultipleSelectionListItemType = {
    TitleSubtitleCheckbox: 'TitleSubtitleCheckbox',
    CheckboxTitleSubtitle: 'CheckboxTitleSubtitle',
    TitleSubtitle: 'TitleSubtitle',
    Title: 'Title',
    ImageTitleSubtitleCheckbox: 'ImageTitleSubtitleCheckbox',
    CheckboxTitleSubtitleImage: 'CheckboxTitleSubtitleImage',
    ImageTitleCheckbox: 'ImageTitleCheckbox',
    CheckboxTitleImage: 'CheckboxTitleImage',
    TitleCheckbox: 'TitleCheckbox',
    CheckboxTitle: 'CheckboxTitle',
    TitleImage: 'TitleImage',
    ImageTitle: 'ImageTitle',
    ImageTitleSubtitle: 'ImageTitleSubtitle',
    TitleSubtitleImage: 'TitleSubtitleImage'
} as const;
export type MultipleSelectionListItemType = typeof MultipleSelectionListItemType[keyof typeof MultipleSelectionListItemType];


export function MultipleSelectionListItemTypeFromJSON(json: any): MultipleSelectionListItemType {
    return MultipleSelectionListItemTypeFromJSONTyped(json, false);
}

export function MultipleSelectionListItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultipleSelectionListItemType {
    return json as MultipleSelectionListItemType;
}

export function MultipleSelectionListItemTypeToJSON(value?: MultipleSelectionListItemType | null): any {
    return value as any;
}

