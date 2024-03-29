/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SlideContent } from './SlideContent';
import {
    SlideContentFromJSON,
    SlideContentFromJSONTyped,
    SlideContentToJSON,
} from './SlideContent';

/**
 * Information about one slide of slider
 * @export
 * @interface SliderItem
 */
export interface SliderItem {
    /**
     * Section display start
     * @type {number}
     * @memberof SliderItem
     */
    valueFrom: number;
    /**
     * Section display end
     * @type {number}
     * @memberof SliderItem
     */
    valueTo: number;
    /**
     * 
     * @type {SlideContent}
     * @memberof SliderItem
     */
    content: SlideContent;
}

/**
 * Check if a given object implements the SliderItem interface.
 */
export function instanceOfSliderItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "valueFrom" in value;
    isInstance = isInstance && "valueTo" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function SliderItemFromJSON(json: any): SliderItem {
    return SliderItemFromJSONTyped(json, false);
}

export function SliderItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SliderItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'valueFrom': json['valueFrom'],
        'valueTo': json['valueTo'],
        'content': SlideContentFromJSON(json['content']),
    };
}

export function SliderItemToJSON(value?: SliderItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'valueFrom': value.valueFrom,
        'valueTo': value.valueTo,
        'content': SlideContentToJSON(value.content),
    };
}

