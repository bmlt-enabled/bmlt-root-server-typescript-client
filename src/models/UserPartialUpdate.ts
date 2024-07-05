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
 * @interface UserPartialUpdate
 */
export interface UserPartialUpdate {
    /**
     * 
     * @type {string}
     * @memberof UserPartialUpdate
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPartialUpdate
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPartialUpdate
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPartialUpdate
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPartialUpdate
     */
    email?: string;
    /**
     * 
     * @type {number}
     * @memberof UserPartialUpdate
     */
    ownerId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserPartialUpdate
     */
    password?: string;
}

/**
 * Check if a given object implements the UserPartialUpdate interface.
 */
export function instanceOfUserPartialUpdate(value: object): value is UserPartialUpdate {
    return true;
}

export function UserPartialUpdateFromJSON(json: any): UserPartialUpdate {
    return UserPartialUpdateFromJSONTyped(json, false);
}

export function UserPartialUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPartialUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'] == null ? undefined : json['username'],
        'type': json['type'] == null ? undefined : json['type'],
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
        'description': json['description'] == null ? undefined : json['description'],
        'email': json['email'] == null ? undefined : json['email'],
        'ownerId': json['ownerId'] == null ? undefined : json['ownerId'],
        'password': json['password'] == null ? undefined : json['password'],
    };
}

export function UserPartialUpdateToJSON(value?: UserPartialUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'username': value['username'],
        'type': value['type'],
        'displayName': value['displayName'],
        'description': value['description'],
        'email': value['email'],
        'ownerId': value['ownerId'],
        'password': value['password'],
    };
}

