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
 * Navigation link kind
 * @export
 */
export const NavLinkKind = {
    Text: 'text',
    Image: 'image'
} as const;
export type NavLinkKind = typeof NavLinkKind[keyof typeof NavLinkKind];


export function NavLinkKindFromJSON(json: any): NavLinkKind {
    return NavLinkKindFromJSONTyped(json, false);
}

export function NavLinkKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): NavLinkKind {
    return json as NavLinkKind;
}

export function NavLinkKindToJSON(value?: NavLinkKind | null): any {
    return value as any;
}

