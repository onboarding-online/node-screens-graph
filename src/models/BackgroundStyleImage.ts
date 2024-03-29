/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.2
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
 * Background image
 * @export
 * @interface BackgroundStyleImage
 */
export interface BackgroundStyleImage {
    /**
     * 
     * @type {BaseImage}
     * @memberof BackgroundStyleImage
     */
    image: BaseImage;
}

/**
 * Check if a given object implements the BackgroundStyleImage interface.
 */
export function instanceOfBackgroundStyleImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "image" in value;

    return isInstance;
}

export function BackgroundStyleImageFromJSON(json: any): BackgroundStyleImage {
    return BackgroundStyleImageFromJSONTyped(json, false);
}

export function BackgroundStyleImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackgroundStyleImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': BaseImageFromJSON(json['image']),
    };
}

export function BackgroundStyleImageToJSON(value?: BackgroundStyleImage | null): any {
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

