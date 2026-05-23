# Notifications and Session Policy

JIT Settings controls how session events are announced and how long portal sessions can remain active.

Review these settings before enabling production roles. Notification and session policy settings affect day-to-day operations, audit visibility, and how administrators respond to active privileged access.

## Notification Recipients

Notification recipients define which administrators or operational mailboxes receive JIT session event emails.

![JIT notification recipients](./screenshots/settings-notifications-highlight.png)

Use this section to control the people or mailboxes that should be informed when selected JIT session events occur.

Keep the recipient list operational. A shared security or identity operations mailbox is usually better than a personal mailbox.

## Session Event Notifications

Session event toggles decide which events should generate email notifications.

![JIT notification events](./screenshots/settings-notification-events-highlight.png)

Supported event controls include:

- Manual session start.
- Eligible OTP activation.
- Session extension.
- Session revoke.

Enable notifications for events that require operational visibility. At minimum, session extension and revoke events should normally be visible to administrators because they change the original access window.

## Session Policy

System / Session settings define shared portal session behavior.

![JIT session policy and SMTP](./screenshots/settings-session-policy-highlight.png)

Important settings:

- **Max session minutes** controls the longest portal session window.
- **Idle timeout minutes** controls how long an inactive portal session remains valid.
- **Global Email (SMTP)** controls shared mail delivery for notifications and email fallback.
- **Group overrides** allow different session limits for specific groups when configured.

These settings do not replace JIT role duration limits. Role and assignment duration still control privileged access windows.

## SMTP Delivery

SMTP settings are used for mail delivery where the deployment uses email notifications or email fallback.

Confirm SMTP before relying on notification workflows:

- SMTP is enabled.
- Host and port are correct.
- From address is valid.
- TLS and authentication match the customer relay.
- Credential reference exists when authentication is required.

## Recommended Practice

Start with a small recipient list, verify delivery, and test notifications with a non-production role.

For production JIT roles, keep session duration short, use clear notification ownership, and review extension and revoke events during operational handover.
