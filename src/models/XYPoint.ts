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
 * x,y coordinates
 * @export
 * @interface XYPoint
 */
export interface XYPoint {
    /**
     * x coordinate
     * @type {number}
     * @memberof XYPoint
     */
    x: number;
    /**
     * y coordinate
     * @type {number}
     * @memberof XYPoint
     */
    y: number;
}

/**
 * Check if a given object implements the XYPoint interface.
 */
export function instanceOfXYPoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;

    return isInstance;
}

export function XYPointFromJSON(json: any): XYPoint {
    return XYPointFromJSONTyped(json, false);
}

export function XYPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): XYPoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
    };
}

export function XYPointToJSON(value?: XYPoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'x': value.x,
        'y': value.y,
    };
}

