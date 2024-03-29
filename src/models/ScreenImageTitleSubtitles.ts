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
 * @interface ScreenImageTitleSubtitles
 */
export interface ScreenImageTitleSubtitles {
    /**
     * 
     * @type {NavigationBar}
     * @memberof ScreenImageTitleSubtitles
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof ScreenImageTitleSubtitles
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof ScreenImageTitleSubtitles
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof ScreenImageTitleSubtitles
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof ScreenImageTitleSubtitles
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenImageTitleSubtitles
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenImageTitleSubtitles
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenImageTitleSubtitles
     */
    imageTitleSubtitlesDescription: string;
    /**
     * 
     * @type {Image}
     * @memberof ScreenImageTitleSubtitles
     */
    image: Image;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitles
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitles
     */
    subtitle1: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenImageTitleSubtitles
     */
    subtitle2: Text;
}

/**
 * Check if a given object implements the ScreenImageTitleSubtitles interface.
 */
export function instanceOfScreenImageTitleSubtitles(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "imageTitleSubtitlesDescription" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle1" in value;
    isInstance = isInstance && "subtitle2" in value;

    return isInstance;
}

export function ScreenImageTitleSubtitlesFromJSON(json: any): ScreenImageTitleSubtitles {
    return ScreenImageTitleSubtitlesFromJSONTyped(json, false);
}

export function ScreenImageTitleSubtitlesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenImageTitleSubtitles {
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
        'imageTitleSubtitlesDescription': json['imageTitleSubtitlesDescription'],
        'image': ImageFromJSON(json['image']),
        'title': TextFromJSON(json['title']),
        'subtitle1': TextFromJSON(json['subtitle1']),
        'subtitle2': TextFromJSON(json['subtitle2']),
    };
}

export function ScreenImageTitleSubtitlesToJSON(value?: ScreenImageTitleSubtitles | null): any {
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
        'imageTitleSubtitlesDescription': value.imageTitleSubtitlesDescription,
        'image': ImageToJSON(value.image),
        'title': TextToJSON(value.title),
        'subtitle1': TextToJSON(value.subtitle1),
        'subtitle2': TextToJSON(value.subtitle2),
    };
}

