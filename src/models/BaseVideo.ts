/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.3
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
import type { VideoBlock } from './VideoBlock';
import {
    VideoBlockFromJSON,
    VideoBlockFromJSONTyped,
    VideoBlockToJSON,
} from './VideoBlock';

/**
 * Base video parameters
 * @export
 * @interface BaseVideo
 */
export interface BaseVideo {
    /**
     * Dictionary of localized Asset
     * @type {{ [key: string]: Asset; }}
     * @memberof BaseVideo
     */
    l10n: { [key: string]: Asset; };
    /**
     * 
     * @type {VideoBlock}
     * @memberof BaseVideo
     */
    styles: VideoBlock;
}

/**
 * Check if a given object implements the BaseVideo interface.
 */
export function instanceOfBaseVideo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "l10n" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function BaseVideoFromJSON(json: any): BaseVideo {
    return BaseVideoFromJSONTyped(json, false);
}

export function BaseVideoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseVideo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'l10n': (mapValues(json['l10n'], AssetFromJSON)),
        'styles': VideoBlockFromJSON(json['styles']),
    };
}

export function BaseVideoToJSON(value?: BaseVideo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'l10n': (mapValues(value.l10n, AssetToJSON)),
        'styles': VideoBlockToJSON(value.styles),
    };
}

