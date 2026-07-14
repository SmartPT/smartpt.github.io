# Reset shared two-factor enrollment

Use this procedure when a user loses the authenticator, changes device, or must enroll again.

## Before you begin

- You need SmartPT Console administrator access.
- Confirm the target user and the customer's authorization for the reset.
- Tell the user that a new enrollment is required at the next sign-in.

Shared two-factor verification is separate from product authorization. A successful verification does not grant JIT Access or AD Control permissions.

## Reset the enrollment

1. Open **SmartPT Console**.
2. Open **Settings**.
3. In **Shared Two-Factor Access**, search for the Active Directory user.
4. Select the user.
5. Review the enrollment status.
6. Click **Reset two-factor**.

![Shared 2FA reset highlighted](./screenshots/shared-2fa-avi-reset-highlight.png)

## Expected result

The current shared two-factor enrollment is cleared. The user must enroll again during the next sign-in.

## Verify the reset

Ask the user to sign in and confirm that the enrollment screen appears. Do not use a two-factor reset to troubleshoot missing product licensing or RBAC assignments.

## Related pages

- [SmartPT Console settings](./settings-overview.md)
- [Configure Console access](./access-model-rbac.md)
