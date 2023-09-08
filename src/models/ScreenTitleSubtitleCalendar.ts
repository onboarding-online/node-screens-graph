/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BasicScreenBlock } from './BasicScreenBlock';
import {
    BasicScreenBlockFromJSON,
    BasicScreenBlockFromJSONTyped,
    BasicScreenBlockToJSON,
} from './BasicScreenBlock';
import type { Calendar } from './Calendar';
import {
    CalendarFromJSON,
    CalendarFromJSONTyped,
    CalendarToJSON,
} from './Calendar';
import type { Footer } from './Footer';
import {
    FooterFromJSON,
    FooterFromJSONTyped,
    FooterToJSON,
} from './Footer';
import type { NavigationBar } from './NavigationBar';
import {
    NavigationBarFromJSON,
    NavigationBarFromJSONTyped,
    NavigationBarToJSON,
} from './NavigationBar';
import type { RequestPermission } from './RequestPermission';
import {
    RequestPermissionFromJSON,
    RequestPermissionFromJSONTyped,
    RequestPermissionToJSON,
} from './RequestPermission';
import type { ScreenTimer } from './ScreenTimer';
import {
    ScreenTimerFromJSON,
    ScreenTimerFromJSONTyped,
    ScreenTimerToJSON,
} from './ScreenTimer';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * 
 * @export
 * @interface ScreenTitleSubtitleCalendar
 */
export interface ScreenTitleSubtitleCalendar {
    /**
     * 
     * @type {NavigationBar}
     * @memberof ScreenTitleSubtitleCalendar
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof ScreenTitleSubtitleCalendar
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof ScreenTitleSubtitleCalendar
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof ScreenTitleSubtitleCalendar
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof ScreenTitleSubtitleCalendar
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenTitleSubtitleCalendar
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenTitleSubtitleCalendar
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenTitleSubtitleCalendar
     */
    titleSubtitleCalendarDescription: string;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTitleSubtitleCalendar
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTitleSubtitleCalendar
     */
    subtitle: Text;
    /**
     * 
     * @type {Calendar}
     * @memberof ScreenTitleSubtitleCalendar
     */
    calendar: Calendar;
}

/**
 * Check if a given object implements the ScreenTitleSubtitleCalendar interface.
 */
export function instanceOfScreenTitleSubtitleCalendar(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "titleSubtitleCalendarDescription" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "calendar" in value;

    return isInstance;
}

export function ScreenTitleSubtitleCalendarFromJSON(json: any): ScreenTitleSubtitleCalendar {
    return ScreenTitleSubtitleCalendarFromJSONTyped(json, false);
}

export function ScreenTitleSubtitleCalendarFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTitleSubtitleCalendar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'navigationBar': NavigationBarFromJSON(json['navigationBar']),
        'footer': FooterFromJSON(json['footer']),
        'styles': BasicScreenBlockFromJSON(json['styles']),
        'permission': RequestPermissionFromJSON(json['permission']),
        'timer': ScreenTimerFromJSON(json['timer']),
        'animationEnabled': json['animationEnabled'],
        'useLocalAssetsIfAvailable': json['useLocalAssetsIfAvailable'],
        'titleSubtitleCalendarDescription': json['titleSubtitleCalendarDescription'],
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'calendar': CalendarFromJSON(json['calendar']),
    };
}

export function ScreenTitleSubtitleCalendarToJSON(value?: ScreenTitleSubtitleCalendar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'navigationBar': NavigationBarToJSON(value.navigationBar),
        'footer': FooterToJSON(value.footer),
        'styles': BasicScreenBlockToJSON(value.styles),
        'permission': RequestPermissionToJSON(value.permission),
        'timer': ScreenTimerToJSON(value.timer),
        'animationEnabled': value.animationEnabled,
        'useLocalAssetsIfAvailable': value.useLocalAssetsIfAvailable,
        'titleSubtitleCalendarDescription': value.titleSubtitleCalendarDescription,
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'calendar': CalendarToJSON(value.calendar),
    };
}

