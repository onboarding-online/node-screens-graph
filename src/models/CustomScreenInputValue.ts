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
import type { ScreenInputType } from './ScreenInputType';
import {
    ScreenInputTypeFromJSON,
    ScreenInputTypeFromJSONTyped,
    ScreenInputTypeToJSON,
} from './ScreenInputType';

/**
 * Custom screen input value, allows user to send data to onboarding flow
 * @export
 * @interface CustomScreenInputValue
 */
export interface CustomScreenInputValue {
    /**
     * 
     * @type {string}
     * @memberof CustomScreenInputValue
     */
    name: string;
    /**
     * 
     * @type {ScreenInputType}
     * @memberof CustomScreenInputValue
     */
    type: ScreenInputType;
    /**
     * 
     * @type {string}
     * @memberof CustomScreenInputValue
     */
    value: string;
}

/**
 * Check if a given object implements the CustomScreenInputValue interface.
 */
export function instanceOfCustomScreenInputValue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CustomScreenInputValueFromJSON(json: any): CustomScreenInputValue {
    return CustomScreenInputValueFromJSONTyped(json, false);
}

export function CustomScreenInputValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomScreenInputValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': ScreenInputTypeFromJSON(json['type']),
        'value': json['value'],
    };
}

export function CustomScreenInputValueToJSON(value?: CustomScreenInputValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': ScreenInputTypeToJSON(value.type),
        'value': value.value,
    };
}

