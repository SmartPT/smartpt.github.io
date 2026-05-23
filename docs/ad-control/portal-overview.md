# Portal Overview

The AD Control portal is split between the dashboard, the support console, and settings.

The exact tabs depend on the signed-in user. Jim sees Settings. David and Sara see the AD Control operator console. Protected or unassigned users should not see administrative configuration.

## Dashboard

The dashboard confirms the signed-in context and provides the next available action.

![David dashboard in dark mode](./screenshots/david-dashboard.jpg)

## Main Areas

| Area | Purpose |
|---|---|
| Dashboard | Shows product status and quick entry into the user’s available workspace. |
| AD Control | Operator support console for user search and allowed actions. |
| Settings | Administrative configuration for licenses, RBAC, protected identities, OTP, SMTP, and session policy. |
| Product / Docs / Support | Links back to SmartPT public product, documentation, and support resources. |

## Role-Based UI

David and Sara do not see Settings. Jim can manage Settings but does not need an operator license if his job is only administration.

This is intentional. AD Control should expose only the workflow required by the signed-in user.

