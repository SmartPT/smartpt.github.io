# SmartPT documentation rewrite report

## Summary

The customer documentation was reviewed and rewritten for SmartPT Core, JIT Access, and AD Control. The rewrite keeps confirmed product behavior, exact product names, prerequisites, limitations, screenshots, and troubleshooting details.

The 29 product Markdown pages were reduced from 9,435 words to 6,328 words, a 32.9% reduction. Repeated product introductions, threat explanations, audit statements, and transition text were removed or consolidated.

## Pages changed

### SmartPT Core

- Get started with SmartPT Core
- SmartPT Console portal overview
- Review license and product status
- Configure SmartPT Console access
- SmartPT Console settings
- Reset shared two-factor enrollment

### JIT Access

- Get started with JIT Access
- JIT Access licensing and RBAC
- JIT Access portal overview
- JIT Access settings
- Create a JIT role
- Create a JIT assignment
- Choose a JIT assignment type
- Activate Eligible OTP access
- Monitor, extend, or revoke active access
- Configure JIT notifications and session policy
- Troubleshoot JIT Access

### AD Control

- Get started with AD Control
- AD Control licensing and RBAC
- AD Control portal overview
- AD Control settings
- Configure protected users and groups
- AD Control security model
- Use the AD Control operator console
- Reset an Active Directory password
- Unlock an Active Directory account
- Update approved user profile fields
- Manage approved group membership
- Troubleshoot AD Control

### Site content

- Product navigation labels now use direct, task-oriented wording.
- Product page titles and descriptions now describe the task or observable result.
- Legacy JIT and AD Control hashes resolve to the current page instead of duplicate content.
- `llms.txt` now reflects the final product scope and terminology.
- Shared audit navigation now uses **Audit records** rather than implying a compliance claim.
- The documentation release date and structured-data modification date were updated.

## Pages reviewed and left substantially unchanged

The following pages already contained useful, confirmed implementation details. Their technical bodies were retained:

- Requirements
- Deployment overview
- Active Directory permissions
- Installation
- Licensing
- Downloads
- Privacy notice
- Terms of use
- Cookie policy
- Accessibility statement

The shared security, audit, troubleshooting, and release pages were reviewed. Only wording, headings, dates, or terminology that required correction were changed.

## Terminology normalized

- SmartPT Core, JIT Access, and AD Control
- Active Directory
- JIT role and assignment
- Manual, Scheduled, and Eligible OTP
- temporary Active Directory group membership
- Active Sessions
- Helpdesk (Tier 1) and Advanced Support (Tier 2)
- Tier 0
- protected user and protected group
- operator, administrator, and target user
- audit record

The rewrite distinguishes product access, licensing, RBAC, roles, assignments, sessions, and Active Directory membership. Eligible OTP is described as an activation method, not an approval workflow.

## Repeated content removed

- Standing-access explanations repeated across JIT task pages
- Tier 0 and protected-identity definitions repeated across AD Control procedures
- Repeated statements about auditing after each action
- Repeated product introductions on portal, settings, and task pages
- Generic security conclusions that restated the procedure
- Duplicate legacy JIT administration, user, settings, and security page bodies

## Product behavior preserved

- A JIT role maps existing Active Directory groups and does not activate access by itself.
- An assignment defines the user, activation method, and validity.
- JIT Access supports Manual, Scheduled, and Eligible OTP assignments.
- This release does not include a JIT approval workflow.
- Expiration or revocation removes temporary Active Directory group membership.
- AD Control operators require licenses; target users do not.
- Tier 1 cannot change phone numbers, edit profile attributes, or manage groups.
- Protected identities are excluded from AD Control operator workflows.
- Mobile OTP uses the Active Directory `mobile` attribute and the documented country-prefix rules.

## Unclear or conflicting behavior found

No direct contradiction was found between the rewritten pages and the current documented product behavior. Where exact action-button wording was not confirmed by a screenshot, the procedure describes the action without inventing a UI label.

## Items for product-owner confirmation

- Confirm the exact visible labels for direct and OTP-verified password reset and account unlock actions after the next UI release.
- Confirm whether audit export formats should remain documented as JSONL and CSV in future releases.
- Recheck scheduled-assignment limitations whenever calendar or cross-midnight scheduling changes.

## Broken links fixed

- Legacy JIT page hashes now resolve to the current roles, Eligible OTP, settings, and shared security pages.
- Legacy AD Control page hashes resolve to the current task pages.
- Route targets now keep mobile pages at the top instead of scrolling past the header when a hash URL opens.
- All current internal links, related-page links, image paths, and download links were validated.

## Validation

- JavaScript syntax checks passed for `assets/app.js` and all three product content modules.
- 45 navigation routes were checked at 360, 390, 430, 768, and 1440 pixels.
- 225 route and viewport checks passed with one H1, page metadata, visible content, and no horizontal overflow.
- Mobile navigation opens, locks page scrolling, and closes with Escape.
- 149 internal hash links resolved without a missing page.
- Screenshot paths resolved and all rendered screenshots had alt text.
- Search returned results for OTP, Tier 0, Protected Users, Password Reset, Account Unlock, JIT, Active Sessions, Assignments, Licensing, Installation, Audit, Revoke, and IIS.
- No duplicate rendered paragraphs were found across current navigation pages.
- No encoding artifacts, public credentials, or banned promotional phrases were found in current customer content.
- Lighthouse mobile: Performance 93, Accessibility 100, Best Practices 100, SEO 100, and CLS 0.
- Lighthouse desktop: Performance 100, Accessibility 100, Best Practices 100, SEO 100, and CLS 0.

## Remaining documentation gaps

- A confirmed upgrade and recovery procedure should be added when customer-facing steps are finalized.
- Product-specific audit-event reference tables can be expanded when stable event names are approved.
- Error-message reference pages should be created from confirmed product error text rather than inferred examples.
- Version-specific release notes should be maintained with each customer release.
