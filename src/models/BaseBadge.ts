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
import type { BadgeBlock } from './BadgeBlock';
import {
    BadgeBlockFromJSON,
    BadgeBlockFromJSONTyped,
    BadgeBlockToJSON,
} from './BadgeBlock';
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
 * 
 * @export
 * @interface BaseBadge
 */
export interface BaseBadge {
    /**
     * 
     * @type {TextKind}
     * @memberof BaseBadge
     */
    kind: TextKind;
    /**
     * Localized string
     * @type {{ [key: string]: string; }}
     * @memberof BaseBadge
     */
    l10n: { [key: string]: string; };
    /**
     * 
     * @type {TemplateParameters}
     * @memberof BaseBadge
     */
    parameters: TemplateParameters;
    /**
     * 
     * @type {BadgeBlock}
     * @memberof BaseBadge
     */
    styles: BadgeBlock;
}

/**
 * Check if a given object implements the BaseBadge interface.
 */
export function instanceOfBaseBadge(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "l10n" in value;
    isInstance = isInstance && "parameters" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function BaseBadgeFromJSON(json: any): BaseBadge {
    return BaseBadgeFromJSONTyped(json, false);
}

export function BaseBadgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseBadge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': TextKindFromJSON(json['kind']),
        'l10n': json['l10n'],
        'parameters': TemplateParametersFromJSON(json['parameters']),
        'styles': BadgeBlockFromJSON(json['styles']),
    };
}

export function BaseBadgeToJSON(value?: BaseBadge | null): any {
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
        'styles': BadgeBlockToJSON(value.styles),
    };
}

