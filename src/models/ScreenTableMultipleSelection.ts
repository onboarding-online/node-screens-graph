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
import type { Media } from './Media';
import {
    MediaFromJSON,
    MediaFromJSONTyped,
    MediaToJSON,
} from './Media';
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
 * @interface ScreenTableMultipleSelection
 */
export interface ScreenTableMultipleSelection {
    /**
     * 
     * @type {NavigationBar}
     * @memberof ScreenTableMultipleSelection
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof ScreenTableMultipleSelection
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof ScreenTableMultipleSelection
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof ScreenTableMultipleSelection
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof ScreenTableMultipleSelection
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenTableMultipleSelection
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenTableMultipleSelection
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenTableMultipleSelection
     */
    multipleSelectionDescription: string;
    /**
     * 
     * @type {Media}
     * @memberof ScreenTableMultipleSelection
     */
    media?: Media;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTableMultipleSelection
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTableMultipleSelection
     */
    subtitle: Text;
    /**
     * 
     * @type {MultipleSelectionList}
     * @memberof ScreenTableMultipleSelection
     */
    list: MultipleSelectionList;
}

/**
 * Check if a given object implements the ScreenTableMultipleSelection interface.
 */
export function instanceOfScreenTableMultipleSelection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "multipleSelectionDescription" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;

    return isInstance;
}

export function ScreenTableMultipleSelectionFromJSON(json: any): ScreenTableMultipleSelection {
    return ScreenTableMultipleSelectionFromJSONTyped(json, false);
}

export function ScreenTableMultipleSelectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTableMultipleSelection {
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
        'multipleSelectionDescription': json['multipleSelectionDescription'],
        'media': !exists(json, 'media') ? undefined : MediaFromJSON(json['media']),
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'list': MultipleSelectionListFromJSON(json['list']),
    };
}

export function ScreenTableMultipleSelectionToJSON(value?: ScreenTableMultipleSelection | null): any {
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
        'multipleSelectionDescription': value.multipleSelectionDescription,
        'media': MediaToJSON(value.media),
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'list': MultipleSelectionListToJSON(value.list),
    };
}

