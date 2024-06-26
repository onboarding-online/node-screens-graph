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

import { exists, mapValues } from '../runtime';
import type { Picker } from './Picker';
import {
    PickerFromJSON,
    PickerFromJSONTyped,
    PickerToJSON,
} from './Picker';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * Screen - Title/Subtitle/Picker
 * @export
 * @interface ScreenTitleSubtitlePickerAllOf
 */
export interface ScreenTitleSubtitlePickerAllOf {
    /**
     * 
     * @type {string}
     * @memberof ScreenTitleSubtitlePickerAllOf
     */
    titleSubtitlePickerDescription: string;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTitleSubtitlePickerAllOf
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTitleSubtitlePickerAllOf
     */
    subtitle: Text;
    /**
     * 
     * @type {Picker}
     * @memberof ScreenTitleSubtitlePickerAllOf
     */
    picker: Picker;
}

/**
 * Check if a given object implements the ScreenTitleSubtitlePickerAllOf interface.
 */
export function instanceOfScreenTitleSubtitlePickerAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "titleSubtitlePickerDescription" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "picker" in value;

    return isInstance;
}

export function ScreenTitleSubtitlePickerAllOfFromJSON(json: any): ScreenTitleSubtitlePickerAllOf {
    return ScreenTitleSubtitlePickerAllOfFromJSONTyped(json, false);
}

export function ScreenTitleSubtitlePickerAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTitleSubtitlePickerAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'titleSubtitlePickerDescription': json['titleSubtitlePickerDescription'],
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'picker': PickerFromJSON(json['picker']),
    };
}

export function ScreenTitleSubtitlePickerAllOfToJSON(value?: ScreenTitleSubtitlePickerAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'titleSubtitlePickerDescription': value.titleSubtitlePickerDescription,
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'picker': PickerToJSON(value.picker),
    };
}

