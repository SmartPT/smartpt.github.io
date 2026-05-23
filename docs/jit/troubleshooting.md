# JIT Troubleshooting

Use this page when JIT Portal access, eligible activation, OTP delivery, notifications, or backend enforcement does not behave as expected.

Start with the visible symptom, then check the related access layer. Most issues are caused by missing product assignment, missing JIT assignment, expired timing, OTP policy limits, or IIS application state.

## User Cannot Access JIT Portal

If a user signs in but cannot access the JIT Portal, check product access first.

Required access:

- The user must have a JIT product license assignment.
- The user must have the correct JIT role assignment for administration, such as **JitAdmin**.
- Domain Admins can access management areas without a separate JIT role assignment.
- Normal users do not receive administrator access unless they are explicitly assigned.

If the user is not a Domain Admin and does not have a JIT role assignment, access is blocked by design.

## Eligible Activation Does Not Appear

If a Joe-style eligible user signs in but does not see the expected activation option, check the assignment.

Common causes:

- The user does not have a JIT product license.
- The administrator has not created an Eligible assignment for the user.
- The assignment was created for a different `samAccountName`.
- The assigned role is disabled.
- The role does not allow Eligible access.
- The assignment has not started yet.
- The assignment is no longer valid.

The user should contact a JIT administrator and ask them to confirm the Eligible assignment, role, timing, and license assignment.

## OTP Send Is Limited

OTP delivery is controlled by JIT Settings.

Check:

- OTP policy and resend limits.
- OTP time-to-live.
- Allowed delivery channel.
- AD mobile or mail attributes.
- Messaging service connectivity.
- SMTP fallback if email is enabled.

If the user reaches an OTP send or retry limit, wait for the configured policy window or ask an administrator to review JIT Settings.

## Eligible User Cannot Activate After Revoke

If an administrator revokes an active eligible session, the eligible user may be blocked from activating the same role again.

This is by design. Revoke is treated as an administrative stop action, not just a normal session close.

Administrators can control this behavior through JIT Settings and session policy. Use it when revoked access should remain blocked for a defined period after the session is stopped.

## SMTP or Notification Failures

If session notifications or email fallback do not work, check delivery infrastructure before changing JIT roles.

Check:

- SMTP host and port.
- Firewall rules between the JIT backend server and the SMTP relay.
- TLS or STARTTLS requirements.
- SMTP authentication settings.
- Credential reference if authentication is required.
- MFA or conditional access on the SMTP account if enabled.
- Notification recipients in JIT Settings.

If the relay requires MFA for interactive users, use a supported service account, application password, connector, or relay configuration that the backend can use non-interactively.

## Backend or Service Identity Permissions

By default, the JIT backend runs with the preinstalled gMSA service identity. Customers normally do not need to change this identity.

Check service identity permissions only when group membership changes fail after the portal and assignment checks are correct.

The backend service identity must be able to:

- Read the target user and mapped group.
- Add the user to the mapped AD group when access starts.
- Remove the user from the mapped AD group when access expires or is revoked.

Do not change the gMSA unless deployment support confirms the service identity is wrong or missing required delegation.

## IIS Application Pool State

If the portal does not load, API requests fail, or the JIT UI shows stale or missing data, check IIS.

In IIS Manager, confirm both application pools are running:

- **jit**
- **JIT-Backend**

Both should show **Started**. If one is stopped, start it and reload the JIT Portal.

Also check:

- The JIT frontend site/application is reachable.
- The JIT backend application is reachable.
- The application pool identity is correct.
- Recent Windows Event Viewer errors for IIS, ASP.NET Core, or authentication.

## Quick Escalation Checklist

Collect this evidence before escalation:

- Signed-in username.
- Whether the user is a Domain Admin, JIT administrator, or eligible user.
- Role ID and assignment ID if available.
- Exact time of failure.
- Error message or correlation ID.
- Screenshot of the relevant JIT Portal page.
- IIS app pool status for **jit** and **JIT-Backend**.
- Relevant backend or Windows Event Viewer errors.
