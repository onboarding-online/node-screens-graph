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
import type { ProgressBar } from './ProgressBar';
import {
    ProgressBarFromJSON,
    ProgressBarFromJSONTyped,
    ProgressBarToJSON,
} from './ProgressBar';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * Screen - Progress bar/Title
 * @export
 * @interface ScreenProgressBarTitleAllOf
 */
export interface ScreenProgressBarTitleAllOf {
    /**
     * 
     * @type {string}
     * @memberof ScreenProgressBarTitleAllOf
     */
    progressBarTitleDescription: string;
    /**
     * 
     * @type {ProgressBar}
     * @memberof ScreenProgressBarTitleAllOf
     */
    progressBar: ProgressBar;
    /**
     * 
     * @type {Text}
     * @memberof ScreenProgressBarTitleAllOf
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenProgressBarTitleAllOf
     */
    subtitle?: Text;
}

/**
 * Check if a given object implements the ScreenProgressBarTitleAllOf interface.
 */
export function instanceOfScreenProgressBarTitleAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "progressBarTitleDescription" in value;
    isInstance = isInstance && "progressBar" in value;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function ScreenProgressBarTitleAllOfFromJSON(json: any): ScreenProgressBarTitleAllOf {
    return ScreenProgressBarTitleAllOfFromJSONTyped(json, false);
}

export function ScreenProgressBarTitleAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenProgressBarTitleAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'progressBarTitleDescription': json['progressBarTitleDescription'],
        'progressBar': ProgressBarFromJSON(json['progressBar']),
        'title': TextFromJSON(json['title']),
        'subtitle': !exists(json, 'subtitle') ? undefined : TextFromJSON(json['subtitle']),
    };
}

export function ScreenProgressBarTitleAllOfToJSON(value?: ScreenProgressBarTitleAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'progressBarTitleDescription': value.progressBarTitleDescription,
        'progressBar': ProgressBarToJSON(value.progressBar),
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
    };
}

