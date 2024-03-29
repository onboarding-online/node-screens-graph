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
import type { LabelBlock } from './LabelBlock';
import {
    LabelBlockFromJSON,
    LabelBlockFromJSONTyped,
    LabelBlockToJSON,
} from './LabelBlock';

/**
 * Styles for calendar
 * @export
 * @interface CalendarBlock
 */
export interface CalendarBlock {
    /**
     * Background of calendar
     * @type {string}
     * @memberof CalendarBlock
     */
    backgroundColor?: string;
    /**
     * Background of calendar header
     * @type {string}
     * @memberof CalendarBlock
     */
    headerBackgroundColor?: string;
    /**
     * 
     * @type {LabelBlock}
     * @memberof CalendarBlock
     */
    headerLabel: LabelBlock;
    /**
     * 
     * @type {LabelBlock}
     * @memberof CalendarBlock
     */
    headerWeekendLabel: LabelBlock;
    /**
     * 
     * @type {LabelBlock}
     * @memberof CalendarBlock
     */
    todayLabel: LabelBlock;
    /**
     * 
     * @type {LabelBlock}
     * @memberof CalendarBlock
     */
    monthLabel: LabelBlock;
    /**
     * 
     * @type {LabelBlock}
     * @memberof CalendarBlock
     */
    currentMonthLabel: LabelBlock;
}

/**
 * Check if a given object implements the CalendarBlock interface.
 */
export function instanceOfCalendarBlock(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "headerLabel" in value;
    isInstance = isInstance && "headerWeekendLabel" in value;
    isInstance = isInstance && "todayLabel" in value;
    isInstance = isInstance && "monthLabel" in value;
    isInstance = isInstance && "currentMonthLabel" in value;

    return isInstance;
}

export function CalendarBlockFromJSON(json: any): CalendarBlock {
    return CalendarBlockFromJSONTyped(json, false);
}

export function CalendarBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalendarBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backgroundColor': !exists(json, 'backgroundColor') ? undefined : json['backgroundColor'],
        'headerBackgroundColor': !exists(json, 'headerBackgroundColor') ? undefined : json['headerBackgroundColor'],
        'headerLabel': LabelBlockFromJSON(json['headerLabel']),
        'headerWeekendLabel': LabelBlockFromJSON(json['headerWeekendLabel']),
        'todayLabel': LabelBlockFromJSON(json['todayLabel']),
        'monthLabel': LabelBlockFromJSON(json['monthLabel']),
        'currentMonthLabel': LabelBlockFromJSON(json['currentMonthLabel']),
    };
}

export function CalendarBlockToJSON(value?: CalendarBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backgroundColor': value.backgroundColor,
        'headerBackgroundColor': value.headerBackgroundColor,
        'headerLabel': LabelBlockToJSON(value.headerLabel),
        'headerWeekendLabel': LabelBlockToJSON(value.headerWeekendLabel),
        'todayLabel': LabelBlockToJSON(value.todayLabel),
        'monthLabel': LabelBlockToJSON(value.monthLabel),
        'currentMonthLabel': LabelBlockToJSON(value.currentMonthLabel),
    };
}

