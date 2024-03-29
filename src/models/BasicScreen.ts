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

/**
 * Basic screen settings
 * @export
 * @interface BasicScreen
 */
export interface BasicScreen {
    /**
     * 
     * @type {NavigationBar}
     * @memberof BasicScreen
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof BasicScreen
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof BasicScreen
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof BasicScreen
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof BasicScreen
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof BasicScreen
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BasicScreen
     */
    useLocalAssetsIfAvailable: boolean;
}

/**
 * Check if a given object implements the BasicScreen interface.
 */
export function instanceOfBasicScreen(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;

    return isInstance;
}

export function BasicScreenFromJSON(json: any): BasicScreen {
    return BasicScreenFromJSONTyped(json, false);
}

export function BasicScreenFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicScreen {
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
    };
}

export function BasicScreenToJSON(value?: BasicScreen | null): any {
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
    };
}

