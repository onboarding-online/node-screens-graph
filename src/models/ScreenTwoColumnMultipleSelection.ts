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
import type { Media } from './Media';
import {
    MediaFromJSON,
    MediaFromJSONTyped,
    MediaToJSON,
} from './Media';
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
import type { TwoColumnMultipleSelectionList } from './TwoColumnMultipleSelectionList';
import {
    TwoColumnMultipleSelectionListFromJSON,
    TwoColumnMultipleSelectionListFromJSONTyped,
    TwoColumnMultipleSelectionListToJSON,
} from './TwoColumnMultipleSelectionList';

/**
 * 
 * @export
 * @interface ScreenTwoColumnMultipleSelection
 */
export interface ScreenTwoColumnMultipleSelection {
    /**
     * 
     * @type {NavigationBar}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    twoColumnMultipleSelectionDescription: string;
    /**
     * 
     * @type {Media}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    media?: Media;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    subtitle: Text;
    /**
     * 
     * @type {TwoColumnMultipleSelectionList}
     * @memberof ScreenTwoColumnMultipleSelection
     */
    list: TwoColumnMultipleSelectionList;
}

/**
 * Check if a given object implements the ScreenTwoColumnMultipleSelection interface.
 */
export function instanceOfScreenTwoColumnMultipleSelection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "twoColumnMultipleSelectionDescription" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;

    return isInstance;
}

export function ScreenTwoColumnMultipleSelectionFromJSON(json: any): ScreenTwoColumnMultipleSelection {
    return ScreenTwoColumnMultipleSelectionFromJSONTyped(json, false);
}

export function ScreenTwoColumnMultipleSelectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTwoColumnMultipleSelection {
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
        'twoColumnMultipleSelectionDescription': json['twoColumnMultipleSelectionDescription'],
        'media': !exists(json, 'media') ? undefined : MediaFromJSON(json['media']),
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'list': TwoColumnMultipleSelectionListFromJSON(json['list']),
    };
}

export function ScreenTwoColumnMultipleSelectionToJSON(value?: ScreenTwoColumnMultipleSelection | null): any {
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
        'twoColumnMultipleSelectionDescription': value.twoColumnMultipleSelectionDescription,
        'media': MediaToJSON(value.media),
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'list': TwoColumnMultipleSelectionListToJSON(value.list),
    };
}

