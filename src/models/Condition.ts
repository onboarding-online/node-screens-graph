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
import type { Operator } from './Operator';
import {
    OperatorFromJSON,
    OperatorFromJSONTyped,
    OperatorToJSON,
} from './Operator';

/**
 * The condition
 * @export
 * @interface Condition
 */
export interface Condition {
    /**
     * Condition key
     * @type {string}
     * @memberof Condition
     */
    key: string;
    /**
     * 
     * @type {Operator}
     * @memberof Condition
     */
    operator: Operator;
    /**
     * Comparison value
     * @type {string}
     * @memberof Condition
     */
    value: string;
}

/**
 * Check if a given object implements the Condition interface.
 */
export function instanceOfCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "operator" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function ConditionFromJSON(json: any): Condition {
    return ConditionFromJSONTyped(json, false);
}

export function ConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Condition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'operator': OperatorFromJSON(json['operator']),
        'value': json['value'],
    };
}

export function ConditionToJSON(value?: Condition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'operator': OperatorToJSON(value.operator),
        'value': value.value,
    };
}

