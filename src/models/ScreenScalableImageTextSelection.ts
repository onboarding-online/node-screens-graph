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
 * @interface ScreenScalableImageTextSelection
 */
export interface ScreenScalableImageTextSelection {
    /**
     * 
     * @type {NavigationBar}
     * @memberof ScreenScalableImageTextSelection
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof ScreenScalableImageTextSelection
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof ScreenScalableImageTextSelection
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof ScreenScalableImageTextSelection
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof ScreenScalableImageTextSelection
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenScalableImageTextSelection
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenScalableImageTextSelection
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenScalableImageTextSelection
     */
    scalableImageTextSelection: string;
    /**
     * 
     * @type {Image}
     * @memberof ScreenScalableImageTextSelection
     */
    image: Image;
    /**
     * Defines the scale of the image in percentage
     * @type {number}
     * @memberof ScreenScalableImageTextSelection
     */
    imageScale: number;
    /**
     * 
     * @type {Text}
     * @memberof ScreenScalableImageTextSelection
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenScalableImageTextSelection
     */
    subtitle: Text;
    /**
     * 
     * @type {MultipleSelectionList}
     * @memberof ScreenScalableImageTextSelection
     */
    list: MultipleSelectionList;
}

/**
 * Check if a given object implements the ScreenScalableImageTextSelection interface.
 */
export function instanceOfScreenScalableImageTextSelection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "scalableImageTextSelection" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "imageScale" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;

    return isInstance;
}

export function ScreenScalableImageTextSelectionFromJSON(json: any): ScreenScalableImageTextSelection {
    return ScreenScalableImageTextSelectionFromJSONTyped(json, false);
}

export function ScreenScalableImageTextSelectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenScalableImageTextSelection {
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
        'scalableImageTextSelection': json['scalableImageTextSelection'],
        'image': ImageFromJSON(json['image']),
        'imageScale': json['imageScale'],
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'list': MultipleSelectionListFromJSON(json['list']),
    };
}

export function ScreenScalableImageTextSelectionToJSON(value?: ScreenScalableImageTextSelection | null): any {
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
        'scalableImageTextSelection': value.scalableImageTextSelection,
        'image': ImageToJSON(value.image),
        'imageScale': value.imageScale,
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'list': MultipleSelectionListToJSON(value.list),
    };
}

