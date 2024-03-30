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
 * Styles for subscription list table
 * @export
 * @interface SubscriptionListBlock
 */
export interface SubscriptionListBlock {
    /**
     * 
     * @type {VerticalAlignment}
     * @memberof SubscriptionListBlock
     */
    verticalAlignment?: VerticalAlignment;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionListBlock
     */
    useMaxCellHeight?: boolean;
    /**
     * Background color for table
     * @type {string}
     * @memberof SubscriptionListBlock
     */
    backgroundColor?: string;
    /**
     * Padding left for container
     * @type {number}
     * @memberof SubscriptionListBlock
     */
    paddingLeft?: number;
    /**
     * Padding right for container
     * @type {number}
     * @memberof SubscriptionListBlock
     */
    paddingRight?: number;
    /**
     * Padding top for container
     * @type {number}
     * @memberof SubscriptionListBlock
     */
    paddingTop?: number;
    /**
     * Padding bottom for container
     * @type {number}
     * @memberof SubscriptionListBlock
     */
    paddingBottom?: number;
    /**
     * Radius of border
     * @type {number}
     * @memberof SubscriptionListBlock
     */
    borderRadius?: number;
    /**
     * Color of border
     * @type {string}
     * @memberof SubscriptionListBlock
     */
    borderColor?: string;
    /**
     * Width of border
     * @type {number}
     * @memberof SubscriptionListBlock
     */
    borderWidth?: number;
    /**
     * Item spacing
     * @type {number}
     * @memberof SubscriptionListBlock
     */
    itemsSpacing?: number;
}

/**
 * Check if a given object implements the SubscriptionListBlock interface.
 */
export function instanceOfSubscriptionListBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionListBlockFromJSON(json: any): SubscriptionListBlock {
    return SubscriptionListBlockFromJSONTyped(json, false);
}

export function SubscriptionListBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionListBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'verticalAlignment': !exists(json, 'verticalAlignment') ? undefined : VerticalAlignmentFromJSON(json['verticalAlignment']),
        'useMaxCellHeight': !exists(json, 'useMaxCellHeight') ? undefined : json['useMaxCellHeight'],
        'backgroundColor': !exists(json, 'backgroundColor') ? undefined : json['backgroundColor'],
        'paddingLeft': !exists(json, 'paddingLeft') ? undefined : json['paddingLeft'],
        'paddingRight': !exists(json, 'paddingRight') ? undefined : json['paddingRight'],
        'paddingTop': !exists(json, 'paddingTop') ? undefined : json['paddingTop'],
        'paddingBottom': !exists(json, 'paddingBottom') ? undefined : json['paddingBottom'],
        'borderRadius': !exists(json, 'borderRadius') ? undefined : json['borderRadius'],
        'borderColor': !exists(json, 'borderColor') ? undefined : json['borderColor'],
        'borderWidth': !exists(json, 'borderWidth') ? undefined : json['borderWidth'],
        'itemsSpacing': !exists(json, 'itemsSpacing') ? undefined : json['itemsSpacing'],
    };
}

export function SubscriptionListBlockToJSON(value?: SubscriptionListBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'verticalAlignment': VerticalAlignmentToJSON(value.verticalAlignment),
        'useMaxCellHeight': value.useMaxCellHeight,
        'backgroundColor': value.backgroundColor,
        'paddingLeft': value.paddingLeft,
        'paddingRight': value.paddingRight,
        'paddingTop': value.paddingTop,
        'paddingBottom': value.paddingBottom,
        'borderRadius': value.borderRadius,
        'borderColor': value.borderColor,
        'borderWidth': value.borderWidth,
        'itemsSpacing': value.itemsSpacing,
    };
}

