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


/**
 * Timer unit
 * @export
 */
export const TimerUnit = {
    Seconds: 'Seconds',
    Milliseconds: 'Milliseconds'
} as const;
export type TimerUnit = typeof TimerUnit[keyof typeof TimerUnit];


export function TimerUnitFromJSON(json: any): TimerUnit {
    return TimerUnitFromJSONTyped(json, false);
}

export function TimerUnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimerUnit {
    return json as TimerUnit;
}

export function TimerUnitToJSON(value?: TimerUnit | null): any {
    return value as any;
}

