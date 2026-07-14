# Create a JIT assignment

Use an assignment to connect a target user to a JIT role and define how and when access becomes active.

![JIT assignments list](./screenshots/assignments-list.png)

## Before you begin

- Create and review the JIT role.
- Confirm the target user's `samAccountName`.
- Choose Manual, Scheduled, or Eligible OTP behavior.
- Confirm the requested duration stays within the role limits.

## Create the assignment

1. Open **JIT Access > Assignments**.
2. Click **Create Assignment**.
3. Select the JIT role.
4. Enter the target user's `samAccountName`.
5. Select the assignment type.
6. Enter the timing information required for that type.
7. Enter a reason for the audit record.
8. Save the assignment.

![Create Eligible assignment](./screenshots/assignment-create-eligible.png)

## Expected result

The assignment appears in **Assignments**. Manual access starts immediately, Scheduled access follows its configured window, and Eligible OTP remains inactive until the user verifies and activates it.

## Verify the assignment

- Confirm the user, role, type, status, and timing.
- For active access, check **Active Sessions**.
- Confirm the audit record contains the assignment action and reason.
- Where applicable, verify membership in the mapped Active Directory groups.

> **Important:** Revoking active access removes the temporary Active Directory group membership. Revoking an inactive assignment prevents further use according to its current state.

## Related pages

- [Assignment types](./assignment-types.md)
- [Eligible OTP self-service](./eligible-otp-self-service.md)
- [Sessions and revoke](./sessions-revoke.md)
