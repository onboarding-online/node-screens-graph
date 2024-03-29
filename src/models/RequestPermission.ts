/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.1
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
import type { ScreenPermissionType } from './ScreenPermissionType';
import {
    ScreenPermissionTypeFromJSON,
    ScreenPermissionTypeFromJSONTyped,
    ScreenPermissionTypeToJSON,
} from './ScreenPermissionType';

/**
 * Request permissions object
 * @export
 * @interface RequestPermission
 */
export interface RequestPermission {
    /**
     * 
     * @type {ScreenPermissionType}
     * @memberof RequestPermission
     */
    type: ScreenPermissionType;
    /**
     * 
     * @type {boolean}
     * @memberof RequestPermission
     */
    value: boolean;
    /**
     * 
     * @type {Action}
     * @memberof RequestPermission
     */
    action: Action;
}

/**
 * Check if a given object implements the RequestPermission interface.
 */
export function instanceOfRequestPermission(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "action" in value;

    return isInstance;
}

export function RequestPermissionFromJSON(json: any): RequestPermission {
    return RequestPermissionFromJSONTyped(json, false);
}

export function RequestPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestPermission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': ScreenPermissionTypeFromJSON(json['type']),
        'value': json['value'],
        'action': ActionFromJSON(json['action']),
    };
}

export function RequestPermissionToJSON(value?: RequestPermission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': ScreenPermissionTypeToJSON(value.type),
        'value': value.value,
        'action': ActionToJSON(value.action),
    };
}

