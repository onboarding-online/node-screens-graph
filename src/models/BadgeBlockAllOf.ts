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
import type { BadgePosition } from './BadgePosition';
import {
    BadgePositionFromJSON,
    BadgePositionFromJSONTyped,
    BadgePositionToJSON,
} from './BadgePosition';

/**
 * Styles for badge block
 * @export
 * @interface BadgeBlockAllOf
 */
export interface BadgeBlockAllOf {
    /**
     * 
     * @type {BadgePosition}
     * @memberof BadgeBlockAllOf
     */
    position?: BadgePosition;
    /**
     * Radius of border
     * @type {number}
     * @memberof BadgeBlockAllOf
     */
    borderRadius?: number;
    /**
     * Width of border
     * @type {number}
     * @memberof BadgeBlockAllOf
     */
    borderWidth?: number;
    /**
     * Color of border
     * @type {string}
     * @memberof BadgeBlockAllOf
     */
    borderColor?: string;
}

/**
 * Check if a given object implements the BadgeBlockAllOf interface.
 */
export function instanceOfBadgeBlockAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BadgeBlockAllOfFromJSON(json: any): BadgeBlockAllOf {
    return BadgeBlockAllOfFromJSONTyped(json, false);
}

export function BadgeBlockAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadgeBlockAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'position': !exists(json, 'position') ? undefined : BadgePositionFromJSON(json['position']),
        'borderRadius': !exists(json, 'borderRadius') ? undefined : json['borderRadius'],
        'borderWidth': !exists(json, 'borderWidth') ? undefined : json['borderWidth'],
        'borderColor': !exists(json, 'borderColor') ? undefined : json['borderColor'],
    };
}

export function BadgeBlockAllOfToJSON(value?: BadgeBlockAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'position': BadgePositionToJSON(value.position),
        'borderRadius': value.borderRadius,
        'borderWidth': value.borderWidth,
        'borderColor': value.borderColor,
    };
}

