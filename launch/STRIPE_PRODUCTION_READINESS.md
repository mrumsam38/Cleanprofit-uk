# CleanProfit UK — Stripe production readiness review

**Reviewed:** 18 November 2026  
**Source inspected:** `index.html` on `main` (current Sandbox release candidate).  
**Scope:** Client-side integration only. Supabase Edge Function source and Stripe dashboard configuration were not available for inspection. **No live billing activated; no secrets accessed or changed.**

## Verified in current frontend source

| Item | Current implementation | Production implication |
|---|---|---|
| Checkout entry | Account page button `cp-test-checkout` | Explicitly labelled Sandbox; must be changed only at approved cutover |
| Checkout endpoint | Authenticated POST to `/functions/v1/super-worker` | Inspect deployed Edge Function, validate JWT server-side and choose LIVE Stripe credentials only after authorisation |
| Checkout request | Bearer Supabase session access token and publishable Supabase API key; body `{}` | Product/price/customer identity must be selected and verified **server-side**; never accept arbitrary price or customer ID from browser |
| Checkout response | Requires URL beginning `https://checkout.stripe.com/` | Maintain strict Stripe destination checks; validate session creation server-side |
| Billing portal | Authenticated POST to `/functions/v1/cp-customer-portal` | Inspect server-side customer ownership validation and LIVE portal configuration |
| Portal response | Requires HTTPS and host `billing.stripe.com` or `customer-portal.stripe.com` | Appropriate allowlist; check return URL |
| Access | Reads `cp_subscriptions` and calls `cp_has_app_access` | Audit function implementation and webhook-driven subscription status updates |
| Renewal / cancellation display | Uses `trial_ends_at`, `current_period_end`, `cancel_at_period_end` | Verify exact semantics against LIVE webhook and portal behaviour |
| Sandbox interface | Explicit TEST labels and no-real-charges warnings | Do not remove until live activation approved |

## Specific issues found

1. **Trial upgrade path:** `checkSubscription()` currently hides the Checkout button whenever `allowed` is true, including users in an active free trial. That prevents an active trial user from initiating checkout from the account page. Resolve before commercial launch, with careful handling to avoid duplicate subscriptions.
2. **Checkout return destination:** Previous backend setup reportedly returned users to `cloud_recovery_uat.html`, not the production homepage. **Not verifiable from the frontend.** Update Edge Function's success/cancel URLs to the canonical deployed application before LIVE.
3. **Server-side implementation not inspected:** `super-worker`, `cp-customer-portal`, webhook signature verification, replay/idempotency handling and `cp_has_app_access` require backend review. Frontend checks alone cannot establish payment security.
4. **Trial and tax claims:** Seven-day trial and £9.99/month have been discussed but LIVE Stripe product/price, VAT handling, payment-method requirements and cancellation/refund settings remain unverified.
5. **No live billing environment isolation verified:** Ensure distinct LIVE secret keys, price ID, webhook signing secret and portal configuration; prevent Sandbox IDs from crossing into LIVE.

## Safe implementation order

### Before owner intervention
- [x] Inspect client checkout, portal and access-control integration
- [x] Identify exact endpoints and production dependencies
- [x] Preserve existing Sandbox configuration and test records
- [ ] Inspect backend Edge Function source and webhook implementation using authorised access
- [ ] Prepare isolated LIVE configuration and cutover/rollback plan (without credentials in GitHub)
- [ ] Address trial upgrade UX and duplicate subscription safeguards

### Requires owner/business verification
- [ ] Incorporate and verify legal business identity
- [ ] Confirm Stripe LIVE account verification and bank/payout details
- [ ] Approve VAT-inclusive/exclusive display and final subscription disclosures
- [ ] Approve support contact, refund/cancellation policy and legal pages
- [ ] Decide how production backup/recovery risk is managed

### Requires explicit go-live authorisation
- [ ] Configure LIVE Stripe product and £9.99 monthly price
- [ ] Store LIVE keys and webhook secrets only in secure server-side environment
- [ ] Configure LIVE webhook endpoint and event handling
- [ ] Verify one controlled LIVE purchase/cancellation and entitlement change
- [ ] Change public app from Sandbox to LIVE only after successful checks

## Safety rules
- Never commit Stripe secret keys, webhook secrets or Supabase service-role keys to GitHub.
- Never enable LIVE billing by changing a frontend label alone.
- Do not modify or delete existing test subscriptions, cloud records or owner exemptions.
- No unverified statement that production Stripe is ready.
