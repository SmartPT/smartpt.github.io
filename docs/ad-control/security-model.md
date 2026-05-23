# AD Control Security Model

AD Control is designed to reduce unsafe helpdesk operations without giving every operator broad Active Directory permissions.

## Controls

- Product license and role assignment for operators.
- Server-side permission checks for every sensitive action.
- Tier 0 and protected identity filtering.
- OTP verification for verified reset and unlock workflows.
- AD-sourced email/mobile attributes for OTP delivery.
- Audit records with correlation IDs.
- No OTP codes or generated passwords in audit logs.

## Protection Boundary

Protected users and protected groups are enforced before reset, unlock, profile update, and group management actions run.

Successful OTP verification does not bypass protected identity rules.

## Backend Enforcement

The browser is only the operator interface. The backend validates role permissions, protection rules, settings policy, and AD operation results.

