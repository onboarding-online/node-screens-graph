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
import type { Asset } from './Asset';
import {
    AssetFromJSON,
    AssetFromJSONTyped,
    AssetToJSON,
} from './Asset';
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
import type { VideoBlock } from './VideoBlock';
import {
    VideoBlockFromJSON,
    VideoBlockFromJSONTyped,
    VideoBlockToJSON,
} from './VideoBlock';

/**
 * Video parameters
 * @export
 * @interface Video
 */
export interface Video {
    /**
     * 
     * @type {Box}
     * @memberof Video
     */
    box: Box;
    /**
     * Dictionary of localized Asset
     * @type {{ [key: string]: Asset; }}
     * @memberof Video
     */
    l10n: { [key: string]: Asset; };
    /**
     * 
     * @type {VideoBlock}
     * @memberof Video
     */
    styles: VideoBlock;
}

/**
 * Check if a given object implements the Video interface.
 */
export function instanceOfVideo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "box" in value;
    isInstance = isInstance && "l10n" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function VideoFromJSON(json: any): Video {
    return VideoFromJSONTyped(json, false);
}

export function VideoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Video {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'box': BoxFromJSON(json['box']),
        'l10n': (mapValues(json['l10n'], AssetFromJSON)),
        'styles': VideoBlockFromJSON(json['styles']),
    };
}

export function VideoToJSON(value?: Video | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'box': BoxToJSON(value.box),
        'l10n': (mapValues(value.l10n, AssetToJSON)),
        'styles': VideoBlockToJSON(value.styles),
    };
}

