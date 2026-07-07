# Access Model, Licensing, and RBAC

JIT Access separates product access from privileged access.

A user can authenticate to the portal and still be blocked from JIT actions if the license assignment or RBAC role is missing. This is intentional. JIT controls sensitive Active Directory group membership, so access is granted only after the product license, session, and SmartPT permissions are valid.

## Access Layers

| Layer | Purpose |
| --- | --- |
| Authentication | Confirms the signed-in Active Directory user. |
| License validation | Confirms the JIT product license is active and the user is assigned to the product. |
| RBAC role assignment | Defines what the user can do inside JIT. |
| JIT role and assignment | Defines which privileged AD group access can be activated and when. |

Successful sign-in does not mean the user can create roles, assign access, or activate eligible access. SmartPT checks the required permission before each privileged action.

## Licensed Users

Licensed Users in **Settings** controls who consumes a JIT product user license.

Use this area to assign product access to users who need to administer JIT or activate eligible access. Removing a license assignment blocks product access, even if the user still has an RBAC role assignment.

## RBAC Role Assignments

Role Assignments in **Settings** controls what a licensed user can do.

Common roles include:

- **JitAdmin** for managing roles, assignments, sessions, and settings.
- **JitEligibleUser** for activating approved eligible access.

RBAC roles are product permissions, not Active Directory privileged groups. They do not add the user to Domain Admins, Account Operators, or any mapped JIT role group.

## JIT Roles Are Different

A JIT role maps to one or more existing Active Directory groups. For example, a JIT role named **Domain Admins JIT** may map to the existing **Domain Admins** group.

The JIT role only defines the privileged access profile. It does not grant access until an assignment activates it.

## Recommended Setup Order

1. Confirm the JIT license is active.
2. Assign a product license to the administrator.
3. Assign the administrator the required JIT RBAC role.
4. Create JIT roles that map to existing AD groups.
5. Create assignments for users who should receive temporary access.
6. Verify active sessions and automatic removal behavior.

## Operational Rule

Treat license assignment, RBAC role assignment, JIT role mapping, and JIT assignment as separate controls. This keeps product access, administrative permission, and privileged AD group membership clear and auditable.
