(() => {
  const page = (title, body) => ({ title, eyebrow: 'JIT Access', body: `<section class="doc"><div class="eyebrow">JIT Access</div><h1>${title}</h1>${body}</section>` });
  window.smartptMetaOverrides = Object.assign(window.smartptMetaOverrides || {}, {
    'jit-overview': 'Configure JIT Access roles and assignments for temporary Active Directory group membership.',
    'jit-access-model': 'Understand JIT product licensing, RBAC, roles, assignments, active sessions, and Active Directory membership.',
    'jit-portal-overview': 'Review the JIT dashboard, roles, assignments, active sessions, eligible activation, and settings.',
    'jit-settings-overview': 'Configure JIT product licenses, RBAC, eligible access, notifications, SMTP, and portal sessions.',
    'jit-roles': 'Create a JIT role, map existing Active Directory groups, and configure allowed access methods and duration limits.',
    'jit-assignments': 'Create a JIT assignment that connects a user to a role through Manual, Scheduled, or Eligible OTP access.',
    'jit-assignment-types': 'Choose Manual, Scheduled, or Eligible OTP behavior for a JIT assignment.',
    'jit-eligible-otp': 'Configure and activate Eligible OTP access, then verify the active session and temporary group membership.',
    'jit-sessions-revoke': 'Review, extend, or revoke active JIT sessions and verify temporary group membership removal.',
    'jit-notifications-session-policy': 'Configure JIT session notifications, SMTP delivery, and portal session limits.',
    'jit-troubleshooting': 'Troubleshoot JIT licensing, RBAC, assignments, OTP delivery, group membership, and service health.'
  });
  window.smartptContentOverrides = Object.assign(window.smartptContentOverrides || {}, {
    'jit-overview': page('Get started with JIT Access', `
      <p class="lead">JIT Access adds a user to configured Active Directory groups for a limited time and removes the membership when the session expires or is revoked.</p>
      <figure class="doc-screenshot"><img src="./docs/jit/screenshots/jit-product-overview.jpg" alt="JIT Access overview showing temporary access and automatic expiration"><figcaption>JIT Access manages time-limited membership in existing Active Directory groups.</figcaption></figure>
      <h2>Main components</h2><div class="table-wrap"><table><thead><tr><th>Component</th><th>Purpose</th></tr></thead><tbody><tr><td>JIT role</td><td>Maps access to existing Active Directory groups and defines allowed access methods.</td></tr><tr><td>Assignment</td><td>Defines who may receive the role, how it activates, and when it is valid.</td></tr><tr><td>Active session</td><td>Shows temporary access that is currently active.</td></tr></tbody></table></div>
      <p>A JIT role does not activate access by itself. An assignment must become active before SmartPT adds the user to mapped groups.</p>
      <h2>Assignment types</h2><div class="table-wrap"><table><thead><tr><th>Type</th><th>Behavior</th></tr></thead><tbody><tr><td>Manual</td><td>An administrator starts access immediately for a fixed duration.</td></tr><tr><td>Scheduled</td><td>SmartPT starts and removes access during configured windows.</td></tr><tr><td>Eligible OTP</td><td>An assigned user verifies with OTP and starts a time-limited session.</td></tr></tbody></table></div>
      <div class="callout warning"><strong>Important:</strong> This release does not include an approval workflow. Eligible OTP verifies activation but does not create an approval request.</div>
    `),
    'jit-access-model': page('JIT Access licensing and RBAC', `
      <p class="lead">JIT Access checks authentication, product licensing, RBAC, role configuration, and assignment state separately.</p>
      <div class="table-wrap"><table><thead><tr><th>Layer</th><th>What it controls</th></tr></thead><tbody><tr><td>Authentication</td><td>Confirms the signed-in Active Directory identity.</td></tr><tr><td>Product license</td><td>Allows the user to enter JIT Access.</td></tr><tr><td>JIT RBAC</td><td>Defines actions available inside the portal.</td></tr><tr><td>JIT role</td><td>Defines mapped groups and allowed access methods.</td></tr><tr><td>Assignment</td><td>Defines user, activation method, and validity.</td></tr></tbody></table></div>
      <h2>RBAC roles</h2><div class="table-wrap"><table><thead><tr><th>Role</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>JitAdmin</strong></td><td>Manages roles, assignments, active sessions, and settings.</td></tr><tr><td><strong>JitEligibleUser</strong></td><td>Activates the user's own Eligible OTP assignments.</td></tr></tbody></table></div>
      <p>These roles do not add users to Domain Admins or other Active Directory groups.</p>
      <h2>Configure access</h2><ol><li>Confirm the JIT license is active.</li><li>Assign the product license.</li><li>Assign the required JIT RBAC role.</li><li>Create the JIT role and assignment.</li><li>Sign in as the user and verify the available actions.</li></ol>
    `),
    'jit-portal-overview': page('JIT Access portal overview', `
      <p class="lead">Use the JIT portal to review license capacity, configure roles and assignments, activate eligible access, and monitor active sessions.</p>
      <h2>Dashboard</h2><figure class="doc-screenshot"><img src="./docs/jit/screenshots/dashboard-overview.png" alt="JIT dashboard showing JIT Status and Start Work"><figcaption>JIT Status shows license capacity. Start Work opens operational areas.</figcaption></figure>
      <h2>Portal areas</h2><div class="table-wrap"><table><thead><tr><th>Area</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>Overview</strong></td><td>Summarizes roles, assignments, and active sessions.</td></tr><tr><td><strong>Roles</strong></td><td>Maps JIT roles to existing Active Directory groups.</td></tr><tr><td><strong>Assignments</strong></td><td>Connects users to roles through Manual, Scheduled, or Eligible OTP access.</td></tr><tr><td><strong>Active Sessions</strong></td><td>Shows current access, expiration, and extend or revoke actions.</td></tr><tr><td><strong>Settings</strong></td><td>Manages licenses, RBAC, notifications, SMTP, and portal sessions.</td></tr></tbody></table></div>
      <figure class="doc-screenshot"><img src="./docs/jit/screenshots/active-sessions.png" alt="JIT Active Sessions table"><figcaption>Active Sessions shows temporary access currently in effect.</figcaption></figure>
    `),
    'jit-settings-overview': page('JIT Access settings', `
      <p class="lead">Use <strong>Settings</strong> to manage product licenses, JIT RBAC, eligible access, notifications, SMTP, and portal session limits.</p>
      <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-overview.png" alt="JIT Settings overview"><figcaption>Configure access and delivery before creating production roles.</figcaption></figure>
      <div class="table-wrap"><table><thead><tr><th>Area</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>Licensed Users</strong></td><td>Assigns JIT product licenses.</td></tr><tr><td><strong>Role Assignments</strong></td><td>Assigns JIT product permissions.</td></tr><tr><td><strong>Eligible requester groups</strong></td><td>Limits eligible access to configured groups where enabled.</td></tr><tr><td><strong>Notification recipients</strong></td><td>Defines recipients for selected session emails.</td></tr><tr><td><strong>System / Session</strong></td><td>Configures portal sessions, SMTP, and group overrides.</td></tr></tbody></table></div>
      <h2>Configure settings</h2><ol><li>Assign product licenses.</li><li>Assign JIT RBAC roles.</li><li>Review eligible requester groups.</li><li>Configure notification recipients and events.</li><li>Configure SMTP where email is used.</li><li>Review portal session lifetime and idle timeout.</li><li>Test with a non-production role.</li></ol>
    `),
    'jit-roles': page('Create a JIT role', `
      <p class="lead">Use this procedure to map temporary access to one or more existing Active Directory groups.</p>
      <h2>Before you begin</h2><ul><li>The Active Directory group must already exist.</li><li>The SmartPT service identity must be able to add and remove members.</li><li>Decide the allowed assignment types and duration limits.</li></ul>
      <h2>Create the role</h2><ol><li>Open <strong>JIT Access &gt; Roles</strong>.</li><li>Click <strong>Create Role</strong>.</li><li>Complete the role fields.</li><li>Select the existing Active Directory groups.</li><li>Save the role.</li></ol>
      <figure class="doc-screenshot"><img src="./docs/jit/screenshots/role-create-modal.png" alt="Create Role dialog with role settings and Active Directory groups"><figcaption>A role defines access methods, duration limits, and mapped groups.</figcaption></figure>
      <h2>Expected result</h2><p>The role appears in <strong>Roles</strong> and is available when creating an assignment.</p>
      <h2>Verify the role</h2><p>Confirm enabled state, access type badges, duration limits, and mapped group count.</p>
    `),
    'jit-assignments': page('Create a JIT assignment', `
      <p class="lead">Use an assignment to connect a target user to a JIT role and define how and when access becomes active.</p>
      <h2>Before you begin</h2><ul><li>Create and review the JIT role.</li><li>Confirm the target user's <code>samAccountName</code>.</li><li>Choose Manual, Scheduled, or Eligible OTP behavior.</li></ul>
      <h2>Create the assignment</h2><ol><li>Open <strong>JIT Access &gt; Assignments</strong>.</li><li>Click <strong>Create Assignment</strong>.</li><li>Select the role and enter the target user's <code>samAccountName</code>.</li><li>Select the assignment type and timing.</li><li>Enter a reason for the audit record.</li><li>Save the assignment.</li></ol>
      <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignment-create-eligible.png" alt="Create Eligible assignment dialog"><figcaption>The assignment connects a user, role, activation type, timing, and reason.</figcaption></figure>
      <h2>Expected result</h2><p>The assignment appears in <strong>Assignments</strong>. Manual starts immediately, Scheduled follows its window, and Eligible OTP waits for user activation.</p>
      <div class="callout warning"><strong>Important:</strong> Revoking active access removes temporary Active Directory group membership.</div>
    `),
    'jit-assignment-types': page('Choose a JIT assignment type', `
      <p class="lead">Select the assignment type that matches when access should start and who starts it.</p>
      <div class="table-wrap"><table><thead><tr><th>Requirement</th><th>Type</th></tr></thead><tbody><tr><td>Administrator grants immediate access</td><td>Manual</td></tr><tr><td>Access follows a recurring day and time window</td><td>Scheduled</td></tr><tr><td>Assigned user activates after OTP verification</td><td>Eligible OTP</td></tr><tr><td>Manager or security approval</td><td>Not supported in this release</td></tr></tbody></table></div>
      <h2>Manual</h2><p>Starts when the administrator creates the assignment, expires after the configured duration, and can be revoked early.</p>
      <h2>Scheduled</h2><p>Starts and ends during configured windows without user activation. Holiday calendars and cross-midnight schedules are not supported in this release.</p>
      <h2>Eligible OTP</h2><p>The assigned user verifies with an Active Directory contact value and starts the session. The user cannot enter a different phone number or email address.</p>
    `),
    'jit-eligible-otp': page('Activate Eligible OTP access', `
      <p class="lead">Eligible OTP lets an assigned user verify their identity and start temporary access to groups mapped by a JIT role.</p>
      <div class="callout warning"><strong>Important:</strong> Eligible OTP is not an approval workflow. The administrator authorizes access by creating the assignment.</div>
      <h2>Before you begin</h2><ul><li>Assign a JIT product license and required eligible-user RBAC.</li><li>Create an enabled role with <strong>Allow eligible</strong>.</li><li>Configure OTP and map the role to existing groups.</li><li>Create an active Eligible assignment for the user's <code>samAccountName</code>.</li></ul>
      <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-admin-assignment-list.png" alt="Eligible assignment configured for the user"><figcaption>The assignment remains inactive until the user verifies and activates it.</figcaption></figure>
      <h2>Activate access</h2><ol><li>Sign in with the eligible user account.</li><li>Open <strong>Activate Access</strong>.</li><li>Click <strong>Activate</strong> for the assigned role.</li><li>Select a delivery channel and send OTP.</li><li>Enter the code and confirm activation.</li></ol>
      <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-joe-activation-only.png" alt="Eligible user portal showing only the activation option"><figcaption>Eligible users see only their own activation options.</figcaption></figure>
      <h2>Expected result</h2><p>JIT Access creates an active session and adds the user to mapped Active Directory groups. Expiration or revoke removes the membership.</p>
      <h2>Verify activation</h2><figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-admin-active-session.png" alt="Administrator Active Sessions view showing the eligible user's active role"><figcaption>Confirm user, role, type, start, expiration, and status.</figcaption></figure>
    `),
    'jit-sessions-revoke': page('Monitor, extend, or revoke active access', `
      <p class="lead">Use <strong>Active Sessions</strong> to review current temporary access and stop it before expiration when required.</p>
      <figure class="doc-screenshot"><img src="./docs/jit/screenshots/sessions-joe-active-actions.png" alt="Active JIT session with Extend and Revoke actions"><figcaption>Review the user, role, type, timing, status, and actions.</figcaption></figure>
      <h2>Extend a session</h2><ol><li>Confirm the approved task still requires access.</li><li>Click <strong>Extend</strong>.</li><li>Enter additional minutes and a reason.</li><li>Confirm the extension.</li></ol>
      <h2>Revoke a session</h2><ol><li>Confirm the user and JIT role.</li><li>Click <strong>Revoke</strong>.</li><li>Confirm the action.</li></ol>
      <div class="callout warning"><strong>Important:</strong> Revoke stops access before its configured end time and removes temporary Active Directory group membership.</div>
      <h2>Verify the action</h2><ul><li>Refresh <strong>Active Sessions</strong>.</li><li>Verify the user's mapped group membership after revoke.</li><li>Review the extension or revoke audit record.</li></ul>
    `),
    'jit-notifications-session-policy': page('Configure JIT notifications and session policy', `
      <p class="lead">Select session email events and define JIT portal session limits.</p>
      <h2>Notification events</h2><figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-notification-events-highlight.png" alt="JIT notification event settings"><figcaption>Events include manual start, eligible activation, extension, and revoke.</figcaption></figure>
      <h2>Session policy</h2><div class="table-wrap"><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><strong>Max session minutes</strong></td><td>Longest JIT portal session.</td></tr><tr><td><strong>Idle timeout minutes</strong></td><td>Ends an inactive portal session.</td></tr><tr><td><strong>Global Email (SMTP)</strong></td><td>Mail delivery for notifications and configured fallback.</td></tr><tr><td><strong>Group overrides</strong></td><td>Different portal session limits for configured groups.</td></tr></tbody></table></div>
      <p>Portal session limits do not replace JIT role duration limits.</p>
      <h2>Verify delivery</h2><ol><li>Confirm SMTP and recipient settings.</li><li>Trigger an enabled event with a non-production role.</li><li>Confirm delivery and review the audit record.</li></ol>
    `),
    'jit-troubleshooting': page('Troubleshoot JIT Access', `
      <p class="lead">Check licensing, RBAC, assignment state, delivery settings, Active Directory permissions, and service health for the visible symptom.</p>
      <h2>User cannot access JIT Access</h2><p>Confirm the JIT product license, required RBAC assignment, and signed-in Active Directory account. Domain Admins can access management areas without a separate JIT role assignment.</p>
      <h2>Eligible activation does not appear</h2><p>Check the product license, <code>samAccountName</code>, Eligible assignment timing, role enabled state, <strong>Allow eligible</strong>, and eligible-user RBAC.</p>
      <h2>OTP is not received</h2><ul><li>Confirm the Active Directory <code>mobile</code> or mail attribute.</li><li>Review channel, send, retry, and expiry limits.</li><li>For mobile delivery, include the country prefix; <code>+</code> is optional. Israel numbers may omit <code>972</code>.</li><li>Check messaging or SMTP connectivity.</li></ul>
      <h2>Group membership does not change</h2><ol><li>Confirm the mapped group distinguished name.</li><li>Confirm the user and group are readable.</li><li>Confirm delegated add and remove membership permission.</li><li>Review assignment and session audit details.</li></ol>
      <h2>Information for support</h2><ul><li>Username, role ID, assignment ID, and exact time.</li><li>Error text and screenshot.</li><li>Portal and service status.</li><li>Relevant audit detail and Windows Event Viewer errors.</li></ul>
    `)
  });
})();
