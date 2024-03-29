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

import { exists, mapValues } from '../runtime';
import type { Image } from './Image';
import {
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './Image';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * Screen - Image/Title/Subtitles list
 * @export
 * @interface ScreenImageTitleSubtitlesAllOf
 */
export interface ScreenImageTitleSubtitlesAllOf {
    /**
     * 
     * @type {string}
     * @memberof ScreenImageTitleSubtitlesAllOf
     */
    imageTitleSubtitlesDescription: string;
    /**
     * 
     * @type {Image}
     * @memberof ScreenImageTitleSubtitlesAllOf
     */
    image: Image;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitlesAllOf
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitlesAllOf
     */
    subtitle1: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitlesAllOf
     */
    subtitle2: Text;
}

/**
 * Check if a given object implements the ScreenImageTitleSubtitlesAllOf interface.
 */
export function instanceOfScreenImageTitleSubtitlesAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "imageTitleSubtitlesDescription" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle1" in value;
    isInstance = isInstance && "subtitle2" in value;

    return isInstance;
}

export function ScreenImageTitleSubtitlesAllOfFromJSON(json: any): ScreenImageTitleSubtitlesAllOf {
    return ScreenImageTitleSubtitlesAllOfFromJSONTyped(json, false);
}

export function ScreenImageTitleSubtitlesAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenImageTitleSubtitlesAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageTitleSubtitlesDescription': json['imageTitleSubtitlesDescription'],
        'image': ImageFromJSON(json['image']),
        'title': TextFromJSON(json['title']),
        'subtitle1': TextFromJSON(json['subtitle1']),
        'subtitle2': TextFromJSON(json['subtitle2']),
    };
}

export function ScreenImageTitleSubtitlesAllOfToJSON(value?: ScreenImageTitleSubtitlesAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imageTitleSubtitlesDescription': value.imageTitleSubtitlesDescription,
        'image': ImageToJSON(value.image),
        'title': TextToJSON(value.title),
        'subtitle1': TextToJSON(value.subtitle1),
        'subtitle2': TextToJSON(value.subtitle2),
    };
}

