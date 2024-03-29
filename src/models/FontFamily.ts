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


/**
 * Font family
 * @export
 */
export const FontFamily = {
    SfPro: 'SF Pro',
    SfProRounded: 'SF ProRounded',
    SfMono: 'SF Mono',
    NewYork: 'New York'
} as const;
export type FontFamily = typeof FontFamily[keyof typeof FontFamily];


export function FontFamilyFromJSON(json: any): FontFamily {
    return FontFamilyFromJSONTyped(json, false);
}

export function FontFamilyFromJSONTyped(json: any, ignoreDiscriminator: boolean): FontFamily {
    return json as FontFamily;
}

export function FontFamilyToJSON(value?: FontFamily | null): any {
    return value as any;
}

