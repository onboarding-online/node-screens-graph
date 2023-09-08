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
 * Background color for screen
 * @export
 * @interface BackgroundStyleColor
 */
export interface BackgroundStyleColor {
    /**
     * 
     * @type {string}
     * @memberof BackgroundStyleColor
     */
    color: string;
}

/**
 * Check if a given object implements the BackgroundStyleColor interface.
 */
export function instanceOfBackgroundStyleColor(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "color" in value;

    return isInstance;
}

export function BackgroundStyleColorFromJSON(json: any): BackgroundStyleColor {
    return BackgroundStyleColorFromJSONTyped(json, false);
}

export function BackgroundStyleColorFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackgroundStyleColor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'color': json['color'],
    };
}

export function BackgroundStyleColorToJSON(value?: BackgroundStyleColor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'color': value.color,
    };
}

