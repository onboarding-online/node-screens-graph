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
import type { LoaderBlock } from './LoaderBlock';
import {
    LoaderBlockFromJSON,
    LoaderBlockFromJSONTyped,
    LoaderBlockToJSON,
} from './LoaderBlock';
import type { LoaderKind } from './LoaderKind';
import {
    LoaderKindFromJSON,
    LoaderKindFromJSONTyped,
    LoaderKindToJSON,
} from './LoaderKind';

/**
 * Base loader parameters
 * @export
 * @interface BaseLoader
 */
export interface BaseLoader {
    /**
     * 
     * @type {LoaderKind}
     * @memberof BaseLoader
     */
    kind: LoaderKind;
    /**
     * 
     * @type {LoaderBlock}
     * @memberof BaseLoader
     */
    styles: LoaderBlock;
}

/**
 * Check if a given object implements the BaseLoader interface.
 */
export function instanceOfBaseLoader(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function BaseLoaderFromJSON(json: any): BaseLoader {
    return BaseLoaderFromJSONTyped(json, false);
}

export function BaseLoaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseLoader {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': LoaderKindFromJSON(json['kind']),
        'styles': LoaderBlockFromJSON(json['styles']),
    };
}

export function BaseLoaderToJSON(value?: BaseLoader | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': LoaderKindToJSON(value.kind),
        'styles': LoaderBlockToJSON(value.styles),
    };
}

