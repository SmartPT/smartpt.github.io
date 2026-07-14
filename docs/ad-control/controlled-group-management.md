# Manage approved group membership

Advanced Support (Tier 2) operators can add or remove standard users from groups allowed by AD Control policy.

## Before you begin

- The operator needs an AD Control license and **Advanced Support (Tier 2)**.
- The target user must not be Tier 0 or protected.
- The group must be allowed by AD Control and must not be protected.

## Change group membership

1. Search for and select the target user.
2. Open the group management action.
3. Review direct and nested or effective membership.
4. Select an available add or remove action.
5. Confirm the change.

![Tier 2 group management](./screenshots/sara-group-management.jpg)

## Expected result

Active Directory reflects the approved direct group-membership change. Nested or effective membership remains informational unless a supported direct action is available.

## Verify the change

Refresh the group panel and review the group-management audit record. Test new group policy with a non-production group before operator rollout.
