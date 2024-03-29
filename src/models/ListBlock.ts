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
import type { VerticalAlignment } from './VerticalAlignment';
import {
    VerticalAlignmentFromJSON,
    VerticalAlignmentFromJSONTyped,
    VerticalAlignmentToJSON,
} from './VerticalAlignment';

/**
 * Styles for list table
 * @export
 * @interface ListBlock
 */
export interface ListBlock {
    /**
     * 
     * @type {VerticalAlignment}
     * @memberof ListBlock
     */
    verticalAlignment?: VerticalAlignment;
    /**
     * 
     * @type {boolean}
     * @memberof ListBlock
     */
    useMaxCellHeight?: boolean;
    /**
     * Background color for table
     * @type {string}
     * @memberof ListBlock
     */
    backgroundColor?: string;
    /**
     * Padding left for container
     * @type {number}
     * @memberof ListBlock
     */
    paddingLeft?: number;
    /**
     * Padding right for container
     * @type {number}
     * @memberof ListBlock
     */
    paddingRight?: number;
    /**
     * Padding top for container
     * @type {number}
     * @memberof ListBlock
     */
    paddingTop?: number;
    /**
     * Padding bottom for container
     * @type {number}
     * @memberof ListBlock
     */
    paddingBottom?: number;
    /**
     * Radius of border
     * @type {number}
     * @memberof ListBlock
     */
    borderRadius?: number;
    /**
     * Color of border
     * @type {string}
     * @memberof ListBlock
     */
    borderColor?: string;
    /**
     * Width of border
     * @type {number}
     * @memberof ListBlock
     */
    borderWidth?: number;
    /**
     * Item spacing
     * @type {number}
     * @memberof ListBlock
     */
    itemsSpacing?: number;
}

/**
 * Check if a given object implements the ListBlock interface.
 */
export function instanceOfListBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListBlockFromJSON(json: any): ListBlock {
    return ListBlockFromJSONTyped(json, false);
}

export function ListBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListBlock {
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

export function ListBlockToJSON(value?: ListBlock | null): any {
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

