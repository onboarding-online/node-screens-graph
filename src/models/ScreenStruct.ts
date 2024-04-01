/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    CustomScreen,
    instanceOfCustomScreen,
    CustomScreenFromJSON,
    CustomScreenFromJSONTyped,
    CustomScreenToJSON,
} from './CustomScreen';
import {
    ScreenBasicPaywall,
    instanceOfScreenBasicPaywall,
    ScreenBasicPaywallFromJSON,
    ScreenBasicPaywallFromJSONTyped,
    ScreenBasicPaywallToJSON,
} from './ScreenBasicPaywall';
import {
    ScreenImageTitleSubtitleList,
    instanceOfScreenImageTitleSubtitleList,
    ScreenImageTitleSubtitleListFromJSON,
    ScreenImageTitleSubtitleListFromJSONTyped,
    ScreenImageTitleSubtitleListToJSON,
} from './ScreenImageTitleSubtitleList';
import {
    ScreenImageTitleSubtitleMultipleSelectionList,
    instanceOfScreenImageTitleSubtitleMultipleSelectionList,
    ScreenImageTitleSubtitleMultipleSelectionListFromJSON,
    ScreenImageTitleSubtitleMultipleSelectionListFromJSONTyped,
    ScreenImageTitleSubtitleMultipleSelectionListToJSON,
} from './ScreenImageTitleSubtitleMultipleSelectionList';
import {
    ScreenImageTitleSubtitlePicker,
    instanceOfScreenImageTitleSubtitlePicker,
    ScreenImageTitleSubtitlePickerFromJSON,
    ScreenImageTitleSubtitlePickerFromJSONTyped,
    ScreenImageTitleSubtitlePickerToJSON,
} from './ScreenImageTitleSubtitlePicker';
import {
    ScreenImageTitleSubtitles,
    instanceOfScreenImageTitleSubtitles,
    ScreenImageTitleSubtitlesFromJSON,
    ScreenImageTitleSubtitlesFromJSONTyped,
    ScreenImageTitleSubtitlesToJSON,
} from './ScreenImageTitleSubtitles';
import {
    ScreenProgressBarTitle,
    instanceOfScreenProgressBarTitle,
    ScreenProgressBarTitleFromJSON,
    ScreenProgressBarTitleFromJSONTyped,
    ScreenProgressBarTitleToJSON,
} from './ScreenProgressBarTitle';
import {
    ScreenSlider,
    instanceOfScreenSlider,
    ScreenSliderFromJSON,
    ScreenSliderFromJSONTyped,
    ScreenSliderToJSON,
} from './ScreenSlider';
import {
    ScreenTableMultipleSelection,
    instanceOfScreenTableMultipleSelection,
    ScreenTableMultipleSelectionFromJSON,
    ScreenTableMultipleSelectionFromJSONTyped,
    ScreenTableMultipleSelectionToJSON,
} from './ScreenTableMultipleSelection';
import {
    ScreenTableSingleSelection,
    instanceOfScreenTableSingleSelection,
    ScreenTableSingleSelectionFromJSON,
    ScreenTableSingleSelectionFromJSONTyped,
    ScreenTableSingleSelectionToJSON,
} from './ScreenTableSingleSelection';
import {
    ScreenTitleSubtitleCalendar,
    instanceOfScreenTitleSubtitleCalendar,
    ScreenTitleSubtitleCalendarFromJSON,
    ScreenTitleSubtitleCalendarFromJSONTyped,
    ScreenTitleSubtitleCalendarToJSON,
} from './ScreenTitleSubtitleCalendar';
import {
    ScreenTitleSubtitleField,
    instanceOfScreenTitleSubtitleField,
    ScreenTitleSubtitleFieldFromJSON,
    ScreenTitleSubtitleFieldFromJSONTyped,
    ScreenTitleSubtitleFieldToJSON,
} from './ScreenTitleSubtitleField';
import {
    ScreenTitleSubtitlePicker,
    instanceOfScreenTitleSubtitlePicker,
    ScreenTitleSubtitlePickerFromJSON,
    ScreenTitleSubtitlePickerFromJSONTyped,
    ScreenTitleSubtitlePickerToJSON,
} from './ScreenTitleSubtitlePicker';
import {
    ScreenTooltipPermissions,
    instanceOfScreenTooltipPermissions,
    ScreenTooltipPermissionsFromJSON,
    ScreenTooltipPermissionsFromJSONTyped,
    ScreenTooltipPermissionsToJSON,
} from './ScreenTooltipPermissions';
import {
    ScreenTwoColumnMultipleSelection,
    instanceOfScreenTwoColumnMultipleSelection,
    ScreenTwoColumnMultipleSelectionFromJSON,
    ScreenTwoColumnMultipleSelectionFromJSONTyped,
    ScreenTwoColumnMultipleSelectionToJSON,
} from './ScreenTwoColumnMultipleSelection';
import {
    ScreenTwoColumnSingleSelection,
    instanceOfScreenTwoColumnSingleSelection,
    ScreenTwoColumnSingleSelectionFromJSON,
    ScreenTwoColumnSingleSelectionFromJSONTyped,
    ScreenTwoColumnSingleSelectionToJSON,
} from './ScreenTwoColumnSingleSelection';

/**
 * @type ScreenStruct
 * Screen struct
 * @export
 */
export type ScreenStruct = CustomScreen | ScreenBasicPaywall | ScreenImageTitleSubtitleList | ScreenImageTitleSubtitleMultipleSelectionList | ScreenImageTitleSubtitlePicker | ScreenImageTitleSubtitles | ScreenProgressBarTitle | ScreenSlider | ScreenTableMultipleSelection | ScreenTableSingleSelection | ScreenTitleSubtitleCalendar | ScreenTitleSubtitleField | ScreenTitleSubtitlePicker | ScreenTooltipPermissions | ScreenTwoColumnMultipleSelection | ScreenTwoColumnSingleSelection;

export function ScreenStructFromJSON(json: any): ScreenStruct {
    return ScreenStructFromJSONTyped(json, false);
}

export function ScreenStructFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenStruct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...CustomScreenFromJSONTyped(json, true), ...ScreenBasicPaywallFromJSONTyped(json, true), ...ScreenImageTitleSubtitleListFromJSONTyped(json, true), ...ScreenImageTitleSubtitleMultipleSelectionListFromJSONTyped(json, true), ...ScreenImageTitleSubtitlePickerFromJSONTyped(json, true), ...ScreenImageTitleSubtitlesFromJSONTyped(json, true), ...ScreenProgressBarTitleFromJSONTyped(json, true), ...ScreenSliderFromJSONTyped(json, true), ...ScreenTableMultipleSelectionFromJSONTyped(json, true), ...ScreenTableSingleSelectionFromJSONTyped(json, true), ...ScreenTitleSubtitleCalendarFromJSONTyped(json, true), ...ScreenTitleSubtitleFieldFromJSONTyped(json, true), ...ScreenTitleSubtitlePickerFromJSONTyped(json, true), ...ScreenTooltipPermissionsFromJSONTyped(json, true), ...ScreenTwoColumnMultipleSelectionFromJSONTyped(json, true), ...ScreenTwoColumnSingleSelectionFromJSONTyped(json, true) };
}

export function ScreenStructToJSON(value?: ScreenStruct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfCustomScreen(value)) {
        return CustomScreenToJSON(value as CustomScreen);
    }
    if (instanceOfScreenBasicPaywall(value)) {
        return ScreenBasicPaywallToJSON(value as ScreenBasicPaywall);
    }
    if (instanceOfScreenImageTitleSubtitleList(value)) {
        return ScreenImageTitleSubtitleListToJSON(value as ScreenImageTitleSubtitleList);
    }
    if (instanceOfScreenImageTitleSubtitleMultipleSelectionList(value)) {
        return ScreenImageTitleSubtitleMultipleSelectionListToJSON(value as ScreenImageTitleSubtitleMultipleSelectionList);
    }
    if (instanceOfScreenImageTitleSubtitlePicker(value)) {
        return ScreenImageTitleSubtitlePickerToJSON(value as ScreenImageTitleSubtitlePicker);
    }
    if (instanceOfScreenImageTitleSubtitles(value)) {
        return ScreenImageTitleSubtitlesToJSON(value as ScreenImageTitleSubtitles);
    }
    if (instanceOfScreenProgressBarTitle(value)) {
        return ScreenProgressBarTitleToJSON(value as ScreenProgressBarTitle);
    }
    if (instanceOfScreenSlider(value)) {
        return ScreenSliderToJSON(value as ScreenSlider);
    }
    if (instanceOfScreenTableMultipleSelection(value)) {
        return ScreenTableMultipleSelectionToJSON(value as ScreenTableMultipleSelection);
    }
    if (instanceOfScreenTableSingleSelection(value)) {
        return ScreenTableSingleSelectionToJSON(value as ScreenTableSingleSelection);
    }
    if (instanceOfScreenTitleSubtitleCalendar(value)) {
        return ScreenTitleSubtitleCalendarToJSON(value as ScreenTitleSubtitleCalendar);
    }
    if (instanceOfScreenTitleSubtitleField(value)) {
        return ScreenTitleSubtitleFieldToJSON(value as ScreenTitleSubtitleField);
    }
    if (instanceOfScreenTitleSubtitlePicker(value)) {
        return ScreenTitleSubtitlePickerToJSON(value as ScreenTitleSubtitlePicker);
    }
    if (instanceOfScreenTooltipPermissions(value)) {
        return ScreenTooltipPermissionsToJSON(value as ScreenTooltipPermissions);
    }
    if (instanceOfScreenTwoColumnMultipleSelection(value)) {
        return ScreenTwoColumnMultipleSelectionToJSON(value as ScreenTwoColumnMultipleSelection);
    }
    if (instanceOfScreenTwoColumnSingleSelection(value)) {
        return ScreenTwoColumnSingleSelectionToJSON(value as ScreenTwoColumnSingleSelection);
    }

    return {};
}

