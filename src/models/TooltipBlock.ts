/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TooltipImagePosition } from './TooltipImagePosition';
import {
    TooltipImagePositionFromJSON,
    TooltipImagePositionFromJSONTyped,
    TooltipImagePositionToJSON,
} from './TooltipImagePosition';

/**
 * Styles for tooltip
 * @export
 * @interface TooltipBlock
 */
export interface TooltipBlock {
    /**
     * 
     * @type {TooltipImagePosition}
     * @memberof TooltipBlock
     */
    imagePosition?: TooltipImagePosition;
    /**
     * Padding left for container
     * @type {number}
     * @memberof TooltipBlock
     */
    paddingLeft?: number;
    /**
     * Padding right for container
     * @type {number}
     * @memberof TooltipBlock
     */
    paddingRight?: number;
    /**
     * Padding top for container
     * @type {number}
     * @memberof TooltipBlock
     */
    paddingTop?: number;
    /**
     * Padding bottom for container
     * @type {number}
     * @memberof TooltipBlock
     */
    paddingBottom?: number;
}

/**
 * Check if a given object implements the TooltipBlock interface.
 */
export function instanceOfTooltipBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TooltipBlockFromJSON(json: any): TooltipBlock {
    return TooltipBlockFromJSONTyped(json, false);
}

export function TooltipBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): TooltipBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imagePosition': !exists(json, 'imagePosition') ? undefined : TooltipImagePositionFromJSON(json['imagePosition']),
        'paddingLeft': !exists(json, 'paddingLeft') ? undefined : json['paddingLeft'],
        'paddingRight': !exists(json, 'paddingRight') ? undefined : json['paddingRight'],
        'paddingTop': !exists(json, 'paddingTop') ? undefined : json['paddingTop'],
        'paddingBottom': !exists(json, 'paddingBottom') ? undefined : json['paddingBottom'],
    };
}

export function TooltipBlockToJSON(value?: TooltipBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imagePosition': TooltipImagePositionToJSON(value.imagePosition),
        'paddingLeft': value.paddingLeft,
        'paddingRight': value.paddingRight,
        'paddingTop': value.paddingTop,
        'paddingBottom': value.paddingBottom,
    };
}

