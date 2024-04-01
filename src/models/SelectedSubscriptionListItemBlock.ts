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
import type { SubscriptionListBlock } from './SubscriptionListBlock';
import {
    SubscriptionListBlockFromJSON,
    SubscriptionListBlockFromJSONTyped,
    SubscriptionListBlockToJSON,
} from './SubscriptionListBlock';

/**
 * Selected subscription list item
 * @export
 * @interface SelectedSubscriptionListItemBlock
 */
export interface SelectedSubscriptionListItemBlock {
    /**
     * 
     * @type {SubscriptionListBlock}
     * @memberof SelectedSubscriptionListItemBlock
     */
    styles: SubscriptionListBlock;
}

/**
 * Check if a given object implements the SelectedSubscriptionListItemBlock interface.
 */
export function instanceOfSelectedSubscriptionListItemBlock(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function SelectedSubscriptionListItemBlockFromJSON(json: any): SelectedSubscriptionListItemBlock {
    return SelectedSubscriptionListItemBlockFromJSONTyped(json, false);
}

export function SelectedSubscriptionListItemBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectedSubscriptionListItemBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'styles': SubscriptionListBlockFromJSON(json['styles']),
    };
}

export function SelectedSubscriptionListItemBlockToJSON(value?: SelectedSubscriptionListItemBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'styles': SubscriptionListBlockToJSON(value.styles),
    };
}

