# AD Control security model

AD Control checks operator licensing, RBAC, protection rules, action policy, and verification before running supported Active Directory actions.

## Control sequence

1. Confirm the signed-in operator.
2. Confirm the operator license and role.
3. Check whether the target is Tier 0 or protected.
4. Check whether the requested action is enabled.
5. Require OTP when the selected method uses verification.
6. Run the supported Active Directory action.
7. Write the action result to the audit log.

## Protection boundary

Protected users and direct or nested members of protected groups are excluded before password reset, account unlock, profile update, or group management runs. Successful OTP verification does not bypass protection.

## OTP data

OTP uses configured Active Directory contact attributes. Mobile delivery uses the `mobile` attribute. International numbers must include the country prefix; `+` is optional. Israel numbers may omit `972`.

## Audit data

Audit records include the actor, target, action, result, and available detail. OTP codes and generated passwords must not appear in audit logs.
