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
 * Possible field types
 * @export
 */
export const FieldType = {
    String: 'string',
    Int: 'int',
    Double: 'double',
    Date: 'date'
} as const;
export type FieldType = typeof FieldType[keyof typeof FieldType];


export function FieldTypeFromJSON(json: any): FieldType {
    return FieldTypeFromJSONTyped(json, false);
}

export function FieldTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldType {
    return json as FieldType;
}

export function FieldTypeToJSON(value?: FieldType | null): any {
    return value as any;
}

