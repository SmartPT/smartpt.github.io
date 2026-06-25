# Creating JIT Roles

JIT roles define the privileged access profile. A role maps JIT Access to one or more existing Active Directory groups and defines which assignment types are allowed.

A role does not grant access by itself. Access starts only when a user receives an assignment and the assignment becomes active.

![JIT roles list](./screenshots/roles-list.png)

## Before You Create a Role

Confirm:

- The AD group already exists.
- The group is the correct privilege boundary.
- The SmartPT service identity has delegated rights to add and remove members from that group.
- The role duration limits are appropriate for the business task.
- The role will be tested with a non-production group before Tier 0 use.

## Create Role

Open **JIT Access > Roles**, then select **Create Role**.

![Create JIT role modal](./screenshots/role-create-modal.png)

## Role Fields

| Field | Purpose |
| --- | --- |
| Display name | Human-readable role name shown in the portal. |
| Role ID | Stable identifier generated from the display name. Keep it stable after assignments exist. |
| Description | Business purpose for the role. |
| Enabled | Controls whether the role can be used for new access. |
| Allow manual | Allows administrators to start immediate time-bound access. |
| Allow scheduled | Allows recurring access windows. |
| Allow eligible | Allows approved users to activate access themselves. |
| OTP required | Requires OTP verification for eligible activation. |
| Max manual minutes | Caps manual access duration. |
| Max total minutes | Caps the total active session duration. |
| Eligible expiry reminder | Sends a warning before eligible access expires when configured. |
| AD Groups | Existing AD group distinguished names managed by this role. |

## AD Group Mapping

Map roles to existing AD groups. Do not use JIT to create a new privilege model before the AD group model is understood.

For high-impact groups such as Domain Admins, use a short duration, test first, and verify that automatic removal works.

## Save and Verify

After saving:

1. Confirm the role appears in the Roles table.
2. Confirm the access type badges match the intended model.
3. Confirm the group count is correct.
4. Create assignments only after the role mapping is reviewed.

## Operational Guidance

Use one role for one clear business purpose. Avoid broad roles that map unrelated AD groups together unless those groups should always be granted and removed as one unit.
