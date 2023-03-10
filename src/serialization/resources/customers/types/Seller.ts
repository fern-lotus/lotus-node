/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LotusApi } from "@fern-api/lotus";
import * as core from "../../../../core";

export const Seller: core.serialization.ObjectSchema<serializers.Seller.Raw, LotusApi.Seller> =
    core.serialization.object({
        name: core.serialization.string(),
        address: core.serialization.lazyObject(async () => (await import("../../..")).Address).optional(),
        phone: core.serialization.string().optional(),
        email: core.serialization.string().optional(),
    });

export declare namespace Seller {
    interface Raw {
        name: string;
        address?: serializers.Address.Raw | null;
        phone?: string | null;
        email?: string | null;
    }
}
