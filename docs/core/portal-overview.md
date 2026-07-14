# SmartPT Console portal overview

Use the Console to check server status, open product portals, review recent activity, and manage shared settings.

![SmartPT Console overview](./screenshots/console-overview.png)

## Console areas

| Area | Available to | Purpose |
| --- | --- | --- |
| **Overview** | Administrators and viewers | Shows the signed-in user, access level, and installed products. |
| Product cards | Administrators and viewers | Open JIT Access or AD Control and show whether each portal is reachable. |
| **Recent Activity** | Administrators and viewers | Shows recent sign-ins and product activity for operational review. |
| **Settings** | Administrators | Manages Console groups, session limits, shared two-factor reset, and license information. |

## Product status

![Product status highlighted](./screenshots/product-status-highlight.png)

A healthy product card confirms that the portal is reachable. It does not verify every product action. If an action fails, check the product policy, Active Directory permissions, service health, and audit record.

## Update a product

Core administrators can update JIT Access and AD Control when a product card shows **Update available**.

![Product update available](./screenshots/product-update-available.png)

1. Open **SmartPT Console** as an administrator.
2. Find the product card marked **Update available**.
3. Click **Update app**.
4. Wait for the update result.
5. Confirm the product card returns to a healthy state.
6. Open the product portal and verify the expected version.

Customer settings, license information, logs, and customer data remain unchanged during a product update. If the update fails, the Console shows the result and keeps the previous product version available.

## Recent activity

![Recent activity highlighted](./screenshots/recent-activity-highlight.png)

Use **Recent Activity** for a quick operational review. Use the product audit records for detailed investigation and retention.

## Related pages

- [License and product status](./license-product-status.md)
- [Settings overview](./settings-overview.md)
- [Shared 2FA reset](./shared-2fa-reset.md)
