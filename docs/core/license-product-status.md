# License and Product Status

SmartPT Console owns the shared server subscription view. The product portals keep their own operational workflows, but Core license validation is the first gate before access is allowed.

## License Behavior

The Console validates the SmartPT Core license before product access is allowed. If the license is not active, access fails closed and the user is directed to license recovery.

![License and product status highlighted](./screenshots/license-status-highlight.png)

| Field | Meaning |
| --- | --- |
| Status | Current Core license state. Product access should be tested only when this is ACTIVE. |
| Serial | Server-bound subscription identifier. Do not expose this value in public screenshots. |
| License validation | Server-bound license validation status. |
| Last validated | Last successful runtime license check. |
| Validation result | Last validation time and current license result. |

## Product Status

SmartPT Console checks whether the product portals are reachable.

![Product status highlighted](./screenshots/product-status-highlight.png)

Product status confirms portal reachability. It does not prove that every product workflow is fully healthy. For workflow failures, check product health, policy, permissions, and audit logs.

## License Validation Model

SmartPT Core validates the license state before product access is granted.

If license validation becomes unhealthy:

- Confirm the license state is present in SmartPT Console.
- Confirm the SmartPT server has the required outbound connectivity for license validation.
- Check the visible license validation result and product logs.

