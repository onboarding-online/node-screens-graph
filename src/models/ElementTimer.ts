/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.4
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
import type { TimerUnit } from './TimerUnit';
import {
    TimerUnitFromJSON,
    TimerUnitFromJSONTyped,
    TimerUnitToJSON,
} from './TimerUnit';

/**
 * Timer to show an element
 * @export
 * @interface ElementTimer
 */
export interface ElementTimer {
    /**
     * Duration to show an element in seconds
     * @type {number}
     * @memberof ElementTimer
     */
    duration: number;
    /**
     * 
     * @type {Action}
     * @memberof ElementTimer
     */
    action: Action;
    /**
     * 
     * @type {TimerUnit}
     * @memberof ElementTimer
     */
    unit?: TimerUnit;
}

/**
 * Check if a given object implements the ElementTimer interface.
 */
export function instanceOfElementTimer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "action" in value;

    return isInstance;
}

export function ElementTimerFromJSON(json: any): ElementTimer {
    return ElementTimerFromJSONTyped(json, false);
}

export function ElementTimerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ElementTimer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': json['duration'],
        'action': ActionFromJSON(json['action']),
        'unit': !exists(json, 'unit') ? undefined : TimerUnitFromJSON(json['unit']),
    };
}

export function ElementTimerToJSON(value?: ElementTimer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'action': ActionToJSON(value.action),
        'unit': TimerUnitToJSON(value.unit),
    };
}

