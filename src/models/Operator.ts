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
 * Possible comparison operations
 * @export
 */
export const Operator = {
    Lt: 'lt',
    Gt: 'gt',
    Lte: 'lte',
    Gte: 'gte',
    Eq: 'eq',
    Neq: 'neq',
    In: 'in',
    NotIn: 'notIn'
} as const;
export type Operator = typeof Operator[keyof typeof Operator];


export function OperatorFromJSON(json: any): Operator {
    return OperatorFromJSONTyped(json, false);
}

export function OperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Operator {
    return json as Operator;
}

export function OperatorToJSON(value?: Operator | null): any {
    return value as any;
}

