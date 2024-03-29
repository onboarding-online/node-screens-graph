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
import type { BaseText } from './BaseText';
import {
    BaseTextFromJSON,
    BaseTextFromJSONTyped,
    BaseTextToJSON,
} from './BaseText';
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
import type { FieldBlock } from './FieldBlock';
import {
    FieldBlockFromJSON,
    FieldBlockFromJSONTyped,
    FieldBlockToJSON,
} from './FieldBlock';
import type { FieldSubtype } from './FieldSubtype';
import {
    FieldSubtypeFromJSON,
    FieldSubtypeFromJSONTyped,
    FieldSubtypeToJSON,
} from './FieldSubtype';
import type { FieldType } from './FieldType';
import {
    FieldTypeFromJSON,
    FieldTypeFromJSONTyped,
    FieldTypeToJSON,
} from './FieldType';

/**
 * Field element
 * @export
 * @interface Field
 */
export interface Field {
    /**
     * 
     * @type {Box}
     * @memberof Field
     */
    box: Box;
    /**
     * 
     * @type {FieldType}
     * @memberof Field
     */
    type: FieldType;
    /**
     * 
     * @type {FieldSubtype}
     * @memberof Field
     */
    subtype?: FieldSubtype;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    validationRegex?: string;
    /**
     * 
     * @type {BaseText}
     * @memberof Field
     */
    errorMessage?: BaseText;
    /**
     * 
     * @type {BaseText}
     * @memberof Field
     */
    placeholder: BaseText;
    /**
     * Field value
     * @type {string}
     * @memberof Field
     */
    value: string;
    /**
     * 
     * @type {FieldBlock}
     * @memberof Field
     */
    styles: FieldBlock;
}

/**
 * Check if a given object implements the Field interface.
 */
export function instanceOfField(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "box" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "placeholder" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function FieldFromJSON(json: any): Field {
    return FieldFromJSONTyped(json, false);
}

export function FieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): Field {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'box': BoxFromJSON(json['box']),
        'type': FieldTypeFromJSON(json['type']),
        'subtype': !exists(json, 'subtype') ? undefined : FieldSubtypeFromJSON(json['subtype']),
        'validationRegex': !exists(json, 'validationRegex') ? undefined : json['validationRegex'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : BaseTextFromJSON(json['errorMessage']),
        'placeholder': BaseTextFromJSON(json['placeholder']),
        'value': json['value'],
        'styles': FieldBlockFromJSON(json['styles']),
    };
}

export function FieldToJSON(value?: Field | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'box': BoxToJSON(value.box),
        'type': FieldTypeToJSON(value.type),
        'subtype': FieldSubtypeToJSON(value.subtype),
        'validationRegex': value.validationRegex,
        'errorMessage': BaseTextToJSON(value.errorMessage),
        'placeholder': BaseTextToJSON(value.placeholder),
        'value': value.value,
        'styles': FieldBlockToJSON(value.styles),
    };
}

