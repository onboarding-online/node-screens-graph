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
import type { BaseDividerBlock } from './BaseDividerBlock';
import {
    BaseDividerBlockFromJSON,
    BaseDividerBlockFromJSONTyped,
    BaseDividerBlockToJSON,
} from './BaseDividerBlock';
import type { BaseDividerKind } from './BaseDividerKind';
import {
    BaseDividerKindFromJSON,
    BaseDividerKindFromJSONTyped,
    BaseDividerKindToJSON,
} from './BaseDividerKind';
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';

/**
 * Divider element
 * @export
 * @interface Divider
 */
export interface Divider {
    /**
     * 
     * @type {Box}
     * @memberof Divider
     */
    box: Box;
    /**
     * 
     * @type {BaseDividerKind}
     * @memberof Divider
     */
    kind: BaseDividerKind;
    /**
     * 
     * @type {BaseDividerBlock}
     * @memberof Divider
     */
    styles: BaseDividerBlock;
}

/**
 * Check if a given object implements the Divider interface.
 */
export function instanceOfDivider(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "box" in value;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function DividerFromJSON(json: any): Divider {
    return DividerFromJSONTyped(json, false);
}

export function DividerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Divider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'box': BoxFromJSON(json['box']),
        'kind': BaseDividerKindFromJSON(json['kind']),
        'styles': BaseDividerBlockFromJSON(json['styles']),
    };
}

export function DividerToJSON(value?: Divider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'box': BoxToJSON(value.box),
        'kind': BaseDividerKindToJSON(value.kind),
        'styles': BaseDividerBlockToJSON(value.styles),
    };
}

