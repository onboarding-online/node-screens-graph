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
import type { PickerOptions } from './PickerOptions';
import {
    PickerOptionsFromJSON,
    PickerOptionsFromJSONTyped,
    PickerOptionsToJSON,
} from './PickerOptions';
import type { PickerWheelKind } from './PickerWheelKind';
import {
    PickerWheelKindFromJSON,
    PickerWheelKindFromJSONTyped,
    PickerWheelKindToJSON,
} from './PickerWheelKind';

/**
 * Picker wheel
 * @export
 * @interface PickerWheel
 */
export interface PickerWheel {
    /**
     * 
     * @type {PickerWheelKind}
     * @memberof PickerWheel
     */
    kind: PickerWheelKind;
    /**
     * 
     * @type {PickerOptions}
     * @memberof PickerWheel
     */
    options: PickerOptions;
    /**
     * Localized string
     * @type {{ [key: string]: string; }}
     * @memberof PickerWheel
     */
    defaultValue: { [key: string]: string; };
}

/**
 * Check if a given object implements the PickerWheel interface.
 */
export function instanceOfPickerWheel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "options" in value;
    isInstance = isInstance && "defaultValue" in value;

    return isInstance;
}

export function PickerWheelFromJSON(json: any): PickerWheel {
    return PickerWheelFromJSONTyped(json, false);
}

export function PickerWheelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickerWheel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': PickerWheelKindFromJSON(json['kind']),
        'options': PickerOptionsFromJSON(json['options']),
        'defaultValue': json['defaultValue'],
    };
}

export function PickerWheelToJSON(value?: PickerWheel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': PickerWheelKindToJSON(value.kind),
        'options': PickerOptionsToJSON(value.options),
        'defaultValue': value.defaultValue,
    };
}

