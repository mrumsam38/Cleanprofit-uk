# CleanProfit UK — launch operations and customer support playbook

**Status:** Preparation only. No live billing and no assumption of a staffed support operation.

## Support
- Publish one monitored support address: **[SUPPORT EMAIL]**.
- Publish one monitored privacy address (can be same inbox if appropriate): **[PRIVACY EMAIL]**.
- Set realistic support hours and response targets **only after owner approval**.
- Never ask customers to send passwords, card numbers, authentication tokens or complete private customer databases by email.
- For a reported issue, collect the page, approximate time, browser, anonymised reproduction steps and non-sensitive error text.

## Incident handling
1. Determine whether issue concerns login, subscription access, cloud saving, data disclosure or payment.
2. For possible data disclosure, stop unsafe changes, preserve logs/evidence, restrict access where necessary, and assess legal notification obligations promptly.
3. For save failures, warn customers not to overwrite or clear browser storage; preserve existing records while investigating.
4. For billing issues, check the Stripe dashboard in the appropriate TEST or LIVE environment. Do not create charges, refunds or cancellations without authorisation.
5. Record the incident, actions taken, customer communications and resolution.

## Cancellation and account closure
- Subscription cancellation and data deletion are separate operations.
- Verify the live Stripe customer portal cancellation configuration and period-end access behaviour.
- Define an authenticated account export process and data deletion/retention process before launch.
- Confirm how requests involving the subscriber's own clients are routed to the subscriber as controller.

## Basic monitoring
- Check GitHub Pages deployment after approved releases.
- Check Supabase authentication/database health and subscription webhook errors.
- Check Stripe failed-payment and webhook-delivery alerts in LIVE only once authorised.
- Maintain a secure off-platform backup/recovery plan. **Managed Supabase backups are currently deferred by owner until revenue; production recovery risk remains open.**

## Release process
1. Identify scope and avoid changing functioning production logic without need.
2. Review source diff and run automated static checks.
3. Keep Stripe Sandbox isolated from LIVE credentials.
4. Test only meaningful release milestones; never use real customer records in Sandbox.
5. Obtain explicit approval before first live billing or irreversible changes.

## Final owner decisions
- [ ] Register company and establish legal/support identity
- [ ] Confirm subscription tax and trial disclosures
- [ ] Approve support contact and cancellation/refund policy
- [ ] Decide how to mitigate backup/recovery risk before real customer data
- [ ] Approve live Stripe activation
