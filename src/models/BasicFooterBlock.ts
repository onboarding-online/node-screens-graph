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
/**
 * Basic footer block
 * @export
 * @interface BasicFooterBlock
 */
export interface BasicFooterBlock {
    /**
     * 
     * @type {number}
     * @memberof BasicFooterBlock
     */
    leftButtonWidthPercentage?: number;
}

/**
 * Check if a given object implements the BasicFooterBlock interface.
 */
export function instanceOfBasicFooterBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BasicFooterBlockFromJSON(json: any): BasicFooterBlock {
    return BasicFooterBlockFromJSONTyped(json, false);
}

export function BasicFooterBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicFooterBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'leftButtonWidthPercentage': !exists(json, 'leftButtonWidthPercentage') ? undefined : json['leftButtonWidthPercentage'],
    };
}

export function BasicFooterBlockToJSON(value?: BasicFooterBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'leftButtonWidthPercentage': value.leftButtonWidthPercentage,
    };
}
