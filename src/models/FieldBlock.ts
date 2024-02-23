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
 * Styles for field
 * @export
 * @interface FieldBlock
 */
export interface FieldBlock {
    /**
     * Background color for field
     * @type {string}
     * @memberof FieldBlock
     */
    backgroundColor?: string;
    /**
     * Border color for field
     * @type {string}
     * @memberof FieldBlock
     */
    borderColor?: string;
}

/**
 * Check if a given object implements the FieldBlock interface.
 */
export function instanceOfFieldBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FieldBlockFromJSON(json: any): FieldBlock {
    return FieldBlockFromJSONTyped(json, false);
}

export function FieldBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backgroundColor': !exists(json, 'backgroundColor') ? undefined : json['backgroundColor'],
        'borderColor': !exists(json, 'borderColor') ? undefined : json['borderColor'],
    };
}

export function FieldBlockToJSON(value?: FieldBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backgroundColor': value.backgroundColor,
        'borderColor': value.borderColor,
    };
}

