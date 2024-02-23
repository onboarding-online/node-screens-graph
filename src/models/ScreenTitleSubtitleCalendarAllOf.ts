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
import type { Calendar } from './Calendar';
import {
    CalendarFromJSON,
    CalendarFromJSONTyped,
    CalendarToJSON,
} from './Calendar';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * Screen - Title/Subtitle/Calendar
 * @export
 * @interface ScreenTitleSubtitleCalendarAllOf
 */
export interface ScreenTitleSubtitleCalendarAllOf {
    /**
     * 
     * @type {string}
     * @memberof ScreenTitleSubtitleCalendarAllOf
     */
    titleSubtitleCalendarDescription: string;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTitleSubtitleCalendarAllOf
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTitleSubtitleCalendarAllOf
     */
    subtitle: Text;
    /**
     * 
     * @type {Calendar}
     * @memberof ScreenTitleSubtitleCalendarAllOf
     */
    calendar: Calendar;
}

/**
 * Check if a given object implements the ScreenTitleSubtitleCalendarAllOf interface.
 */
export function instanceOfScreenTitleSubtitleCalendarAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "titleSubtitleCalendarDescription" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "calendar" in value;

    return isInstance;
}

export function ScreenTitleSubtitleCalendarAllOfFromJSON(json: any): ScreenTitleSubtitleCalendarAllOf {
    return ScreenTitleSubtitleCalendarAllOfFromJSONTyped(json, false);
}

export function ScreenTitleSubtitleCalendarAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTitleSubtitleCalendarAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'titleSubtitleCalendarDescription': json['titleSubtitleCalendarDescription'],
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'calendar': CalendarFromJSON(json['calendar']),
    };
}

export function ScreenTitleSubtitleCalendarAllOfToJSON(value?: ScreenTitleSubtitleCalendarAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'titleSubtitleCalendarDescription': value.titleSubtitleCalendarDescription,
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'calendar': CalendarToJSON(value.calendar),
    };
}

