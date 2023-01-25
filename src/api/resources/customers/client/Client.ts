/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { LotusApi } from "@fern-api/lotus";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.LotusApiEnvironment | string;
        xApiKey?: core.Supplier<string>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    public async create(request: LotusApi.CustomerCreateRequest): Promise<LotusApi.Customer> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LotusApiEnvironment.Cloud, "/api/customers"),
            method: "POST",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.xApiKey),
            },
            body: await serializers.customers.create.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.customers.create.Response.parse(
                _response.body as serializers.customers.create.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LotusApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LotusApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LotusApiTimeoutError();
            case "unknown":
                throw new errors.LotusApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async retrieve(customerId: string): Promise<LotusApi.Customer> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.LotusApiEnvironment.Cloud,
                `/api/customers/${customerId}`
            ),
            method: "GET",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.xApiKey),
            },
        });
        if (_response.ok) {
            return await serializers.customers.retrieve.Response.parse(
                _response.body as serializers.customers.retrieve.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LotusApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LotusApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LotusApiTimeoutError();
            case "unknown":
                throw new errors.LotusApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async listAll(): Promise<LotusApi.Customer[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LotusApiEnvironment.Cloud, "/api/customers"),
            method: "GET",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.xApiKey),
            },
        });
        if (_response.ok) {
            return await serializers.customers.listAll.Response.parse(
                _response.body as serializers.customers.listAll.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LotusApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LotusApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LotusApiTimeoutError();
            case "unknown":
                throw new errors.LotusApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}