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
/**
 * Styles for progress bar
 * @export
 * @interface ProgressBarBlock
 */
export interface ProgressBarBlock {
    /**
     * Color for progress bar
     * @type {string}
     * @memberof ProgressBarBlock
     */
    color?: string;
    /**
     * Thickness for progress bar
     * @type {number}
     * @memberof ProgressBarBlock
     */
    thickness?: number;
    /**
     * Track color
     * @type {string}
     * @memberof ProgressBarBlock
     */
    trackColor?: string;
    /**
     * Track thickness
     * @type {number}
     * @memberof ProgressBarBlock
     */
    trackThickness?: number;
}

/**
 * Check if a given object implements the ProgressBarBlock interface.
 */
export function instanceOfProgressBarBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProgressBarBlockFromJSON(json: any): ProgressBarBlock {
    return ProgressBarBlockFromJSONTyped(json, false);
}

export function ProgressBarBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgressBarBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'color': !exists(json, 'color') ? undefined : json['color'],
        'thickness': !exists(json, 'thickness') ? undefined : json['thickness'],
        'trackColor': !exists(json, 'trackColor') ? undefined : json['trackColor'],
        'trackThickness': !exists(json, 'trackThickness') ? undefined : json['trackThickness'],
    };
}

export function ProgressBarBlockToJSON(value?: ProgressBarBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'color': value.color,
        'thickness': value.thickness,
        'trackColor': value.trackColor,
        'trackThickness': value.trackThickness,
    };
}

