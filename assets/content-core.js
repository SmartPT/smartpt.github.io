(() => {
  const page = (title, eyebrow, body) => ({
    title,
    eyebrow,
    body: `<section class="doc"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${body}</section>`
  });

  window.smartptMetaOverrides = Object.assign(window.smartptMetaOverrides || {}, {
    'core-getting-started': 'Configure SmartPT Core licensing, product status, Console access, session limits, and shared two-factor enrollment.',
    'core-portal-overview': 'Review SmartPT Console product status, product updates, recent activity, and administrator settings.',
    'core-license-status': 'Confirm the SmartPT Core license state, validation result, and JIT Access and AD Control portal status.',
    'core-access-model': 'Assign SmartPT Console administrator and viewer access through Active Directory groups.',
    'core-settings-overview': 'Configure Console access groups, session limits, shared two-factor recovery, and license information.',
    'core-shared-2fa-reset': 'Reset a user shared two-factor enrollment and require enrollment again at the next sign-in.'
  });

  window.smartptContentOverrides = Object.assign(window.smartptContentOverrides || {}, {
    'core-getting-started': page('Get started with SmartPT Core', 'SmartPT Core', `
      <p class="lead">Use SmartPT Core to confirm the server license, open JIT Access and AD Control, and manage Console access.</p>
      <figure class="doc-screenshot"><img src="./docs/core/screenshots/console-overview.png" alt="SmartPT Console overview showing product status and entry points"><figcaption>SmartPT Console is the entry point for Core status and installed products.</figcaption></figure>
      <h2>Before you begin</h2>
      <ul><li>SmartPT Core must be installed on the customer server.</li><li>You need SmartPT Console administrator access.</li><li>The Core license must be activated before operators can open product portals.</li></ul>
      <h2>Configure SmartPT Core</h2>
      <ol><li>Sign in to <strong>SmartPT Console</strong>.</li><li>Confirm the Core license shows <strong>ACTIVE</strong>.</li><li>Confirm JIT Access and AD Control are reachable.</li><li>Open <strong>Settings</strong> and add the approved Active Directory administrative group.</li><li>Add viewer groups only for users who need read-only access.</li><li>Review session lifetime and idle timeout.</li><li>Test shared two-factor enrollment with a non-production user.</li></ol>
      <h2>Expected result</h2><p>Administrators can review Core status and open installed product portals. Viewers can see Console information but cannot change settings or run product updates.</p>
      <h2>Verify the configuration</h2><ul><li>Check <strong>License and Billing</strong> for an active license and current validation.</li><li>Check each product card for a healthy status.</li><li>Sign in with administrator and viewer test accounts and compare available actions.</li></ul>
    `),
    'core-portal-overview': page('SmartPT Console portal overview', 'SmartPT Core', `
      <p class="lead">Use the Console to check server status, open product portals, review recent activity, and manage shared settings.</p>
      <figure class="doc-screenshot"><img src="./docs/core/screenshots/console-overview.png" alt="SmartPT Console overview"><figcaption>Overview shows the signed-in user, access level, and installed products.</figcaption></figure>
      <h2>Console areas</h2>
      <div class="table-wrap"><table><thead><tr><th>Area</th><th>Available to</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>Overview</strong></td><td>Administrators and viewers</td><td>Shows user, access level, and installed products.</td></tr><tr><td>Product cards</td><td>Administrators and viewers</td><td>Open JIT Access or AD Control and show portal reachability.</td></tr><tr><td><strong>Recent Activity</strong></td><td>Administrators and viewers</td><td>Shows recent sign-ins and product activity.</td></tr><tr><td><strong>Settings</strong></td><td>Administrators</td><td>Manages Console access, sessions, shared two-factor reset, and license information.</td></tr></tbody></table></div>
      <h2>Update a product</h2>
      <figure class="doc-screenshot"><img src="./docs/core/screenshots/product-update-available.png" alt="Product card showing Update available and Update app"><figcaption>Core administrators see Update app when a product update is available.</figcaption></figure>
      <ol><li>Open <strong>SmartPT Console</strong> as an administrator.</li><li>Find the product card marked <strong>Update available</strong>.</li><li>Click <strong>Update app</strong>.</li><li>Wait for the result.</li><li>Confirm the card returns to a healthy state.</li><li>Open the product portal and verify the expected version.</li></ol>
      <p>Customer settings, license information, logs, and customer data remain unchanged during a product update. If the update fails, the Console shows the result and keeps the previous product version available.</p>
      <h2>Recent activity</h2><figure class="doc-screenshot"><img src="./docs/core/screenshots/recent-activity-highlight.png" alt="SmartPT Console Recent Activity section highlighted"><figcaption>Use Recent Activity for a quick operational review.</figcaption></figure>
    `),
    'core-license-status': page('Review license and product status', 'SmartPT Core', `
      <p class="lead">Confirm that the Core license is active and each installed product portal is reachable.</p>
      <figure class="doc-screenshot"><img src="./docs/core/screenshots/license-status-highlight.png" alt="SmartPT Core license status and validation result"><figcaption>Product access requires an active Core license.</figcaption></figure>
      <h2>License fields</h2><div class="table-wrap"><table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><strong>Status</strong></td><td>Current Core license state.</td></tr><tr><td><strong>Serial</strong></td><td>Server-bound subscription identifier. Do not expose it in public screenshots.</td></tr><tr><td><strong>License validation</strong></td><td>Current server-bound validation state.</td></tr><tr><td><strong>Last validated</strong></td><td>Time and result of the last successful validation.</td></tr></tbody></table></div>
      <h2>Verify status</h2><ol><li>Confirm the license shows <strong>ACTIVE</strong>.</li><li>Confirm the last validation result is current.</li><li>Check that JIT Access and AD Control show a healthy status.</li><li>Open each product portal.</li></ol>
      <h2>If validation fails</h2><p>Check the visible license state, activation status, outbound connectivity to the configured activation service, and SmartPT application logs.</p>
    `),
    'core-access-model': page('Configure SmartPT Console access', 'SmartPT Core', `
      <p class="lead">SmartPT Console uses Active Directory groups to assign administrator or viewer access.</p>
      <div class="table-wrap"><table><thead><tr><th>Access level</th><th>Assigned through</th><th>Available actions</th></tr></thead><tbody><tr><td>Administrator</td><td>Domain Admins or configured administrative groups</td><td>Manage Console settings, shared two-factor reset, license status, and product updates.</td></tr><tr><td>Viewer</td><td>Configured viewer groups</td><td>View the Console and open separately authorized product portals.</td></tr><tr><td>None</td><td>No allowed group</td><td>Console access is denied.</td></tr></tbody></table></div>
      <p>Domain Admins retain Console administrator access. Use a dedicated Active Directory group for normal Console administration.</p>
      <h2>Add an administrative group</h2><ol><li>Open <strong>Settings</strong>.</li><li>Find <strong>Administrative groups</strong>.</li><li>Search for and select the Active Directory group.</li><li>Save the settings.</li></ol>
      <figure class="doc-screenshot"><img src="./docs/core/screenshots/rbac-it-admin-highlight.png" alt="Administrative group search for it-admin"><figcaption>The group is validated against Active Directory before it is added.</figcaption></figure>
      <h2>Expected result</h2><p>Group members see administrator actions. Product permissions remain separate in JIT Access and AD Control.</p>
    `),
    'core-settings-overview': page('SmartPT Console settings', 'SmartPT Core', `
      <p class="lead">Use <strong>Settings</strong> to manage Console access, session limits, shared two-factor recovery, and license information.</p>
      <figure class="doc-screenshot"><img src="./docs/core/screenshots/settings-overview.png" alt="SmartPT Console Settings overview"><figcaption>Settings is available to Console administrators.</figcaption></figure>
      <h2>Settings reference</h2><div class="table-wrap"><table><thead><tr><th>Area</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>Administrative groups</strong></td><td>Assigns Console administrator access.</td></tr><tr><td><strong>Viewer groups</strong></td><td>Assigns read-only Console access.</td></tr><tr><td><strong>Maximum session lifetime</strong></td><td>Hard limit for a Console session.</td></tr><tr><td><strong>Idle timeout</strong></td><td>Ends a Console session after inactivity.</td></tr><tr><td><strong>Shared Two-Factor Access</strong></td><td>Shows enrollment state and reset action.</td></tr><tr><td><strong>License and Billing</strong></td><td>Shows license state, validation, and subscription action.</td></tr></tbody></table></div>
      <div class="callout warning"><strong>Warning:</strong> Cancelling the Core subscription can block access to JIT Access and AD Control when the license becomes inactive.</div>
    `),
    'core-shared-2fa-reset': page('Reset shared two-factor enrollment', 'SmartPT Core', `
      <p class="lead">Use this procedure when a user loses the authenticator, changes device, or must enroll again.</p>
      <h2>Before you begin</h2><ul><li>You need SmartPT Console administrator access.</li><li>Confirm the target user and authorization for the reset.</li><li>Tell the user that enrollment is required at the next sign-in.</li></ul>
      <h2>Reset the enrollment</h2><ol><li>Open <strong>SmartPT Console</strong>.</li><li>Open <strong>Settings</strong>.</li><li>In <strong>Shared Two-Factor Access</strong>, search for the Active Directory user.</li><li>Select the user and review enrollment status.</li><li>Click <strong>Reset two-factor</strong>.</li></ol>
      <figure class="doc-screenshot"><img src="./docs/core/screenshots/shared-2fa-avi-reset-highlight.png" alt="Shared Two-Factor Access showing the selected user and Reset two-factor"><figcaption>Reset clears the current shared enrollment.</figcaption></figure>
      <h2>Expected result</h2><p>The user must enroll again during the next sign-in. Resetting two-factor does not assign a product license or product role.</p>
    `)
  });
})();
