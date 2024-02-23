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
 * Styles for label block
 * @export
 * @interface LabelBlock
 */
export interface LabelBlock {
    /**
     * 
     * @type {LabelPosition}
     * @memberof LabelBlock
     */
    textAlign?: LabelPosition;
    /**
     * 
     * @type {FontFamily}
     * @memberof LabelBlock
     */
    fontFamily?: FontFamily;
    /**
     * Height of line
     * @type {number}
     * @memberof LabelBlock
     */
    lineHeight?: number;
    /**
     * Font size
     * @type {number}
     * @memberof LabelBlock
     */
    fontSize?: number;
    /**
     * Font weight
     * @type {number}
     * @memberof LabelBlock
     */
    fontWeight?: number;
    /**
     * Color for text
     * @type {string}
     * @memberof LabelBlock
     */
    color?: string;
    /**
     * Background color for text block
     * @type {string}
     * @memberof LabelBlock
     */
    backgroundColor?: string;
    /**
     * Padding left for container
     * @type {number}
     * @memberof LabelBlock
     */
    paddingLeft?: number;
    /**
     * Padding right for container
     * @type {number}
     * @memberof LabelBlock
     */
    paddingRight?: number;
    /**
     * Padding top for container
     * @type {number}
     * @memberof LabelBlock
     */
    paddingTop?: number;
    /**
     * Padding bottom for container
     * @type {number}
     * @memberof LabelBlock
     */
    paddingBottom?: number;
}

/**
 * Check if a given object implements the LabelBlock interface.
 */
export function instanceOfLabelBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LabelBlockFromJSON(json: any): LabelBlock {
    return LabelBlockFromJSONTyped(json, false);
}

export function LabelBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): LabelBlock {
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
    };
}

export function LabelBlockToJSON(value?: LabelBlock | null): any {
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
    };
}

