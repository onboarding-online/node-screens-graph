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

import {
    BackgroundStyleColor,
    instanceOfBackgroundStyleColor,
    BackgroundStyleColorFromJSON,
    BackgroundStyleColorFromJSONTyped,
    BackgroundStyleColorToJSON,
} from './BackgroundStyleColor';
import {
    BackgroundStyleImage,
    instanceOfBackgroundStyleImage,
    BackgroundStyleImageFromJSON,
    BackgroundStyleImageFromJSONTyped,
    BackgroundStyleImageToJSON,
} from './BackgroundStyleImage';
import {
    BackgroundStyleVideo,
    instanceOfBackgroundStyleVideo,
    BackgroundStyleVideoFromJSON,
    BackgroundStyleVideoFromJSONTyped,
    BackgroundStyleVideoToJSON,
} from './BackgroundStyleVideo';

/**
 * @type BackgroundStyleStyles
 * 
 * @export
 */
export type BackgroundStyleStyles = BackgroundStyleColor | BackgroundStyleImage | BackgroundStyleVideo;

export function BackgroundStyleStylesFromJSON(json: any): BackgroundStyleStyles {
    return BackgroundStyleStylesFromJSONTyped(json, false);
}

export function BackgroundStyleStylesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackgroundStyleStyles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...BackgroundStyleColorFromJSONTyped(json, true), ...BackgroundStyleImageFromJSONTyped(json, true), ...BackgroundStyleVideoFromJSONTyped(json, true) };
}

export function BackgroundStyleStylesToJSON(value?: BackgroundStyleStyles | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfBackgroundStyleColor(value)) {
        return BackgroundStyleColorToJSON(value as BackgroundStyleColor);
    }
    if (instanceOfBackgroundStyleImage(value)) {
        return BackgroundStyleImageToJSON(value as BackgroundStyleImage);
    }
    if (instanceOfBackgroundStyleVideo(value)) {
        return BackgroundStyleVideoToJSON(value as BackgroundStyleVideo);
    }

    return {};
}

