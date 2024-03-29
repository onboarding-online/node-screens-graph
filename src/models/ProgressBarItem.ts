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
import type { ProgressBarItemContent } from './ProgressBarItemContent';
import {
    ProgressBarItemContentFromJSON,
    ProgressBarItemContentFromJSONTyped,
    ProgressBarItemContentToJSON,
} from './ProgressBarItemContent';

/**
 * Information about one section of progress bar
 * @export
 * @interface ProgressBarItem
 */
export interface ProgressBarItem {
    /**
     * Section display start
     * @type {number}
     * @memberof ProgressBarItem
     */
    valueFrom: number;
    /**
     * Section display end
     * @type {number}
     * @memberof ProgressBarItem
     */
    valueTo: number;
    /**
     * 
     * @type {ProgressBarItemContent}
     * @memberof ProgressBarItem
     */
    content: ProgressBarItemContent;
}

/**
 * Check if a given object implements the ProgressBarItem interface.
 */
export function instanceOfProgressBarItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "valueFrom" in value;
    isInstance = isInstance && "valueTo" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function ProgressBarItemFromJSON(json: any): ProgressBarItem {
    return ProgressBarItemFromJSONTyped(json, false);
}

export function ProgressBarItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgressBarItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'valueFrom': json['valueFrom'],
        'valueTo': json['valueTo'],
        'content': ProgressBarItemContentFromJSON(json['content']),
    };
}

export function ProgressBarItemToJSON(value?: ProgressBarItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'valueFrom': value.valueFrom,
        'valueTo': value.valueTo,
        'content': ProgressBarItemContentToJSON(value.content),
    };
}

