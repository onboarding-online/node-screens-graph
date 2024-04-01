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
import type { ProgressBar } from './ProgressBar';
import {
    ProgressBarFromJSON,
    ProgressBarFromJSONTyped,
    ProgressBarToJSON,
} from './ProgressBar';
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
 * @interface ScreenProgressBarTitle
 */
export interface ScreenProgressBarTitle {
    /**
     * 
     * @type {NavigationBar}
     * @memberof ScreenProgressBarTitle
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof ScreenProgressBarTitle
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof ScreenProgressBarTitle
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof ScreenProgressBarTitle
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof ScreenProgressBarTitle
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenProgressBarTitle
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenProgressBarTitle
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenProgressBarTitle
     */
    progressBarTitleDescription: string;
    /**
     * 
     * @type {ProgressBar}
     * @memberof ScreenProgressBarTitle
     */
    progressBar: ProgressBar;
    /**
     * 
     * @type {Text}
     * @memberof ScreenProgressBarTitle
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenProgressBarTitle
     */
    subtitle?: Text;
}

/**
 * Check if a given object implements the ScreenProgressBarTitle interface.
 */
export function instanceOfScreenProgressBarTitle(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "progressBarTitleDescription" in value;
    isInstance = isInstance && "progressBar" in value;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function ScreenProgressBarTitleFromJSON(json: any): ScreenProgressBarTitle {
    return ScreenProgressBarTitleFromJSONTyped(json, false);
}

export function ScreenProgressBarTitleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenProgressBarTitle {
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
        'progressBarTitleDescription': json['progressBarTitleDescription'],
        'progressBar': ProgressBarFromJSON(json['progressBar']),
        'title': TextFromJSON(json['title']),
        'subtitle': !exists(json, 'subtitle') ? undefined : TextFromJSON(json['subtitle']),
    };
}

export function ScreenProgressBarTitleToJSON(value?: ScreenProgressBarTitle | null): any {
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
        'progressBarTitleDescription': value.progressBarTitleDescription,
        'progressBar': ProgressBarToJSON(value.progressBar),
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
    };
}

