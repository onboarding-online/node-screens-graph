/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BasicScreenBlock } from './BasicScreenBlock';
import {
    BasicScreenBlockFromJSON,
    BasicScreenBlockFromJSONTyped,
    BasicScreenBlockToJSON,
} from './BasicScreenBlock';
import type { Footer } from './Footer';
import {
    FooterFromJSON,
    FooterFromJSONTyped,
    FooterToJSON,
} from './Footer';
import type { Image } from './Image';
import {
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './Image';
import type { MultipleSelectionList } from './MultipleSelectionList';
import {
    MultipleSelectionListFromJSON,
    MultipleSelectionListFromJSONTyped,
    MultipleSelectionListToJSON,
} from './MultipleSelectionList';
import type { NavigationBar } from './NavigationBar';
import {
    NavigationBarFromJSON,
    NavigationBarFromJSONTyped,
    NavigationBarToJSON,
} from './NavigationBar';
import type { RequestPermission } from './RequestPermission';
import {
    RequestPermissionFromJSON,
    RequestPermissionFromJSONTyped,
    RequestPermissionToJSON,
} from './RequestPermission';
import type { ScreenTimer } from './ScreenTimer';
import {
    ScreenTimerFromJSON,
    ScreenTimerFromJSONTyped,
    ScreenTimerToJSON,
} from './ScreenTimer';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * 
 * @export
 * @interface ScreenImageTitleSubtitleMultipleSelectionList
 */
export interface ScreenImageTitleSubtitleMultipleSelectionList {
    /**
     * 
     * @type {NavigationBar}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    imageTitleSubtitleMultipleSelectionListDescription: string;
    /**
     * 
     * @type {Image}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    image: Image;
    /**
     * Defines the scale of the image in percentage
     * @type {number}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    imageScale?: number;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    subtitle: Text;
    /**
     * 
     * @type {MultipleSelectionList}
     * @memberof ScreenImageTitleSubtitleMultipleSelectionList
     */
    list: MultipleSelectionList;
}

/**
 * Check if a given object implements the ScreenImageTitleSubtitleMultipleSelectionList interface.
 */
export function instanceOfScreenImageTitleSubtitleMultipleSelectionList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "imageTitleSubtitleMultipleSelectionListDescription" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;

    return isInstance;
}

export function ScreenImageTitleSubtitleMultipleSelectionListFromJSON(json: any): ScreenImageTitleSubtitleMultipleSelectionList {
    return ScreenImageTitleSubtitleMultipleSelectionListFromJSONTyped(json, false);
}

export function ScreenImageTitleSubtitleMultipleSelectionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenImageTitleSubtitleMultipleSelectionList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'navigationBar': NavigationBarFromJSON(json['navigationBar']),
        'footer': FooterFromJSON(json['footer']),
        'styles': BasicScreenBlockFromJSON(json['styles']),
        'permission': RequestPermissionFromJSON(json['permission']),
        'timer': ScreenTimerFromJSON(json['timer']),
        'animationEnabled': json['animationEnabled'],
        'useLocalAssetsIfAvailable': json['useLocalAssetsIfAvailable'],
        'imageTitleSubtitleMultipleSelectionListDescription': json['imageTitleSubtitleMultipleSelectionListDescription'],
        'image': ImageFromJSON(json['image']),
        'imageScale': !exists(json, 'imageScale') ? undefined : json['imageScale'],
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'list': MultipleSelectionListFromJSON(json['list']),
    };
}

export function ScreenImageTitleSubtitleMultipleSelectionListToJSON(value?: ScreenImageTitleSubtitleMultipleSelectionList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'navigationBar': NavigationBarToJSON(value.navigationBar),
        'footer': FooterToJSON(value.footer),
        'styles': BasicScreenBlockToJSON(value.styles),
        'permission': RequestPermissionToJSON(value.permission),
        'timer': ScreenTimerToJSON(value.timer),
        'animationEnabled': value.animationEnabled,
        'useLocalAssetsIfAvailable': value.useLocalAssetsIfAvailable,
        'imageTitleSubtitleMultipleSelectionListDescription': value.imageTitleSubtitleMultipleSelectionListDescription,
        'image': ImageToJSON(value.image),
        'imageScale': value.imageScale,
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'list': MultipleSelectionListToJSON(value.list),
    };
}

