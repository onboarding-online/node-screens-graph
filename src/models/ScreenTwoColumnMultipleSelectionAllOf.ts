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

import { exists, mapValues } from '../runtime';
import type { Media } from './Media';
import {
    MediaFromJSON,
    MediaFromJSONTyped,
    MediaToJSON,
} from './Media';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';
import type { TwoColumnMultipleSelectionList } from './TwoColumnMultipleSelectionList';
import {
    TwoColumnMultipleSelectionListFromJSON,
    TwoColumnMultipleSelectionListFromJSONTyped,
    TwoColumnMultipleSelectionListToJSON,
} from './TwoColumnMultipleSelectionList';

/**
 * Screen two column table multiple selection - Title/Subtitle/Selection list
 * @export
 * @interface ScreenTwoColumnMultipleSelectionAllOf
 */
export interface ScreenTwoColumnMultipleSelectionAllOf {
    /**
     * 
     * @type {string}
     * @memberof ScreenTwoColumnMultipleSelectionAllOf
     */
    twoColumnMultipleSelectionDescription: string;
    /**
     * 
     * @type {Media}
     * @memberof ScreenTwoColumnMultipleSelectionAllOf
     */
    media?: Media;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTwoColumnMultipleSelectionAllOf
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTwoColumnMultipleSelectionAllOf
     */
    subtitle: Text;
    /**
     * 
     * @type {TwoColumnMultipleSelectionList}
     * @memberof ScreenTwoColumnMultipleSelectionAllOf
     */
    list: TwoColumnMultipleSelectionList;
}

/**
 * Check if a given object implements the ScreenTwoColumnMultipleSelectionAllOf interface.
 */
export function instanceOfScreenTwoColumnMultipleSelectionAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "twoColumnMultipleSelectionDescription" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;

    return isInstance;
}

export function ScreenTwoColumnMultipleSelectionAllOfFromJSON(json: any): ScreenTwoColumnMultipleSelectionAllOf {
    return ScreenTwoColumnMultipleSelectionAllOfFromJSONTyped(json, false);
}

export function ScreenTwoColumnMultipleSelectionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTwoColumnMultipleSelectionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'twoColumnMultipleSelectionDescription': json['twoColumnMultipleSelectionDescription'],
        'media': !exists(json, 'media') ? undefined : MediaFromJSON(json['media']),
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'list': TwoColumnMultipleSelectionListFromJSON(json['list']),
    };
}

export function ScreenTwoColumnMultipleSelectionAllOfToJSON(value?: ScreenTwoColumnMultipleSelectionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'twoColumnMultipleSelectionDescription': value.twoColumnMultipleSelectionDescription,
        'media': MediaToJSON(value.media),
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'list': TwoColumnMultipleSelectionListToJSON(value.list),
    };
}

