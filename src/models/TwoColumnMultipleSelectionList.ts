/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.0.0
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
import type { ItemTypeSelection } from './ItemTypeSelection';
import {
    ItemTypeSelectionFromJSON,
    ItemTypeSelectionFromJSONTyped,
    ItemTypeSelectionToJSON,
} from './ItemTypeSelection';
import type { ListBlock } from './ListBlock';
import {
    ListBlockFromJSON,
    ListBlockFromJSONTyped,
    ListBlockToJSON,
} from './ListBlock';
import type { SelectedListItemBlock } from './SelectedListItemBlock';
import {
    SelectedListItemBlockFromJSON,
    SelectedListItemBlockFromJSONTyped,
    SelectedListItemBlockToJSON,
} from './SelectedListItemBlock';
import type { TwoColumnMultipleSelectionListItemType } from './TwoColumnMultipleSelectionListItemType';
import {
    TwoColumnMultipleSelectionListItemTypeFromJSON,
    TwoColumnMultipleSelectionListItemTypeFromJSONTyped,
    TwoColumnMultipleSelectionListItemTypeToJSON,
} from './TwoColumnMultipleSelectionListItemType';

/**
 * Two column multiple selection list element
 * @export
 * @interface TwoColumnMultipleSelectionList
 */
export interface TwoColumnMultipleSelectionList {
    /**
     * 
     * @type {TwoColumnMultipleSelectionListItemType}
     * @memberof TwoColumnMultipleSelectionList
     */
    itemType: TwoColumnMultipleSelectionListItemType;
    /**
     * Item rows
     * @type {Array<ItemTypeSelection>}
     * @memberof TwoColumnMultipleSelectionList
     */
    items: Array<ItemTypeSelection>;
    /**
     * 
     * @type {ListBlock}
     * @memberof TwoColumnMultipleSelectionList
     */
    styles: ListBlock;
    /**
     * 
     * @type {SelectedListItemBlock}
     * @memberof TwoColumnMultipleSelectionList
     */
    selectedBlock: SelectedListItemBlock;
    /**
     * 
     * @type {Box}
     * @memberof TwoColumnMultipleSelectionList
     */
    box: Box;
}

/**
 * Check if a given object implements the TwoColumnMultipleSelectionList interface.
 */
export function instanceOfTwoColumnMultipleSelectionList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "itemType" in value;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "selectedBlock" in value;
    isInstance = isInstance && "box" in value;

    return isInstance;
}

export function TwoColumnMultipleSelectionListFromJSON(json: any): TwoColumnMultipleSelectionList {
    return TwoColumnMultipleSelectionListFromJSONTyped(json, false);
}

export function TwoColumnMultipleSelectionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwoColumnMultipleSelectionList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemType': TwoColumnMultipleSelectionListItemTypeFromJSON(json['itemType']),
        'items': ((json['items'] as Array<any>).map(ItemTypeSelectionFromJSON)),
        'styles': ListBlockFromJSON(json['styles']),
        'selectedBlock': SelectedListItemBlockFromJSON(json['selectedBlock']),
        'box': BoxFromJSON(json['box']),
    };
}

export function TwoColumnMultipleSelectionListToJSON(value?: TwoColumnMultipleSelectionList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemType': TwoColumnMultipleSelectionListItemTypeToJSON(value.itemType),
        'items': ((value.items as Array<any>).map(ItemTypeSelectionToJSON)),
        'styles': ListBlockToJSON(value.styles),
        'selectedBlock': SelectedListItemBlockToJSON(value.selectedBlock),
        'box': BoxToJSON(value.box),
    };
}

