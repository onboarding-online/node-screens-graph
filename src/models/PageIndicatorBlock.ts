/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Styles for page indicator
 * @export
 * @interface PageIndicatorBlock
 */
export interface PageIndicatorBlock {
    /**
     * The line's color
     * @type {string}
     * @memberof PageIndicatorBlock
     */
    color?: string;
    /**
     * The line's track color
     * @type {string}
     * @memberof PageIndicatorBlock
     */
    trackColor?: string;
}

/**
 * Check if a given object implements the PageIndicatorBlock interface.
 */
export function instanceOfPageIndicatorBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageIndicatorBlockFromJSON(json: any): PageIndicatorBlock {
    return PageIndicatorBlockFromJSONTyped(json, false);
}

export function PageIndicatorBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageIndicatorBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'color': !exists(json, 'color') ? undefined : json['color'],
        'trackColor': !exists(json, 'trackColor') ? undefined : json['trackColor'],
    };
}

export function PageIndicatorBlockToJSON(value?: PageIndicatorBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'color': value.color,
        'trackColor': value.trackColor,
    };
}

