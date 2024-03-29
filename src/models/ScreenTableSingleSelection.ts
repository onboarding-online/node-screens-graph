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
import type { SingleSelectionList } from './SingleSelectionList';
import {
    SingleSelectionListFromJSON,
    SingleSelectionListFromJSONTyped,
    SingleSelectionListToJSON,
} from './SingleSelectionList';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * 
 * @export
 * @interface ScreenTableSingleSelection
 */
export interface ScreenTableSingleSelection {
    /**
     * 
     * @type {NavigationBar}
     * @memberof ScreenTableSingleSelection
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof ScreenTableSingleSelection
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof ScreenTableSingleSelection
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof ScreenTableSingleSelection
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof ScreenTableSingleSelection
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenTableSingleSelection
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenTableSingleSelection
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenTableSingleSelection
     */
    singleSelectionDescription: string;
    /**
     * 
     * @type {Media}
     * @memberof ScreenTableSingleSelection
     */
    media?: Media;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTableSingleSelection
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenTableSingleSelection
     */
    subtitle: Text;
    /**
     * 
     * @type {SingleSelectionList}
     * @memberof ScreenTableSingleSelection
     */
    list: SingleSelectionList;
}

/**
 * Check if a given object implements the ScreenTableSingleSelection interface.
 */
export function instanceOfScreenTableSingleSelection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "singleSelectionDescription" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;

    return isInstance;
}

export function ScreenTableSingleSelectionFromJSON(json: any): ScreenTableSingleSelection {
    return ScreenTableSingleSelectionFromJSONTyped(json, false);
}

export function ScreenTableSingleSelectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenTableSingleSelection {
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
        'singleSelectionDescription': json['singleSelectionDescription'],
        'media': !exists(json, 'media') ? undefined : MediaFromJSON(json['media']),
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'list': SingleSelectionListFromJSON(json['list']),
    };
}

export function ScreenTableSingleSelectionToJSON(value?: ScreenTableSingleSelection | null): any {
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
        'singleSelectionDescription': value.singleSelectionDescription,
        'media': MediaToJSON(value.media),
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'list': SingleSelectionListToJSON(value.list),
    };
}

