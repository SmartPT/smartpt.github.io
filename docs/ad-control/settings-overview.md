# AD Control settings

Use **Settings** to configure operator access, protected identities, action methods, OTP, notifications, SMTP, and portal sessions.

![Access assignments](./screenshots/settings-access-assignments-highlight.jpg)

## Settings reference

| Area | Purpose |
| --- | --- |
| **Access Assignments** | Assigns operator licenses and Tier 1 or Tier 2 roles. |
| Support groups | Assigns configured AD Control view or settings permissions. |
| Protected users | Hides named accounts from Tier 1 and Tier 2 workflows. |
| Protected groups | Hides direct and nested group members from operator workflows. |
| OTP policy | Sets code lifetime, send limits, resend windows, and failed-attempt limits. |
| Password options | Controls direct reset, verified reset, change at next logon, complexity, and custom length. |
| Unlock options | Controls direct and verified account unlock. |
| Notifications | Configures auditor email and reset or unlock notifications. |
| **Global Email (SMTP)** | Configures mail relay, sender, port, TLS, authentication reference, and timeout. |
| **System / Session** | Sets maximum portal session and idle timeout. |

![Policy and delivery settings highlighted](./screenshots/settings-policy-delivery-highlight.jpg)

## Configure AD Control

1. Assign operator licenses and roles.
2. Configure protected users and protected groups.
3. Select the allowed password reset and unlock methods.
4. Configure OTP limits and delivery channels.
5. Configure SMTP and auditor notifications where used.
6. Review portal session limits.
7. Test each enabled action with a non-production target user.

![Important settings highlighted](./screenshots/settings-all-policy-areas-highlight.jpg)

## Expected result

Operators see only the actions allowed by their role and current policy. Protected identities do not appear in operator search.
