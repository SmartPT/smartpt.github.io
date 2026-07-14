# Troubleshoot JIT Access

Start with the visible symptom, then check licensing, RBAC, assignment state, delivery settings, Active Directory permissions, and service health.

## User cannot access JIT Access

### What to check

1. Confirm the user has a JIT product license.
2. Confirm the required JIT RBAC assignment.
3. Confirm the user is signing in with the expected Active Directory account.

Domain Admins can access management areas without a separate JIT role assignment. Other users require explicit access.

## Eligible activation does not appear

Check that the user has a product license, an active Eligible assignment for the same `samAccountName`, and the required eligible-user RBAC. Confirm the role is enabled, allows Eligible access, and the assignment is inside its validity period.

## OTP is not received

### Possible causes

- The required Active Directory `mobile` or mail attribute is empty.
- The delivery channel is disabled.
- The OTP send, retry, or expiry limit was reached.
- The messaging service or SMTP relay is unavailable.

### What to check

1. Review OTP policy and resend limits in **Settings**.
2. Confirm the Active Directory contact attribute.
3. For mobile OTP, include the country prefix; `+` is optional. Israel numbers may omit `972`.
4. Check delivery-service or SMTP connectivity.

## Eligible access cannot reactivate after revoke

An administrator revoke may block activation of the same eligible role. This is expected behavior and is controlled by JIT Settings and session policy.

## Group membership does not change

1. Confirm the mapped Active Directory group distinguished name.
2. Confirm the user and group are readable.
3. Confirm the SmartPT service identity can add and remove group members.
4. Review the assignment and session audit details.

Do not replace the preinstalled service identity unless SmartPT support confirms a deployment problem.

## Portal or notifications are unavailable

Check the JIT portal and service state, IIS and ASP.NET Core events, SMTP host and port, firewall rules, TLS settings, authentication, credential reference, and configured recipients.

## Information for support

- Signed-in username and expected JIT role.
- Role ID and assignment ID when available.
- Exact time and error text.
- Screenshot of the affected page.
- Portal and service status.
- Relevant audit detail and Windows Event Viewer errors.
