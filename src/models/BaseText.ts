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
import type { LabelBlock } from './LabelBlock';
import {
    LabelBlockFromJSON,
    LabelBlockFromJSONTyped,
    LabelBlockToJSON,
} from './LabelBlock';
import type { TemplateParameters } from './TemplateParameters';
import {
    TemplateParametersFromJSON,
    TemplateParametersFromJSONTyped,
    TemplateParametersToJSON,
} from './TemplateParameters';
import type { TextKind } from './TextKind';
import {
    TextKindFromJSON,
    TextKindFromJSONTyped,
    TextKindToJSON,
} from './TextKind';

/**
 * Base text parameters
 * @export
 * @interface BaseText
 */
export interface BaseText {
    /**
     * 
     * @type {TextKind}
     * @memberof BaseText
     */
    kind: TextKind;
    /**
     * Localized string
     * @type {{ [key: string]: string; }}
     * @memberof BaseText
     */
    l10n: { [key: string]: string; };
    /**
     * 
     * @type {TemplateParameters}
     * @memberof BaseText
     */
    parameters: TemplateParameters;
    /**
     * 
     * @type {LabelBlock}
     * @memberof BaseText
     */
    styles: LabelBlock;
}

/**
 * Check if a given object implements the BaseText interface.
 */
export function instanceOfBaseText(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "l10n" in value;
    isInstance = isInstance && "parameters" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function BaseTextFromJSON(json: any): BaseText {
    return BaseTextFromJSONTyped(json, false);
}

export function BaseTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseText {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': TextKindFromJSON(json['kind']),
        'l10n': json['l10n'],
        'parameters': TemplateParametersFromJSON(json['parameters']),
        'styles': LabelBlockFromJSON(json['styles']),
    };
}

export function BaseTextToJSON(value?: BaseText | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': TextKindToJSON(value.kind),
        'l10n': value.l10n,
        'parameters': TemplateParametersToJSON(value.parameters),
        'styles': LabelBlockToJSON(value.styles),
    };
}

