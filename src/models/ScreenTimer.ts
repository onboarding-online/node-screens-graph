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
import type { Action } from './Action';
import {
    ActionFromJSON,
    ActionFromJSONTyped,
    ActionToJSON,
} from './Action';

/**
 * Timer to show the screen
 * @export
 * @interface ScreenTimer
 */
export interface ScreenTimer {
    /**
     * Duration to show some screen in seconds
     * @type {number}
     * @memberof ScreenTimer
     */
    duration: number;
    /**
     * 
     * @type {Action}
     * @memberof ScreenTimer
     */
    action: Action;
}

/**
 * Check if a given object implements the ScreenTimer interface.
 */
export function instanceOfScreenTimer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "action" in value;

    return isInstance;
}

export function ScreenTimerFromJSON(json: any): ScreenTimer {
    return ScreenTimerFromJSONTyped(json, false);
}

export function ScreenTimerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTimer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': json['duration'],
        'action': ActionFromJSON(json['action']),
    };
}

export function ScreenTimerToJSON(value?: ScreenTimer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'action': ActionToJSON(value.action),
    };
}

