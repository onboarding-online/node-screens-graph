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
import type { ActionKind } from './ActionKind';
import {
    ActionKindFromJSON,
    ActionKindFromJSONTyped,
    ActionKindToJSON,
} from './ActionKind';
import type { ConditionedAction } from './ConditionedAction';
import {
    ConditionedActionFromJSON,
    ConditionedActionFromJSONTyped,
    ConditionedActionToJSON,
} from './ConditionedAction';

/**
 * Parameters for action
 * @export
 * @interface Action
 */
export interface Action {
    /**
     * List of conditioned actions
     * @type {Array<ConditionedAction>}
     * @memberof Action
     */
    edges: Array<ConditionedAction>;
    /**
     * 
     * @type {ActionKind}
     * @memberof Action
     */
    kind: ActionKind;
}

/**
 * Check if a given object implements the Action interface.
 */
export function instanceOfAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "edges" in value;
    isInstance = isInstance && "kind" in value;

    return isInstance;
}

export function ActionFromJSON(json: any): Action {
    return ActionFromJSONTyped(json, false);
}

export function ActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Action {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'edges': ((json['edges'] as Array<any>).map(ConditionedActionFromJSON)),
        'kind': ActionKindFromJSON(json['kind']),
    };
}

export function ActionToJSON(value?: Action | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'edges': ((value.edges as Array<any>).map(ConditionedActionToJSON)),
        'kind': ActionKindToJSON(value.kind),
    };
}

