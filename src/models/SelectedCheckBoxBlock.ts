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
import type { CheckBoxBlock } from './CheckBoxBlock';
import {
    CheckBoxBlockFromJSON,
    CheckBoxBlockFromJSONTyped,
    CheckBoxBlockToJSON,
} from './CheckBoxBlock';

/**
 * Selected state styles
 * @export
 * @interface SelectedCheckBoxBlock
 */
export interface SelectedCheckBoxBlock {
    /**
     * 
     * @type {CheckBoxBlock}
     * @memberof SelectedCheckBoxBlock
     */
    styles: CheckBoxBlock;
}

/**
 * Check if a given object implements the SelectedCheckBoxBlock interface.
 */
export function instanceOfSelectedCheckBoxBlock(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function SelectedCheckBoxBlockFromJSON(json: any): SelectedCheckBoxBlock {
    return SelectedCheckBoxBlockFromJSONTyped(json, false);
}

export function SelectedCheckBoxBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectedCheckBoxBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'styles': CheckBoxBlockFromJSON(json['styles']),
    };
}

export function SelectedCheckBoxBlockToJSON(value?: SelectedCheckBoxBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'styles': CheckBoxBlockToJSON(value.styles),
    };
}

