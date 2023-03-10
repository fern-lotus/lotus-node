/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LotusApi } from "@fern-api/lotus";
import * as core from "../../../../core";

export const CustomerStripeIntegration: core.serialization.ObjectSchema<
    serializers.CustomerStripeIntegration.Raw,
    LotusApi.CustomerStripeIntegration
> = core.serialization.object({
    stripeId: core.serialization.property("stripe_id", core.serialization.string()),
    hasPaymentMethod: core.serialization.property("has_payment_method", core.serialization.boolean()),
});

export declare namespace CustomerStripeIntegration {
    interface Raw {
        stripe_id: string;
        has_payment_method: boolean;
    }
}
