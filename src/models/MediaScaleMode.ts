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


/**
 * Media scale mode
 * @export
 */
export const MediaScaleMode = {
    ScaleToFill: 'scaleToFill',
    ScaleAspectFit: 'scaleAspectFit',
    ScaleAspectFill: 'scaleAspectFill',
    Center: 'center',
    Top: 'top',
    Bottom: 'bottom',
    Left: 'left',
    Right: 'right'
} as const;
export type MediaScaleMode = typeof MediaScaleMode[keyof typeof MediaScaleMode];


export function MediaScaleModeFromJSON(json: any): MediaScaleMode {
    return MediaScaleModeFromJSONTyped(json, false);
}

export function MediaScaleModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaScaleMode {
    return json as MediaScaleMode;
}

export function MediaScaleModeToJSON(value?: MediaScaleMode | null): any {
    return value as any;
}

