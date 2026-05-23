# Password Reset Workflows

AD Control supports direct reset and verified reset. Administrators decide which methods are enabled in Settings.

```mermaid
flowchart LR
  Search["Search standard user"] --> Select["Select Avi"]
  Select --> Direct["Reset now"]
  Select --> Verified["Verified reset option"]
  Verified --> OTP["Send OTP to AD-sourced contact"]
  Direct --> Generated["Generated password shown once"]
  OTP --> Generated
  Generated --> Audit["Audit reset result"]
```

## Direct Reset

Direct reset is an administrator-approved helpdesk action. It runs immediately and is audited.

![Direct reset modal for Avi](./screenshots/avi-reset-direct-modal.jpg)

Use direct reset when policy allows the operator to reset the target user without OTP verification.

## Verified Reset

Verified reset requires OTP before the password reset completes.

![Verified reset option for Avi](./screenshots/avi-reset-otp-option.jpg)

The operator selects an available delivery channel, sends OTP, enters the code provided by the user, and completes the reset.

OTP delivery uses AD-sourced contact attributes. Operators cannot type arbitrary delivery addresses or phone numbers in the reset dialog.

## Password Handling

Generated passwords are shown once after reset. Copy or deliver the password immediately using the approved workflow.

![Generated password shown once](./screenshots/avi-reset-generated-password-once.jpg)

Audit records should include the action, actor, target, result, and correlation ID, but not the generated password or OTP code.
