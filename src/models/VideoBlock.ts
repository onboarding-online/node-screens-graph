/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { VideoScaleMode } from './VideoScaleMode';
import {
    VideoScaleModeFromJSON,
    VideoScaleModeFromJSONTyped,
    VideoScaleModeToJSON,
} from './VideoScaleMode';

/**
 * Styles for video
 * @export
 * @interface VideoBlock
 */
export interface VideoBlock {
    /**
     * 
     * @type {VideoScaleMode}
     * @memberof VideoBlock
     */
    scaleMode?: VideoScaleMode;
    /**
     * width of video
     * @type {number}
     * @memberof VideoBlock
     */
    width?: number;
    /**
     * height of video
     * @type {number}
     * @memberof VideoBlock
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof VideoBlock
     */
    cornerRadiusLeftTop?: number;
    /**
     * 
     * @type {number}
     * @memberof VideoBlock
     */
    cornerRadiusLeftBottom?: number;
    /**
     * 
     * @type {number}
     * @memberof VideoBlock
     */
    cornerRadiusRightTop?: number;
    /**
     * 
     * @type {number}
     * @memberof VideoBlock
     */
    cornerRadiusRightBottom?: number;
    /**
     * apply corner radius for all corners
     * @type {number}
     * @memberof VideoBlock
     */
    mainCornerRadius?: number;
    /**
     * repeat video after finish
     * @type {boolean}
     * @memberof VideoBlock
     */
    repeat?: boolean;
    /**
     * Height in percentage
     * @type {number}
     * @memberof VideoBlock
     */
    heightPercentage?: number;
}

/**
 * Check if a given object implements the VideoBlock interface.
 */
export function instanceOfVideoBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VideoBlockFromJSON(json: any): VideoBlock {
    return VideoBlockFromJSONTyped(json, false);
}

export function VideoBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scaleMode': !exists(json, 'scaleMode') ? undefined : VideoScaleModeFromJSON(json['scaleMode']),
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'cornerRadiusLeftTop': !exists(json, 'cornerRadiusLeftTop') ? undefined : json['cornerRadiusLeftTop'],
        'cornerRadiusLeftBottom': !exists(json, 'cornerRadiusLeftBottom') ? undefined : json['cornerRadiusLeftBottom'],
        'cornerRadiusRightTop': !exists(json, 'cornerRadiusRightTop') ? undefined : json['cornerRadiusRightTop'],
        'cornerRadiusRightBottom': !exists(json, 'cornerRadiusRightBottom') ? undefined : json['cornerRadiusRightBottom'],
        'mainCornerRadius': !exists(json, 'mainCornerRadius') ? undefined : json['mainCornerRadius'],
        'repeat': !exists(json, 'repeat') ? undefined : json['repeat'],
        'heightPercentage': !exists(json, 'heightPercentage') ? undefined : json['heightPercentage'],
    };
}

export function VideoBlockToJSON(value?: VideoBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scaleMode': VideoScaleModeToJSON(value.scaleMode),
        'width': value.width,
        'height': value.height,
        'cornerRadiusLeftTop': value.cornerRadiusLeftTop,
        'cornerRadiusLeftBottom': value.cornerRadiusLeftBottom,
        'cornerRadiusRightTop': value.cornerRadiusRightTop,
        'cornerRadiusRightBottom': value.cornerRadiusRightBottom,
        'mainCornerRadius': value.mainCornerRadius,
        'repeat': value.repeat,
        'heightPercentage': value.heightPercentage,
    };
}

