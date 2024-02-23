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
 * Image scale mode
 * @export
 */
export const ImageScaleMode = {
    ScaleToFill: 'scaleToFill',
    ScaleAspectFit: 'scaleAspectFit',
    ScaleAspectFill: 'scaleAspectFill',
    Center: 'center',
    Top: 'top',
    Bottom: 'bottom',
    Left: 'left',
    Right: 'right'
} as const;
export type ImageScaleMode = typeof ImageScaleMode[keyof typeof ImageScaleMode];


export function ImageScaleModeFromJSON(json: any): ImageScaleMode {
    return ImageScaleModeFromJSONTyped(json, false);
}

export function ImageScaleModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageScaleMode {
    return json as ImageScaleMode;
}

export function ImageScaleModeToJSON(value?: ImageScaleMode | null): any {
    return value as any;
}

