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
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    ownerId: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('ownerId' in value) || value['ownerId'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'],
        'type': json['type'],
        'displayName': json['displayName'],
        'description': json['description'],
        'email': json['email'],
        'ownerId': json['ownerId'],
        'id': json['id'],
    };
}

  export function UserToJSON(json: any): User {
      return UserToJSONTyped(json, false);
  }

  export function UserToJSONTyped(value?: User | null, ignoreDiscriminator: boolean = false): any {
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
        'id': value['id'],
    };
}

