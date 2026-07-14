# SmartPT documentation style guide

## Purpose

Write customer documentation that explains an observable product action, its requirements, expected result, verification, and failure checks.

## Page structure

Use these sections when they apply:

1. One-sentence outcome.
2. **Before you begin**.
3. Ordered steps using exact UI labels in bold.
4. **Expected result**.
5. **Verify** or **Troubleshooting**.
6. Directly related pages.

Overview pages should define the feature once and link to task pages for procedures.

## Language

- Use present tense and direct verbs: Open, Select, Enter, Choose, Click, Confirm, Save, Assign, Remove, Review, Verify.
- Keep most paragraphs to one to three sentences.
- Use numbered lists only when order matters.
- Use tables for fields, settings, roles, statuses, and errors.
- State consequences next to security-sensitive actions.
- Keep exact UI wording unchanged.

Avoid promotional or abstract wording such as powerful, seamless, robust, comprehensive, next-generation, enterprise-grade, centralized control, enhanced security, and streamlined workflow.

## Product terminology

Use these terms consistently:

- SmartPT Core
- JIT Access
- AD Control
- Active Directory
- JIT role
- assignment
- Manual
- Scheduled
- Eligible OTP
- Active Sessions
- Tier 1
- Advanced Support (Tier 2) when referring to the exact UI role
- Tier 0
- protected user
- protected group
- operator
- administrator
- target user
- audit record
- temporary Active Directory group membership

## Product boundaries

- A JIT role defines mapped Active Directory groups and allowed access methods.
- An assignment defines the user, activation method, and validity.
- A role alone does not activate access.
- Eligible OTP verifies activation; it is not an approval workflow.
- AD Control operators require product licenses. Target users do not.
- Protected identities are excluded from AD Control operator workflows. Do not claim protection outside those workflows.
- SmartPT Core manages installation, licensing, Console access, product entry, and shared settings. Product actions remain in JIT Access or AD Control.

## Security claims

Describe exact controls and results. Do not claim complete protection, guaranteed compliance, zero risk, or behavior that has not been confirmed in the product or source.

Never place OTP codes, generated passwords, license serials, secrets, or customer-sensitive data in public examples or screenshots.

## Review checklist

- One visible H1.
- Exact UI labels.
- Prerequisites and limitations remain visible.
- Expected result and verification are present for procedures.
- Internal links and image paths resolve.
- Screenshot alt text describes the visible product state.
- No repeated concept explanation that belongs on another page.
- No unverified product claim.
