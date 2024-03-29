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
import type { Condition } from './Condition';
import {
    ConditionFromJSON,
    ConditionFromJSONTyped,
    ConditionToJSON,
} from './Condition';
import type { ScreenTransitionKind } from './ScreenTransitionKind';
import {
    ScreenTransitionKindFromJSON,
    ScreenTransitionKindFromJSONTyped,
    ScreenTransitionKindToJSON,
} from './ScreenTransitionKind';

/**
 * Conditioned action
 * @export
 * @interface ConditionedAction
 */
export interface ConditionedAction {
    /**
     * List of conditions
     * @type {Array<Condition>}
     * @memberof ConditionedAction
     */
    rule: Array<Condition>;
    /**
     * Next screen id
     * @type {string}
     * @memberof ConditionedAction
     */
    nextScreenId: string;
    /**
     * 
     * @type {ScreenTransitionKind}
     * @memberof ConditionedAction
     */
    transitionKind: ScreenTransitionKind;
}

/**
 * Check if a given object implements the ConditionedAction interface.
 */
export function instanceOfConditionedAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rule" in value;
    isInstance = isInstance && "nextScreenId" in value;
    isInstance = isInstance && "transitionKind" in value;

    return isInstance;
}

export function ConditionedActionFromJSON(json: any): ConditionedAction {
    return ConditionedActionFromJSONTyped(json, false);
}

export function ConditionedActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionedAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rule': ((json['rule'] as Array<any>).map(ConditionFromJSON)),
        'nextScreenId': json['nextScreenId'],
        'transitionKind': ScreenTransitionKindFromJSON(json['transitionKind']),
    };
}

export function ConditionedActionToJSON(value?: ConditionedAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rule': ((value.rule as Array<any>).map(ConditionToJSON)),
        'nextScreenId': value.nextScreenId,
        'transitionKind': ScreenTransitionKindToJSON(value.transitionKind),
    };
}

