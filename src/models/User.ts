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

import { exists, mapValues } from '../runtime';
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
     * @type {string}
     * @memberof User
     */
    ownerId: string;
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
export function instanceOfUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "ownerId" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
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

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'type': value.type,
        'displayName': value.displayName,
        'description': value.description,
        'email': value.email,
        'ownerId': value.ownerId,
        'id': value.id,
    };
}

