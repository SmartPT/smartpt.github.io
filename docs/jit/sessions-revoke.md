# Monitor, extend, or revoke active access

Use **Active Sessions** to review current temporary access and stop it before expiration when required.

![Active session actions](./screenshots/sessions-joe-active-actions.png)

## Session information

| Column | Description |
| --- | --- |
| User | Active Directory user with active access. |
| JIT role | Role that supplied the mapped group membership. |
| Assignment type | Manual, Scheduled, or Eligible. |
| Start and end | Session activation and expiration times. |
| Remaining time | Time until expiration. |
| Status | Current session state. |
| Actions | Available extend or revoke actions. |

## Extend a session

1. Confirm the user still needs access for the approved task.
2. Click **Extend** for the session.
3. Enter the additional minutes.
4. Enter the reason.
5. Confirm the extension.

![Extend session](./screenshots/sessions-joe-extend-modal.png)

The extension must remain within the limits enforced for the role and session type.

## Revoke a session

1. Confirm the user and JIT role.
2. Click **Revoke**.
3. Confirm the action.

> **Important:** Revoking an active session stops access before its configured end time and removes the temporary Active Directory group membership.

## Expected result

An extension updates the session expiration. A revoke removes the session from the active list or changes its status and removes the mapped group membership.

## Verify the action

- Refresh **Active Sessions** and confirm the new state.
- Verify the user's Active Directory group membership when access was revoked.
- Review the extension or revoke audit record.

Scheduled sessions remain controlled by their schedule window. Extend is primarily available for eligible and manual sessions.
