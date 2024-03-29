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

import { exists, mapValues } from '../runtime';
import type { MediaScaleMode } from './MediaScaleMode';
import {
    MediaScaleModeFromJSON,
    MediaScaleModeFromJSONTyped,
    MediaScaleModeToJSON,
} from './MediaScaleMode';
import type { MediaTopAlignment } from './MediaTopAlignment';
import {
    MediaTopAlignmentFromJSON,
    MediaTopAlignmentFromJSONTyped,
    MediaTopAlignmentToJSON,
} from './MediaTopAlignment';

/**
 * Styles for media
 * @export
 * @interface MediaBlock
 */
export interface MediaBlock {
    /**
     * 
     * @type {MediaScaleMode}
     * @memberof MediaBlock
     */
    scaleMode?: MediaScaleMode;
    /**
     * 
     * @type {MediaTopAlignment}
     * @memberof MediaBlock
     */
    topAlignment?: MediaTopAlignment;
    /**
     * width of media
     * @type {number}
     * @memberof MediaBlock
     */
    width?: number;
    /**
     * height of media
     * @type {number}
     * @memberof MediaBlock
     */
    height?: number;
    /**
     * Height in percentage
     * @type {number}
     * @memberof MediaBlock
     */
    heightPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaBlock
     */
    cornerRadiusLeftTop?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaBlock
     */
    cornerRadiusLeftBottom?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaBlock
     */
    cornerRadiusRightTop?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaBlock
     */
    cornerRadiusRightBottom?: number;
    /**
     * apply corner radius for all corners
     * @type {number}
     * @memberof MediaBlock
     */
    mainCornerRadius?: number;
    /**
     * repeat video after finish
     * @type {boolean}
     * @memberof MediaBlock
     */
    repeat?: boolean;
}

/**
 * Check if a given object implements the MediaBlock interface.
 */
export function instanceOfMediaBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MediaBlockFromJSON(json: any): MediaBlock {
    return MediaBlockFromJSONTyped(json, false);
}

export function MediaBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scaleMode': !exists(json, 'scaleMode') ? undefined : MediaScaleModeFromJSON(json['scaleMode']),
        'topAlignment': !exists(json, 'topAlignment') ? undefined : MediaTopAlignmentFromJSON(json['topAlignment']),
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'heightPercentage': !exists(json, 'heightPercentage') ? undefined : json['heightPercentage'],
        'cornerRadiusLeftTop': !exists(json, 'cornerRadiusLeftTop') ? undefined : json['cornerRadiusLeftTop'],
        'cornerRadiusLeftBottom': !exists(json, 'cornerRadiusLeftBottom') ? undefined : json['cornerRadiusLeftBottom'],
        'cornerRadiusRightTop': !exists(json, 'cornerRadiusRightTop') ? undefined : json['cornerRadiusRightTop'],
        'cornerRadiusRightBottom': !exists(json, 'cornerRadiusRightBottom') ? undefined : json['cornerRadiusRightBottom'],
        'mainCornerRadius': !exists(json, 'mainCornerRadius') ? undefined : json['mainCornerRadius'],
        'repeat': !exists(json, 'repeat') ? undefined : json['repeat'],
    };
}

export function MediaBlockToJSON(value?: MediaBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scaleMode': MediaScaleModeToJSON(value.scaleMode),
        'topAlignment': MediaTopAlignmentToJSON(value.topAlignment),
        'width': value.width,
        'height': value.height,
        'heightPercentage': value.heightPercentage,
        'cornerRadiusLeftTop': value.cornerRadiusLeftTop,
        'cornerRadiusLeftBottom': value.cornerRadiusLeftBottom,
        'cornerRadiusRightTop': value.cornerRadiusRightTop,
        'cornerRadiusRightBottom': value.cornerRadiusRightBottom,
        'mainCornerRadius': value.mainCornerRadius,
        'repeat': value.repeat,
    };
}

