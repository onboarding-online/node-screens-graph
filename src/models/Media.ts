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
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
import type { MediaBlock } from './MediaBlock';
import {
    MediaBlockFromJSON,
    MediaBlockFromJSONTyped,
    MediaBlockToJSON,
} from './MediaBlock';
import type { MediaContent } from './MediaContent';
import {
    MediaContentFromJSON,
    MediaContentFromJSONTyped,
    MediaContentToJSON,
} from './MediaContent';
import type { MediaKind } from './MediaKind';
import {
    MediaKindFromJSON,
    MediaKindFromJSONTyped,
    MediaKindToJSON,
} from './MediaKind';

/**
 * Media parameters
 * @export
 * @interface Media
 */
export interface Media {
    /**
     * 
     * @type {MediaKind}
     * @memberof Media
     */
    kind: MediaKind;
    /**
     * 
     * @type {MediaContent}
     * @memberof Media
     */
    content: MediaContent;
    /**
     * 
     * @type {MediaBlock}
     * @memberof Media
     */
    styles: MediaBlock;
    /**
     * 
     * @type {Box}
     * @memberof Media
     */
    box: Box;
}

/**
 * Check if a given object implements the Media interface.
 */
export function instanceOfMedia(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "content" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "box" in value;

    return isInstance;
}

export function MediaFromJSON(json: any): Media {
    return MediaFromJSONTyped(json, false);
}

export function MediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Media {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': MediaKindFromJSON(json['kind']),
        'content': MediaContentFromJSON(json['content']),
        'styles': MediaBlockFromJSON(json['styles']),
        'box': BoxFromJSON(json['box']),
    };
}

export function MediaToJSON(value?: Media | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': MediaKindToJSON(value.kind),
        'content': MediaContentToJSON(value.content),
        'styles': MediaBlockToJSON(value.styles),
        'box': BoxToJSON(value.box),
    };
}
