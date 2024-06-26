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
import type { BaseImage } from './BaseImage';
import {
    BaseImageFromJSON,
    BaseImageFromJSONTyped,
    BaseImageToJSON,
} from './BaseImage';

/**
 * Media image content
 * @export
 * @interface MediaImage
 */
export interface MediaImage {
    /**
     * 
     * @type {BaseImage}
     * @memberof MediaImage
     */
    image: BaseImage;
}

/**
 * Check if a given object implements the MediaImage interface.
 */
export function instanceOfMediaImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "image" in value;

    return isInstance;
}

export function MediaImageFromJSON(json: any): MediaImage {
    return MediaImageFromJSONTyped(json, false);
}

export function MediaImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': BaseImageFromJSON(json['image']),
    };
}

export function MediaImageToJSON(value?: MediaImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': BaseImageToJSON(value.image),
    };
}

