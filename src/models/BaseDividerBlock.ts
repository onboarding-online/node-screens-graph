/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Styles for divider
 * @export
 * @interface BaseDividerBlock
 */
export interface BaseDividerBlock {
    /**
     * 
     * @type {string}
     * @memberof BaseDividerBlock
     */
    color?: string;
    /**
     * 
     * @type {number}
     * @memberof BaseDividerBlock
     */
    height?: number;
}

/**
 * Check if a given object implements the BaseDividerBlock interface.
 */
export function instanceOfBaseDividerBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BaseDividerBlockFromJSON(json: any): BaseDividerBlock {
    return BaseDividerBlockFromJSONTyped(json, false);
}

export function BaseDividerBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseDividerBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'color': !exists(json, 'color') ? undefined : json['color'],
        'height': !exists(json, 'height') ? undefined : json['height'],
    };
}

export function BaseDividerBlockToJSON(value?: BaseDividerBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'color': value.color,
        'height': value.height,
    };
}

