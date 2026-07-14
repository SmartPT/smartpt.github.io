# Review license and product status

Use this page to confirm that the Core license is active and each installed product portal is reachable.

![License and product status highlighted](./screenshots/license-status-highlight.png)

## License fields

| Field | Description |
| --- | --- |
| **Status** | Current Core license state. Product access requires an active license. |
| **Serial** | Server-bound subscription identifier. Do not expose it in public screenshots. |
| **License validation** | Current server-bound validation state. |
| **Last validated** | Time and result of the last successful validation. |

## Expected behavior

SmartPT Core checks the license before allowing access to JIT Access or AD Control. If the Core license is inactive, cancelled, expired, or cannot be validated, product access is blocked.

## Verify product status

![Product status highlighted](./screenshots/product-status-highlight.png)

1. Open **SmartPT Console**.
2. Confirm the Core license shows **ACTIVE**.
3. Confirm the last validation result is current.
4. Check that the JIT Access and AD Control product cards show a healthy status.
5. Open each product portal.

## If validation fails

Check the visible license state, activation status, outbound connectivity to the configured activation service, and SmartPT application logs.

## Related pages

- [SmartPT Console portal overview](./portal-overview.md)
- [SmartPT Console settings](./settings-overview.md)
