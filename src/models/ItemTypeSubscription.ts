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
import type { Badge } from './Badge';
import {
    BadgeFromJSON,
    BadgeFromJSONTyped,
    BadgeToJSON,
} from './Badge';
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
import type { CheckBox } from './CheckBox';
import {
    CheckBoxFromJSON,
    CheckBoxFromJSONTyped,
    CheckBoxToJSON,
} from './CheckBox';
import type { Image } from './Image';
import {
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './Image';
import type { ItemTypeSubscriptionBlock } from './ItemTypeSubscriptionBlock';
import {
    ItemTypeSubscriptionBlockFromJSON,
    ItemTypeSubscriptionBlockFromJSONTyped,
    ItemTypeSubscriptionBlockToJSON,
} from './ItemTypeSubscriptionBlock';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * Structure of full collection item type for subscription list
 * @export
 * @interface ItemTypeSubscription
 */
export interface ItemTypeSubscription {
    /**
     * 
     * @type {string}
     * @memberof ItemTypeSubscription
     */
    subscriptionId: string;
    /**
     * 
     * @type {CheckBox}
     * @memberof ItemTypeSubscription
     */
    checkBox: CheckBox;
    /**
     * 
     * @type {Text}
     * @memberof ItemTypeSubscription
     */
    leftLabelTop: Text;
    /**
     * 
     * @type {Text}
     * @memberof ItemTypeSubscription
     */
    leftLabelBottom: Text;
    /**
     * 
     * @type {Text}
     * @memberof ItemTypeSubscription
     */
    rightLabelTop: Text;
    /**
     * 
     * @type {Text}
     * @memberof ItemTypeSubscription
     */
    rightLabelBottom: Text;
    /**
     * 
     * @type {Text}
     * @memberof ItemTypeSubscription
     */
    descriptionLabel?: Text;
    /**
     * 
     * @type {Text}
     * @memberof ItemTypeSubscription
     */
    purchaseButtonLabel?: Text;
    /**
     * 
     * @type {boolean}
     * @memberof ItemTypeSubscription
     */
    isSelected: boolean;
    /**
     * 
     * @type {Badge}
     * @memberof ItemTypeSubscription
     */
    badge?: Badge;
    /**
     * 
     * @type {Image}
     * @memberof ItemTypeSubscription
     */
    image?: Image;
    /**
     * 
     * @type {Box}
     * @memberof ItemTypeSubscription
     */
    box: Box;
    /**
     * 
     * @type {number}
     * @memberof ItemTypeSubscription
     */
    weight: number;
    /**
     * 
     * @type {ItemTypeSubscriptionBlock}
     * @memberof ItemTypeSubscription
     */
    styles: ItemTypeSubscriptionBlock;
}

/**
 * Check if a given object implements the ItemTypeSubscription interface.
 */
export function instanceOfItemTypeSubscription(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subscriptionId" in value;
    isInstance = isInstance && "checkBox" in value;
    isInstance = isInstance && "leftLabelTop" in value;
    isInstance = isInstance && "leftLabelBottom" in value;
    isInstance = isInstance && "rightLabelTop" in value;
    isInstance = isInstance && "rightLabelBottom" in value;
    isInstance = isInstance && "isSelected" in value;
    isInstance = isInstance && "box" in value;
    isInstance = isInstance && "weight" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function ItemTypeSubscriptionFromJSON(json: any): ItemTypeSubscription {
    return ItemTypeSubscriptionFromJSONTyped(json, false);
}

export function ItemTypeSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemTypeSubscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscriptionId': json['subscriptionId'],
        'checkBox': CheckBoxFromJSON(json['checkBox']),
        'leftLabelTop': TextFromJSON(json['leftLabelTop']),
        'leftLabelBottom': TextFromJSON(json['leftLabelBottom']),
        'rightLabelTop': TextFromJSON(json['rightLabelTop']),
        'rightLabelBottom': TextFromJSON(json['rightLabelBottom']),
        'descriptionLabel': !exists(json, 'descriptionLabel') ? undefined : TextFromJSON(json['descriptionLabel']),
        'purchaseButtonLabel': !exists(json, 'purchaseButtonLabel') ? undefined : TextFromJSON(json['purchaseButtonLabel']),
        'isSelected': json['isSelected'],
        'badge': !exists(json, 'badge') ? undefined : BadgeFromJSON(json['badge']),
        'image': !exists(json, 'image') ? undefined : ImageFromJSON(json['image']),
        'box': BoxFromJSON(json['box']),
        'weight': json['weight'],
        'styles': ItemTypeSubscriptionBlockFromJSON(json['styles']),
    };
}

export function ItemTypeSubscriptionToJSON(value?: ItemTypeSubscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscriptionId': value.subscriptionId,
        'checkBox': CheckBoxToJSON(value.checkBox),
        'leftLabelTop': TextToJSON(value.leftLabelTop),
        'leftLabelBottom': TextToJSON(value.leftLabelBottom),
        'rightLabelTop': TextToJSON(value.rightLabelTop),
        'rightLabelBottom': TextToJSON(value.rightLabelBottom),
        'descriptionLabel': TextToJSON(value.descriptionLabel),
        'purchaseButtonLabel': TextToJSON(value.purchaseButtonLabel),
        'isSelected': value.isSelected,
        'badge': BadgeToJSON(value.badge),
        'image': ImageToJSON(value.image),
        'box': BoxToJSON(value.box),
        'weight': value.weight,
        'styles': ItemTypeSubscriptionBlockToJSON(value.styles),
    };
}

