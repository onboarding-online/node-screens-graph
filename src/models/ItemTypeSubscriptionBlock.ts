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

import { exists, mapValues } from '../runtime';
/**
 * Styles for subscription list item table
 * @export
 * @interface ItemTypeSubscriptionBlock
 */
export interface ItemTypeSubscriptionBlock {
    /**
     * 
     * @type {number}
     * @memberof ItemTypeSubscriptionBlock
     */
    leftLabelColumnWidthPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemTypeSubscriptionBlock
     */
    columnVerticalPadding?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemTypeSubscriptionBlock
     */
    columnHorizontalPadding?: number;
}

/**
 * Check if a given object implements the ItemTypeSubscriptionBlock interface.
 */
export function instanceOfItemTypeSubscriptionBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemTypeSubscriptionBlockFromJSON(json: any): ItemTypeSubscriptionBlock {
    return ItemTypeSubscriptionBlockFromJSONTyped(json, false);
}

export function ItemTypeSubscriptionBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemTypeSubscriptionBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'leftLabelColumnWidthPercentage': !exists(json, 'leftLabelColumnWidthPercentage') ? undefined : json['leftLabelColumnWidthPercentage'],
        'columnVerticalPadding': !exists(json, 'columnVerticalPadding') ? undefined : json['columnVerticalPadding'],
        'columnHorizontalPadding': !exists(json, 'columnHorizontalPadding') ? undefined : json['columnHorizontalPadding'],
    };
}

export function ItemTypeSubscriptionBlockToJSON(value?: ItemTypeSubscriptionBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'leftLabelColumnWidthPercentage': value.leftLabelColumnWidthPercentage,
        'columnVerticalPadding': value.columnVerticalPadding,
        'columnHorizontalPadding': value.columnHorizontalPadding,
    };
}

