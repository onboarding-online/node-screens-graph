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


/**
 * Screen permission type
 * @export
 */
export const ScreenPermissionType = {
    Notifications: 'notifications',
    Ads: 'ads'
} as const;
export type ScreenPermissionType = typeof ScreenPermissionType[keyof typeof ScreenPermissionType];


export function ScreenPermissionTypeFromJSON(json: any): ScreenPermissionType {
    return ScreenPermissionTypeFromJSONTyped(json, false);
}

export function ScreenPermissionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenPermissionType {
    return json as ScreenPermissionType;
}

export function ScreenPermissionTypeToJSON(value?: ScreenPermissionType | null): any {
    return value as any;
}

