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
import type { BaseVideo } from './BaseVideo';
import {
    BaseVideoFromJSON,
    BaseVideoFromJSONTyped,
    BaseVideoToJSON,
} from './BaseVideo';

/**
 * Background video
 * @export
 * @interface BackgroundStyleVideo
 */
export interface BackgroundStyleVideo {
    /**
     * 
     * @type {BaseVideo}
     * @memberof BackgroundStyleVideo
     */
    video: BaseVideo;
}

/**
 * Check if a given object implements the BackgroundStyleVideo interface.
 */
export function instanceOfBackgroundStyleVideo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "video" in value;

    return isInstance;
}

export function BackgroundStyleVideoFromJSON(json: any): BackgroundStyleVideo {
    return BackgroundStyleVideoFromJSONTyped(json, false);
}

export function BackgroundStyleVideoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackgroundStyleVideo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'video': BaseVideoFromJSON(json['video']),
    };
}

export function BackgroundStyleVideoToJSON(value?: BackgroundStyleVideo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'video': BaseVideoToJSON(value.video),
    };
}

