# CleanProfit UK — Launch readiness tracker

Updated 18 November 2026. **No live payments enabled.**

## Completed / working
- [x] Core customer, quote, schedule and invoice functionality built
- [x] Supabase cloud authentication and cross-device data sync user-verified
- [x] Five customer-record RLS policies inspected for ownership and subscription access
- [x] Stripe Sandbox subscription tests conducted
- [x] Current app deployed on GitHub Pages

## Drafted, not published
- [x] Privacy policy working draft
- [x] Terms of service working draft
- [x] Subscription/checkout disclosures working draft

## Must complete before accepting paying customers
- [ ] Check UK trade mark and company-name conflicts, especially existing CleanProfit brand
- [ ] Incorporate proposed company and confirm company details
- [ ] Establish public support and privacy email addresses
- [ ] Finalise legal terms and data processing agreement; verify actual data handling
- [ ] Confirm ICO fee / registration obligations and data protection responsibilities
- [ ] Confirm live Stripe business verification, price, VAT treatment, trial, renewals and cancellation
- [ ] Review live webhook security, account-access gating and checkout return URLs
- [ ] Resolve production backup/recovery risk: user plans Supabase paid backup upgrade when revenue allows; do not mark risk as resolved
- [ ] Review account export/deletion and support processes
- [ ] Remove Sandbox/UAT warnings only when real customer use is authorised
- [ ] Obtain owner's explicit go-live approval

## Known constraints
- App is currently a release candidate in Stripe Sandbox.
- No evidence that live Stripe checkout or webhook flow has been verified.
- Cloud app does not support offline edits or simultaneous multi-device editing.
- RLS policy definitions were reviewed, but function internals and independent adversarial cross-account tests were not completed.
- Do not invent provider transfer arrangements, retention periods, legal company identity or backup capabilities.
