# Activate Eligible OTP access

Eligible OTP lets an assigned user verify their identity and start temporary access to the Active Directory groups mapped by a JIT role.

> **Important:** Eligible OTP is not an approval workflow. The administrator authorizes access by creating the assignment. OTP verifies the user during activation.

## Before you begin

The administrator must:

- Assign the user a JIT product license.
- Assign **JitEligibleUser** access where required.
- Create an enabled JIT role with **Allow eligible**.
- Enable **OTP required** when verification is required.
- Map the role to the required existing Active Directory groups.
- Create an active Eligible assignment for the user's `samAccountName`.

![Eligible JIT role](./screenshots/eligible-admin-role-list.png)

![Eligible assignment](./screenshots/eligible-admin-assignment-list.png)

## Activate access

1. Sign in to JIT Access with the eligible user account.
2. Open **Activate Access**.
3. Find the assigned role and click **Activate**.
4. Select an available OTP delivery channel.
5. Send the OTP.
6. Enter the code and confirm activation.

![Eligible user activation](./screenshots/eligible-joe-activation-only.png)

The eligible user sees only their own activation options. Roles, assignments, active-session administration, and settings are not available.

## OTP contact data

- Contact values come from Active Directory.
- Mobile delivery uses the `mobile` attribute.
- International mobile numbers must include the country prefix; `+` is optional.
- Israel numbers may be stored without `972`.
- Email is available only when enabled and present in the configured Active Directory attribute.

## Expected result

JIT Access creates an active session and adds the user to the Active Directory groups mapped by the role.

![Eligible access active](./screenshots/eligible-joe-access-active.png)

## Verify activation

1. Sign in as a JIT administrator.
2. Open **JIT Access > Active Sessions**.
3. Confirm the user, role, assignment type, start time, expiration time, and status.
4. Verify the mapped Active Directory group membership where required.
5. Review the OTP and activation audit records.

![Eligible active session](./screenshots/eligible-admin-active-session.png)

Expiration or administrator revocation removes the temporary group membership.

## If activation is unavailable

Check the product license, RBAC role, Eligible assignment, assignment timing, role enabled state, **Allow eligible**, and assigned `samAccountName`.
