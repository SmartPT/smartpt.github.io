# SmartPT Console Portal Overview

The SmartPT Console portal is split into three main areas: **Overview**, **Recent Activity**, and **Settings**. The exact tabs depend on the signed-in user's access level.

## Overview

Overview is the first readiness view after sign-in. Use it to confirm the server is active, the signed-in user has the expected access level, and product consoles are reachable.

![SmartPT Console overview](./screenshots/console-overview.png)

| Area | Purpose |
| --- | --- |
| Products | Counts installed product portals visible from the Console. |
| User | Shows the signed-in identity. |
| Access | Shows whether the user is Administrator or Viewer. |
| Architecture | Explains the Console boundary: root portal status and access, not product workflow execution. |
| Installed product consoles | Opens JIT Access and AD Control. |

## Product Status

Product cards show whether each product console is reachable. This is a fast operational check before entering JIT Access or AD Control.

![Product status highlighted](./screenshots/product-status-highlight.png)

If a product is unavailable, confirm the product service is running before testing product workflows.

## Product Updates

Core administrators can update AD Control and JIT Access from the product cards when a newer product version is available. Viewer users can open product consoles when their access allows it, but they cannot run product updates.

![Product update available](./screenshots/product-update-available.png)

Admin workflow:

1. Open **SmartPT Console** with a Core administrator account.
2. Review the AD Control and JIT Access product cards.
3. If a product card shows **Update available**, select **Update app**.
4. Wait for the update to complete.
5. Confirm the product card returns to a healthy state.
6. Open the product console and verify the expected product version.

Product updates do not overwrite customer settings, license information, logs, or customer data. If an update cannot complete, SmartPT keeps the previous product version available and shows the update result in the Console.

## Recent Activity

Recent Activity shows sign-ins, settings changes, password resets, account unlocks, JIT assignments, session changes, and revoke events. Use it for quick operational review and audit lookup.

![Recent activity highlighted](./screenshots/recent-activity-highlight.png)

Recent Activity is not a replacement for full audit retention. It is a quick view for administrators during support and validation.

## Settings

Settings is available only to Console administrators. It controls root portal access, Console session policy, shared two-factor reset, license visibility, support links, and subscription cancellation.

![Settings overview](./screenshots/settings-overview.png)
