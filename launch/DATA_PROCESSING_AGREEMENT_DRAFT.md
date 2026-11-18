# CleanProfit UK — Data Processing Agreement (working draft)

**NOT FOR EXECUTION OR PUBLICATION.** This is a drafting framework for UK GDPR Article 28 terms, not a completed agreement. Legal review and verification of operational controls required.

## Parties and roles
**Controller:** the cleaning business subscribing to the application, insofar as it determines why and how it uses personal information about its clients and staff.

**Processor:** [LEGAL ENTITY / COMPANY NUMBER / ADDRESS], operating the proposed CleanProfit UK service, insofar as it processes that information on the controller's instructions.

For its own subscriber account, billing and business administration data, the service operator may act as an independent controller; that activity belongs in the privacy notice, not this processor agreement.

## Processing schedule — confirm before execution
- **Subject matter:** cloud hosting and management of customer, job, quotation, appointment and invoice records entered by subscribers.
- **Duration:** subscription term plus [DEFINED EXPORT/DELETION WINDOW], subject to legal retention.
- **Nature and purpose:** storing, retrieving, updating and securing records to deliver the subscribed software.
- **Data subjects:** subscribers' customers, business contacts and potentially staff named in records.
- **Data categories:** names, contact details, service addresses, appointment details, quotation/invoice/payment-record details and any free-text information the subscriber enters.
- **Special category data:** not intended for entry; **verify whether free-text fields can contain sensitive information and set a policy**.

## Processor commitments to finalise
1. Process personal data only on the controller's documented instructions, unless law requires otherwise; inform the controller where legally permitted.
2. Ensure personnel authorised to process data are bound by confidentiality obligations.
3. Implement appropriate technical and organisational measures; attach a truthful, maintained security schedule.
4. Engage subprocessors only under an agreed authorisation and notification mechanism, imposing equivalent data-protection obligations.
5. Assist the controller, taking into account the nature of processing, with data subject requests and applicable security, breach, DPIA and regulator obligations.
6. Notify the controller of a personal data breach without undue delay after becoming aware, with an operational contact and escalation procedure.
7. At the controller's choice, delete or return personal data at the end of services, except where law requires retention; **do not promise capabilities that have not been implemented**.
8. Make available information reasonably necessary to demonstrate compliance and support proportionate audits.
9. Inform the controller if an instruction appears to infringe applicable data protection law.

## Subprocessor and transfer schedule — verify
| Service | Expected role | Open verification |
|---|---|---|
| Supabase | Authentication and application database | Contracting entity, hosting region, subprocessors, DPA, transfers |
| Stripe | Subscription payments | Controller/processor roles by processing activity, DPA, transfers |
| GitHub Pages | Website hosting | Applicable logs and privacy roles, hosting and transfers |

Do not assume all three providers are subprocessors for all data; determine roles by actual data flows.

## Security schedule — must be factually confirmed
Current evidence: Supabase authentication; row-level security policies inspected for owner isolation and subscription access; cloud save/load functionality tested by owner.

Open items: independent access-control testing, incident response, deletion/export procedure, retention, backup and restore capability, logging, provider region and transfer mechanisms.

## Governing terms and signatures
**[INSERT CONTROLLER/PROCESSOR CONTACTS, AGREEMENT PRIORITY, LIABILITY, GOVERNING LAW, EXECUTION AND EFFECTIVE DATE FOLLOWING LEGAL REVIEW.]**
