# Get started with SmartPT Core

Use SmartPT Core to confirm the server license, open JIT Access and AD Control, and manage Console access.

![SmartPT Console overview](./screenshots/console-overview.png)

## Before you begin

- SmartPT Core must be installed on the customer server.
- You need SmartPT Console administrator access.
- The Core license must be activated before operators can open product portals.

## Configure SmartPT Core

1. Sign in to **SmartPT Console**.
2. Confirm the Core license shows **ACTIVE**.
3. Confirm JIT Access and AD Control are reachable.
4. Open **Settings** and add the approved Active Directory administrative group.
5. Add viewer groups only for users who need read-only Console access.
6. Review the Console session lifetime and idle timeout.
7. Test shared two-factor enrollment with a non-production user.

## Expected result

Administrators can review Core status and open the installed product portals. Viewers can see Console information but cannot change settings or run product updates.

## Verify the configuration

- Check **License and Billing** for an active license and current validation result.
- Check each product card for a healthy status.
- Sign in with a member of the configured administrative group and confirm **Settings** is visible.
- Sign in with a viewer account and confirm administrative actions are not available.

## Next steps

- [Review the Console portal](./portal-overview.md)
- [Configure Console access](./access-model-rbac.md)
- [Review license and product status](./license-product-status.md)
