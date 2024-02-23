/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Enum of all main screen elements
 * @export
 */
export const ScreenElement = {
    NavigationBar: 'NavigationBar',
    Image: 'Image',
    Video: 'Video',
    Title: 'Title',
    Subtitle: 'Subtitle',
    Subtitle1: 'Subtitle1',
    Subtitle2: 'Subtitle2',
    Picker: 'Picker',
    Calendar: 'Calendar',
    Field: 'Field',
    SingleSelectionList: 'SingleSelectionList',
    MultipleSelectionList: 'MultipleSelectionList',
    TwoColumnSingleSelectionList: 'TwoColumnSingleSelectionList',
    TwoColumnMultipleSelectionList: 'TwoColumnMultipleSelectionList',
    RegularList: 'RegularList',
    ProgressBar: 'ProgressBar',
    Slider: 'Slider',
    Footer: 'Footer',
    Tooltip: 'Tooltip'
} as const;
export type ScreenElement = typeof ScreenElement[keyof typeof ScreenElement];


export function ScreenElementFromJSON(json: any): ScreenElement {
    return ScreenElementFromJSONTyped(json, false);
}

export function ScreenElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenElement {
    return json as ScreenElement;
}

export function ScreenElementToJSON(value?: ScreenElement | null): any {
    return value as any;
}

