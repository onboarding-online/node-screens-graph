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
import type { CloseAppearance } from './CloseAppearance';
import {
    CloseAppearanceFromJSON,
    CloseAppearanceFromJSONTyped,
    CloseAppearanceToJSON,
} from './CloseAppearance';
import type { CloseHorizontalAlignment } from './CloseHorizontalAlignment';
import {
    CloseHorizontalAlignmentFromJSON,
    CloseHorizontalAlignmentFromJSONTyped,
    CloseHorizontalAlignmentToJSON,
} from './CloseHorizontalAlignment';

/**
 * Styles for paywall navigation bar
 * @export
 * @interface PaywallNavigationBarBlock
 */
export interface PaywallNavigationBarBlock {
    /**
     * 
     * @type {CloseHorizontalAlignment}
     * @memberof PaywallNavigationBarBlock
     */
    closeHorizontalAlignment?: CloseHorizontalAlignment;
    /**
     * 
     * @type {CloseAppearance}
     * @memberof PaywallNavigationBarBlock
     */
    closeAppearance?: CloseAppearance;
    /**
     * Close button appearance visible after timer value in seconds
     * @type {number}
     * @memberof PaywallNavigationBarBlock
     */
    closeVisibleAfterTimerValue?: number;
}

/**
 * Check if a given object implements the PaywallNavigationBarBlock interface.
 */
export function instanceOfPaywallNavigationBarBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaywallNavigationBarBlockFromJSON(json: any): PaywallNavigationBarBlock {
    return PaywallNavigationBarBlockFromJSONTyped(json, false);
}

export function PaywallNavigationBarBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaywallNavigationBarBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'closeHorizontalAlignment': !exists(json, 'closeHorizontalAlignment') ? undefined : CloseHorizontalAlignmentFromJSON(json['closeHorizontalAlignment']),
        'closeAppearance': !exists(json, 'closeAppearance') ? undefined : CloseAppearanceFromJSON(json['closeAppearance']),
        'closeVisibleAfterTimerValue': !exists(json, 'closeVisibleAfterTimerValue') ? undefined : json['closeVisibleAfterTimerValue'],
    };
}

export function PaywallNavigationBarBlockToJSON(value?: PaywallNavigationBarBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'closeHorizontalAlignment': CloseHorizontalAlignmentToJSON(value.closeHorizontalAlignment),
        'closeAppearance': CloseAppearanceToJSON(value.closeAppearance),
        'closeVisibleAfterTimerValue': value.closeVisibleAfterTimerValue,
    };
}

