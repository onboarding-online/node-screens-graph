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
import type { TwoColumnSingleSelectionListItemType } from './TwoColumnSingleSelectionListItemType';
import {
    TwoColumnSingleSelectionListItemTypeFromJSON,
    TwoColumnSingleSelectionListItemTypeFromJSONTyped,
    TwoColumnSingleSelectionListItemTypeToJSON,
} from './TwoColumnSingleSelectionListItemType';

/**
 * Two column single selection list element
 * @export
 * @interface TwoColumnSingleSelectionList
 */
export interface TwoColumnSingleSelectionList {
    /**
     * 
     * @type {TwoColumnSingleSelectionListItemType}
     * @memberof TwoColumnSingleSelectionList
     */
    itemType: TwoColumnSingleSelectionListItemType;
    /**
     * Item rows
     * @type {Array<ItemTypeSelection>}
     * @memberof TwoColumnSingleSelectionList
     */
    items: Array<ItemTypeSelection>;
    /**
     * 
     * @type {ListBlock}
     * @memberof TwoColumnSingleSelectionList
     */
    styles: ListBlock;
    /**
     * 
     * @type {SelectedListItemBlock}
     * @memberof TwoColumnSingleSelectionList
     */
    selectedBlock: SelectedListItemBlock;
    /**
     * 
     * @type {Box}
     * @memberof TwoColumnSingleSelectionList
     */
    box: Box;
}

/**
 * Check if a given object implements the TwoColumnSingleSelectionList interface.
 */
export function instanceOfTwoColumnSingleSelectionList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "itemType" in value;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "selectedBlock" in value;
    isInstance = isInstance && "box" in value;

    return isInstance;
}

export function TwoColumnSingleSelectionListFromJSON(json: any): TwoColumnSingleSelectionList {
    return TwoColumnSingleSelectionListFromJSONTyped(json, false);
}

export function TwoColumnSingleSelectionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwoColumnSingleSelectionList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemType': TwoColumnSingleSelectionListItemTypeFromJSON(json['itemType']),
        'items': ((json['items'] as Array<any>).map(ItemTypeSelectionFromJSON)),
        'styles': ListBlockFromJSON(json['styles']),
        'selectedBlock': SelectedListItemBlockFromJSON(json['selectedBlock']),
        'box': BoxFromJSON(json['box']),
    };
}

export function TwoColumnSingleSelectionListToJSON(value?: TwoColumnSingleSelectionList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemType': TwoColumnSingleSelectionListItemTypeToJSON(value.itemType),
        'items': ((value.items as Array<any>).map(ItemTypeSelectionToJSON)),
        'styles': ListBlockToJSON(value.styles),
        'selectedBlock': SelectedListItemBlockToJSON(value.selectedBlock),
        'box': BoxToJSON(value.box),
    };
}

