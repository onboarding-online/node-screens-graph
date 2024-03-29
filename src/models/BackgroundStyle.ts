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
import type { BackgroundStyleKind } from './BackgroundStyleKind';
import {
    BackgroundStyleKindFromJSON,
    BackgroundStyleKindFromJSONTyped,
    BackgroundStyleKindToJSON,
} from './BackgroundStyleKind';
import type { BackgroundStyleStyles } from './BackgroundStyleStyles';
import {
    BackgroundStyleStylesFromJSON,
    BackgroundStyleStylesFromJSONTyped,
    BackgroundStyleStylesToJSON,
} from './BackgroundStyleStyles';

/**
 * Background styles configuration
 * @export
 * @interface BackgroundStyle
 */
export interface BackgroundStyle {
    /**
     * 
     * @type {BackgroundStyleKind}
     * @memberof BackgroundStyle
     */
    kind: BackgroundStyleKind;
    /**
     * 
     * @type {BackgroundStyleStyles}
     * @memberof BackgroundStyle
     */
    styles: BackgroundStyleStyles;
}

/**
 * Check if a given object implements the BackgroundStyle interface.
 */
export function instanceOfBackgroundStyle(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function BackgroundStyleFromJSON(json: any): BackgroundStyle {
    return BackgroundStyleFromJSONTyped(json, false);
}

export function BackgroundStyleFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackgroundStyle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': BackgroundStyleKindFromJSON(json['kind']),
        'styles': BackgroundStyleStylesFromJSON(json['styles']),
    };
}

export function BackgroundStyleToJSON(value?: BackgroundStyle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': BackgroundStyleKindToJSON(value.kind),
        'styles': BackgroundStyleStylesToJSON(value.styles),
    };
}

