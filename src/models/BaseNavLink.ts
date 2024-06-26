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
import type { BaseNavLinkContent } from './BaseNavLinkContent';
import {
    BaseNavLinkContentFromJSON,
    BaseNavLinkContentFromJSONTyped,
    BaseNavLinkContentToJSON,
} from './BaseNavLinkContent';
import type { NavLinkBlock } from './NavLinkBlock';
import {
    NavLinkBlockFromJSON,
    NavLinkBlockFromJSONTyped,
    NavLinkBlockToJSON,
} from './NavLinkBlock';
import type { NavLinkKind } from './NavLinkKind';
import {
    NavLinkKindFromJSON,
    NavLinkKindFromJSONTyped,
    NavLinkKindToJSON,
} from './NavLinkKind';

/**
 * Base navigation link parameters
 * @export
 * @interface BaseNavLink
 */
export interface BaseNavLink {
    /**
     * 
     * @type {NavLinkKind}
     * @memberof BaseNavLink
     */
    kind: NavLinkKind;
    /**
     * 
     * @type {BaseNavLinkContent}
     * @memberof BaseNavLink
     */
    content: BaseNavLinkContent;
    /**
     * 
     * @type {NavLinkBlock}
     * @memberof BaseNavLink
     */
    styles: NavLinkBlock;
    /**
     * The uri Link
     * @type {string}
     * @memberof BaseNavLink
     */
    uri: string;
}

/**
 * Check if a given object implements the BaseNavLink interface.
 */
export function instanceOfBaseNavLink(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "content" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "uri" in value;

    return isInstance;
}

export function BaseNavLinkFromJSON(json: any): BaseNavLink {
    return BaseNavLinkFromJSONTyped(json, false);
}

export function BaseNavLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseNavLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': NavLinkKindFromJSON(json['kind']),
        'content': BaseNavLinkContentFromJSON(json['content']),
        'styles': NavLinkBlockFromJSON(json['styles']),
        'uri': json['uri'],
    };
}

export function BaseNavLinkToJSON(value?: BaseNavLink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': NavLinkKindToJSON(value.kind),
        'content': BaseNavLinkContentToJSON(value.content),
        'styles': NavLinkBlockToJSON(value.styles),
        'uri': value.uri,
    };
}

