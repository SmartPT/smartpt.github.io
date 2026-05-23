# Getting Started with JIT Access

JIT Access reduces standing privilege in Active Directory by making privileged group membership temporary, visible, and controlled by policy.

In many environments, administrative users remain in sensitive groups such as Domain Admins because they may need that access later. That creates standing privilege: an account has high-impact access even when there is no active business need. If the account is compromised, the attacker inherits that privilege immediately.

JIT changes the operating model. Instead of keeping users permanently in privileged AD groups, JIT Access adds group membership only when access is valid, then removes it automatically when the access window closes or an operator revokes it.

## How JIT Works

JIT Access is built around two main objects:

- **JIT roles** define the privileged access profile. A role maps to one or more existing Active Directory groups and defines which access methods are allowed.
- **Assignments** define who can receive a role, how access is activated, and when access is valid.

The role does not grant access by itself. Access becomes active only through an assignment.

## Temporary AD Group Membership

When a JIT assignment becomes active, the backend can add the target user to the AD group mapped by the role. When the assignment expires, closes, or is revoked, the backend removes that group membership.

This gives operators a controlled way to provide privileged access without converting users into permanent members of sensitive AD groups.

## Supported Assignment Types

JIT Access supports three assignment models:

| Assignment type | Use case |
| --- | --- |
| Manual | Administrator-granted access for urgent work, incidents, or short operational tasks. |
| Scheduled | Planned access during approved days and time windows, such as recurring maintenance. |
| Eligible OTP | Self-service activation for approved users with OTP verification. |

## No Approval Workflow in This Release

This release does **not** include an approval workflow.

Assignments are created and managed by administrators. Eligible OTP controls user activation and verification, but it is not an approval request process. If your process requires manager or security approval, keep that control outside the product for this release.

## Recommended Learning Order

Use this order when onboarding administrators:

1. **Getting Started with JIT Access** - understand the security model and terminology.
2. **Access Model, Licensing, and RBAC** - understand the difference between product access, product permissions, JIT roles, and active privilege.
3. **JIT Portal Overview** - learn the dashboard, workspace, and monitoring areas.
4. **JIT Settings Overview** - review licensing, administrator access, OTP, notifications, SMTP, and shared settings.
5. **Creating JIT Roles** - map controlled roles to existing AD groups.
6. **Creating JIT Assignments** - assign users to roles and define access windows.
7. **Assignment Types** - understand Manual, Scheduled, and Eligible OTP behavior.
8. **Troubleshooting** - use audit records, correlation IDs, and backend health checks.

## What to Configure Next

After reading this page:

1. Confirm the JIT portal is licensed and the signed-in administrator has JIT administration rights.
2. Review the JIT dashboard and access workspace.
3. Confirm which existing AD groups should be managed by JIT.
4. Create roles only after the AD group mapping and duration limits are clear.
5. Create assignments only after the intended operating model is known.
