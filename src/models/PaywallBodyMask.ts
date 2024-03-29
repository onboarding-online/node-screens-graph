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
import type { PaywallBodyMaskKind } from './PaywallBodyMaskKind';
import {
    PaywallBodyMaskKindFromJSON,
    PaywallBodyMaskKindFromJSONTyped,
    PaywallBodyMaskKindToJSON,
} from './PaywallBodyMaskKind';

/**
 * Styles for divider
 * @export
 * @interface PaywallBodyMask
 */
export interface PaywallBodyMask {
    /**
     * 
     * @type {PaywallBodyMaskKind}
     * @memberof PaywallBodyMask
     */
    maskKind?: PaywallBodyMaskKind;
}

/**
 * Check if a given object implements the PaywallBodyMask interface.
 */
export function instanceOfPaywallBodyMask(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaywallBodyMaskFromJSON(json: any): PaywallBodyMask {
    return PaywallBodyMaskFromJSONTyped(json, false);
}

export function PaywallBodyMaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaywallBodyMask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maskKind': !exists(json, 'maskKind') ? undefined : PaywallBodyMaskKindFromJSON(json['maskKind']),
    };
}

export function PaywallBodyMaskToJSON(value?: PaywallBodyMask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maskKind': PaywallBodyMaskKindToJSON(value.maskKind),
    };
}

