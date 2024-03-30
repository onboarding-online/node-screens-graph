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
 * The screen type
 * @export
 */
export const ScreenType = {
    CustomScreen: 'CustomScreen',
    ScreenImageTitleSubtitles: 'ScreenImageTitleSubtitles',
    ScreenSlider: 'ScreenSlider',
    ScreenTableMultipleSelection: 'ScreenTableMultipleSelection',
    ScreenTableSingleSelection: 'ScreenTableSingleSelection',
    ScreenTitleSubtitleField: 'ScreenTitleSubtitleField',
    ScreenProgressBarTitle: 'ScreenProgressBarTitle',
    ScreenTwoColumnMultipleSelection: 'ScreenTwoColumnMultipleSelection',
    ScreenTwoColumnSingleSelection: 'ScreenTwoColumnSingleSelection',
    ScreenImageTitleSubtitleList: 'ScreenImageTitleSubtitleList',
    ScreenTitleSubtitleCalendar: 'ScreenTitleSubtitleCalendar',
    ScreenTitleSubtitlePicker: 'ScreenTitleSubtitlePicker',
    ScreenImageTitleSubtitlePicker: 'ScreenImageTitleSubtitlePicker',
    ScreenImageTitleSubtitleMultipleSelectionList: 'ScreenImageTitleSubtitleMultipleSelectionList',
    ScreenTooltipPermissions: 'ScreenTooltipPermissions',
    ScreenBasicPaywall: 'ScreenBasicPaywall'
} as const;
export type ScreenType = typeof ScreenType[keyof typeof ScreenType];


export function ScreenTypeFromJSON(json: any): ScreenType {
    return ScreenTypeFromJSONTyped(json, false);
}

export function ScreenTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenType {
    return json as ScreenType;
}

export function ScreenTypeToJSON(value?: ScreenType | null): any {
    return value as any;
}

