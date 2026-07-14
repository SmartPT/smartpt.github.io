(() => {
  const page = (title, body) => ({ title, eyebrow: 'AD Control', body: `<section class="doc"><div class="eyebrow">AD Control</div><h1>${title}</h1>${body}</section>` });
  window.smartptMetaOverrides = Object.assign(window.smartptMetaOverrides || {}, {
    'ad-control-getting-started': 'Configure AD Control operator roles, protected identities, OTP delivery, and approved Active Directory actions.',
    'ad-control-access-model': 'Assign AD Control operator licenses and Tier 1 or Tier 2 roles while keeping target users unlicensed.',
    'ad-control-portal-overview': 'Review the AD Control dashboard, operator console, Settings, and role-based page visibility.',
    'ad-control-settings-overview': 'Configure AD Control access, protected identities, action methods, OTP, SMTP, notifications, and sessions.',
    'ad-control-protected-identities': 'Hide protected users and protected group members from Tier 1 and Tier 2 operator workflows.',
    'ad-control-operator-console': 'Search for standard users and review actions available to Tier 1 and Tier 2 operators.',
    'ad-control-password-reset': 'Reset a standard user password directly or after OTP verification and review the audit result.',
    'ad-control-account-unlock': 'Unlock a locked standard user directly or after OTP verification and verify the updated state.',
    'ad-control-profile-updates': 'Update approved Active Directory profile attributes as an Advanced Support Tier 2 operator.',
    'ad-control-group-management': 'Add or remove standard users from groups allowed by AD Control policy.',
    'ad-control-troubleshooting': 'Troubleshoot AD Control access, search, OTP, actions, SMTP, Active Directory permissions, and service health.',
    'ad-control-security-model': 'Understand AD Control license, RBAC, protection, OTP, Active Directory action, and audit checks.'
  });
  window.smartptContentOverrides = Object.assign(window.smartptContentOverrides || {}, {
    'ad-control-getting-started': page('Get started with AD Control', `
      <p class="lead">AD Control lets authorized operators reset passwords, unlock accounts, update approved attributes, and manage permitted group memberships without direct Active Directory permissions for those actions.</p>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/ad-control-product-overview.jpg" alt="AD Control overview showing Tier 1, Tier 2, Tier 0 protection, OTP, and audit"><figcaption>AD Control separates operator actions from protected identities and settings administration.</figcaption></figure>
      <h2>Access model</h2><div class="table-wrap"><table><thead><tr><th>Role or object</th><th>Purpose</th></tr></thead><tbody><tr><td>Helpdesk (Tier 1)</td><td>Resets passwords and unlocks standard users.</td></tr><tr><td>Advanced Support (Tier 2)</td><td>Includes Tier 1 actions plus approved profile and group actions.</td></tr><tr><td>Settings administrator</td><td>Manages licenses, roles, protected identities, OTP, SMTP, and sessions.</td></tr><tr><td>Protected user or group</td><td>Excludes identities from Tier 1 and Tier 2 workflows.</td></tr><tr><td>Target user</td><td>User managed by an operator. Does not require a product license.</td></tr></tbody></table></div>
      <h2>Before you configure operators</h2><ul><li>Confirm the AD Control license is active.</li><li>Identify Tier 1 and Tier 2 operators.</li><li>Configure protected users and groups.</li><li>Review direct and OTP-verified reset and unlock policy.</li><li>Test with a non-production target user.</li></ul>
    `),
    'ad-control-access-model': page('AD Control licensing and RBAC', `
      <p class="lead">AD Control assigns licenses and product roles to operators. Target users do not require a product license.</p>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/settings-access-assignments-highlight.jpg" alt="AD Control Access Assignments settings"><figcaption>Assign one product license and one operator role to each operator.</figcaption></figure>
      <h2>Access layers</h2><div class="table-wrap"><table><thead><tr><th>Layer</th><th>What it controls</th></tr></thead><tbody><tr><td>Product license</td><td>Allows operator access and consumes a seat.</td></tr><tr><td>Operator role</td><td>Defines Tier 1 or Tier 2 actions.</td></tr><tr><td>Settings access</td><td>Allows product configuration and license administration.</td></tr><tr><td>Protection rules</td><td>Excludes Tier 0 and protected identities.</td></tr></tbody></table></div>
      <h2>Operator roles</h2><div class="table-wrap"><table><thead><tr><th>Role</th><th>Available actions</th></tr></thead><tbody><tr><td><strong>Helpdesk (Tier 1)</strong></td><td>Password reset and account unlock. Cannot change phone numbers, edit profile attributes, or manage groups.</td></tr><tr><td><strong>Advanced Support (Tier 2)</strong></td><td>Tier 1 actions plus approved profile updates and controlled group membership.</td></tr></tbody></table></div>
      <h2>Assign operator access</h2><ol><li>Open <strong>Settings &gt; Access Assignments</strong>.</li><li>Select the Active Directory user.</li><li>Assign an AD Control license.</li><li>Select one operator role.</li><li>Save the assignment.</li></ol>
    `),
    'ad-control-portal-overview': page('AD Control portal overview', `
      <p class="lead">The portal shows the dashboard, operator console, or Settings according to the signed-in user's access.</p>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/david-dashboard.jpg" alt="AD Control dashboard for a Tier 1 operator"><figcaption>The dashboard shows the signed-in context and available entry points.</figcaption></figure>
      <div class="table-wrap"><table><thead><tr><th>Area</th><th>Available to</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>Dashboard</strong></td><td>Licensed users and administrators</td><td>Shows product status and entry points.</td></tr><tr><td><strong>AD Control</strong></td><td>Licensed Tier 1 and Tier 2 operators</td><td>Searches standard users and shows role-approved actions.</td></tr><tr><td><strong>Settings</strong></td><td>Settings administrators</td><td>Manages assignments, protection, OTP, action policy, SMTP, and sessions.</td></tr></tbody></table></div>
      <h2>Verify access</h2><ul><li>Tier 1 sees reset and unlock actions.</li><li>Tier 2 also sees approved profile and group actions.</li><li>Only settings administrators see <strong>Settings</strong>.</li></ul>
    `),
    'ad-control-settings-overview': page('AD Control settings', `
      <p class="lead">Use <strong>Settings</strong> to configure operator access, protected identities, action methods, OTP, notifications, SMTP, and portal sessions.</p>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/settings-all-policy-areas-highlight.jpg" alt="AD Control Settings with important configuration areas highlighted"><figcaption>Review access, protection, action policy, delivery, and session settings before rollout.</figcaption></figure>
      <div class="table-wrap"><table><thead><tr><th>Area</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>Access Assignments</strong></td><td>Assigns operator licenses and roles.</td></tr><tr><td>Protected users and groups</td><td>Excludes identities from operator workflows.</td></tr><tr><td>OTP policy</td><td>Sets code lifetime, send limits, resend windows, and failed-attempt limits.</td></tr><tr><td>Password and unlock options</td><td>Controls direct and verified methods.</td></tr><tr><td>Notifications</td><td>Configures auditor and action notifications.</td></tr><tr><td><strong>Global Email (SMTP)</strong></td><td>Configures mail delivery.</td></tr><tr><td><strong>System / Session</strong></td><td>Sets portal lifetime and idle timeout.</td></tr></tbody></table></div>
      <h2>Configure AD Control</h2><ol><li>Assign licenses and roles.</li><li>Configure protected identities.</li><li>Select reset and unlock methods.</li><li>Configure OTP limits and delivery.</li><li>Configure SMTP and notifications where used.</li><li>Test each enabled action with a non-production target.</li></ol>
    `),
    'ad-control-protected-identities': page('Configure protected users and groups', `
      <p class="lead">Protected identities do not appear in Tier 1 or Tier 2 user search and cannot be selected for operator actions.</p>
      <p>Tier 0 identities are protected by default. Protection also applies to named users and direct or nested members of configured protected groups.</p>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/settings-protection-highlight.jpg" alt="Protected users and protected groups settings highlighted"><figcaption>Add protected identities before broad operator rollout.</figcaption></figure>
      <h2>Add protection</h2><ol><li>Open <strong>Settings</strong>.</li><li>Add named accounts under <strong>Protected users</strong>.</li><li>Add Active Directory groups under <strong>Protected groups</strong>.</li><li>Save the settings.</li></ol>
      <h2>Expected result</h2><p>Tier 1 and Tier 2 operators cannot find the protected user or a direct or nested member of a protected group.</p>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/david-protected-user-search.jpg" alt="Tier 1 search does not return a protected user"><figcaption>The protected identity is unavailable to the operator workflow.</figcaption></figure>
      <p>Protection applies to AD Control operator workflows. It does not change permissions in other Active Directory tools.</p>
    `),
    'ad-control-operator-console': page('Use the AD Control operator console', `
      <p class="lead">Find a standard Active Directory user and run only the actions available to the assigned operator role.</p>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/david-avi-selected.jpg" alt="Tier 1 operator console with a standard target user selected"><figcaption>The selected-user panel shows status and role-approved actions.</figcaption></figure>
      <h2>Search for a user</h2><ol><li>Open <strong>AD Control</strong>.</li><li>Search by <code>samAccountName</code>, UPN, or display name.</li><li>Select the target user.</li></ol>
      <h2>Actions by role</h2><div class="table-wrap"><table><thead><tr><th>Role</th><th>Available actions</th></tr></thead><tbody><tr><td><strong>Helpdesk (Tier 1)</strong></td><td>Password reset and account unlock.</td></tr><tr><td><strong>Advanced Support (Tier 2)</strong></td><td>Tier 1 actions plus approved profile and group actions.</td></tr></tbody></table></div>
      <h2>Verify the console</h2><ul><li>Tier 1 cannot edit profile attributes, change phone numbers, or manage groups.</li><li>Tier 2 sees only approved profile and group actions.</li><li>Tier 0 and protected identities are not searchable.</li></ul>
    `),
    'ad-control-password-reset': page('Reset an Active Directory password', `
      <p class="lead">Use direct reset or OTP-verified reset when the selected method is enabled in Settings.</p>
      <h2>Before you begin</h2><ul><li>The operator needs a product license and allowed Tier 1 or Tier 2 role.</li><li>The target must be a standard, non-protected user.</li><li>Verified reset requires an enabled delivery channel and Active Directory contact value.</li></ul>
      <h2>Direct reset</h2><ol><li>Select the target user.</li><li>Click the direct password reset action.</li><li>Review the target and reason.</li><li>Confirm the reset.</li></ol>
      <h2>OTP-verified reset</h2><ol><li>Choose the verified reset option.</li><li>Select a delivery channel.</li><li>Send OTP to the Active Directory contact value.</li><li>Enter the code provided by the user.</li><li>Confirm the reset.</li></ol>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/avi-reset-otp-option.jpg" alt="Password reset dialog showing the OTP verification option"><figcaption>Operators cannot enter a different delivery address or phone number.</figcaption></figure>
      <h2>Expected result</h2><p>AD Control resets the password and shows the generated value once.</p>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/avi-reset-generated-password-once.jpg" alt="Generated password displayed once after reset"><figcaption>Deliver the password through the customer's approved process.</figcaption></figure>
    `),
    'ad-control-account-unlock': page('Unlock an Active Directory account', `
      <p class="lead">Use direct or OTP-verified unlock for a locked standard user when the selected method is enabled.</p>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/avi-locked-status-highlight.jpg" alt="Selected user showing locked account status"><figcaption>The unlock action appears only for a locked user when the operator has permission.</figcaption></figure>
      <h2>Direct unlock</h2><ol><li>Select the locked user.</li><li>Click the direct unlock action.</li><li>Enter the required reason.</li><li>Confirm the unlock.</li></ol>
      <h2>OTP-verified unlock</h2><ol><li>Choose the verified unlock option.</li><li>Select a delivery channel and send OTP.</li><li>Enter the code provided by the user.</li><li>Confirm the unlock.</li></ol>
      <h2>Expected result</h2><p>The account lock is cleared and the selected-user panel shows the updated state.</p>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/avi-unlock-direct-complete.jpg" alt="AD Control confirmation after account unlock"><figcaption>Refresh the selected user and review the unlock audit record.</figcaption></figure>
    `),
    'ad-control-profile-updates': page('Update approved user profile fields', `
      <p class="lead">Advanced Support (Tier 2) operators can update supported Active Directory attributes for standard users.</p>
      <h2>Supported fields</h2><ul><li>Phone and Mobile</li><li>Title and Department</li><li>Company and Office</li><li>Description</li></ul>
      <h2>Update the profile</h2><ol><li>Select a standard, non-protected user.</li><li>Open the profile update action.</li><li>Change only approved fields.</li><li>Save the update.</li></ol>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/sara-profile-update.jpg" alt="Tier 2 profile update form for a standard user"><figcaption>Profile fields are available only to the Tier 2 workflow.</figcaption></figure>
      <h2>Verify the update</h2><p>Refresh the selected user and review the profile-update audit record.</p>
    `),
    'ad-control-group-management': page('Manage approved group membership', `
      <p class="lead">Advanced Support (Tier 2) operators can add or remove standard users from groups allowed by AD Control policy.</p>
      <h2>Before you begin</h2><ul><li>The operator needs an AD Control license and Tier 2 role.</li><li>The target must not be Tier 0 or protected.</li><li>The group must be allowed and not protected.</li></ul>
      <h2>Change membership</h2><ol><li>Select the target user.</li><li>Open group management.</li><li>Review direct and nested or effective membership.</li><li>Select an available add or remove action.</li><li>Confirm the change.</li></ol>
      <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/sara-group-management.jpg" alt="Tier 2 controlled group membership panel"><figcaption>Only groups allowed by policy are available for changes.</figcaption></figure>
      <h2>Verify the change</h2><p>Refresh the group panel and review the group-management audit record.</p>
    `),
    'ad-control-troubleshooting': page('Troubleshoot AD Control', `
      <p class="lead">Check the affected operator, target, action, and exact time before reviewing licensing, RBAC, protection, delivery, permissions, and service health.</p>
      <h2>Operator cannot access AD Control</h2><p>Confirm the operator license, one active Tier 1 or Tier 2 role, available license capacity, and signed-in Active Directory identity.</p>
      <h2>Target user does not appear</h2><p>Confirm the user exists and is not Tier 0, a protected user, or a direct or nested member of a protected group.</p>
      <h2>OTP is not received</h2><ol><li>Confirm the Active Directory mail or <code>mobile</code> attribute.</li><li>Confirm the delivery channel is enabled.</li><li>Review send, resend, expiry, and failed-attempt limits.</li><li>Check SMTP or messaging connectivity.</li></ol>
      <h2>Action fails</h2><p>Confirm the action is enabled, the role permits it, the target is not protected, and the service identity has the required delegated Active Directory permission. Review the audit detail.</p>
      <h2>Information for support</h2><ul><li>Operator, target, role, and action.</li><li>Exact time and error text.</li><li>Screenshot and audit detail.</li><li>Portal, service, and IIS status.</li></ul>
    `),
    'ad-control-security-model': page('AD Control security model', `
      <p class="lead">AD Control checks operator licensing, RBAC, protection rules, action policy, and verification before running supported Active Directory actions.</p>
      <h2>Control sequence</h2><ol><li>Confirm the signed-in operator.</li><li>Confirm license and role.</li><li>Check Tier 0 and protection rules.</li><li>Check whether the action is enabled.</li><li>Require OTP for a verified method.</li><li>Run the supported Active Directory action.</li><li>Write the result to the audit log.</li></ol>
      <h2>Protection boundary</h2><p>Protected users and direct or nested members of protected groups are excluded before reset, unlock, profile, or group actions. OTP does not bypass protection.</p>
      <h2>Audit data</h2><p>Audit records include actor, target, action, result, and available detail. OTP codes and generated passwords must not appear in audit logs.</p>
    `)
  });
})();
