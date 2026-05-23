# JIT Settings Overview

JIT Settings is the administrative area for product access, RBAC role assignment, notification behavior, and shared session policy.

Open **Settings** after confirming the dashboard license status. Do this before creating production JIT roles or assignments.

![JIT settings overview](./screenshots/settings-overview.png)

## Licensed Users

Licensed Users defines which Active Directory users are assigned to the JIT product.

Assigning a user license allows the user to consume one licensed JIT identity. It does not automatically make the user a JIT administrator and does not grant privileged AD group membership.

Use this section to:

- Add users who need JIT product access.
- Remove users who no longer need product access.
- Monitor assigned users against the licensed user limit.

## Role Assignments

Role Assignments define product permissions inside JIT.

Use this section to assign roles such as **JitAdmin** or **JitEligibleUser**. A user normally needs both a product license and a matching role assignment before the portal enables the relevant workflow.

## JIT Product Settings

JIT Product Settings controls product behavior that applies across JIT workflows.

Important settings include:

- **Eligible requester groups** for limiting who can request or activate eligible access.
- **Notification recipients** for administrative session notifications.
- **JIT session email notifications** for selected session events.
- Notification toggles for manual activation, eligible OTP activation, session extension, and session revoke.

## System and Session Policy

System / Session settings control portal session behavior and shared delivery settings.

Use this area to review:

- Maximum portal session duration.
- Idle timeout.
- Shared SMTP settings for notifications and OTP fallback.
- Optional group-specific session overrides.

## Recommended Practice

Keep settings changes small and test them with a non-production role first. For production rollout, confirm that product licensing, RBAC, SMTP, and session policy are working before mapping highly privileged AD groups.
