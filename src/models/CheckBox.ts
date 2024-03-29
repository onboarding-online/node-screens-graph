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
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
import type { CheckBoxBlock } from './CheckBoxBlock';
import {
    CheckBoxBlockFromJSON,
    CheckBoxBlockFromJSONTyped,
    CheckBoxBlockToJSON,
} from './CheckBoxBlock';
import type { CheckBoxKind } from './CheckBoxKind';
import {
    CheckBoxKindFromJSON,
    CheckBoxKindFromJSONTyped,
    CheckBoxKindToJSON,
} from './CheckBoxKind';
import type { SelectedCheckBoxBlock } from './SelectedCheckBoxBlock';
import {
    SelectedCheckBoxBlockFromJSON,
    SelectedCheckBoxBlockFromJSONTyped,
    SelectedCheckBoxBlockToJSON,
} from './SelectedCheckBoxBlock';

/**
 * Checkbox parameters
 * @export
 * @interface CheckBox
 */
export interface CheckBox {
    /**
     * 
     * @type {Box}
     * @memberof CheckBox
     */
    box: Box;
    /**
     * 
     * @type {CheckBoxKind}
     * @memberof CheckBox
     */
    kind: CheckBoxKind;
    /**
     * Flag if checkbox checked
     * @type {boolean}
     * @memberof CheckBox
     */
    checked: boolean;
    /**
     * 
     * @type {CheckBoxBlock}
     * @memberof CheckBox
     */
    styles: CheckBoxBlock;
    /**
     * 
     * @type {SelectedCheckBoxBlock}
     * @memberof CheckBox
     */
    selectedBlock: SelectedCheckBoxBlock;
}

/**
 * Check if a given object implements the CheckBox interface.
 */
export function instanceOfCheckBox(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "box" in value;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "checked" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "selectedBlock" in value;

    return isInstance;
}

export function CheckBoxFromJSON(json: any): CheckBox {
    return CheckBoxFromJSONTyped(json, false);
}

export function CheckBoxFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckBox {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'box': BoxFromJSON(json['box']),
        'kind': CheckBoxKindFromJSON(json['kind']),
        'checked': json['checked'],
        'styles': CheckBoxBlockFromJSON(json['styles']),
        'selectedBlock': SelectedCheckBoxBlockFromJSON(json['selectedBlock']),
    };
}

export function CheckBoxToJSON(value?: CheckBox | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'box': BoxToJSON(value.box),
        'kind': CheckBoxKindToJSON(value.kind),
        'checked': value.checked,
        'styles': CheckBoxBlockToJSON(value.styles),
        'selectedBlock': SelectedCheckBoxBlockToJSON(value.selectedBlock),
    };
}

