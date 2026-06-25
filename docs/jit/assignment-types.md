# Assignment Types

JIT Access supports three assignment types: Manual, Scheduled, and Eligible.

Use the assignment type to match the operational need. The same JIT role can support more than one assignment type if the role allows it.

## Manual

Manual access is administrator-granted and starts immediately.

Use Manual when:

- An administrator needs to grant access for an urgent task.
- The work has a clear short duration.
- The user should not be able to self-activate.

Key behavior:

- Starts when the assignment is created.
- Expires automatically after the configured duration.
- Can be revoked early.
- Must stay within the role duration limits.

## Scheduled

Scheduled access is automatic access during defined time windows.

Use Scheduled when:

- Access is needed for planned recurring work.
- The same user needs access during predictable maintenance windows.
- No user interaction should be required at start time.

Key behavior:

- Evaluated automatically by SmartPT.
- Grants access inside the configured day and time window.
- Removes access outside the configured window.
- Keeps access state aligned with the configured schedule.

This phase does not support holiday calendars or cross-midnight schedules.

## Eligible OTP

Eligible access lets approved users activate access themselves after OTP verification.

Use Eligible when:

- The user is approved for the role but should not hold standing privilege.
- The access should start only when the user needs it.
- The organization wants self-service activation without permanent AD group membership.

Key behavior:

- The user sees only their own eligible assignments.
- OTP is sent to contact details sourced from Active Directory.
- Users cannot type their own phone number or email address.
- Access starts only after successful verification.
- Access expires automatically.

## Decision Guide

| Need | Use |
| --- | --- |
| Immediate administrator-granted access | Manual |
| Recurring maintenance window | Scheduled |
| Approved self-service activation | Eligible OTP |
| Manager/security approval before activation | Not supported in this release |

## Practical Recommendation

Start with Manual for first validation, then add Scheduled for recurring operations, and use Eligible OTP only after license assignment, RBAC, OTP delivery, and session monitoring have been tested.
