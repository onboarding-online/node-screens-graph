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
/**
 * Asset from storage
 * @export
 * @interface AssetUrl
 */
export interface AssetUrl {
    /**
     * 
     * @type {string}
     * @memberof AssetUrl
     */
    origin: string;
    /**
     * 
     * @type {string}
     * @memberof AssetUrl
     */
    thumb: string;
    /**
     * 
     * @type {string}
     * @memberof AssetUrl
     */
    small: string;
    /**
     * 
     * @type {string}
     * @memberof AssetUrl
     */
    medium: string;
    /**
     * 
     * @type {string}
     * @memberof AssetUrl
     */
    normal: string;
}

/**
 * Check if a given object implements the AssetUrl interface.
 */
export function instanceOfAssetUrl(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "origin" in value;
    isInstance = isInstance && "thumb" in value;
    isInstance = isInstance && "small" in value;
    isInstance = isInstance && "medium" in value;
    isInstance = isInstance && "normal" in value;

    return isInstance;
}

export function AssetUrlFromJSON(json: any): AssetUrl {
    return AssetUrlFromJSONTyped(json, false);
}

export function AssetUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'origin': json['origin'],
        'thumb': json['thumb'],
        'small': json['small'],
        'medium': json['medium'],
        'normal': json['normal'],
    };
}

export function AssetUrlToJSON(value?: AssetUrl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'origin': value.origin,
        'thumb': value.thumb,
        'small': value.small,
        'medium': value.medium,
        'normal': value.normal,
    };
}

