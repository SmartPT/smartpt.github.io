# SmartPT Console settings

Use **Settings** to manage Console access, session limits, shared two-factor recovery, and license information.

![Settings overview](./screenshots/settings-overview.png)

## Settings reference

| Area | Purpose |
| --- | --- |
| **Administrative groups** | Active Directory groups that receive Console administrator access. |
| **Viewer groups** | Active Directory groups that receive read-only Console access. |
| **Maximum session lifetime** | Hard limit for a Console session. |
| **Idle timeout** | Ends a Console session after inactivity. |
| **Shared Two-Factor Access** | Shows enrollment state and provides the reset action. |
| **License and Billing** | Shows license state, serial, last validation, support links, and subscription action. |

![RBAC and session settings highlighted](./screenshots/settings-rbac-session-highlight.png)

## Shared two-factor recovery

![Shared 2FA reset highlighted](./screenshots/shared-2fa-avi-reset-highlight.png)

Resetting two-factor clears the user's shared enrollment. It does not assign a product license or product role.

## License and billing

![License and product status highlighted](./screenshots/license-status-highlight.png)

> **Warning:** Cancelling the Core subscription can block access to JIT Access and AD Control when the license becomes inactive.

## Verify settings

- Confirm administrative and viewer groups resolve to the intended Active Directory groups.
- Test the configured session limits with a non-production account.
- Confirm the license shows **ACTIVE** and the validation result is current.
