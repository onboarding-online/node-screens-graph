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
import type { Action } from './Action';
import {
    ActionFromJSON,
    ActionFromJSONTyped,
    ActionToJSON,
} from './Action';

/**
 * Back to screens action
 * @export
 * @interface Callback
 */
export interface Callback {
    /**
     * 
     * @type {Action}
     * @memberof Callback
     */
    action: Action;
}

/**
 * Check if a given object implements the Callback interface.
 */
export function instanceOfCallback(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;

    return isInstance;
}

export function CallbackFromJSON(json: any): Callback {
    return CallbackFromJSONTyped(json, false);
}

export function CallbackFromJSONTyped(json: any, ignoreDiscriminator: boolean): Callback {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': ActionFromJSON(json['action']),
    };
}

export function CallbackToJSON(value?: Callback | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': ActionToJSON(value.action),
    };
}

