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
import type { BadgePosition } from './BadgePosition';
import {
    BadgePositionFromJSON,
    BadgePositionFromJSONTyped,
    BadgePositionToJSON,
} from './BadgePosition';
import type { FontFamily } from './FontFamily';
import {
    FontFamilyFromJSON,
    FontFamilyFromJSONTyped,
    FontFamilyToJSON,
} from './FontFamily';
import type { LabelPosition } from './LabelPosition';
import {
    LabelPositionFromJSON,
    LabelPositionFromJSONTyped,
    LabelPositionToJSON,
} from './LabelPosition';

/**
 * 
 * @export
 * @interface BadgeBlock
 */
export interface BadgeBlock {
    /**
     * 
     * @type {LabelPosition}
     * @memberof BadgeBlock
     */
    textAlign?: LabelPosition;
    /**
     * 
     * @type {FontFamily}
     * @memberof BadgeBlock
     */
    fontFamily?: FontFamily;
    /**
     * Height of line
     * @type {number}
     * @memberof BadgeBlock
     */
    lineHeight?: number;
    /**
     * Font size
     * @type {number}
     * @memberof BadgeBlock
     */
    fontSize?: number;
    /**
     * Font weight
     * @type {number}
     * @memberof BadgeBlock
     */
    fontWeight?: number;
    /**
     * Color for text
     * @type {string}
     * @memberof BadgeBlock
     */
    color?: string;
    /**
     * Background color for text block
     * @type {string}
     * @memberof BadgeBlock
     */
    backgroundColor?: string;
    /**
     * Padding left for container
     * @type {number}
     * @memberof BadgeBlock
     */
    paddingLeft?: number;
    /**
     * Padding right for container
     * @type {number}
     * @memberof BadgeBlock
     */
    paddingRight?: number;
    /**
     * Padding top for container
     * @type {number}
     * @memberof BadgeBlock
     */
    paddingTop?: number;
    /**
     * Padding bottom for container
     * @type {number}
     * @memberof BadgeBlock
     */
    paddingBottom?: number;
    /**
     * 
     * @type {BadgePosition}
     * @memberof BadgeBlock
     */
    position?: BadgePosition;
    /**
     * Radius of border
     * @type {number}
     * @memberof BadgeBlock
     */
    borderRadius?: number;
    /**
     * Width of border
     * @type {number}
     * @memberof BadgeBlock
     */
    borderWidth?: number;
}

/**
 * Check if a given object implements the BadgeBlock interface.
 */
export function instanceOfBadgeBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BadgeBlockFromJSON(json: any): BadgeBlock {
    return BadgeBlockFromJSONTyped(json, false);
}

export function BadgeBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadgeBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'textAlign': !exists(json, 'textAlign') ? undefined : LabelPositionFromJSON(json['textAlign']),
        'fontFamily': !exists(json, 'fontFamily') ? undefined : FontFamilyFromJSON(json['fontFamily']),
        'lineHeight': !exists(json, 'lineHeight') ? undefined : json['lineHeight'],
        'fontSize': !exists(json, 'fontSize') ? undefined : json['fontSize'],
        'fontWeight': !exists(json, 'fontWeight') ? undefined : json['fontWeight'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'backgroundColor': !exists(json, 'backgroundColor') ? undefined : json['backgroundColor'],
        'paddingLeft': !exists(json, 'paddingLeft') ? undefined : json['paddingLeft'],
        'paddingRight': !exists(json, 'paddingRight') ? undefined : json['paddingRight'],
        'paddingTop': !exists(json, 'paddingTop') ? undefined : json['paddingTop'],
        'paddingBottom': !exists(json, 'paddingBottom') ? undefined : json['paddingBottom'],
        'position': !exists(json, 'position') ? undefined : BadgePositionFromJSON(json['position']),
        'borderRadius': !exists(json, 'borderRadius') ? undefined : json['borderRadius'],
        'borderWidth': !exists(json, 'borderWidth') ? undefined : json['borderWidth'],
    };
}

export function BadgeBlockToJSON(value?: BadgeBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'textAlign': LabelPositionToJSON(value.textAlign),
        'fontFamily': FontFamilyToJSON(value.fontFamily),
        'lineHeight': value.lineHeight,
        'fontSize': value.fontSize,
        'fontWeight': value.fontWeight,
        'color': value.color,
        'backgroundColor': value.backgroundColor,
        'paddingLeft': value.paddingLeft,
        'paddingRight': value.paddingRight,
        'paddingTop': value.paddingTop,
        'paddingBottom': value.paddingBottom,
        'position': BadgePositionToJSON(value.position),
        'borderRadius': value.borderRadius,
        'borderWidth': value.borderWidth,
    };
}

