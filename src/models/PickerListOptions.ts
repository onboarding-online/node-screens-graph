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
/**
 * List picker select options
 * @export
 * @interface PickerListOptions
 */
export interface PickerListOptions {
    /**
     * Localized string
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PickerListOptions
     */
    localizedOptions: { [key: string]: Array<string>; };
}

/**
 * Check if a given object implements the PickerListOptions interface.
 */
export function instanceOfPickerListOptions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "localizedOptions" in value;

    return isInstance;
}

export function PickerListOptionsFromJSON(json: any): PickerListOptions {
    return PickerListOptionsFromJSONTyped(json, false);
}

export function PickerListOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickerListOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localizedOptions': json['localizedOptions'],
    };
}

export function PickerListOptionsToJSON(value?: PickerListOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localizedOptions': value.localizedOptions,
    };
}

