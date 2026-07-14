# Troubleshoot AD Control

Start with the affected operator, target user, action, and exact time. Then check licensing, RBAC, protection, OTP, delivery, Active Directory permissions, and service health.

## Operator cannot access AD Control

1. Confirm the operator has an AD Control product license.
2. Confirm one active Tier 1 or Tier 2 role.
3. Confirm license capacity is available.
4. Confirm the expected Active Directory identity is signed in.

Settings administrators may have Settings access without an operator license.

## Target user does not appear

Check that the user exists and is not Tier 0, a protected user, or a direct or nested member of a protected group. Missing protected identities are expected behavior.

![Tier 0 account blocked from search](./screenshots/sara-tier0-search-blocked.jpg)

## OTP is not received

### What to check

1. Confirm the target user's configured Active Directory mail or `mobile` attribute.
2. Confirm the selected delivery channel is enabled.
3. Review OTP send, resend, expiry, and failed-attempt limits.
4. For mobile delivery, include the country prefix; `+` is optional. Israel numbers may omit `972`.
5. For email, check SMTP configuration and connectivity.

## Reset, unlock, profile, or group action fails

Confirm the action is enabled, the operator role permits it, the target is not protected, and the SmartPT service identity has the required delegated Active Directory permission. Review the action audit detail.

## SMTP or notification fails

Check SMTP host, port, sender, TLS, authentication reference, firewall access, auditor email, and notification settings. Confirm the relay supports the configured non-interactive delivery method.

## Portal or service is unavailable

Check the AD Control portal at `/adc`, the related SmartPT service, IIS application state, and recent IIS or ASP.NET Core events.

Do not replace the preinstalled SmartPT service identity unless deployment guidance or SmartPT support confirms it is required.

## Information for support

- Operator and target usernames.
- Operator role and attempted action.
- Exact time and error text.
- Screenshot and audit detail.
- Portal, service, and IIS status.
