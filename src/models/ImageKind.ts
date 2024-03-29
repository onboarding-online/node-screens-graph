/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Image kind
 * @export
 */
export const ImageKind = {
    ImageKind1: 'ImageKind1',
    ImageKind2: 'ImageKind2',
    ImageKind3: 'ImageKind3',
    ImageKind4: 'ImageKind4',
    ImageKind5: 'ImageKind5'
} as const;
export type ImageKind = typeof ImageKind[keyof typeof ImageKind];


export function ImageKindFromJSON(json: any): ImageKind {
    return ImageKindFromJSONTyped(json, false);
}

export function ImageKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageKind {
    return json as ImageKind;
}

export function ImageKindToJSON(value?: ImageKind | null): any {
    return value as any;
}

