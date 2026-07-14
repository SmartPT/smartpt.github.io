# Choose a JIT assignment type

Select the assignment type that matches when access should start and who starts it.

| Requirement | Assignment type |
| --- | --- |
| Administrator grants immediate access | Manual |
| Access follows a recurring day and time window | Scheduled |
| Assigned user activates access after OTP verification | Eligible OTP |
| Manager or security approval before activation | Not supported in this release |

## Manual

Manual access starts when the administrator creates the assignment. It expires after the configured duration and can be revoked early.

![Create Manual assignment](./screenshots/assignment-create-manual.png)

## Scheduled

Scheduled access starts and ends during configured day and time windows. It does not require user activation.

![Create Scheduled assignment](./screenshots/assignment-create-scheduled.png)

Holiday calendars and cross-midnight schedules are not supported in this release.

## Eligible OTP

Eligible OTP lets an assigned user activate the role after OTP verification. Contact details come from Active Directory; the user cannot enter a different phone number or email address.

Mobile delivery requires the Active Directory `mobile` attribute. International numbers must include the country prefix. The `+` sign is optional. Israel numbers may be stored without `972`.

## Verification

After creating an assignment, confirm its type and status in **Assignments**. Use **Active Sessions** to verify active access and its expiration time.
