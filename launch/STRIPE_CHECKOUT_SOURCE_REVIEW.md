# super-worker — proposed Sandbox Checkout revision

This file is a **reviewed replacement candidate**, not a deployed Supabase Edge Function. Deploy only after checking existing test sessions and confirming the canonical GitHub Pages URL. No LIVE keys are accepted.

## Verified from the owner-provided deployed source (18 November 2026)

- Checkout returns to `cloud_recovery_uat.html`, which is the old testing page.
- Fixed test Price ID `price_1UcnWSRJ6uBJjox2xbj811Oe`.
- JWT is checked using `supabase.auth.getUser(token)`.
- Current status guard rejects `active` only; `trialing` and `past_due` are not explicitly handled.
- Current implementation creates a fresh Checkout Session on each POST without an idempotency key.
- `STRIPE_SECRET_KEY` must start with `sk_test_`, which prevents accidental live charging.

## Proposed minimal fix

1. Replace the return URL with `https://mrumsam38.github.io/Cleanprofit-uk/`.
2. Reject checkout for active, trialing, and past_due records **until the trial-upgrade experience is deliberately designed**; otherwise users may create duplicate subscriptions.
3. For users with an existing `stripe_customer_id`, use it only after verifying the associated Stripe customer and subscription status server-side. A status value alone is insufficient to rule out duplicates.
4. Use a server-side checkout-attempt record or a short-lived stable idempotency key, rather than random keys or relying on the browser disabling the button.
5. Verify the existing customer portal and webhook logic before deploying any payment changes.

## Immediate one-line patch (safe in Sandbox)

In the Supabase Edge Function `super-worker`, replace:

```ts
const APP_URL =
  "https://mrumsam38.github.io/Cleanprofit-uk/cloud_recovery_uat.html";
```

with:

```ts
const APP_URL =
  "https://mrumsam38.github.io/Cleanprofit-uk/";
```

The existing `success_url` and `cancel_url` code then returns to the homepage. This does **not** activate LIVE billing, alter customer records, or change Stripe credentials.

## Not yet inspected

- `cp-customer-portal` Edge Function source
- Stripe webhook handler and signature verification
- `cp_has_app_access` implementation
- Stripe test product/price settings, trial handling and tax configuration

Do not deploy a full rewrite until these dependencies have been reviewed.
