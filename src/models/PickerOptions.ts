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

import {
    PickerListOptions,
    instanceOfPickerListOptions,
    PickerListOptionsFromJSON,
    PickerListOptionsFromJSONTyped,
    PickerListOptionsToJSON,
} from './PickerListOptions';
import {
    PickerRangeOptions,
    instanceOfPickerRangeOptions,
    PickerRangeOptionsFromJSON,
    PickerRangeOptionsFromJSONTyped,
    PickerRangeOptionsToJSON,
} from './PickerRangeOptions';

/**
 * @type PickerOptions
 * Picker options
 * @export
 */
export type PickerOptions = PickerListOptions | PickerRangeOptions;

export function PickerOptionsFromJSON(json: any): PickerOptions {
    return PickerOptionsFromJSONTyped(json, false);
}

export function PickerOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickerOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...PickerListOptionsFromJSONTyped(json, true), ...PickerRangeOptionsFromJSONTyped(json, true) };
}

export function PickerOptionsToJSON(value?: PickerOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfPickerListOptions(value)) {
        return PickerListOptionsToJSON(value as PickerListOptions);
    }
    if (instanceOfPickerRangeOptions(value)) {
        return PickerRangeOptionsToJSON(value as PickerRangeOptions);
    }

    return {};
}

