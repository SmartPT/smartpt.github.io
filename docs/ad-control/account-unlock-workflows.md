# Account Unlock Workflows

AD Control supports direct unlock and verified unlock for locked Active Directory users.

The unlock button appears when the selected user is locked and the operator has account unlock permission.

![Avi locked status highlighted](./screenshots/avi-locked-status-highlight.jpg)

## Direct Unlock

Direct unlock runs immediately when enabled by policy. The operator should provide an operational reason when required.

![Direct unlock modal](./screenshots/avi-unlock-direct-modal.jpg)

![Direct unlock complete](./screenshots/avi-unlock-direct-complete.jpg)

## Verified Unlock

Verified unlock requires OTP before the unlock action completes.

The flow is:

1. Search and select the locked user.
2. Choose Unlock.
3. Select the verification channel.
4. Send OTP.
5. Enter the OTP provided by the user.
6. Verify and unlock.

```mermaid
flowchart LR
  Search["Search locked user"] --> Select["Select Avi"]
  Select --> Direct["Run direct unlock"]
  Select --> Verified["Verified unlock option"]
  Verified --> OTP["Send and verify OTP"]
  Direct --> Audit["Audit unlock result"]
  OTP --> Audit
```

## Policy Control

Administrators can enable or disable direct unlock and verified unlock from Settings. At least one unlock method should remain available for operational continuity.
