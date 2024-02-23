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
import type { Field } from './Field';
import {
    FieldFromJSON,
    FieldFromJSONTyped,
    FieldToJSON,
} from './Field';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * Screen - Title/Subtitle/Field
 * @export
 * @interface ScreenTitleSubtitleFieldAllOf
 */
export interface ScreenTitleSubtitleFieldAllOf {
    /**
     * 
     * @type {string}
     * @memberof ScreenTitleSubtitleFieldAllOf
     */
    titleSubtitleFieldDescription: string;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTitleSubtitleFieldAllOf
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTitleSubtitleFieldAllOf
     */
    subtitle: Text;
    /**
     * 
     * @type {Field}
     * @memberof ScreenTitleSubtitleFieldAllOf
     */
    field: Field;
}

/**
 * Check if a given object implements the ScreenTitleSubtitleFieldAllOf interface.
 */
export function instanceOfScreenTitleSubtitleFieldAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "titleSubtitleFieldDescription" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "field" in value;

    return isInstance;
}

export function ScreenTitleSubtitleFieldAllOfFromJSON(json: any): ScreenTitleSubtitleFieldAllOf {
    return ScreenTitleSubtitleFieldAllOfFromJSONTyped(json, false);
}

export function ScreenTitleSubtitleFieldAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTitleSubtitleFieldAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'titleSubtitleFieldDescription': json['titleSubtitleFieldDescription'],
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'field': FieldFromJSON(json['field']),
    };
}

export function ScreenTitleSubtitleFieldAllOfToJSON(value?: ScreenTitleSubtitleFieldAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'titleSubtitleFieldDescription': value.titleSubtitleFieldDescription,
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'field': FieldToJSON(value.field),
    };
}

