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

Product cards show whether each portal is reachable from the Core server. This is a fast operational check before entering JIT Access or AD Control.

![Product status highlighted](./screenshots/product-status-highlight.png)

If a product is unavailable, troubleshoot the product frontend/backend and IIS application before testing product workflows.

## Recent Activity

Recent Activity shows sign-ins, settings changes, password resets, account unlocks, JIT assignments, session changes, and revoke events. Use it for quick operational review and correlation ID lookup.

![Recent activity highlighted](./screenshots/recent-activity-highlight.png)

Recent Activity is not a replacement for full audit retention. It is a quick view for administrators during support and validation.

## Settings

Settings is available only to Console administrators. It controls root portal access, Console session policy, shared two-factor reset, license visibility, support links, and subscription cancellation.

![Settings overview](./screenshots/settings-overview.png)
