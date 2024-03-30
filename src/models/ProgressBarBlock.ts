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
import type { VerticalAlignment } from './VerticalAlignment';
import {
    VerticalAlignmentFromJSON,
    VerticalAlignmentFromJSONTyped,
    VerticalAlignmentToJSON,
} from './VerticalAlignment';

/**
 * Styles for progress bar
 * @export
 * @interface ProgressBarBlock
 */
export interface ProgressBarBlock {
    /**
     * width of progress bar
     * @type {number}
     * @memberof ProgressBarBlock
     */
    width?: number;
    /**
     * height of progress bar
     * @type {number}
     * @memberof ProgressBarBlock
     */
    height?: number;
    /**
     * Height in percentage
     * @type {number}
     * @memberof ProgressBarBlock
     */
    heightPercentage?: number;
    /**
     * Color for progress bar
     * @type {string}
     * @memberof ProgressBarBlock
     */
    color?: string;
    /**
     * Track color
     * @type {string}
     * @memberof ProgressBarBlock
     */
    trackColor?: string;
    /**
     * Fill color
     * @type {string}
     * @memberof ProgressBarBlock
     */
    fillColor?: string;
    /**
     * Thickness for progress bar
     * @type {number}
     * @memberof ProgressBarBlock
     */
    thickness?: number;
    /**
     * Track thickness
     * @type {number}
     * @memberof ProgressBarBlock
     */
    trackThickness?: number;
    /**
     * 
     * @type {VerticalAlignment}
     * @memberof ProgressBarBlock
     */
    verticalAlignment?: VerticalAlignment;
}

/**
 * Check if a given object implements the ProgressBarBlock interface.
 */
export function instanceOfProgressBarBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProgressBarBlockFromJSON(json: any): ProgressBarBlock {
    return ProgressBarBlockFromJSONTyped(json, false);
}

export function ProgressBarBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgressBarBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'heightPercentage': !exists(json, 'heightPercentage') ? undefined : json['heightPercentage'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'trackColor': !exists(json, 'trackColor') ? undefined : json['trackColor'],
        'fillColor': !exists(json, 'fillColor') ? undefined : json['fillColor'],
        'thickness': !exists(json, 'thickness') ? undefined : json['thickness'],
        'trackThickness': !exists(json, 'trackThickness') ? undefined : json['trackThickness'],
        'verticalAlignment': !exists(json, 'verticalAlignment') ? undefined : VerticalAlignmentFromJSON(json['verticalAlignment']),
    };
}

export function ProgressBarBlockToJSON(value?: ProgressBarBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'width': value.width,
        'height': value.height,
        'heightPercentage': value.heightPercentage,
        'color': value.color,
        'trackColor': value.trackColor,
        'fillColor': value.fillColor,
        'thickness': value.thickness,
        'trackThickness': value.trackThickness,
        'verticalAlignment': VerticalAlignmentToJSON(value.verticalAlignment),
    };
}

