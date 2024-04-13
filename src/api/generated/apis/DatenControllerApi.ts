/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Datensatz,
  UpdateZusatzInfosDto,
  ZusatzInfos,
} from '../models/index';
import {
    DatensatzFromJSON,
    DatensatzToJSON,
    UpdateZusatzInfosDtoFromJSON,
    UpdateZusatzInfosDtoToJSON,
    ZusatzInfosFromJSON,
    ZusatzInfosToJSON,
} from '../models/index';

export interface GetZusatzInfosForDatensatzRequest {
    id: number;
}

export interface UpdateZusatzinfosRequest {
    id: number;
    updateZusatzInfosDto: UpdateZusatzInfosDto;
}

export interface UploadDataRequest {
    file: Blob;
}

/**
 * 
 */
export class DatenControllerApi extends runtime.BaseAPI {

    /**
     */
    async getDataRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Datensatz>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/data`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DatensatzFromJSON));
    }

    /**
     */
    async getData(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Datensatz>> {
        const response = await this.getDataRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getZusatzInfosForDatensatzRaw(requestParameters: GetZusatzInfosForDatensatzRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ZusatzInfos>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getZusatzInfosForDatensatz().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/data/{id}/zusatz-infos`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ZusatzInfosFromJSON(jsonValue));
    }

    /**
     */
    async getZusatzInfosForDatensatz(requestParameters: GetZusatzInfosForDatensatzRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ZusatzInfos> {
        const response = await this.getZusatzInfosForDatensatzRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateZusatzinfosRaw(requestParameters: UpdateZusatzinfosRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateZusatzinfos().'
            );
        }

        if (requestParameters['updateZusatzInfosDto'] == null) {
            throw new runtime.RequiredError(
                'updateZusatzInfosDto',
                'Required parameter "updateZusatzInfosDto" was null or undefined when calling updateZusatzinfos().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/data/{id}/zusatz-infos`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateZusatzInfosDtoToJSON(requestParameters['updateZusatzInfosDto']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateZusatzinfos(requestParameters: UpdateZusatzinfosRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateZusatzinfosRaw(requestParameters, initOverrides);
    }

    /**
     */
    async uploadDataRaw(requestParameters: UploadDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['file'] == null) {
            throw new runtime.RequiredError(
                'file',
                'Required parameter "file" was null or undefined when calling uploadData().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['file'] != null) {
            formParams.append('file', requestParameters['file'] as any);
        }

        const response = await this.request({
            path: `/data`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async uploadData(requestParameters: UploadDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.uploadDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
