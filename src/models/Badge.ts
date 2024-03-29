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
import type { BadgeBlock } from './BadgeBlock';
import {
    BadgeBlockFromJSON,
    BadgeBlockFromJSONTyped,
    BadgeBlockToJSON,
} from './BadgeBlock';
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
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
 * Badge parameters
 * @export
 * @interface Badge
 */
export interface Badge {
    /**
     * 
     * @type {Box}
     * @memberof Badge
     */
    box: Box;
    /**
     * 
     * @type {TextKind}
     * @memberof Badge
     */
    kind: TextKind;
    /**
     * Localized string
     * @type {{ [key: string]: string; }}
     * @memberof Badge
     */
    l10n: { [key: string]: string; };
    /**
     * 
     * @type {TemplateParameters}
     * @memberof Badge
     */
    parameters: TemplateParameters;
    /**
     * 
     * @type {BadgeBlock}
     * @memberof Badge
     */
    styles: BadgeBlock;
}

/**
 * Check if a given object implements the Badge interface.
 */
export function instanceOfBadge(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "box" in value;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "l10n" in value;
    isInstance = isInstance && "parameters" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function BadgeFromJSON(json: any): Badge {
    return BadgeFromJSONTyped(json, false);
}

export function BadgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Badge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'box': BoxFromJSON(json['box']),
        'kind': TextKindFromJSON(json['kind']),
        'l10n': json['l10n'],
        'parameters': TemplateParametersFromJSON(json['parameters']),
        'styles': BadgeBlockFromJSON(json['styles']),
    };
}

export function BadgeToJSON(value?: Badge | null): any {
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
        'styles': BadgeBlockToJSON(value.styles),
    };
}

