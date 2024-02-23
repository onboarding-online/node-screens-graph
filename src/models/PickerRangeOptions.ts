/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Range picker select options
 * @export
 * @interface PickerRangeOptions
 */
export interface PickerRangeOptions {
    /**
     * 
     * @type {number}
     * @memberof PickerRangeOptions
     */
    from: number;
    /**
     * 
     * @type {number}
     * @memberof PickerRangeOptions
     */
    to: number;
}

/**
 * Check if a given object implements the PickerRangeOptions interface.
 */
export function instanceOfPickerRangeOptions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function PickerRangeOptionsFromJSON(json: any): PickerRangeOptions {
    return PickerRangeOptionsFromJSONTyped(json, false);
}

export function PickerRangeOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickerRangeOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': json['from'],
        'to': json['to'],
    };
}

export function PickerRangeOptionsToJSON(value?: PickerRangeOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
    };
}

