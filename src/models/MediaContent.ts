/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    BaseImage,
    instanceOfBaseImage,
    BaseImageFromJSON,
    BaseImageFromJSONTyped,
    BaseImageToJSON,
} from './BaseImage';
import {
    BaseVideo,
    instanceOfBaseVideo,
    BaseVideoFromJSON,
    BaseVideoFromJSONTyped,
    BaseVideoToJSON,
} from './BaseVideo';

/**
 * @type MediaContent
 * Media content
 * @export
 */
export type MediaContent = BaseImage | BaseVideo;

export function MediaContentFromJSON(json: any): MediaContent {
    return MediaContentFromJSONTyped(json, false);
}

export function MediaContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...BaseImageFromJSONTyped(json, true), ...BaseVideoFromJSONTyped(json, true) };
}

export function MediaContentToJSON(value?: MediaContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfBaseImage(value)) {
        return BaseImageToJSON(value as BaseImage);
    }
    if (instanceOfBaseVideo(value)) {
        return BaseVideoToJSON(value as BaseVideo);
    }

    return {};
}

