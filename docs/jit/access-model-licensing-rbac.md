# JIT Access licensing and RBAC

JIT Access checks authentication, product licensing, RBAC, and assignment state separately.

## Access layers

| Layer | What it controls |
| --- | --- |
| Authentication | Confirms the signed-in Active Directory identity. |
| Product license | Allows the user to enter JIT Access. |
| JIT RBAC | Defines the actions available inside the portal. |
| JIT role | Defines the Active Directory groups and allowed access methods. |
| Assignment | Defines the user, activation method, and validity period. |

Signing in does not grant JIT administration or temporary Active Directory group membership.

## Licensed users

Open **Settings > Licensed Users** to assign a JIT product license. Removing the license blocks product access even if the user still has an RBAC assignment.

## RBAC role assignments

Open **Settings > Role Assignments** to assign product permissions.

| Role | Purpose |
| --- | --- |
| **JitAdmin** | Manages JIT roles, assignments, active sessions, and settings. |
| **JitEligibleUser** | Activates the user's own Eligible OTP assignments. |

These roles do not add the user to Domain Admins or any other Active Directory group.

## Configure access

1. Confirm the JIT license is active.
2. Assign a product license to the user.
3. Assign the required JIT RBAC role.
4. Create the required JIT role and assignment.
5. Sign in as the user and verify only the intended pages and actions are available.

## Expected result

Administrators can manage JIT configuration. Eligible users can see only their own activation options. Active Directory membership changes only when an assignment becomes active.
