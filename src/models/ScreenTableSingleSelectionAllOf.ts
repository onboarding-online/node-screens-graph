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
import type { SingleSelectionList } from './SingleSelectionList';
import {
    SingleSelectionListFromJSON,
    SingleSelectionListFromJSONTyped,
    SingleSelectionListToJSON,
} from './SingleSelectionList';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * Screen table single selection - Title/Subtitle/Selection list
 * @export
 * @interface ScreenTableSingleSelectionAllOf
 */
export interface ScreenTableSingleSelectionAllOf {
    /**
     * 
     * @type {string}
     * @memberof ScreenTableSingleSelectionAllOf
     */
    singleSelectionDescription: string;
    /**
     * 
     * @type {Media}
     * @memberof ScreenTableSingleSelectionAllOf
     */
    media?: Media;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTableSingleSelectionAllOf
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTableSingleSelectionAllOf
     */
    subtitle: Text;
    /**
     * 
     * @type {SingleSelectionList}
     * @memberof ScreenTableSingleSelectionAllOf
     */
    list: SingleSelectionList;
}

/**
 * Check if a given object implements the ScreenTableSingleSelectionAllOf interface.
 */
export function instanceOfScreenTableSingleSelectionAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "singleSelectionDescription" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;

    return isInstance;
}

export function ScreenTableSingleSelectionAllOfFromJSON(json: any): ScreenTableSingleSelectionAllOf {
    return ScreenTableSingleSelectionAllOfFromJSONTyped(json, false);
}

export function ScreenTableSingleSelectionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTableSingleSelectionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'singleSelectionDescription': json['singleSelectionDescription'],
        'media': !exists(json, 'media') ? undefined : MediaFromJSON(json['media']),
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'list': SingleSelectionListFromJSON(json['list']),
    };
}

export function ScreenTableSingleSelectionAllOfToJSON(value?: ScreenTableSingleSelectionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'singleSelectionDescription': value.singleSelectionDescription,
        'media': MediaToJSON(value.media),
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'list': SingleSelectionListToJSON(value.list),
    };
}

