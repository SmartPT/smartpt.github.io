# License, Product Status, and mTLS

SmartPT Console owns the shared server subscription view. The product portals keep their own operational workflows, but Core license validation is the first gate before access is allowed.

## License Behavior

The Console validates the SmartPT Core license before authenticated API access. If the license is not active, access fails closed and the user is directed to license recovery.

![License and mTLS highlighted](./screenshots/license-mtls-highlight.png)

| Field | Meaning |
| --- | --- |
| Status | Current Core license state. Product access should be tested only when this is ACTIVE. |
| Serial | Server-bound subscription identifier. Do not expose this value in public screenshots. |
| Certificate | Client certificate thumbprint used for mTLS validation. |
| Last validated | Last successful runtime license check. |
| Certificate renewal | Renewal health and certificate expiration status. |

## Product Status

SmartPT Console probes the local product URLs and reports whether the portals are reachable.

![Product status highlighted](./screenshots/product-status-highlight.png)

Product status confirms portal reachability. It does not prove that every product workflow is fully healthy. For workflow failures, check the product-specific health, backend service, policy, and audit logs.

## mTLS Model

SmartPT Core uses a local client certificate for server-bound license validation. The private key stays on the customer server. Runtime validation uses the configured license endpoint and the installed certificate.

If certificate renewal becomes unhealthy:

- Confirm the certificate exists in the expected Windows certificate store.
- Confirm the private key is accessible to the service identity.
- Confirm outbound connectivity to the license status and renewal endpoints.
- Check the certificate renewal state and application logs.

