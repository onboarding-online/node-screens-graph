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
import type { BaseText } from './BaseText';
import {
    BaseTextFromJSON,
    BaseTextFromJSONTyped,
    BaseTextToJSON,
} from './BaseText';

/**
 * Custom screen output label, allows user to show this data on mobile
 * @export
 * @interface CustomScreenOutputLabel
 */
export interface CustomScreenOutputLabel {
    /**
     * 
     * @type {string}
     * @memberof CustomScreenOutputLabel
     */
    name: string;
    /**
     * 
     * @type {BaseText}
     * @memberof CustomScreenOutputLabel
     */
    value: BaseText;
}

/**
 * Check if a given object implements the CustomScreenOutputLabel interface.
 */
export function instanceOfCustomScreenOutputLabel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CustomScreenOutputLabelFromJSON(json: any): CustomScreenOutputLabel {
    return CustomScreenOutputLabelFromJSONTyped(json, false);
}

export function CustomScreenOutputLabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomScreenOutputLabel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': BaseTextFromJSON(json['value']),
    };
}

export function CustomScreenOutputLabelToJSON(value?: CustomScreenOutputLabel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': BaseTextToJSON(value.value),
    };
}

