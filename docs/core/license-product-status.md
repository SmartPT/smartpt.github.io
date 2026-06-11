# License and Product Status

SmartPT Console owns the shared server subscription view. The product portals keep their own operational workflows, but Core license validation is the first gate before access is allowed.

## License Behavior

The Console validates the SmartPT Core license before authenticated API access. If the license is not active, access fails closed and the user is directed to license recovery.

![License and product status highlighted](./screenshots/license-status-highlight.png)

| Field | Meaning |
| --- | --- |
| Status | Current Core license state. Product access should be tested only when this is ACTIVE. |
| Serial | Server-bound subscription identifier. Do not expose this value in public screenshots. |
| License validation | Server-bound license validation status. |
| Last validated | Last successful runtime license check. |
| Validation result | Last validation time and current license result. |

## Product Status

SmartPT Console probes the local product URLs and reports whether the portals are reachable.

![Product status highlighted](./screenshots/product-status-highlight.png)

Product status confirms portal reachability. It does not prove that every product workflow is fully healthy. For workflow failures, check the product-specific health, backend service, policy, and audit logs.

## License Validation Model

SmartPT Core uses server-bound license validation against the configured license endpoint. Runtime validation checks license state and subscription status before product access is granted.

If license validation becomes unhealthy:

- Confirm the license state is present in SmartPT Console.
- Confirm outbound connectivity to the license validation endpoint.
- Check the license validation result and application logs.

