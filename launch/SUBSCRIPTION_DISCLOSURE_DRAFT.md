# CleanProfit UK — Subscription checkout disclosures (DRAFT)

**Status:** Not for live checkout until verified against Stripe live configuration and UK legal requirements.

## Proposed plain-English summary
**CleanProfit UK — £9.99 per month** [INCLUDING/EXCLUDING VAT — CONFIRM]. Manage customer records, quotes, cleaning appointments and invoices.

**Trial:** [SEVEN DAYS — CONFIRM LIVE CONFIGURATION]. [STATE WHETHER CARD IS REQUIRED, WHEN THE FIRST CHARGE OCCURS AND WHETHER A REMINDER IS SENT.]

**Renewal:** Your subscription renews automatically every month until cancelled. [CONFIRM EXACT BILLING CYCLE.]

**Cancellation:** Cancel through the billing portal or contact [SUPPORT EMAIL]. [CONFIRM WHETHER SERVICE CONTINUES UNTIL THE END OF THE PAID PERIOD, AND ANY REFUND RULES.]

**Before subscribing:** Read our [Terms of Service] and [Privacy Policy] (publish working links before checkout).

## Implementation checklist
- [ ] Confirm £9.99 amount and VAT handling in Stripe LIVE
- [ ] Confirm live price ID, product name, currency and recurrence
- [ ] Confirm seven-day trial behaviour, card collection and first charge
- [ ] Confirm cancellation and refunds policy
- [ ] Confirm UK consumer/business classification and any applicable statutory disclosures
- [ ] Link published legal pages in checkout and account
- [ ] Configure support contact and business identity in Stripe
- [ ] Verify webhook event processing and post-checkout return URL
- [ ] Obtain explicit owner approval before enabling live billing
