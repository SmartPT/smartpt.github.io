# Protected Users and Groups

Protected identities are the most important safety boundary in AD Control.

Tier 0 users are protected by default. Administrators can also add explicit protected users and protected groups. Members of protected groups, including nested members, are hidden from Tier 1 and Tier 2 operator workflows.

![Protected users and groups highlighted](./screenshots/settings-protection-highlight.jpg)

## Example

In this documentation environment:

- joe is configured as a protected user.
- it-admin is configured as a protected group.
- david and sara can manage avi.
- david and sara cannot search or manage Tier 0/protected accounts such as jim or joe.

## Why It Matters

Password reset and unlock workflows can become privilege-escalation paths if operators can target sensitive accounts. Protected users and groups keep high-risk identities out of routine support actions.

## Operator Result

When a Tier operator searches for a protected user, the account is not available for normal management.

![David cannot manage protected Joe](./screenshots/david-protected-user-search.jpg)

## Recommended Practice

- Add Tier 0 administrative groups as protected groups.
- Add break-glass and service owner accounts as protected users.
- Test protected search behavior with a Tier 1 and Tier 2 account.
- Review audit events for blocked or protected searches.

