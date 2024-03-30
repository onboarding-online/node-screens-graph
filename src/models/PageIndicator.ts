/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
import type { PageIndicatorBlock } from './PageIndicatorBlock';
import {
    PageIndicatorBlockFromJSON,
    PageIndicatorBlockFromJSONTyped,
    PageIndicatorBlockToJSON,
} from './PageIndicatorBlock';

/**
 * The line which shows where we are in range from 0 to 100%
 * @export
 * @interface PageIndicator
 */
export interface PageIndicator {
    /**
     * Progress value in percentage
     * @type {number}
     * @memberof PageIndicator
     */
    value: number;
    /**
     * 
     * @type {PageIndicatorBlock}
     * @memberof PageIndicator
     */
    styles: PageIndicatorBlock;
    /**
     * 
     * @type {Box}
     * @memberof PageIndicator
     */
    box: Box;
}

/**
 * Check if a given object implements the PageIndicator interface.
 */
export function instanceOfPageIndicator(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "box" in value;

    return isInstance;
}

export function PageIndicatorFromJSON(json: any): PageIndicator {
    return PageIndicatorFromJSONTyped(json, false);
}

export function PageIndicatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageIndicator {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'styles': PageIndicatorBlockFromJSON(json['styles']),
        'box': BoxFromJSON(json['box']),
    };
}

export function PageIndicatorToJSON(value?: PageIndicator | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'styles': PageIndicatorBlockToJSON(value.styles),
        'box': BoxToJSON(value.box),
    };
}

