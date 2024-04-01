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
import type { NavigationBar } from './NavigationBar';
import {
    NavigationBarFromJSON,
    NavigationBarFromJSONTyped,
    NavigationBarToJSON,
} from './NavigationBar';
import type { RegularList } from './RegularList';
import {
    RegularListFromJSON,
    RegularListFromJSONTyped,
    RegularListToJSON,
} from './RegularList';
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
 * @interface ScreenImageTitleSubtitleList
 */
export interface ScreenImageTitleSubtitleList {
    /**
     * 
     * @type {NavigationBar}
     * @memberof ScreenImageTitleSubtitleList
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof ScreenImageTitleSubtitleList
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof ScreenImageTitleSubtitleList
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof ScreenImageTitleSubtitleList
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof ScreenImageTitleSubtitleList
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenImageTitleSubtitleList
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenImageTitleSubtitleList
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenImageTitleSubtitleList
     */
    imageTitleSubtitleListDescription: string;
    /**
     * 
     * @type {Image}
     * @memberof ScreenImageTitleSubtitleList
     */
    image: Image;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitleList
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitleList
     */
    subtitle: Text;
    /**
     * 
     * @type {RegularList}
     * @memberof ScreenImageTitleSubtitleList
     */
    list: RegularList;
}

/**
 * Check if a given object implements the ScreenImageTitleSubtitleList interface.
 */
export function instanceOfScreenImageTitleSubtitleList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "imageTitleSubtitleListDescription" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;

    return isInstance;
}

export function ScreenImageTitleSubtitleListFromJSON(json: any): ScreenImageTitleSubtitleList {
    return ScreenImageTitleSubtitleListFromJSONTyped(json, false);
}

export function ScreenImageTitleSubtitleListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenImageTitleSubtitleList {
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
        'imageTitleSubtitleListDescription': json['imageTitleSubtitleListDescription'],
        'image': ImageFromJSON(json['image']),
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'list': RegularListFromJSON(json['list']),
    };
}

export function ScreenImageTitleSubtitleListToJSON(value?: ScreenImageTitleSubtitleList | null): any {
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
        'imageTitleSubtitleListDescription': value.imageTitleSubtitleListDescription,
        'image': ImageToJSON(value.image),
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'list': RegularListToJSON(value.list),
    };
}

