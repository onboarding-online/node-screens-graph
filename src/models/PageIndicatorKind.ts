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
 * Page indicator kind
 * @export
 */
export const PageIndicatorKind = {
    Line: 'Line',
    Dashes: 'Dashes',
    DashesWithTitle: 'DashesWithTitle',
    DashesWithImage: 'DashesWithImage',
    DashesWithTitleImage: 'DashesWithTitleImage',
    PageIndicatorKind1: 'PageIndicatorKind1',
    PageIndicatorKind2: 'PageIndicatorKind2',
    PageIndicatorKind3: 'PageIndicatorKind3',
    PageIndicatorKind4: 'PageIndicatorKind4',
    PageIndicatorKind5: 'PageIndicatorKind5'
} as const;
export type PageIndicatorKind = typeof PageIndicatorKind[keyof typeof PageIndicatorKind];


export function PageIndicatorKindFromJSON(json: any): PageIndicatorKind {
    return PageIndicatorKindFromJSONTyped(json, false);
}

export function PageIndicatorKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageIndicatorKind {
    return json as PageIndicatorKind;
}

export function PageIndicatorKindToJSON(value?: PageIndicatorKind | null): any {
    return value as any;
}

