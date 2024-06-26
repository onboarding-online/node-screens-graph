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
import type { Image } from './Image';
import {
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './Image';
import type { MultipleSelectionList } from './MultipleSelectionList';
import {
    MultipleSelectionListFromJSON,
    MultipleSelectionListFromJSONTyped,
    MultipleSelectionListToJSON,
} from './MultipleSelectionList';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * Screen - Image/Title/Subtitle/Multiple selection list
 * @export
 * @interface ScreenImageTitleSubtitleMultipleSelectionListAllOf
 */
export interface ScreenImageTitleSubtitleMultipleSelectionListAllOf {
    /**
     * 
     * @type {string}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionListAllOf
     */
    imageTitleSubtitleMultipleSelectionListDescription: string;
    /**
     * 
     * @type {Image}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionListAllOf
     */
    image: Image;
    /**
     * Defines the scale of the image in percentage
     * @type {number}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionListAllOf
     */
    imageScale?: number;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionListAllOf
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionListAllOf
     */
    subtitle: Text;
    /**
     * 
     * @type {MultipleSelectionList}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionListAllOf
     */
    list: MultipleSelectionList;
}

/**
 * Check if a given object implements the ScreenImageTitleSubtitleMultipleSelectionListAllOf interface.
 */
export function instanceOfScreenImageTitleSubtitleMultipleSelectionListAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "imageTitleSubtitleMultipleSelectionListDescription" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;

    return isInstance;
}

export function ScreenImageTitleSubtitleMultipleSelectionListAllOfFromJSON(json: any): ScreenImageTitleSubtitleMultipleSelectionListAllOf {
    return ScreenImageTitleSubtitleMultipleSelectionListAllOfFromJSONTyped(json, false);
}

export function ScreenImageTitleSubtitleMultipleSelectionListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenImageTitleSubtitleMultipleSelectionListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageTitleSubtitleMultipleSelectionListDescription': json['imageTitleSubtitleMultipleSelectionListDescription'],
        'image': ImageFromJSON(json['image']),
        'imageScale': !exists(json, 'imageScale') ? undefined : json['imageScale'],
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'list': MultipleSelectionListFromJSON(json['list']),
    };
}

export function ScreenImageTitleSubtitleMultipleSelectionListAllOfToJSON(value?: ScreenImageTitleSubtitleMultipleSelectionListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imageTitleSubtitleMultipleSelectionListDescription': value.imageTitleSubtitleMultipleSelectionListDescription,
        'image': ImageToJSON(value.image),
        'imageScale': value.imageScale,
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'list': MultipleSelectionListToJSON(value.list),
    };
}

