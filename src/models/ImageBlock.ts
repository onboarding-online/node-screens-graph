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
import type { ImageKind } from './ImageKind';
import {
    ImageKindFromJSON,
    ImageKindFromJSONTyped,
    ImageKindToJSON,
} from './ImageKind';
import type { ImageScaleMode } from './ImageScaleMode';
import {
    ImageScaleModeFromJSON,
    ImageScaleModeFromJSONTyped,
    ImageScaleModeToJSON,
} from './ImageScaleMode';

/**
 * Styles for image
 * @export
 * @interface ImageBlock
 */
export interface ImageBlock {
    /**
     * 
     * @type {ImageKind}
     * @memberof ImageBlock
     */
    imageKind?: ImageKind;
    /**
     * 
     * @type {ImageScaleMode}
     * @memberof ImageBlock
     */
    scaleMode?: ImageScaleMode;
    /**
     * width of image
     * @type {number}
     * @memberof ImageBlock
     */
    width?: number;
    /**
     * height of image
     * @type {number}
     * @memberof ImageBlock
     */
    height?: number;
    /**
     * Height in percentage
     * @type {number}
     * @memberof ImageBlock
     */
    heightPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof ImageBlock
     */
    cornerRadiusLeftTop?: number;
    /**
     * 
     * @type {number}
     * @memberof ImageBlock
     */
    cornerRadiusLeftBottom?: number;
    /**
     * 
     * @type {number}
     * @memberof ImageBlock
     */
    cornerRadiusRightTop?: number;
    /**
     * 
     * @type {number}
     * @memberof ImageBlock
     */
    cornerRadiusRightBottom?: number;
    /**
     * apply corner radius for all corners
     * @type {number}
     * @memberof ImageBlock
     */
    mainCornerRadius?: number;
}

/**
 * Check if a given object implements the ImageBlock interface.
 */
export function instanceOfImageBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImageBlockFromJSON(json: any): ImageBlock {
    return ImageBlockFromJSONTyped(json, false);
}

export function ImageBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageKind': !exists(json, 'imageKind') ? undefined : ImageKindFromJSON(json['imageKind']),
        'scaleMode': !exists(json, 'scaleMode') ? undefined : ImageScaleModeFromJSON(json['scaleMode']),
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'heightPercentage': !exists(json, 'heightPercentage') ? undefined : json['heightPercentage'],
        'cornerRadiusLeftTop': !exists(json, 'cornerRadiusLeftTop') ? undefined : json['cornerRadiusLeftTop'],
        'cornerRadiusLeftBottom': !exists(json, 'cornerRadiusLeftBottom') ? undefined : json['cornerRadiusLeftBottom'],
        'cornerRadiusRightTop': !exists(json, 'cornerRadiusRightTop') ? undefined : json['cornerRadiusRightTop'],
        'cornerRadiusRightBottom': !exists(json, 'cornerRadiusRightBottom') ? undefined : json['cornerRadiusRightBottom'],
        'mainCornerRadius': !exists(json, 'mainCornerRadius') ? undefined : json['mainCornerRadius'],
    };
}

export function ImageBlockToJSON(value?: ImageBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imageKind': ImageKindToJSON(value.imageKind),
        'scaleMode': ImageScaleModeToJSON(value.scaleMode),
        'width': value.width,
        'height': value.height,
        'heightPercentage': value.heightPercentage,
        'cornerRadiusLeftTop': value.cornerRadiusLeftTop,
        'cornerRadiusLeftBottom': value.cornerRadiusLeftBottom,
        'cornerRadiusRightTop': value.cornerRadiusRightTop,
        'cornerRadiusRightBottom': value.cornerRadiusRightBottom,
        'mainCornerRadius': value.mainCornerRadius,
    };
}

