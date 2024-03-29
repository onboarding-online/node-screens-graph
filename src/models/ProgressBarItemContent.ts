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
 * Progress bar item content
 * @export
 * @interface ProgressBarItemContent
 */
export interface ProgressBarItemContent {
    /**
     * 
     * @type {Text}
     * @memberof ProgressBarItemContent
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ProgressBarItemContent
     */
    subtitle?: Text;
    /**
     * 
     * @type {Text}
     * @memberof ProgressBarItemContent
     */
    description?: Text;
    /**
     * 
     * @type {Image}
     * @memberof ProgressBarItemContent
     */
    image?: Image;
}

/**
 * Check if a given object implements the ProgressBarItemContent interface.
 */
export function instanceOfProgressBarItemContent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function ProgressBarItemContentFromJSON(json: any): ProgressBarItemContent {
    return ProgressBarItemContentFromJSONTyped(json, false);
}

export function ProgressBarItemContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgressBarItemContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': TextFromJSON(json['title']),
        'subtitle': !exists(json, 'subtitle') ? undefined : TextFromJSON(json['subtitle']),
        'description': !exists(json, 'description') ? undefined : TextFromJSON(json['description']),
        'image': !exists(json, 'image') ? undefined : ImageFromJSON(json['image']),
    };
}

export function ProgressBarItemContentToJSON(value?: ProgressBarItemContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'description': TextToJSON(value.description),
        'image': ImageToJSON(value.image),
    };
}

