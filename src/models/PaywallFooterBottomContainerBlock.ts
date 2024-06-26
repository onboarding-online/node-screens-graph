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
/**
 * Styles for paywall footer bottom container block
 * @export
 * @interface PaywallFooterBottomContainerBlock
 */
export interface PaywallFooterBottomContainerBlock {
    /**
     * Padding left for container
     * @type {number}
     * @memberof PaywallFooterBottomContainerBlock
     */
    paddingLeft?: number;
    /**
     * Padding right for container
     * @type {number}
     * @memberof PaywallFooterBottomContainerBlock
     */
    paddingRight?: number;
    /**
     * Padding top for container
     * @type {number}
     * @memberof PaywallFooterBottomContainerBlock
     */
    paddingTop?: number;
    /**
     * Padding bottom for container
     * @type {number}
     * @memberof PaywallFooterBottomContainerBlock
     */
    paddingBottom?: number;
}

/**
 * Check if a given object implements the PaywallFooterBottomContainerBlock interface.
 */
export function instanceOfPaywallFooterBottomContainerBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaywallFooterBottomContainerBlockFromJSON(json: any): PaywallFooterBottomContainerBlock {
    return PaywallFooterBottomContainerBlockFromJSONTyped(json, false);
}

export function PaywallFooterBottomContainerBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaywallFooterBottomContainerBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paddingLeft': !exists(json, 'paddingLeft') ? undefined : json['paddingLeft'],
        'paddingRight': !exists(json, 'paddingRight') ? undefined : json['paddingRight'],
        'paddingTop': !exists(json, 'paddingTop') ? undefined : json['paddingTop'],
        'paddingBottom': !exists(json, 'paddingBottom') ? undefined : json['paddingBottom'],
    };
}

export function PaywallFooterBottomContainerBlockToJSON(value?: PaywallFooterBottomContainerBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paddingLeft': value.paddingLeft,
        'paddingRight': value.paddingRight,
        'paddingTop': value.paddingTop,
        'paddingBottom': value.paddingBottom,
    };
}

