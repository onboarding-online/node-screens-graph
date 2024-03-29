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
 * Possible field subtype
 * @export
 */
export const FieldSubtype = {
    Email: 'Email',
    BirthDate: 'BirthDate',
    Height: 'Height',
    Weight: 'Weight'
} as const;
export type FieldSubtype = typeof FieldSubtype[keyof typeof FieldSubtype];


export function FieldSubtypeFromJSON(json: any): FieldSubtype {
    return FieldSubtypeFromJSONTyped(json, false);
}

export function FieldSubtypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldSubtype {
    return json as FieldSubtype;
}

export function FieldSubtypeToJSON(value?: FieldSubtype | null): any {
    return value as any;
}

