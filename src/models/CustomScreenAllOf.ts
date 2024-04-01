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
import type { Callback } from './Callback';
import {
    CallbackFromJSON,
    CallbackFromJSONTyped,
    CallbackToJSON,
} from './Callback';
import type { CustomScreenInputValue } from './CustomScreenInputValue';
import {
    CustomScreenInputValueFromJSON,
    CustomScreenInputValueFromJSONTyped,
    CustomScreenInputValueToJSON,
} from './CustomScreenInputValue';
import type { CustomScreenOutputLabel } from './CustomScreenOutputLabel';
import {
    CustomScreenOutputLabelFromJSON,
    CustomScreenOutputLabelFromJSONTyped,
    CustomScreenOutputLabelToJSON,
} from './CustomScreenOutputLabel';

/**
 * Custom screen
 * @export
 * @interface CustomScreenAllOf
 */
export interface CustomScreenAllOf {
    /**
     * 
     * @type {string}
     * @memberof CustomScreenAllOf
     */
    customScreenDescription: string;
    /**
     * Dictionary of output labels for custom screen
     * @type {{ [key: string]: CustomScreenOutputLabel; }}
     * @memberof CustomScreenAllOf
     */
    labels: { [key: string]: CustomScreenOutputLabel; };
    /**
     * Dictionary of input values from custom screen
     * @type {{ [key: string]: CustomScreenInputValue; }}
     * @memberof CustomScreenAllOf
     */
    values: { [key: string]: CustomScreenInputValue; };
    /**
     * 
     * @type {Callback}
     * @memberof CustomScreenAllOf
     */
    callback: Callback;
}

/**
 * Check if a given object implements the CustomScreenAllOf interface.
 */
export function instanceOfCustomScreenAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customScreenDescription" in value;
    isInstance = isInstance && "labels" in value;
    isInstance = isInstance && "values" in value;
    isInstance = isInstance && "callback" in value;

    return isInstance;
}

export function CustomScreenAllOfFromJSON(json: any): CustomScreenAllOf {
    return CustomScreenAllOfFromJSONTyped(json, false);
}

export function CustomScreenAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomScreenAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customScreenDescription': json['customScreenDescription'],
        'labels': (mapValues(json['labels'], CustomScreenOutputLabelFromJSON)),
        'values': (mapValues(json['values'], CustomScreenInputValueFromJSON)),
        'callback': CallbackFromJSON(json['callback']),
    };
}

export function CustomScreenAllOfToJSON(value?: CustomScreenAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customScreenDescription': value.customScreenDescription,
        'labels': (mapValues(value.labels, CustomScreenOutputLabelToJSON)),
        'values': (mapValues(value.values, CustomScreenInputValueToJSON)),
        'callback': CallbackToJSON(value.callback),
    };
}

