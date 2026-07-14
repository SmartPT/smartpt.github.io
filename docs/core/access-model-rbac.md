# Configure SmartPT Console access

SmartPT Console uses Active Directory groups to assign administrator or viewer access.

## Access levels

| Access level | Assigned through | Available actions |
| --- | --- | --- |
| Administrator | Domain Admins or configured administrative groups | View products and activity, manage Console settings, reset shared 2FA, review license status, and run product updates. |
| Viewer | Configured viewer groups | View the Console and open product portals when separately authorized. Cannot change Console settings or run updates. |
| None | User is not in an allowed group | Console access is denied. |

Domain Admins retain Console administrator access. Use a dedicated Active Directory group for normal Console administration.

![RBAC and session settings highlighted](./screenshots/settings-rbac-session-highlight.png)

## Add an administrative group

1. Open **Settings**.
2. Find **Administrative groups**.
3. Search for the Active Directory group.
4. Select the group and save the settings.

![it-admin group search highlighted](./screenshots/rbac-it-admin-highlight.png)

## Expected result

Members of the configured group can open **Settings** and perform Console administrator actions. Product permissions are still assigned separately in JIT Access and AD Control.

## Verify access

Sign in with a group member and confirm the Console shows **Administrator**. Then use a viewer account to confirm **Settings** and **Update app** are not available.

## Session policy

Console session lifetime and idle timeout apply only to SmartPT Console. JIT Access and AD Control use their own session settings.
