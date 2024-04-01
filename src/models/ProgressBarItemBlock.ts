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
 * Styles for progress bar item
 * @export
 * @interface ProgressBarItemBlock
 */
export interface ProgressBarItemBlock {
    /**
     * Color for progress bar
     * @type {string}
     * @memberof ProgressBarItemBlock
     */
    color?: string;
    /**
     * Track color
     * @type {string}
     * @memberof ProgressBarItemBlock
     */
    trackColor?: string;
    /**
     * Fill color
     * @type {string}
     * @memberof ProgressBarItemBlock
     */
    fillColor?: string;
}

/**
 * Check if a given object implements the ProgressBarItemBlock interface.
 */
export function instanceOfProgressBarItemBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProgressBarItemBlockFromJSON(json: any): ProgressBarItemBlock {
    return ProgressBarItemBlockFromJSONTyped(json, false);
}

export function ProgressBarItemBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgressBarItemBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'color': !exists(json, 'color') ? undefined : json['color'],
        'trackColor': !exists(json, 'trackColor') ? undefined : json['trackColor'],
        'fillColor': !exists(json, 'fillColor') ? undefined : json['fillColor'],
    };
}

export function ProgressBarItemBlockToJSON(value?: ProgressBarItemBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'color': value.color,
        'trackColor': value.trackColor,
        'fillColor': value.fillColor,
    };
}

