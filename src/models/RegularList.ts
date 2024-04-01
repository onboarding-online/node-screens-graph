/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
import type { ItemTypeRegular } from './ItemTypeRegular';
import {
    ItemTypeRegularFromJSON,
    ItemTypeRegularFromJSONTyped,
    ItemTypeRegularToJSON,
} from './ItemTypeRegular';
import type { ListBlock } from './ListBlock';
import {
    ListBlockFromJSON,
    ListBlockFromJSONTyped,
    ListBlockToJSON,
} from './ListBlock';
import type { RegularListItemType } from './RegularListItemType';
import {
    RegularListItemTypeFromJSON,
    RegularListItemTypeFromJSONTyped,
    RegularListItemTypeToJSON,
} from './RegularListItemType';

/**
 * Regular list element
 * @export
 * @interface RegularList
 */
export interface RegularList {
    /**
     * 
     * @type {RegularListItemType}
     * @memberof RegularList
     */
    itemType: RegularListItemType;
    /**
     * Item rows
     * @type {Array<ItemTypeRegular>}
     * @memberof RegularList
     */
    items: Array<ItemTypeRegular>;
    /**
     * 
     * @type {ListBlock}
     * @memberof RegularList
     */
    styles: ListBlock;
    /**
     * 
     * @type {Box}
     * @memberof RegularList
     */
    box: Box;
}

/**
 * Check if a given object implements the RegularList interface.
 */
export function instanceOfRegularList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "itemType" in value;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "box" in value;

    return isInstance;
}

export function RegularListFromJSON(json: any): RegularList {
    return RegularListFromJSONTyped(json, false);
}

export function RegularListFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegularList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemType': RegularListItemTypeFromJSON(json['itemType']),
        'items': ((json['items'] as Array<any>).map(ItemTypeRegularFromJSON)),
        'styles': ListBlockFromJSON(json['styles']),
        'box': BoxFromJSON(json['box']),
    };
}

export function RegularListToJSON(value?: RegularList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemType': RegularListItemTypeToJSON(value.itemType),
        'items': ((value.items as Array<any>).map(ItemTypeRegularToJSON)),
        'styles': ListBlockToJSON(value.styles),
        'box': BoxToJSON(value.box),
    };
}

