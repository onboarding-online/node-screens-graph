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
 * Background style kind
 * @export
 */
export const BackgroundStyleKind = {
    Image: 'image',
    Video: 'video',
    Color: 'color'
} as const;
export type BackgroundStyleKind = typeof BackgroundStyleKind[keyof typeof BackgroundStyleKind];


export function BackgroundStyleKindFromJSON(json: any): BackgroundStyleKind {
    return BackgroundStyleKindFromJSONTyped(json, false);
}

export function BackgroundStyleKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackgroundStyleKind {
    return json as BackgroundStyleKind;
}

export function BackgroundStyleKindToJSON(value?: BackgroundStyleKind | null): any {
    return value as any;
}

