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
import type { ButtonVisibility } from './ButtonVisibility';
import {
    ButtonVisibilityFromJSON,
    ButtonVisibilityFromJSONTyped,
    ButtonVisibilityToJSON,
} from './ButtonVisibility';

/**
 * Styles for button
 * @export
 * @interface ButtonBlock
 */
export interface ButtonBlock {
    /**
     * 
     * @type {ButtonVisibility}
     * @memberof ButtonBlock
     */
    visibility?: ButtonVisibility;
    /**
     * If true, the input will take up the full width of its container
     * @type {boolean}
     * @memberof ButtonBlock
     */
    fullWidth?: boolean;
    /**
     * Background of button
     * @type {string}
     * @memberof ButtonBlock
     */
    backgroundColor?: string;
    /**
     * Padding left for container
     * @type {number}
     * @memberof ButtonBlock
     */
    paddingLeft?: number;
    /**
     * Padding right for container
     * @type {number}
     * @memberof ButtonBlock
     */
    paddingRight?: number;
    /**
     * Padding top for container
     * @type {number}
     * @memberof ButtonBlock
     */
    paddingTop?: number;
    /**
     * Padding bottom for container
     * @type {number}
     * @memberof ButtonBlock
     */
    paddingBottom?: number;
    /**
     * Radius of border
     * @type {number}
     * @memberof ButtonBlock
     */
    borderRadius?: number;
    /**
     * Color of border
     * @type {string}
     * @memberof ButtonBlock
     */
    borderColor?: string;
    /**
     * Width of border
     * @type {number}
     * @memberof ButtonBlock
     */
    borderWidth?: number;
    /**
     * Width of button
     * @type {number}
     * @memberof ButtonBlock
     */
    width?: number;
    /**
     * Height of button
     * @type {number}
     * @memberof ButtonBlock
     */
    height?: number;
}

/**
 * Check if a given object implements the ButtonBlock interface.
 */
export function instanceOfButtonBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ButtonBlockFromJSON(json: any): ButtonBlock {
    return ButtonBlockFromJSONTyped(json, false);
}

export function ButtonBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ButtonBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'visibility': !exists(json, 'visibility') ? undefined : ButtonVisibilityFromJSON(json['visibility']),
        'fullWidth': !exists(json, 'fullWidth') ? undefined : json['fullWidth'],
        'backgroundColor': !exists(json, 'backgroundColor') ? undefined : json['backgroundColor'],
        'paddingLeft': !exists(json, 'paddingLeft') ? undefined : json['paddingLeft'],
        'paddingRight': !exists(json, 'paddingRight') ? undefined : json['paddingRight'],
        'paddingTop': !exists(json, 'paddingTop') ? undefined : json['paddingTop'],
        'paddingBottom': !exists(json, 'paddingBottom') ? undefined : json['paddingBottom'],
        'borderRadius': !exists(json, 'borderRadius') ? undefined : json['borderRadius'],
        'borderColor': !exists(json, 'borderColor') ? undefined : json['borderColor'],
        'borderWidth': !exists(json, 'borderWidth') ? undefined : json['borderWidth'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
    };
}

export function ButtonBlockToJSON(value?: ButtonBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'visibility': ButtonVisibilityToJSON(value.visibility),
        'fullWidth': value.fullWidth,
        'backgroundColor': value.backgroundColor,
        'paddingLeft': value.paddingLeft,
        'paddingRight': value.paddingRight,
        'paddingTop': value.paddingTop,
        'paddingBottom': value.paddingBottom,
        'borderRadius': value.borderRadius,
        'borderColor': value.borderColor,
        'borderWidth': value.borderWidth,
        'width': value.width,
        'height': value.height,
    };
}

