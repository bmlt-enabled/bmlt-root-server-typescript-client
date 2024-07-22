/* tslint:disable */
/* eslint-disable */
/**
 * BMLT
 * BMLT Admin API Documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ServiceBodyUpdate
 */
export interface ServiceBodyUpdate {
    /**
     * 
     * @type {number}
     * @memberof ServiceBodyUpdate
     */
    parentId: number | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyUpdate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyUpdate
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyUpdate
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof ServiceBodyUpdate
     */
    adminUserId: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof ServiceBodyUpdate
     */
    assignedUserIds: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyUpdate
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyUpdate
     */
    helpline?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyUpdate
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyUpdate
     */
    worldId?: string;
}

/**
 * Check if a given object implements the ServiceBodyUpdate interface.
 */
export function instanceOfServiceBodyUpdate(value: object): value is ServiceBodyUpdate {
    if (!('parentId' in value) || value['parentId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('adminUserId' in value) || value['adminUserId'] === undefined) return false;
    if (!('assignedUserIds' in value) || value['assignedUserIds'] === undefined) return false;
    return true;
}

export function ServiceBodyUpdateFromJSON(json: any): ServiceBodyUpdate {
    return ServiceBodyUpdateFromJSONTyped(json, false);
}

export function ServiceBodyUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceBodyUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'parentId': json['parentId'],
        'name': json['name'],
        'description': json['description'],
        'type': json['type'],
        'adminUserId': json['adminUserId'],
        'assignedUserIds': json['assignedUserIds'],
        'url': json['url'] == null ? undefined : json['url'],
        'helpline': json['helpline'] == null ? undefined : json['helpline'],
        'email': json['email'] == null ? undefined : json['email'],
        'worldId': json['worldId'] == null ? undefined : json['worldId'],
    };
}

export function ServiceBodyUpdateToJSON(value?: ServiceBodyUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'parentId': value['parentId'],
        'name': value['name'],
        'description': value['description'],
        'type': value['type'],
        'adminUserId': value['adminUserId'],
        'assignedUserIds': value['assignedUserIds'],
        'url': value['url'],
        'helpline': value['helpline'],
        'email': value['email'],
        'worldId': value['worldId'],
    };
}

