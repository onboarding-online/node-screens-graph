/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.0.0
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
 * Text parameters
 * @export
 * @interface Text
 */
export interface Text {
    /**
     * 
     * @type {Box}
     * @memberof Text
     */
    box: Box;
    /**
     * 
     * @type {TextKind}
     * @memberof Text
     */
    kind: TextKind;
    /**
     * Localized string
     * @type {{ [key: string]: string; }}
     * @memberof Text
     */
    l10n: { [key: string]: string; };
    /**
     * 
     * @type {TemplateParameters}
     * @memberof Text
     */
    parameters: TemplateParameters;
    /**
     * 
     * @type {LabelBlock}
     * @memberof Text
     */
    styles: LabelBlock;
}

/**
 * Check if a given object implements the Text interface.
 */
export function instanceOfText(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "box" in value;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "l10n" in value;
    isInstance = isInstance && "parameters" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function TextFromJSON(json: any): Text {
    return TextFromJSONTyped(json, false);
}

export function TextFromJSONTyped(json: any, ignoreDiscriminator: boolean): Text {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'box': BoxFromJSON(json['box']),
        'kind': TextKindFromJSON(json['kind']),
        'l10n': json['l10n'],
        'parameters': TemplateParametersFromJSON(json['parameters']),
        'styles': LabelBlockFromJSON(json['styles']),
    };
}

export function TextToJSON(value?: Text | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'box': BoxToJSON(value.box),
        'kind': TextKindToJSON(value.kind),
        'l10n': value.l10n,
        'parameters': TemplateParametersToJSON(value.parameters),
        'styles': LabelBlockToJSON(value.styles),
    };
}

