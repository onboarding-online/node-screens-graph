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
 * Video scale mode
 * @export
 */
export const VideoScaleMode = {
    ScaleToFill: 'scaleToFill',
    ScaleAspectFit: 'scaleAspectFit',
    ScaleAspectFill: 'scaleAspectFill',
    Center: 'center',
    Top: 'top',
    Bottom: 'bottom',
    Left: 'left',
    Right: 'right'
} as const;
export type VideoScaleMode = typeof VideoScaleMode[keyof typeof VideoScaleMode];


export function VideoScaleModeFromJSON(json: any): VideoScaleMode {
    return VideoScaleModeFromJSONTyped(json, false);
}

export function VideoScaleModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoScaleMode {
    return json as VideoScaleMode;
}

export function VideoScaleModeToJSON(value?: VideoScaleMode | null): any {
    return value as any;
}

