const releaseDate = 'May 16, 2026';

const navGroups = [
  {
    title: 'Start',
    items: [
      ['overview', 'Documentation Home'],
      ['getting-started', 'Getting Started'],
      ['installation', 'Installation'],
      ['licensing', 'Licensing'],
      ['downloads', 'Downloads']
    ]
  },
  {
    title: 'AD Control',
    items: [
      ['ad-control-overview', 'Overview'],
      ['ad-control-admin', 'Admin Guide'],
      ['ad-control-operator', 'Operator Guide'],
      ['ad-control-settings', 'Settings'],
      ['ad-control-security', 'Security Model']
    ]
  },
  {
    title: 'JIT Access',
    items: [
      ['jit-overview', 'Getting Started'],
      ['jit-access-model', 'Access Model'],
      ['jit-portal-overview', 'Portal Overview'],
      ['jit-settings-overview', 'Settings Overview'],
      ['jit-roles', 'Creating Roles'],
      ['jit-assignments', 'Creating Assignments'],
      ['jit-assignment-types', 'Assignment Types'],
      ['jit-eligible-otp', 'Eligible OTP'],
      ['jit-sessions-revoke', 'Sessions and Revoke'],
      ['jit-notifications-session-policy', 'Notifications and Policy'],
      ['jit-troubleshooting', 'Troubleshooting']
    ]
  },
  {
    title: 'Operations',
    items: [
      ['security-model', 'Shared Security Model'],
      ['audit', 'Audit and Compliance'],
      ['troubleshooting', 'Troubleshooting'],
      ['release-notes', 'Release Notes']
    ]
  },
  {
    title: 'Policies',
    items: [
      ['privacy', 'Privacy'],
      ['terms', 'Terms'],
      ['cookie-policy', 'Cookie Policy'],
      ['accessibility', 'Accessibility']
    ]
  }
];

const pageMeta = {
  overview: 'SmartPT documentation for installing and operating SmartPT Core, JIT Access, and AD Control in on-prem Active Directory environments.',
  installation: 'Install SmartPT Core on IIS with Local Active Directory integration, product portals, backend applications, service identity, and activation guidance.',
  licensing: 'SmartPT Core licensing, server-bound activation, mTLS client certificate behavior, subscription states, and add-on user unit guidance.',
  downloads: 'Download SmartPT Core activation wizard packages and review release packaging guidance for customer deployments.',
  'jit-overview': 'Getting started with JIT Access, standing privilege risk, temporary Active Directory group membership, roles, assignments, and supported access types.',
  'jit-access-model': 'JIT Access model covering product license assignment, internal RBAC roles, JIT roles, and JIT assignments.',
  'jit-portal-overview': 'JIT portal overview covering dashboard status cards, quick actions, JIT Access overview, roles, assignments, active sessions, and settings.',
  'jit-settings-overview': 'JIT settings overview covering licensed users, RBAC role assignments, product settings, notifications, SMTP, and session policy.',
  'jit-roles': 'Create JIT roles that map to existing Active Directory groups and define allowed access methods, OTP, and duration limits.',
  'jit-assignments': 'Create JIT assignments that connect users to roles for eligible, scheduled, or manual privileged access.',
  'jit-assignment-types': 'Assignment type guide for choosing Manual, Scheduled, or Eligible OTP access in JIT Access.',
  'jit-eligible-otp': 'Eligible OTP self-service guide covering administrator setup, user activation, WhatsApp/mobile OTP verification, active sessions, and automatic removal.',
  'jit-sessions-revoke': 'Operations guide for monitoring active JIT sessions, extending Joe eligible access, and using revoke safely.',
  'jit-notifications-session-policy': 'JIT Settings guide for notification recipients, session event emails, session policy, SMTP, and group overrides.',
  'jit-troubleshooting': 'JIT troubleshooting guide for portal access, missing assignments, OTP limits, revoke behavior, SMTP notifications, service identity, and IIS application pools.',
  'jit-admin': 'JIT administrator guide covering roles, AD group mapping, assignments, active sessions, emergency revocation, and audit review.',
  'jit-user': 'JIT user guide for eligible self-service access with OTP verification from Active Directory-sourced contact details.',
  'jit-settings': 'JIT roles and assignments guide covering role fields, access modes, schedules, OTP settings, duration limits, and enforcement behavior.',
  'jit-security': 'JIT security model for server-side authorization, AD group enforcement, OTP storage, session reconciliation, and audit controls.',
  'ad-control-overview': 'AD Control documentation for tiered Active Directory support, Tier 0 protection, protected users and groups, password reset, account unlock, and OTP verification.',
  'ad-control-admin': 'AD Control administrator guide covering license assignments, operator roles, settings access, protected users, protected groups, and support group configuration.',
  'ad-control-operator': 'AD Control operator guide for searching users, resetting passwords, unlocking accounts, updating profile attributes, and controlled group management.',
  'ad-control-settings': 'AD Control settings reference for password options, unlock options, OTP delivery, password delivery, protected identities, notifications, SMTP, and session policy.',
  'ad-control-security': 'AD Control security model for tier boundaries, protected identity exclusion, verified workflows, role enforcement, and audit records.',
  'security-model': 'Shared SmartPT security model for on-prem operation, AD-sourced identity data, backend authorization, license enforcement, and auditability.',
  audit: 'Audit and compliance guidance for SmartPT Core, JIT Access, AD Control, correlation IDs, sensitive event records, and safe logging.',
  troubleshooting: 'Troubleshooting guide for SmartPT access assignment, sessions, OTP delivery, protected users, JIT removal, and license validation.',
  privacy: 'SmartPT documentation site privacy notice covering static docs use, downloads, external links, and customer-controlled product data.',
  terms: 'SmartPT documentation site terms for using customer guides, downloads, release materials, and product documentation.',
  'cookie-policy': 'SmartPT documentation cookie policy explaining current cookie usage and future consent handling for docs.smartpt.co.il.',
  accessibility: 'SmartPT documentation accessibility statement for WCAG 2.1 AA, WCAG 2.2 AA, and Israeli Standard 5568 readiness.'
};

const pages = {
  'overview': {
    title: 'SmartPT documentation',
    eyebrow: 'Customer docs',
    lead: 'Guides for deploying and operating SmartPT Core, JIT Access, and AD Control in Local Active Directory environments.',
    body: `
      <div class="hero">
        <div class="hero-grid">
          <div>
            <div class="eyebrow">SmartPT Core</div>
            <h1>On-prem Active Directory security guidance.</h1>
            <p>Use these guides to install SmartPT Core, configure licensing, manage AD Control, operate JIT Access, and understand the security model behind tiered support and temporary privilege.</p>
            <div class="page-actions">
              <a class="button primary" href="#installation">Install SmartPT Core</a>
              <a class="button secondary" href="#ad-control-overview">Explore AD Control</a>
              <a class="button secondary" href="#jit-overview">Explore JIT</a>
            </div>
          </div>
          <div class="hero-card">
            <div class="eyebrow">Control flow</div>
            <div class="hero-flow" aria-label="SmartPT control flow">
              <div class="flow-node"><b>Risk</b><span>Standing access, unsafe support actions, vishing, and uncontrolled AD changes.</span></div>
              <div class="arrow">-></div>
              <div class="flow-node"><b>SmartPT</b><span>Verify, limit, activate, tier, protect, and audit.</span></div>
              <div class="arrow">-></div>
              <div class="flow-node"><b>Outcome</b><span>Lower privilege exposure and clearer helpdesk control.</span></div>
            </div>
          </div>
        </div>
      </div>
      <section class="doc">
        <div class="eyebrow">Products</div>
        <h1>What this documentation covers</h1>
        <div class="cards">
          <article class="card">
            <h3>SmartPT Core</h3>
            <p>The on-prem base platform, licensing layer, activation flow, and shared subscription model for JIT and AD Control.</p>
          </article>
          <article class="card">
            <h3>JIT Access</h3>
            <p>Temporary, policy-driven Active Directory group membership for privileged roles. Supports manual, scheduled, and eligible OTP-based access.</p>
          </article>
          <article class="card">
            <h3>AD Control</h3>
            <p>Tiered support operations for password reset, account unlock, profile updates, group actions, protected users, and Tier 0 protection.</p>
          </article>
        </div>
        ${architectureDiagram()}
      </section>
    `
  },
  'getting-started': page('Getting Started', 'Start here', `
    <p class="lead">Start with platform readiness, then configure licensing, application access, product settings, and operator access.</p>
    <ol>
      <li>Prepare a Windows server joined to the customer Active Directory domain.</li>
      <li>Install SmartPT Core and product portals on IIS.</li>
      <li>Activate the license serial and generate the local client certificate.</li>
      <li>Confirm backend health, AD connectivity, PowerShell execution, and file-system access.</li>
      <li>Configure AD Control access assignments and settings.</li>
      <li>Configure JIT roles, assignments, and active-session policy.</li>
      <li>Review audit events and operational troubleshooting guidance.</li>
    </ol>
    <div class="callout">Recommended order: install Core, activate licensing, configure AD Control, configure JIT, then test with a non-production AD user and non-production AD group.</div>
  `),
  'installation': page('Installation', 'SmartPT Core', `
    <p class="lead">SmartPT Core is installed on a customer-controlled Windows server and integrates with Local Active Directory. The product portals run locally and the backends enforce permissions server-side.</p>
    <h2>Where to start</h2>
    <ol>
      <li>Use the SmartPT Core activation wizard package from the Downloads page or customer release package.</li>
      <li>Run the installer on the target Windows server.</li>
      <li>Enter the license serial received after subscription purchase.</li>
      <li>Allow the installer/backend to generate the local key and certificate request.</li>
      <li>Complete activation so the SmartPT license service issues a client certificate bound to this server.</li>
      <li>Open the local portal and confirm license health.</li>
    </ol>
    <h2>Server requirements</h2>
    <div class="table-wrap"><table><thead><tr><th>Area</th><th>Requirement</th></tr></thead><tbody>
      <tr><td>Operating system</td><td>Windows Server capable of running IIS and .NET 8 application hosting.</td></tr>
      <tr><td>Identity</td><td>Domain joined server with access to the target Active Directory environment.</td></tr>
      <tr><td>IIS</td><td>Separate applications and application pools for product frontends and backends.</td></tr>
      <tr><td>Service identity</td><td>Dedicated application pool identity or gMSA with least-privilege permissions for required AD actions.</td></tr>
      <tr><td>Storage</td><td>Local configuration, state, and append-only audit logs stored as files.</td></tr>
    </tbody></table></div>
    <h2>Important paths</h2>
    <pre><code>AD Control frontend: /adc
AD Control backend:  /adc-backend
JIT frontend:        /jit
JIT backend:         /JIT-Backend
Verify service:      /verify</code></pre>
    <div class="callout warning">Do not grant broad Domain Admin permissions to the application pool identity. Delegate only the AD actions required for the configured product workflows.</div>
  `),
  'licensing': page('Licensing', 'SmartPT Core', `
    <p class="lead">SmartPT Core uses a server-bound license and client certificate model. Licensing is enforced before product access is granted.</p>
    <h2>Commercial model</h2>
    <ul>
      <li>SmartPT Core is the base subscription.</li>
      <li>The base subscription includes JIT Access and AD Control with the included user allocation.</li>
      <li>Additional user units are managed from the product portals.</li>
      <li>If the Core license is canceled, product add-on units are canceled with it.</li>
    </ul>
    <h2>Activation model</h2>
    <ol>
      <li>The customer receives a license serial after subscription purchase.</li>
      <li>The server generates a private key locally.</li>
      <li>The private key stays on the customer server.</li>
      <li>SmartPT issues a client certificate for mTLS validation.</li>
      <li>The certificate is bound to the server and environment.</li>
    </ol>
    <h2>License states</h2>
    <div class="table-wrap"><table><thead><tr><th>State</th><th>Meaning</th></tr></thead><tbody>
      <tr><td>PAID</td><td>License was purchased but not activated on this server.</td></tr>
      <tr><td>ACTIVE</td><td>Certificate issued and runtime validation can succeed.</td></tr>
      <tr><td>CANCELLED</td><td>Subscription or license was canceled.</td></tr>
      <tr><td>EXPIRED</td><td>Certificate or subscription is no longer valid.</td></tr>
    </tbody></table></div>
  `),
  'downloads': page('Downloads', 'Installation package', `
    <p class="lead">Use this page for customer release downloads. Keep production releases versioned and replace packages intentionally.</p>
    <div class="cards">
      <article class="card">
        <h3>SmartPT Core Activation Wizard</h3>
        <p>Windows x64 package for SmartPT Core activation and setup.</p>
        <p><a class="button primary" href="./downloads/SmartPT-Core-ActivationWizard-win-x64.zip">Download package</a></p>
      </article>
      <article class="card">
        <h3>Setup executable</h3>
        <p>Standalone setup executable from the current build output.</p>
        <p><a class="button secondary" href="./downloads/Setup.exe">Download Setup.exe</a></p>
      </article>
      <article class="card">
        <h3>Release guidance</h3>
        <p>Validate the package in staging before sharing with customers. Keep checksums and version notes with each production release.</p>
      </article>
    </div>
  `),
  'ad-control-overview': page('AD Control overview', 'AD Control', `
    <p class="lead">AD Control gives support teams a safer way to handle Active Directory user operations with tier boundaries, user verification, protected identities, and audit records.</p>
    <div class="tag-list">
      <span class="tag">Tier 1 / Tier 2 support</span>
      <span class="tag">Tier 0 protection</span>
      <span class="tag">Password reset</span>
      <span class="tag">Account unlock</span>
      <span class="tag">OTP verification</span>
      <span class="tag">Protected groups</span>
    </div>
    ${adControlDiagram()}
    <h2>What AD Control solves</h2>
    <ul>
      <li>Reduces helpdesk exposure to vishing and social-engineering attempts.</li>
      <li>Limits which operators can see and change sensitive users.</li>
      <li>Keeps protected and Tier 0 identities out of routine operator workflows.</li>
      <li>Supports verified password reset and verified account unlock using AD-sourced contact details.</li>
      <li>Audits actions without storing OTP codes or generated passwords.</li>
    </ul>
    <h2>Main operating areas</h2>
    <div class="cards">
      <article class="card"><h3>Tiered support</h3><p>Assign Tier 1 and Tier 2 operators so helpdesk actions stay inside the intended support boundary.</p></article>
      <article class="card"><h3>Verified user actions</h3><p>Require OTP before password reset or account unlock when the organization wants user verification.</p></article>
      <article class="card"><h3>Protected identities</h3><p>Hide Tier 0, protected users, and protected group members from routine support search and actions.</p></article>
    </div>
    <h2>What operators can do when allowed</h2>
    <div class="table-wrap"><table><thead><tr><th>Capability</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Password reset</td><td>Reset a user password directly or after OTP verification, according to settings.</td></tr>
      <tr><td>Account unlock</td><td>Unlock a locked AD account directly or after OTP verification.</td></tr>
      <tr><td>Temporary password delivery</td><td>Send the generated temporary password by approved email or mobile delivery after reset.</td></tr>
      <tr><td>Profile update</td><td>Update allowed AD attributes such as phone, mobile, title, department, company, office, and description.</td></tr>
      <tr><td>Group membership</td><td>Add or remove only configured allowed groups.</td></tr>
    </tbody></table></div>
  `),
  'ad-control-admin': page('AD Control admin guide', 'AD Control', `
    <p class="lead">Administrators configure access assignments, support groups, protected users, protected groups, reset options, unlock options, OTP behavior, notification, SMTP, and session policy.</p>
    <h2>Where to go</h2>
    <p><code>AD Control > Settings</code></p>
    <h2>Who can use it</h2>
    <ul>
      <li>Domain Admins have administrative access by default.</li>
      <li>Support groups with settings access can manage AD Control settings.</li>
      <li>Tier users do not need settings access and should not see administrative quick actions.</li>
    </ul>
    <h2>Common admin tasks</h2>
    <div class="table-wrap"><table><thead><tr><th>Task</th><th>Path</th><th>Notes</th></tr></thead><tbody>
      <tr><td>Grant product access</td><td>Settings > Access Assignments</td><td>Assign one license and one operator role.</td></tr>
      <tr><td>Change operator tier</td><td>Settings > Access Assignments > Change</td><td>Change role without removing the user first.</td></tr>
      <tr><td>Add support group</td><td>Settings > AD Control View Settings</td><td>Search and add valid AD groups.</td></tr>
      <tr><td>Add protected user</td><td>Settings > Protected users</td><td>Protected users do not appear in Tier 1 or Tier 2 search.</td></tr>
      <tr><td>Add protected group</td><td>Settings > Protected groups</td><td>Members and nested members are protected.</td></tr>
      <tr><td>Configure reset/unlock methods</td><td>Settings > Password options</td><td>At least one reset method and one unlock method must remain enabled.</td></tr>
    </tbody></table></div>
    <h2>Access assignment model</h2>
    <ul>
      <li>A user needs a product license assignment and one operator role.</li>
      <li>Use <b>Change role</b> to move a user between Tier 1, Tier 2, or administrative roles without removing the assignment first.</li>
      <li>Remove only when the user should no longer have AD Control access.</li>
      <li>License limits are enforced before new users can be assigned.</li>
    </ul>
    <h2>Protected identity setup</h2>
    <ol>
      <li>Open <code>Settings > Protected users</code> to add specific users that should not be searchable by Tier operators.</li>
      <li>Open <code>Settings > Protected groups</code> to add groups whose direct and nested members should be protected.</li>
      <li>Use AD search/autocomplete so added users and groups are valid directory objects.</li>
      <li>Test with a Tier operator account and confirm protected users do not appear in search.</li>
    </ol>
    <div class="callout">Protected groups are designed for high-risk identities and sensitive admin groups. Treat them the same way as Tier 0 protection for routine support workflows.</div>
    <h2>Settings change checklist</h2>
    <ul>
      <li>Validate settings before saving.</li>
      <li>Confirm SMTP and mobile delivery settings after changes.</li>
      <li>Review audit records after access assignments, role changes, and protected group changes.</li>
      <li>Keep a JSON backup path available so administrators can recover if settings access is misconfigured.</li>
    </ul>
  `),
  'ad-control-operator': page('AD Control operator guide', 'AD Control', `
    <p class="lead">Operators use AD Control to search eligible users and perform only the actions allowed by their assigned tier and permissions.</p>
    <h2>Where to go</h2>
    <p><code>AD Control > Search user > Select user</code></p>
    <h2>Operator actions</h2>
    <div class="table-wrap"><table><thead><tr><th>Action</th><th>Who can use it</th><th>Behavior</th></tr></thead><tbody>
      <tr><td>Password reset</td><td>Operators with password reset permission</td><td>Can be direct or OTP-verified, depending on settings.</td></tr>
      <tr><td>Account unlock</td><td>Operators with unlock permission</td><td>Can be direct or OTP-verified, depending on settings.</td></tr>
      <tr><td>Profile update</td><td>Tier 2 / configured operators</td><td>Can update allowed fields such as phone, mobile, title, department, company, office, and description.</td></tr>
      <tr><td>Group membership</td><td>Operators with group permission</td><td>Can add or remove only allowed groups.</td></tr>
      <tr><td>View groups</td><td>Operators with group view permission</td><td>Direct and nested groups can be visible based on permissions.</td></tr>
    </tbody></table></div>
    <h2>Search behavior</h2>
    <ul>
      <li>Search supports allowed AD users by samAccountName, UPN, or display name where available.</li>
      <li>Tier 0 users, protected users, and members of protected groups do not appear to routine Tier operators.</li>
      <li>If a user cannot be found, confirm whether the user is protected before treating it as a directory problem.</li>
    </ul>
    <h2>Verified reset workflow</h2>
    <ol>
      <li>Search and select the target user.</li>
      <li>Choose Reset password.</li>
      <li>Select verified reset if required by policy.</li>
      <li>Send OTP to email, mobile, or both where available.</li>
      <li>Enter the OTP provided by the user.</li>
      <li>Complete reset and give the temporary password through the approved channel.</li>
    </ol>
    <h2>Direct reset workflow</h2>
    <ol>
      <li>Search and select the target user.</li>
      <li>Choose Reset password.</li>
      <li>Select direct reset when enabled by policy.</li>
      <li>Enter a reason if required by the reset dialog.</li>
      <li>Complete the reset.</li>
      <li>Copy once, email the password, or send it to the phone when those delivery actions are available.</li>
    </ol>
    <h2>Verified unlock workflow</h2>
    <ol>
      <li>Search and select the target user.</li>
      <li>Choose Unlock account.</li>
      <li>Select verified unlock when required by policy.</li>
      <li>Send OTP to the allowed AD-sourced channel.</li>
      <li>Enter the OTP provided by the user.</li>
      <li>Complete unlock and review the result.</li>
    </ol>
    <h2>Direct unlock workflow</h2>
    <ol>
      <li>Search and select the target user.</li>
      <li>Choose Unlock account.</li>
      <li>Select direct unlock when enabled by policy.</li>
      <li>Enter the operational reason.</li>
      <li>Complete unlock.</li>
    </ol>
    <h2>Profile and group workflows</h2>
    <ul>
      <li>Profile updates are limited to allowed fields such as phone, mobile, title, department, company, office, and description.</li>
      <li>Group add/remove actions are limited to allowed groups configured by administrators.</li>
      <li>Protected groups should not be available as routine add/remove targets for Tier operators.</li>
    </ul>
    <div class="callout warning">Generated passwords are shown once. Copy or deliver the password immediately using the approved workflow.</div>
  `),
  'ad-control-settings': page('AD Control settings', 'AD Control', `
    <p class="lead">AD Control settings are JSON-backed and managed through the Settings page by administrators.</p>
    <h2>Password and unlock options</h2>
    <ul>
      <li><b>Change password at next sign-in:</b> automatically requires users to change the reset password on next logon.</li>
      <li><b>Direct password reset:</b> allows immediate reset without user verification.</li>
      <li><b>Verified password reset:</b> requires OTP verification before reset.</li>
      <li><b>Direct unlock:</b> allows immediate account unlock without user verification.</li>
      <li><b>Verified unlock:</b> requires OTP verification before unlock.</li>
      <li><b>Complex passwords:</b> allows forced complex password resets when needed.</li>
      <li><b>WhatsApp/mobile delivery:</b> controls mobile delivery for OTP and temporary password workflows.</li>
    </ul>
    <h2>Reset and unlock method rules</h2>
    <ul>
      <li>By default, direct password reset, verified password reset, direct unlock, and verified unlock can be enabled.</li>
      <li>Administrators can turn off methods according to policy, but the portal must retain at least one password reset path and one unlock path.</li>
      <li>If <b>Change password at next sign-in</b> is enabled, individual reset dialogs do not need a separate checkbox for that behavior.</li>
      <li>Verified workflows use 6-digit numeric OTP codes.</li>
      <li>Temporary passwords can be delivered by email or mobile only after the reset succeeds and only when the target user has the required AD attributes.</li>
    </ul>
    <h2>OTP and delivery settings</h2>
    <div class="table-wrap"><table><thead><tr><th>Setting</th><th>Controls</th></tr></thead><tbody>
      <tr><td>Verification code TTL</td><td>How long the OTP remains valid.</td></tr>
      <tr><td>Send limit</td><td>How many OTP sends are allowed in the configured window.</td></tr>
      <tr><td>Verification attempts</td><td>How many failed code attempts are allowed before the request is blocked.</td></tr>
      <tr><td>Email delivery</td><td>OTP and temporary password delivery through configured SMTP where allowed.</td></tr>
      <tr><td>Mobile delivery</td><td>OTP and temporary password delivery through the configured mobile messaging path where allowed.</td></tr>
    </tbody></table></div>
    <h2>Notification and SMTP settings</h2>
    <ul>
      <li>Auditor notification address controls who receives sensitive workflow notifications.</li>
      <li>Email subject and body templates should describe the action without exposing OTP codes or temporary passwords in logs.</li>
      <li>SMTP settings should be validated from the Settings page after changes.</li>
      <li>Secrets should be protected by the server configuration and not exposed in audit records.</li>
    </ul>
    <h2>Protection settings</h2>
    <ul>
      <li>Tier 0 users are protected by default.</li>
      <li>Protected users stay hidden from Tier 1 and Tier 2 search and actions.</li>
      <li>Protected groups protect direct and nested members.</li>
      <li>Protected groups are treated like Tier 0 for routine support workflows.</li>
    </ul>
    <h2>Access and role settings</h2>
    <ul>
      <li>Administrative groups extend settings access to approved AD groups.</li>
      <li>Viewer groups can receive read-only visibility where configured.</li>
      <li>Operator access assignments bind one licensed user to one AD Control role.</li>
      <li>Role changes should use the Change option so license assignment remains intact.</li>
    </ul>
    <h2>Session policy</h2>
    <p>System settings include maximum session minutes and idle timeout minutes. Expired sessions require the user to sign in again.</p>
  `),
  'ad-control-security': page('AD Control security model', 'AD Control', `
    <p class="lead">AD Control is designed to reduce unsafe helpdesk operations without giving every operator broad Active Directory permissions.</p>
    <h2>Core controls</h2>
    <ul>
      <li>Windows authentication and product session enforcement.</li>
      <li>License assignment and one operator role required.</li>
      <li>Role-based UI visibility backed by server authorization.</li>
      <li>Tier 0 and protected group exclusion from routine workflows.</li>
      <li>OTP values and generated passwords are never stored in audit logs.</li>
      <li>Every sensitive action includes a correlation ID and audit record.</li>
    </ul>
    <h2>Tier and protection behavior</h2>
    <ul>
      <li>Tier 0 identities are excluded from routine Tier operator search and actions.</li>
      <li>Protected users are manually selected identities that should be excluded even if they are not Tier 0.</li>
      <li>Protected groups extend protection to group members, including nested members by design.</li>
      <li>Allowed groups limit which group memberships a support operator can add or remove.</li>
    </ul>
    <h2>Verified action behavior</h2>
    <ul>
      <li>OTP is sent only to contact details sourced from Active Directory.</li>
      <li>The operator cannot type a new phone number or email address for OTP delivery.</li>
      <li>OTP values are validated by the backend and expire according to policy.</li>
      <li>Successful verification does not bypass tier, protected identity, or role permissions.</li>
    </ul>
    <h2>Password handling</h2>
    <ul>
      <li>Generated passwords are shown only after a successful reset and only to authorized operators.</li>
      <li>Generated passwords are shown once and should be delivered through the approved channel.</li>
      <li>When configured, reset passwords are automatically marked to require change at next sign-in.</li>
      <li>Audit records must never include generated passwords.</li>
    </ul>
    <div class="callout success">Design outcome: operators can support users inside defined boundaries while privileged identities remain protected from routine reset, unlock, and group workflows.</div>
  `),
  'jit-overview': page('Getting Started with JIT Access', 'JIT Access', `
    <p class="lead">JIT Access reduces standing privilege in Active Directory by making privileged group membership temporary, visible, and controlled by policy.</p>
    <div class="tag-list">
      <span class="tag">Manual access</span>
      <span class="tag">Scheduled access</span>
      <span class="tag">Eligible OTP</span>
      <span class="tag">Temporary AD membership</span>
      <span class="tag">Automatic expiration</span>
    </div>
    ${jitDiagram()}
    <h2>What problem JIT solves</h2>
    <p>In many environments, administrative users remain in sensitive groups such as Domain Admins because they may need that access later. That creates standing privilege: an account has high-impact access even when there is no active business need. If the account is compromised, the attacker inherits that privilege immediately.</p>
    ${standingPrivilegeDiagram()}
    <p>JIT changes the operating model. Instead of keeping users permanently in privileged AD groups, JIT Access adds group membership only when access is valid, then removes it automatically when the access window closes or an operator revokes it.</p>
    <h2>How JIT works</h2>
    <ul>
      <li><b>JIT roles</b> define the privileged access profile. A role maps to one or more existing Active Directory groups and defines which access methods are allowed.</li>
      <li><b>Assignments</b> define who can receive a role, how access is activated, and when access is valid.</li>
      <li>The role does not grant access by itself. Access becomes active only through an assignment.</li>
    </ul>
    <h2>Temporary AD group membership</h2>
    <p>When a JIT assignment becomes active, the backend can add the target user to the AD group mapped by the role. When the assignment expires, closes, or is revoked, the backend removes that group membership.</p>
    <p>This gives operators a controlled way to provide privileged access without converting users into permanent members of sensitive AD groups.</p>
    <h2>Supported assignment types</h2>
    <div class="table-wrap"><table><thead><tr><th>Assignment type</th><th>Use case</th></tr></thead><tbody>
      <tr><td>Manual</td><td>Administrator-granted access for urgent work, incidents, or short operational tasks.</td></tr>
      <tr><td>Scheduled</td><td>Planned access during approved days and time windows, such as recurring maintenance.</td></tr>
      <tr><td>Eligible OTP</td><td>Self-service activation for approved users with OTP verification.</td></tr>
    </tbody></table></div>
    <h2>No approval workflow in this release</h2>
    <div class="callout warning">This release does not include an approval workflow. Assignments are created and managed by administrators. Eligible OTP controls user activation and verification, but it is not an approval request process.</div>
    <h2>Recommended learning order</h2>
    <ol>
      <li>Getting Started with JIT Access.</li>
      <li>Access Model, Licensing, and RBAC.</li>
      <li>JIT Portal Overview.</li>
      <li>Settings Overview.</li>
      <li>Creating JIT Roles.</li>
      <li>Creating JIT Assignments.</li>
      <li>Assignment Types.</li>
    </ol>
    <h2>What to configure next</h2>
    <ol>
      <li>Confirm the JIT portal is licensed and the signed-in administrator has JIT administration rights.</li>
      <li>Review the JIT dashboard and access workspace.</li>
      <li>Confirm which existing AD groups should be managed by JIT.</li>
      <li>Create roles only after the AD group mapping and duration limits are clear.</li>
      <li>Create assignments only after the intended operating model is known.</li>
    </ol>
  `),
  'jit-access-model': page('Access Model, Licensing, and RBAC', 'JIT Access', `
    <p class="lead">JIT Access separates product access from privileged access. A user can sign in and still be blocked from JIT actions if the license assignment or RBAC role is missing.</p>
    ${jitArchitectureDiagram()}
    <div class="table-wrap"><table><thead><tr><th>Layer</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Authentication</td><td>Confirms the signed-in Active Directory user.</td></tr>
      <tr><td>License validation</td><td>Confirms the JIT product license is active and the user is assigned to the product.</td></tr>
      <tr><td>RBAC role assignment</td><td>Defines what the user can do inside JIT.</td></tr>
      <tr><td>JIT role and assignment</td><td>Defines which privileged AD group access can be activated and when.</td></tr>
    </tbody></table></div>
    <h2>Licensed users</h2>
    <p>Licensed Users in Settings controls who consumes a JIT product user license. Assigning a user license allows the user to access the product, but it does not automatically make the user a JIT administrator and does not grant privileged AD group membership.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-overview.png" alt="JIT settings showing licensed users and role assignments"><figcaption>Settings separates licensed users from JIT role assignments.</figcaption></figure>
    <h2>RBAC role assignments</h2>
    <p>Role Assignments in Settings controls what a licensed user can do. A JIT administrator needs the correct product role before they can manage roles, assignments, sessions, or settings.</p>
    <ul>
      <li><b>JitAdmin</b> manages roles, assignments, sessions, and JIT settings.</li>
      <li><b>JitEligibleUser</b> activates approved eligible access.</li>
    </ul>
    <h2>JIT roles are different</h2>
    <p>A JIT role maps to one or more existing Active Directory groups. The JIT role only defines the privileged access profile. It does not grant access until an assignment activates it.</p>
    <h2>Recommended setup order</h2>
    <ol>
      <li>Confirm the JIT license is active.</li>
      <li>Assign a product license to the administrator.</li>
      <li>Assign the administrator the required JIT RBAC role.</li>
      <li>Create JIT roles that map to existing AD groups.</li>
      <li>Create assignments for users who should receive temporary access.</li>
      <li>Verify active sessions and automatic removal behavior.</li>
    </ol>
    <div class="callout">Operational rule: keep license assignment, RBAC role assignment, JIT role mapping, and JIT assignment separate. This keeps product access, administrative permission, and privileged AD group membership clear and auditable.</div>
  `),
  'jit-portal-overview': page('JIT Portal Overview', 'JIT Access', `
    <p class="lead">The JIT Portal is the operator workspace for temporary privileged access. It gives administrators one place to confirm license readiness, open the access console, manage settings, review roles and assignments, and monitor active privileged sessions.</p>
    <div class="callout">Screenshots were captured from the local JIT portal in dark mode at 1920x1080.</div>
    <h2>Dashboard overview</h2>
    <p>The dashboard is the first readiness view after sign-in. Use it to confirm that the JIT environment is active before changing access.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/dashboard-overview.png" alt="JIT dashboard overview in dark mode"><figcaption>Dashboard status cards and quick actions.</figcaption></figure>
    <h3>JIT Status cards</h3>
    <div class="table-wrap"><table><thead><tr><th>Card</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>License</td><td>Confirms whether the JIT license is active.</td></tr>
      <tr><td>Licensed identities</td><td>Shows the total number of users available under the current license.</td></tr>
      <tr><td>Signed in as</td><td>Confirms the current administrator or operator context.</td></tr>
      <tr><td>Available licensed users</td><td>Shows remaining user capacity before additional users must be licensed.</td></tr>
    </tbody></table></div>
    <h3>Quick Actions</h3>
    <ul>
      <li><b>Open Access Console</b> opens the JIT workspace for roles, assignments, sessions, and overview metrics.</li>
      <li><b>Settings</b> opens JIT configuration and access assignment settings.</li>
      <li><b>Add Licensed Users</b> increases licensed user allocation when supported by the current license.</li>
      <li><b>Reduce Licensed Users</b> reduces licensed user allocation when supported by the current license.</li>
    </ul>
    <h2>JIT Access overview</h2>
    <p>The Overview tab summarizes configured access and current activity. Use it before and after changes to confirm the environment state.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/jit-access-overview.png" alt="JIT access overview in dark mode"><figcaption>JIT Access overview metrics.</figcaption></figure>
    <h2>Roles</h2>
    <p>Roles define privileged access profiles. A role maps to one or more existing Active Directory groups and controls which access methods are allowed.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/roles-list.png" alt="JIT roles list in dark mode"><figcaption>Configured JIT role inventory.</figcaption></figure>
    <h2>Assignments</h2>
    <p>Assignments connect users to roles. This is where administrators define who can receive privileged access and when that access is valid.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignments-list.png" alt="JIT assignments list in dark mode"><figcaption>Assignments table for user, role, type, status, details, and actions.</figcaption></figure>
    <p>This release does not include an approval workflow. Assignment creation is an administrator action.</p>
    <h2>Active Sessions</h2>
    <p>Active Sessions is the real-time monitoring view for current privileged access. Use it to confirm who is elevated, which role granted access, start time, expiration, and whether access should be revoked early.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/active-sessions.png" alt="JIT active sessions in dark mode"><figcaption>Live privileged access monitoring.</figcaption></figure>
    <h2>Settings</h2>
    <p>Settings is the administrative configuration area for licensed identities, JIT administrator role assignments, product settings, notification settings, and shared session policy.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-overview.png" alt="JIT settings overview in dark mode"><figcaption>JIT license, role assignment, notification, and session settings.</figcaption></figure>
    <h2>Recommended navigation flow</h2>
    <ol>
      <li>Start at Dashboard and confirm license and administrator readiness.</li>
      <li>Open JIT Access > Overview to review the current environment state.</li>
      <li>Review Roles to confirm the access profiles available.</li>
      <li>Review Assignments to understand who can receive access.</li>
      <li>Review Active Sessions to monitor live privilege.</li>
      <li>Review Settings before changing license, role assignment, notification, or session policy.</li>
    </ol>
  `),
  'jit-settings-overview': page('JIT Settings Overview', 'JIT Access', `
    <p class="lead">JIT Settings is the administrative area for product access, RBAC role assignment, notification behavior, SMTP, and shared session policy.</p>
    <p>Open Settings after confirming the dashboard license status. Do this before creating production JIT roles or assignments.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-overview.png" alt="JIT settings overview in dark mode"><figcaption>Settings manages product licensing, RBAC, notifications, SMTP, and session policy.</figcaption></figure>
    <h2>Licensed Users</h2>
    <p>Licensed Users defines which Active Directory users are assigned to the JIT product. Assigning a user license allows the user to consume one licensed identity. It does not automatically make the user a JIT administrator and does not grant privileged AD group membership.</p>
    <h2>Role Assignments</h2>
    <p>Role Assignments define product permissions inside JIT. A user normally needs both a product license and a matching role assignment before the portal enables the relevant workflow.</p>
    <h2>JIT Product Settings</h2>
    <ul>
      <li><b>Eligible requester groups</b> limit who can request or activate eligible access.</li>
      <li><b>Notification recipients</b> receive administrative session notifications.</li>
      <li><b>JIT session email notifications</b> control selected session events.</li>
      <li><b>Notification toggles</b> cover manual activation, eligible OTP activation, session extension, and session revoke.</li>
    </ul>
    <h2>System and Session Policy</h2>
    <p>System / Session settings control portal session behavior and shared delivery settings, including maximum session duration, idle timeout, SMTP, and optional group-specific overrides.</p>
    <div class="callout success">Recommended practice: confirm product licensing, RBAC, SMTP, and session policy before mapping highly privileged AD groups.</div>
  `),
  'jit-roles': page('Creating JIT Roles', 'JIT Access', `
    <p class="lead">JIT roles define the privileged access profile. A role maps JIT Access to one or more existing Active Directory groups and defines which assignment types are allowed.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/roles-list.png" alt="JIT roles list in dark mode"><figcaption>Roles inventory before creating access profiles.</figcaption></figure>
    <h2>Before creating a role</h2>
    <ul>
      <li>Confirm the AD group already exists.</li>
      <li>Confirm the group is the correct privilege boundary.</li>
      <li>Confirm the backend service identity can add and remove members from that group.</li>
      <li>Confirm the duration limits match the business task.</li>
      <li>Test with a non-production group before Tier 0 use.</li>
    </ul>
    <h2>Create Role</h2>
    <p>Open <code>JIT Access > Roles</code>, then select <b>Create Role</b>.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/role-create-modal.png" alt="Create JIT role modal in dark mode"><figcaption>Create Role defines identity, access modes, duration limits, OTP, reminders, and AD group mapping.</figcaption></figure>
    <h2>Role fields</h2>
    <div class="table-wrap"><table><thead><tr><th>Field</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Display name</td><td>Human-readable role name shown in the portal.</td></tr>
      <tr><td>Role ID</td><td>Stable identifier generated from the display name.</td></tr>
      <tr><td>Description</td><td>Business purpose for the role.</td></tr>
      <tr><td>Enabled</td><td>Controls whether the role can be used for new access.</td></tr>
      <tr><td>Allow manual / scheduled / eligible</td><td>Controls which assignment types can use this role.</td></tr>
      <tr><td>OTP required</td><td>Requires OTP verification for eligible activation.</td></tr>
      <tr><td>Max manual / max total minutes</td><td>Caps active access duration.</td></tr>
      <tr><td>AD Groups</td><td>Existing AD group distinguished names managed by this role.</td></tr>
    </tbody></table></div>
    <h2>Save and verify</h2>
    <ol>
      <li>Confirm the role appears in the Roles table.</li>
      <li>Confirm access type badges match the intended model.</li>
      <li>Confirm the group count is correct.</li>
      <li>Create assignments only after the role mapping is reviewed.</li>
    </ol>
  `),
  'jit-assignments': page('Creating JIT Assignments', 'JIT Access', `
    <p class="lead">Assignments connect users to JIT roles. They define who can receive privileged access, how access starts, and when it ends.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignments-list.png" alt="JIT assignments list in dark mode"><figcaption>Assignments show user, role, type, status, details, and revoke action.</figcaption></figure>
    <h2>Create Assignment</h2>
    <p>Open <code>JIT Access > Assignments</code>, then select <b>Create Assignment</b>.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignment-create-eligible.png" alt="Create eligible JIT assignment in dark mode"><figcaption>Every assignment requires a role, target user, assignment type, and audited reason.</figcaption></figure>
    <h2>Required fields</h2>
    <ul>
      <li><b>Role:</b> JIT role that maps to the AD group access.</li>
      <li><b>User:</b> target user by <code>samAccountName</code>.</li>
      <li><b>Assignment type:</b> Eligible, Scheduled, or Manual.</li>
      <li><b>Reason:</b> business reason recorded for audit.</li>
    </ul>
    <h2>Manual assignment</h2>
    <p>Manual assignments activate immediately and expire automatically. Use them for urgent operational work, incident response, or one-time maintenance.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignment-create-manual.png" alt="Create manual JIT assignment in dark mode"><figcaption>Manual assignment uses a fixed duration.</figcaption></figure>
    <h2>Scheduled assignment</h2>
    <p>Scheduled assignments are enforced by the backend service. Use them for recurring maintenance windows.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignment-create-scheduled.png" alt="Create scheduled JIT assignment in dark mode"><figcaption>Scheduled assignment defines days, time window, and validity dates.</figcaption></figure>
    <h2>Eligible assignment</h2>
    <p>Eligible assignments let approved users activate access themselves after OTP verification. Access starts only after successful verification and expires automatically.</p>
    <h2>Revoke</h2>
    <p>Revoking an assignment removes active access or prevents the assignment from being used again, depending on assignment state. Use revoke when access is no longer needed, was configured incorrectly, or must be stopped early.</p>
    <div class="callout warning">This release does not include an approval workflow. Assignment creation is an administrator action.</div>
  `),
  'jit-assignment-types': page('Assignment Types', 'JIT Access', `
    <p class="lead">JIT Access supports three assignment types: Manual, Scheduled, and Eligible. Choose the assignment type based on how access should start.</p>
    <h2>Manual</h2>
    <p>Manual access is administrator-granted and starts immediately.</p>
    <ul>
      <li>Use for urgent work, incident response, or one-time maintenance.</li>
      <li>Expires automatically after the configured duration.</li>
      <li>Can be revoked early.</li>
      <li>Must stay within the role duration limits.</li>
    </ul>
    <h2>Scheduled</h2>
    <p>Scheduled access is automatic access during defined time windows.</p>
    <ul>
      <li>Use for recurring maintenance windows.</li>
      <li>Backend grants access inside the configured window.</li>
      <li>Backend removes access outside the configured window.</li>
      <li>State is reconciled after backend restart or missed enforcement cycles.</li>
    </ul>
    <h2>Eligible OTP</h2>
    <p>Eligible access lets approved users activate access themselves after OTP verification.</p>
    <ul>
      <li>The user sees only their own eligible assignments.</li>
      <li>OTP is sent to contact details sourced from Active Directory.</li>
      <li>Users cannot type their own phone number or email address.</li>
      <li>Access starts only after successful verification and expires automatically.</li>
    </ul>
    <h2>Decision guide</h2>
    <div class="table-wrap"><table><thead><tr><th>Need</th><th>Use</th></tr></thead><tbody>
      <tr><td>Immediate administrator-granted access</td><td>Manual</td></tr>
      <tr><td>Recurring maintenance window</td><td>Scheduled</td></tr>
      <tr><td>Approved self-service activation</td><td>Eligible OTP</td></tr>
      <tr><td>Manager or security approval before activation</td><td>Not supported in this release</td></tr>
    </tbody></table></div>
    <div class="callout">Practical recommendation: start with Manual for first validation, then add Scheduled for recurring operations, and use Eligible OTP only after license assignment, RBAC, OTP delivery, and session monitoring have been tested.</div>
  `),
  'jit-eligible-otp': page('Eligible OTP Self-Service', 'JIT Access', `
    <p class="lead">Eligible OTP access lets an approved user activate temporary privileged access without holding standing membership in the target Active Directory group.</p>
    <p>The administrator prepares the access path. The user activates it only when needed, verifies with OTP, and receives a time-limited session. JIT Access removes access automatically when the session expires or when an administrator revokes it.</p>
    ${eligibleOtpFlowDiagram()}
    <h2>End-to-end flow</h2>
    <ol>
      <li>A JIT administrator assigns a product license to the user.</li>
      <li>The administrator creates or confirms a JIT role that allows Eligible access and requires OTP.</li>
      <li>The administrator creates an Eligible assignment for the user.</li>
      <li>The user signs in to the JIT portal.</li>
      <li>The user opens Activate Access and starts the assigned role.</li>
      <li>JIT Access sends OTP to an AD-sourced delivery channel, such as WhatsApp/mobile.</li>
      <li>The user verifies the OTP.</li>
      <li>JIT Access activates the session and adds the user to the mapped AD group.</li>
      <li>A JIT administrator monitors the active session.</li>
      <li>Access expires automatically or can be revoked early.</li>
    </ol>
    <h2>Administrator setup</h2>
    <ul>
      <li>Assign the user a JIT product license.</li>
      <li>Create or confirm a JIT role.</li>
      <li>Enable Allow eligible on the role.</li>
      <li>Enable OTP required when verification is required.</li>
      <li>Map the role to the existing AD group that should be controlled.</li>
      <li>Create an Eligible assignment for the target user.</li>
    </ul>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-admin-role-list.png" alt="Eligible JIT role configured in dark mode"><figcaption>Eligible role with OTP behavior and time limits.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-admin-assignment-list.png" alt="Eligible assignment for Joe in dark mode"><figcaption>Eligible assignment remains inactive until the user activates it.</figcaption></figure>
    <h2>User activation</h2>
    <p>The user signs in with their own account and sees only the access they are allowed to activate.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-joe-activation-only.png" alt="Joe activation-only JIT portal in dark mode with yellow annotation"><figcaption>Joe sees only activation access, not administrator settings or management tabs.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-joe-access-active.png" alt="Joe eligible access after OTP activation in dark mode"><figcaption>After verification, the eligible assignment shows an active access window.</figcaption></figure>
    <ul>
      <li>OTP contact details come from Active Directory.</li>
      <li>The user cannot type a new phone number or email address.</li>
      <li>WhatsApp/mobile delivery uses the configured mobile channel.</li>
      <li>Email can be used only when enabled and available.</li>
      <li>OTP verification starts the privileged session.</li>
      <li>OTP does not create permanent AD group membership.</li>
    </ul>
    <h2>Active session monitoring</h2>
    <p>After OTP verification, JIT Access creates an active JIT session. The administrator can confirm it under JIT Access > Active Sessions.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-admin-active-session.png" alt="Joe active JIT session visible to Jim in dark mode"><figcaption>Jim can monitor Joe's active eligible session and revoke access if needed.</figcaption></figure>
    <h2>What happens in Active Directory</h2>
    <p>When OTP verification succeeds, JIT Access adds the user to the AD group mapped by the JIT role. When the session expires or is revoked, JIT Access removes the user from that AD group. The backend enforces this behavior server-side.</p>
    <h2>No approval workflow</h2>
    <div class="callout warning">Eligible OTP is not an approval workflow in this release. The approval decision happens before activation when an administrator creates the eligible assignment.</div>
    <h2>Operational checks</h2>
    <div class="table-wrap"><table><thead><tr><th>Symptom</th><th>Check</th></tr></thead><tbody>
      <tr><td>Eligible access does not appear</td><td>Confirm product license assignment, Eligible assignment, enabled role, and matching samAccountName.</td></tr>
      <tr><td>OTP cannot be sent</td><td>Confirm AD mobile/mail attributes, enabled channel, SMTP fallback, and messaging service connectivity.</td></tr>
      <tr><td>Activation succeeds but access is not visible</td><td>Confirm mapped AD group DN, backend service identity rights, Active Sessions, and audit events.</td></tr>
    </tbody></table></div>
  `),
  'jit-sessions-revoke': page('Monitoring, Sessions, Extend, and Revoke', 'JIT Access', `
    <p class="lead">Active Sessions is the operations view for live privileged access. Use it to confirm who is elevated, which role is active, when access expires, and whether the session should be extended or revoked.</p>
    ${jitOperationsFlowDiagram()}
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/sessions-joe-active-actions.png" alt="Joe active eligible session with extend and revoke actions highlighted"><figcaption>Jim can monitor Joe's active eligible session and see the available Extend and Revoke actions.</figcaption></figure>
    <h2>What this page solves</h2>
    <p>Temporary access is only useful when operators can see it while it is active. Active Sessions shows current privileged sessions and gives JIT administrators immediate action buttons for allowed sessions.</p>
    <h2>What Active Sessions shows</h2>
    <ul>
      <li>User account.</li>
      <li>JIT role.</li>
      <li>Assignment type.</li>
      <li>Start time, end time, and remaining time.</li>
      <li>Current status.</li>
      <li>Available actions.</li>
    </ul>
    <h2>Extend a session</h2>
    <p>Use Extend only when the business task is still active and the user still needs privileged access.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/sessions-joe-extend-modal.png" alt="Extend Joe session modal with audit reason highlighted"><figcaption>The extension dialog records additional minutes and an audit reason.</figcaption></figure>
    <p>The reason is important. It gives the audit trail enough context to explain why the original access window was not enough.</p>
    <h2>Revoke a session</h2>
    <p>Use Revoke when access should stop before the scheduled or configured end time. Revoking a session ends the active JIT session and removes the user from the AD group mapped by the role.</p>
    <div class="callout warning">Do not revoke a production session unless the user has completed the task, the access was opened by mistake, or there is a security reason to stop it immediately.</div>
    <h2>Operational checks</h2>
    <ul>
      <li>Before extending, confirm the user is still working on the approved task.</li>
      <li>Keep the extension short and enter a clear reason.</li>
      <li>Before revoking, confirm the correct user and role.</li>
      <li>Review the session list again after revoke.</li>
    </ul>
  `),
  'jit-notifications-session-policy': page('Notifications and Session Policy', 'JIT Access', `
    <p class="lead">JIT Settings controls how session events are announced and how long portal sessions can remain active. Review these settings before enabling production roles.</p>
    ${jitSettingsPolicyDiagram()}
    <h2>Notification recipients</h2>
    <p>Notification recipients define which administrators or operational mailboxes receive JIT session event emails.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-notifications-highlight.png" alt="JIT notification recipients and session notification toggle highlighted"><figcaption>Use recipients and global notification enablement to control who receives session event emails.</figcaption></figure>
    <h2>Session event notifications</h2>
    <p>Session event toggles decide which events should generate email notifications.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-notification-events-highlight.png" alt="JIT session event notification toggles highlighted"><figcaption>Manual start, Eligible OTP activation, extension, and revoke can be controlled separately.</figcaption></figure>
    <ul>
      <li>Manual session start.</li>
      <li>Eligible OTP activation.</li>
      <li>Session extension.</li>
      <li>Session revoke.</li>
    </ul>
    <h2>Session policy and SMTP</h2>
    <p>System / Session settings define shared portal session behavior and mail delivery configuration.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-session-policy-highlight.png" alt="JIT session policy SMTP and group override settings highlighted"><figcaption>Session policy, SMTP delivery, and group override settings are managed from JIT Settings.</figcaption></figure>
    <ul>
      <li><b>Max session minutes</b> controls the longest portal session window.</li>
      <li><b>Idle timeout minutes</b> controls how long an inactive portal session remains valid.</li>
      <li><b>Global Email (SMTP)</b> controls shared mail delivery for notifications and email fallback.</li>
      <li><b>Group overrides</b> allow different session limits for specific groups when configured.</li>
    </ul>
    <div class="callout">Recommended practice: start with a small recipient list, verify delivery, and test notifications with a non-production role before relying on production session alerts.</div>
  `),
  'jit-troubleshooting': page('JIT Troubleshooting', 'JIT Access', `
    <p class="lead">Use this page when JIT Portal access, eligible activation, OTP delivery, notifications, or backend enforcement does not behave as expected.</p>
    <p>Start with the visible symptom, then check the related access layer. Most issues are caused by missing product assignment, missing JIT assignment, expired timing, OTP policy limits, or IIS application state.</p>
    <h2>User cannot access JIT Portal</h2>
    <p>If a user signs in but cannot access the JIT Portal, check product access first.</p>
    <ul>
      <li>The user must have a JIT product license assignment.</li>
      <li>The user must have the correct JIT role assignment for administration, such as JitAdmin.</li>
      <li>Domain Admins can access management areas without a separate JIT role assignment.</li>
      <li>Normal users do not receive administrator access unless they are explicitly assigned.</li>
    </ul>
    <div class="callout warning">If the user is not a Domain Admin and does not have a JIT role assignment, access is blocked by design.</div>
    <h2>Eligible activation does not appear</h2>
    <p>If a Joe-style eligible user signs in but does not see the expected activation option, check the assignment.</p>
    <ul>
      <li>The user must have a JIT product license.</li>
      <li>A JIT administrator must create an Eligible assignment for the user.</li>
      <li>The assignment must match the user's samAccountName.</li>
      <li>The role must be enabled and allow Eligible access.</li>
      <li>The assignment must have started and still be valid.</li>
    </ul>
    <p>The user should contact a JIT administrator and ask them to confirm the Eligible assignment, role, timing, and license assignment.</p>
    <h2>OTP send is limited</h2>
    <p>OTP delivery is controlled by JIT Settings.</p>
    <ul>
      <li>OTP policy and resend limits.</li>
      <li>OTP time-to-live.</li>
      <li>Allowed delivery channel.</li>
      <li>AD mobile or mail attributes.</li>
      <li>Messaging service connectivity.</li>
      <li>SMTP fallback if email is enabled.</li>
    </ul>
    <p>If the user reaches an OTP send or retry limit, wait for the configured policy window or ask an administrator to review JIT Settings.</p>
    <h2>Eligible user cannot activate after revoke</h2>
    <p>If an administrator revokes an active eligible session, the eligible user may be blocked from activating the same role again. This is by design. Revoke is treated as an administrative stop action, not just a normal session close.</p>
    <p>Administrators can control this behavior through JIT Settings and session policy.</p>
    <h2>SMTP or notification failures</h2>
    <ul>
      <li>Check SMTP host and port.</li>
      <li>Check firewall rules between the JIT backend server and the SMTP relay.</li>
      <li>Confirm TLS or STARTTLS requirements.</li>
      <li>Confirm SMTP authentication settings and credential reference.</li>
      <li>Check MFA or conditional access on the SMTP account if enabled.</li>
      <li>Confirm notification recipients in JIT Settings.</li>
    </ul>
    <div class="callout">If the relay requires MFA for interactive users, use a supported service account, application password, connector, or relay configuration that the backend can use non-interactively.</div>
    <h2>Backend or service identity permissions</h2>
    <p>By default, the JIT backend runs with the preinstalled gMSA service identity. Customers normally do not need to change this identity.</p>
    <p>Check service identity permissions only when group membership changes fail after the portal and assignment checks are correct.</p>
    <ul>
      <li>Read the target user and mapped group.</li>
      <li>Add the user to the mapped AD group when access starts.</li>
      <li>Remove the user from the mapped AD group when access expires or is revoked.</li>
    </ul>
    <h2>IIS application pool state</h2>
    <p>If the portal does not load, API requests fail, or the JIT UI shows stale or missing data, check IIS.</p>
    <ul>
      <li>Confirm the <code>jit</code> application pool is Started.</li>
      <li>Confirm the <code>JIT-Backend</code> application pool is Started.</li>
      <li>Confirm the JIT frontend site/application is reachable.</li>
      <li>Confirm the JIT backend application is reachable.</li>
      <li>Check Windows Event Viewer for IIS, ASP.NET Core, or authentication errors.</li>
    </ul>
    <h2>Quick escalation checklist</h2>
    <ul>
      <li>Signed-in username.</li>
      <li>User type: Domain Admin, JIT administrator, or eligible user.</li>
      <li>Role ID and assignment ID if available.</li>
      <li>Exact time of failure.</li>
      <li>Error message or correlation ID.</li>
      <li>IIS app pool status for jit and JIT-Backend.</li>
    </ul>
  `),
  'jit-admin': page('JIT admin guide', 'JIT Access', `
    <p class="lead">JIT administrators create roles, map AD groups, assign users, review active sessions, and revoke access when needed.</p>
    <h2>Where to go</h2>
    <p><code>JIT Access > Roles</code>, <code>JIT Access > Assignments</code>, and <code>JIT Access > Active Sessions</code></p>
    <h2>Role management</h2>
    <ol>
      <li>Create a role with a display name and description.</li>
      <li>Map one or more existing Active Directory group DNs.</li>
      <li>Enable allowed access modes: Manual, Scheduled, Eligible.</li>
      <li>Set maximum manual and total session durations.</li>
      <li>Enable OTP where eligible self-service access requires verification.</li>
      <li>Save the role and test with a non-production group before using high-privilege groups.</li>
    </ol>
    <h2>Create a JIT role</h2>
    <div class="table-wrap"><table><thead><tr><th>Field</th><th>What to enter</th><th>Operational note</th></tr></thead><tbody>
      <tr><td>Role ID</td><td>Stable identifier such as <code>domain-admin</code> or <code>tier1-admin</code>.</td><td>Use a value that will not change after assignments exist.</td></tr>
      <tr><td>Display name</td><td>Clear name shown to administrators and eligible users.</td><td>Use the real business role name, not only the AD group name.</td></tr>
      <tr><td>Description</td><td>Reason this access exists.</td><td>Include the system or support function covered by the role.</td></tr>
      <tr><td>AD group DNs</td><td>One or more existing Active Directory distinguished names.</td><td>JIT adds and removes users from these groups during active access.</td></tr>
      <tr><td>Enabled</td><td>On or off.</td><td>Disabling a role prevents new activation and should be followed by active-session review.</td></tr>
    </tbody></table></div>
    <h2>Create an assignment</h2>
    <ol>
      <li>Open <code>JIT Access > Assignments</code>.</li>
      <li>Select the role.</li>
      <li>Enter and validate the target user.</li>
      <li>Select Manual, Scheduled, or Eligible.</li>
      <li>Set duration, schedule, OTP, and notification options according to the selected type.</li>
      <li>Save and confirm the assignment appears in the assignment list.</li>
    </ol>
    <h2>Review access</h2>
    <ul>
      <li>Use <code>Active Sessions</code> to see current active access.</li>
      <li>Use revoke when the access is no longer needed or was started by mistake.</li>
      <li>Use audit records to confirm add/remove behavior and investigate failed enforcement.</li>
    </ul>
    <h2>Session management</h2>
    <ul>
      <li>Admins can view active sessions.</li>
      <li>Manual and eligible sessions can be extended when policy allows it.</li>
      <li>Any active session can be revoked by an authorized JIT admin.</li>
      <li>Revocation removes the user from the mapped AD group immediately.</li>
    </ul>
  `),
  'jit-user': page('JIT user guide', 'JIT Access', `
    <p class="lead">Eligible users can activate their own approved temporary access after OTP verification. Admin settings and operational controls remain hidden.</p>
    <h2>Where to go</h2>
    <p><code>JIT Access > My Eligible Access</code></p>
    <h2>Activation steps</h2>
    <ol>
      <li>Open the JIT portal.</li>
      <li>Review the eligible assignment list for your account.</li>
      <li>Select the role to activate.</li>
      <li>Choose the allowed OTP delivery channel.</li>
      <li>Send OTP.</li>
      <li>Enter the OTP and verify.</li>
      <li>Use the privileged access only during the active session window.</li>
    </ol>
    <h2>What the user sees</h2>
    <ul>
      <li>Only eligible assignments for the signed-in user.</li>
      <li>The role name, allowed duration, and active timer where available.</li>
      <li>OTP send and verify controls when the role requires verification.</li>
      <li>No role management, settings, license controls, or other users' sessions.</li>
    </ul>
    <h2>If activation fails</h2>
    <div class="table-wrap"><table><thead><tr><th>Message or symptom</th><th>What to check</th></tr></thead><tbody>
      <tr><td>No eligible access is listed</td><td>The user does not have an eligible assignment or the role is disabled.</td></tr>
      <tr><td>OTP cannot be sent</td><td>Confirm the AD mobile or mail attribute exists and the channel is enabled.</td></tr>
      <tr><td>OTP expired</td><td>Send a new code. Only the current valid code can activate access.</td></tr>
      <tr><td>Access did not appear in AD</td><td>Ask a JIT admin to check backend health, AD permissions, and audit correlation ID.</td></tr>
    </tbody></table></div>
    <div class="callout">OTP contact details come from Active Directory. Users cannot type their own phone or email in the activation flow.</div>
  `),
  'jit-settings': page('JIT roles and assignments', 'JIT Access', `
    <p class="lead">JIT uses one role model with three assignment types: Manual, Scheduled, and Eligible.</p>
    <h2>Role fields</h2>
    <div class="table-wrap"><table><thead><tr><th>Field</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Role ID</td><td>Unique immutable identifier.</td></tr>
      <tr><td>Display name</td><td>Human-readable role name.</td></tr>
      <tr><td>Description</td><td>Explains why the role exists and what operational access it grants.</td></tr>
      <tr><td>Enabled</td><td>Controls whether new access can be granted from the role.</td></tr>
      <tr><td>AD group DNs</td><td>One or more AD groups affected by the role.</td></tr>
      <tr><td>Allow manual</td><td>Allows admin-initiated immediate access.</td></tr>
      <tr><td>Allow scheduled</td><td>Allows automatic access during time windows.</td></tr>
      <tr><td>Allow eligible</td><td>Allows user self-service activation.</td></tr>
      <tr><td>OTP required</td><td>Requires verification before eligible activation.</td></tr>
      <tr><td>Max manual minutes</td><td>Caps admin-started manual access.</td></tr>
      <tr><td>Max total minutes</td><td>Caps the total active session duration.</td></tr>
      <tr><td>Notify before expiry</td><td>Controls warning notifications before the active session ends.</td></tr>
    </tbody></table></div>
    <h2>Assignment types</h2>
    <ul>
      <li><b>Manual:</b> starts immediately and expires automatically.</li>
      <li><b>Scheduled:</b> grants and removes access based on configured days and time window.</li>
      <li><b>Eligible:</b> waits for the user to activate with OTP before access starts.</li>
    </ul>
    <h2>Manual assignment settings</h2>
    <ul>
      <li><b>Target user:</b> validated AD user receiving temporary access.</li>
      <li><b>Duration minutes:</b> must be within the role limit.</li>
      <li><b>Reason:</b> business reason for the privileged session.</li>
      <li><b>Notify before expiry:</b> optional reminder before removal.</li>
    </ul>
    <h2>Scheduled assignment settings</h2>
    <ul>
      <li><b>Days of week:</b> days when access is allowed.</li>
      <li><b>Start and end time:</b> local daily access window.</li>
      <li><b>Valid from / valid until:</b> date range where the schedule is valid.</li>
      <li><b>Enforcement:</b> backend service adds access inside the window and removes it outside the window.</li>
    </ul>
    <h2>Eligible assignment settings</h2>
    <ul>
      <li><b>OTP required:</b> requires verification before self-service activation.</li>
      <li><b>Max session minutes:</b> longest access window the user can activate.</li>
      <li><b>Delivery channel:</b> email, mobile, or configured fallback based on AD attributes.</li>
      <li><b>User view:</b> the user sees only their own eligible access.</li>
    </ul>
    <h2>Recommended role design</h2>
    <div class="cards">
      <article class="card"><h3>One purpose per role</h3><p>Use a role for a clear access purpose, such as domain administration, server operation, or application administration.</p></article>
      <article class="card"><h3>Short durations</h3><p>Keep maximum durations close to the operational task. Longer access windows increase exposure.</p></article>
      <article class="card"><h3>Test before Tier 0</h3><p>Validate add/remove behavior with a non-production AD group before mapping high-privilege groups.</p></article>
    </div>
  `),
  'jit-security': page('JIT security model', 'JIT Access', `
    <p class="lead">JIT is designed to keep privileged access temporary, auditable, and enforced by the backend.</p>
    <h2>Mandatory guarantees</h2>
    <ul>
      <li>Frontend is never authoritative.</li>
      <li>Unauthorized calls return 403 and are auditable.</li>
      <li>License and session enforcement are mandatory.</li>
      <li>OTP values are hashed at rest and never returned to the client.</li>
      <li>Scheduled access is enforced by a backend hosted service, not Windows Scheduled Tasks.</li>
      <li>Server restart triggers reconciliation so stale access does not remain.</li>
    </ul>
    <h2>Enforcement lifecycle</h2>
    <ol>
      <li>Backend validates license, product session, and JIT authorization.</li>
      <li>Backend validates the role, assignment type, duration, schedule, and OTP requirement.</li>
      <li>For activation, backend adds the user to mapped AD groups.</li>
      <li>Session state records start time, end time, assignment type, actor, and target.</li>
      <li>Background enforcement removes membership on expiration, schedule close, revoke, role disable, or startup reconciliation.</li>
    </ol>
    <h2>Administrative boundaries</h2>
    <ul>
      <li>JIT backend must run under a dedicated service identity.</li>
      <li>JIT permissions must be limited to the AD groups it manages.</li>
      <li>JIT RBAC is internal to the product and is evaluated on each API request.</li>
      <li>AD group membership is used for privilege enforcement, not for granting arbitrary JIT admin UI rights.</li>
    </ul>
    <h2>Audit events</h2>
    <p>JIT audits role management, assignment creation, activation, expiration, revocation, OTP sent, OTP verified, OTP failed, and policy violations.</p>
  `),
  'security-model': page('Shared security model', 'Security', `
    <p class="lead">SmartPT products share the same operating principle: customer-controlled on-prem deployment, AD-sourced identity data, server-side enforcement, and auditability.</p>
    <div class="cards">
      <article class="card"><h3>On-prem control</h3><p>Product portals and backends run in the customer environment.</p></article>
      <article class="card"><h3>AD as source</h3><p>Users, groups, phone, and email attributes come from Active Directory.</p></article>
      <article class="card"><h3>Backend authority</h3><p>UI visibility does not replace backend authorization and policy checks.</p></article>
    </div>
    <h2>Shared controls</h2>
    <ul>
      <li>Windows authentication and product sessions.</li>
      <li>Role-based access and feature gating.</li>
      <li>License enforcement before product use.</li>
      <li>Shared two-factor verification where enforced by product settings.</li>
      <li>Correlation IDs in API responses and audit events.</li>
      <li>No OTP code or generated password in audit logs.</li>
    </ul>
  `),
  'audit': page('Audit and compliance', 'Operations', `
    <p class="lead">Audit records help administrators review sensitive actions, configuration changes, and enforcement results.</p>
    <h2>Audit principles</h2>
    <ul>
      <li>Every sensitive workflow should record actor, target, action, result, timestamp, and correlation ID.</li>
      <li>Generated passwords, OTP codes, SMTP secrets, and private keys are not logged.</li>
      <li>Configuration changes should be recorded with a safe diff summary.</li>
      <li>Audit export can use JSONL or CSV when enabled for administrators.</li>
    </ul>
    <h2>Example audit areas</h2>
    <div class="table-wrap"><table><thead><tr><th>Module</th><th>Actions</th></tr></thead><tbody>
      <tr><td>AD Control</td><td>OTP send, OTP verify, password reset, account unlock, group add/remove, profile update, settings save.</td></tr>
      <tr><td>JIT</td><td>Role created/updated, assignment created/revoked, session activated/extended/revoked, OTP sent/verified/failed.</td></tr>
      <tr><td>System</td><td>Health check, license validation, authentication/session events, settings validation.</td></tr>
    </tbody></table></div>
  `),
  'troubleshooting': page('Troubleshooting', 'Operations', `
    <p class="lead">Use diagnostics, correlation IDs, and audit logs to isolate issues quickly.</p>
    <h2>Common checks</h2>
    <div class="table-wrap"><table><thead><tr><th>Issue</th><th>Check</th></tr></thead><tbody>
      <tr><td>Access not assigned</td><td>Confirm the user has a license assignment and exactly one operator role for the product.</td></tr>
      <tr><td>Session expired</td><td>Sign in again and confirm idle timeout policy.</td></tr>
      <tr><td>OTP not received</td><td>Confirm AD mail/mobile attributes, delivery channel settings, resend limits, and messaging service connectivity.</td></tr>
      <tr><td>Protected user not visible</td><td>This is expected for Tier 0, protected users, and members of protected groups.</td></tr>
      <tr><td>JIT access not removed</td><td>Check backend health, background enforcement service, role mapping, and audit events.</td></tr>
      <tr><td>License inactive</td><td>Check Core license status, certificate validity, server binding, and subscription state.</td></tr>
    </tbody></table></div>
    <h2>Useful evidence</h2>
    <ul>
      <li>Exact URL and product page.</li>
      <li>Signed-in user.</li>
      <li>Correlation ID from the UI or API response.</li>
      <li>Timestamp and target user or role.</li>
      <li>Relevant audit log entries.</li>
    </ul>
  `),
  'release-notes': page('Release notes', 'Operations', `
    <p class="lead">This documentation site was generated from the current JIT Access and AD Control implementation and docs available on ${releaseDate}.</p>
    <h2>Included in this documentation release</h2>
    <ul>
      <li>SmartPT Core installation and licensing guide.</li>
      <li>AD Control admin, operator, settings, and security guides.</li>
      <li>JIT admin, user, role, assignment, and security guides.</li>
      <li>Audit and troubleshooting guidance.</li>
      <li>Activation wizard download package section.</li>
    </ul>
    <h2>Maintainer note</h2>
    <p>Update this site when product settings, routes, role names, license behavior, or installer packaging changes.</p>
  `),
  'privacy': page('Privacy notice', 'Policy', `
    <p class="lead">This documentation site is a static customer guide for SmartPT Core, JIT Access, and AD Control. It does not process customer Active Directory data by itself.</p>
    <h2>What this docs site collects</h2>
    <ul>
      <li>The static documentation site does not include login, account registration, analytics pixels, advertising pixels, or contact forms.</li>
      <li>Web server access logs may be created by the hosting provider for security, diagnostics, abuse prevention, and availability.</li>
      <li>Downloads may appear in standard web server logs, including IP address, timestamp, user agent, requested file, and response status.</li>
    </ul>
    <h2>Product data</h2>
    <p>SmartPT Core, JIT Access, and AD Control run in the customer environment. Product data such as Active Directory users, groups, phone attributes, email attributes, audit logs, OTP state, and configuration files remains under the customer deployment unless a customer chooses to share logs or support evidence with SmartPT.</p>
    <h2>External links</h2>
    <ul>
      <li>The docs may link to <code>smartpt.co.il</code>, GitHub, LinkedIn, WhatsApp, or release downloads.</li>
      <li>External services apply their own privacy and security terms.</li>
    </ul>
    <h2>Rights and requests</h2>
    <p>For privacy, correction, deletion, or access requests related to the documentation site, contact SmartPT through the official website or WhatsApp contact channel listed on <code>smartpt.co.il</code>. Customer product records inside an on-prem deployment should be handled by the customer's administrator.</p>
    <h2>Last updated</h2>
    <p>${releaseDate}</p>
    <div class="callout warning">This notice is operational guidance for the documentation site. Customer legal teams should review privacy language before public production launch.</div>
  `),
  'terms': page('Terms of use', 'Policy', `
    <p class="lead">These documentation terms explain how SmartPT customer guides, installation materials, and product references should be used.</p>
    <h2>Documentation purpose</h2>
    <ul>
      <li>The documentation is provided to help customers install, configure, operate, and troubleshoot SmartPT Core, JIT Access, and AD Control.</li>
      <li>Product behavior can vary by version, configuration, license state, and customer Active Directory design.</li>
      <li>Administrators must validate changes in a safe environment before applying them to production identities or privileged groups.</li>
    </ul>
    <h2>Customer responsibility</h2>
    <ul>
      <li>Customers are responsible for Active Directory permissions, service identities, delegated rights, backup, recovery, and operational approval processes.</li>
      <li>Customers should not map high-privilege AD groups to JIT roles until add/remove behavior has been tested.</li>
      <li>Customers should not grant broad Domain Admin permissions to application pool identities when delegated rights can meet the workflow requirement.</li>
    </ul>
    <h2>Downloads</h2>
    <p>Installer packages and setup files should be downloaded only from SmartPT-approved sources. Verify release version, source, and checksum when release metadata is provided.</p>
    <h2>No legal or security guarantee</h2>
    <p>The documentation supports deployment and operations, but it does not replace customer security review, legal review, change control, or incident response procedures.</p>
    <h2>Last updated</h2>
    <p>${releaseDate}</p>
  `),
  'cookie-policy': page('Cookie policy', 'Policy', `
    <p class="lead">The SmartPT documentation site is currently a static site and does not set analytics, advertising, or marketing cookies.</p>
    <h2>Current cookie use</h2>
    <ul>
      <li>No Google Analytics, Meta Pixel, Hotjar, session replay, advertising pixel, or newsletter tracking script is included in this docs site.</li>
      <li>The docs app stores navigation state in the URL hash only.</li>
      <li>The search function runs in the browser and does not send search terms to a backend service.</li>
    </ul>
    <h2>Essential hosting logs</h2>
    <p>The hosting provider may create server logs for security, diagnostics, and availability. These are not controlled by a browser cookie banner.</p>
    <h2>If tracking is added later</h2>
    <ul>
      <li>Non-essential scripts should be blocked until consent is given.</li>
      <li>Visitors should be able to reject non-essential cookies.</li>
      <li>The policy should list the cookie name, provider, purpose, duration, and category.</li>
    </ul>
    <h2>Last updated</h2>
    <p>${releaseDate}</p>
  `),
  'accessibility': page('Accessibility statement', 'Policy', `
    <p class="lead">SmartPT aims for this documentation site to be usable with keyboard navigation, screen readers, mobile devices, and browser zoom.</p>
    <h2>Target standard</h2>
    <ul>
      <li>WCAG 2.1 AA</li>
      <li>WCAG 2.2 AA where practical</li>
      <li>Israeli Standard 5568 expectations where applicable</li>
    </ul>
    <h2>Implemented support</h2>
    <ul>
      <li>Skip-to-content link.</li>
      <li>Semantic header, navigation, main content, and footer areas.</li>
      <li>Keyboard focus styles.</li>
      <li>Responsive layout for desktop and mobile screens.</li>
      <li>Reduced-motion support through <code>prefers-reduced-motion</code>.</li>
      <li>Search input label for assistive technology.</li>
    </ul>
    <h2>Known limitations</h2>
    <ul>
      <li>Some diagrams are HTML/CSS visual summaries. Equivalent text is provided near the diagrams.</li>
      <li>The current docs site is English-only.</li>
      <li>Final WCAG conformance should be confirmed with manual keyboard, screen reader, zoom, and mobile testing before public launch.</li>
    </ul>
    <h2>Report an accessibility issue</h2>
    <p>Contact SmartPT through the official website or WhatsApp contact channel listed on <code>smartpt.co.il</code>. Include the page, browser, device, assistive technology if used, and a short description of the issue.</p>
    <h2>Last updated</h2>
    <p>${releaseDate}</p>
  `)
};

function page(title, eyebrow, body) {
  return { title, eyebrow, body: `<section class="doc"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${body}</section>` };
}

function architectureDiagram() {
  return `
    <div class="diagram" role="img" aria-label="SmartPT architecture diagram">
      <div class="eyebrow">Architecture</div>
      <div class="diagram-grid">
        <div class="diagram-box"><strong>Users and admins</strong><span>Operators, eligible users, support teams, and administrators.</span></div>
        <div class="diagram-box"><strong>SmartPT Core</strong><span>License, portal access, shared verification, and product entry.</span></div>
        <div class="diagram-box"><strong>AD Control and JIT</strong><span>Tiered support actions and temporary role activation.</span></div>
        <div class="diagram-box"><strong>Active Directory</strong><span>Users, groups, contact attributes, and privilege enforcement.</span></div>
      </div>
    </div>
  `;
}

function adControlDiagram() {
  return `
    <div class="diagram" role="img" aria-label="AD Control workflow diagram">
      <div class="eyebrow">AD Control flow</div>
      <div class="diagram-grid">
        <div class="diagram-box"><strong>Search user</strong><span>Operators only see users allowed by tier and protection rules.</span></div>
        <div class="diagram-box"><strong>Verify when required</strong><span>OTP can be sent to AD-sourced email, mobile, or both.</span></div>
        <div class="diagram-box"><strong>Run action</strong><span>Reset, unlock, profile update, or controlled group operation.</span></div>
        <div class="diagram-box"><strong>Audit</strong><span>Action, target, actor, result, and correlation ID are recorded.</span></div>
      </div>
    </div>
  `;
}

function jitDiagram() {
  return `
    <div class="diagram" role="img" aria-label="JIT Access workflow diagram">
      <div class="eyebrow">JIT flow</div>
      <div class="diagram-grid">
        <div class="diagram-box"><strong>Role</strong><span>Maps to one or more existing AD privileged groups.</span></div>
        <div class="diagram-box"><strong>Assignment</strong><span>Manual, Scheduled, or Eligible self-service.</span></div>
        <div class="diagram-box"><strong>Session</strong><span>Temporary AD membership with max duration and optional OTP.</span></div>
        <div class="diagram-box"><strong>Removal</strong><span>Backend removes access automatically or by admin revoke.</span></div>
      </div>
    </div>
  `;
}

function standingPrivilegeDiagram() {
  return `
    <div class="diagram" role="img" aria-label="Standing privilege compared with JIT Access">
      <div class="eyebrow">Risk model</div>
      <div class="diagram-lane">
        <div class="diagram-box warning"><strong>Standing privilege</strong><span>User remains in a privileged AD group even when no task is active. A compromised account immediately inherits that access.</span></div>
        <div class="diagram-arrow">-></div>
        <div class="diagram-box good"><strong>JIT Access</strong><span>User is added to the mapped AD group only during an approved active session. Expiry or revoke removes membership automatically.</span></div>
      </div>
      <div class="diagram-note">Outcome: privileged access becomes time-bound, visible, and easier to audit.</div>
    </div>
  `;
}

function jitArchitectureDiagram() {
  return `
    <div class="diagram" role="img" aria-label="JIT Access architecture diagram">
      <div class="eyebrow">Architecture</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Users and admins</strong><span>JIT administrators, eligible users, and operators sign in with AD identity.</span></div>
        <div class="diagram-box accent"><strong>JIT Portal</strong><span>Shows roles, assignments, active sessions, activation, and settings based on license and RBAC.</span></div>
        <div class="diagram-box accent"><strong>JIT Backend</strong><span>Validates license, RBAC, assignment timing, OTP, session state, and audit records.</span></div>
        <div class="diagram-box"><strong>Delivery and audit</strong><span>OTP delivery, SMTP notifications, activity records, and correlation IDs support operations.</span></div>
        <div class="diagram-box good"><strong>Active Directory</strong><span>Existing groups remain the privilege boundary. JIT adds and removes temporary membership.</span></div>
      </div>
      <div class="diagram-note">The browser is not the authority for privileged access. Enforcement happens in the backend and Active Directory.</div>
    </div>
  `;
}

function eligibleOtpFlowDiagram() {
  return `
    <div class="diagram" role="img" aria-label="Eligible OTP self-service flow">
      <div class="eyebrow">Eligible OTP flow</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Admin prepares</strong><span>Assign product license, create Eligible assignment, and map the role to an AD group.</span></div>
        <div class="diagram-box"><strong>Joe signs in</strong><span>Joe sees only Activate Access and his own eligible assignment.</span></div>
        <div class="diagram-box accent"><strong>OTP verify</strong><span>OTP is sent through configured channels using AD-sourced contact attributes.</span></div>
        <div class="diagram-box good"><strong>Session active</strong><span>JIT Access starts a time-limited session and adds Joe to the mapped AD group.</span></div>
        <div class="diagram-box"><strong>Monitor/remove</strong><span>Jim monitors the session. Expiry or revoke removes group membership.</span></div>
      </div>
      <div class="diagram-note">Eligible OTP is not an approval workflow. The approval decision happens when the administrator creates the assignment.</div>
    </div>
  `;
}

function jitOperationsFlowDiagram() {
  return `
    <div class="diagram" role="img" aria-label="JIT operations flow for active sessions">
      <div class="eyebrow">Operations flow</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Session starts</strong><span>Manual, Scheduled, or Eligible activation creates a live privileged session.</span></div>
        <div class="diagram-box accent"><strong>Monitor</strong><span>Active Sessions shows user, role, type, start, end, remaining time, and status.</span></div>
        <div class="diagram-box"><strong>Extend</strong><span>Eligible or manual sessions can be extended when the business task still requires access.</span></div>
        <div class="diagram-box warning"><strong>Revoke</strong><span>Administrator stops access early when the task is done, incorrect, or risky.</span></div>
        <div class="diagram-box good"><strong>Audit</strong><span>Extension, revoke, expiration, and notification events are recorded for review.</span></div>
      </div>
    </div>
  `;
}

function jitSettingsPolicyDiagram() {
  return `
    <div class="diagram" role="img" aria-label="JIT settings and policy flow">
      <div class="eyebrow">Settings and policy</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>License</strong><span>Controls who can consume JIT product access.</span></div>
        <div class="diagram-box"><strong>RBAC</strong><span>Controls who can administer roles, assignments, sessions, and settings.</span></div>
        <div class="diagram-box accent"><strong>OTP policy</strong><span>Controls delivery channel, expiry, retry, and activation verification behavior.</span></div>
        <div class="diagram-box accent"><strong>Notifications</strong><span>Recipients and event toggles control manual, eligible, extend, and revoke emails.</span></div>
        <div class="diagram-box good"><strong>Session policy</strong><span>Max session, idle timeout, SMTP, and group overrides shape operational behavior.</span></div>
      </div>
      <div class="diagram-note">Configure settings before mapping high-privilege AD groups such as Domain Admins.</div>
    </div>
  `;
}

const app = document.getElementById('app');
let navOpen = false;

function allPagesForSearch() {
  return Object.entries(pages).map(([id, pageData]) => ({
    id,
    title: pageData.title,
    text: `${pageData.title} ${pageData.eyebrow} ${pageData.body.replace(/<[^>]+>/g, ' ')}`
  }));
}

function render() {
  const id = (location.hash || '#overview').replace('#', '') || 'overview';
  const current = pages[id] ? id : 'overview';
  const pageData = pages[current];
  document.title = `${pageData.title} | SmartPT Docs`;
  updateDocumentMeta(current, pageData);

  app.innerHTML = `
    <div class="layout">
      <header class="topbar">
        <div class="shell topbar-inner">
          <a class="brand" href="#overview" aria-label="SmartPT Docs home">
            <span class="brand-mark" aria-hidden="true">✓</span>
            <span>SmartPT Docs<small>Core, JIT Access, AD Control</small></span>
          </a>
          <div class="top-actions">
            <button class="button secondary mobile-menu" type="button" id="menuButton" aria-expanded="${navOpen}" aria-controls="sidebar">Menu</button>
            <div style="position:relative">
              <label class="sr-only" for="searchInput">Search documentation</label>
              <input id="searchInput" class="search" type="search" placeholder="Search docs" autocomplete="off" />
              <div id="searchResults" class="search-results" hidden></div>
            </div>
            <a class="button primary" href="#downloads">Downloads</a>
          </div>
        </div>
      </header>
      <div class="shell docs-shell">
        <aside class="sidebar ${navOpen ? 'open' : ''}" id="sidebar" aria-label="Documentation navigation">
          ${renderNav(current)}
        </aside>
        <main class="content" id="main" tabindex="-1">
          ${pageData.body}
        </main>
      </div>
      <footer class="footer">
        <div class="shell footer-inner">
          <span>SmartPT documentation. Last updated ${releaseDate}. Product behavior can vary by version and configuration.</span>
          <span class="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#cookie-policy">Cookie Policy</a>
            <a href="#accessibility">Accessibility</a>
          </span>
        </div>
      </footer>
    </div>
  `;

  bindEvents();
  requestAnimationFrame(() => document.getElementById('main')?.focus({ preventScroll: true }));
}

function updateDocumentMeta(current, pageData) {
  const description = pageMeta[current] || pageMeta.overview;
  const canonicalUrl = `https://docs.smartpt.co.il/${current === 'overview' ? '' : `#${current}`}`;
  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[property="og:title"]', 'content', `${pageData.title} | SmartPT Docs`);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', canonicalUrl);
  setMeta('meta[name="twitter:title"]', 'content', `${pageData.title} | SmartPT Docs`);
  setMeta('meta[name="twitter:description"]', 'content', description);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', canonicalUrl);
}

function setMeta(selector, attr, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute(attr, value);
}

function renderNav(current) {
  return navGroups.map(group => `
    <div class="nav-group">
      <div class="nav-title">${group.title}</div>
      ${group.items.map(([id, label]) => `<a class="nav-link ${id === current ? 'active' : ''}" href="#${id}">${label}</a>`).join('')}
    </div>
  `).join('');
}

function bindEvents() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navOpen = false;
    });
  });

  document.querySelectorAll('.footer a').forEach(link => {
    link.addEventListener('click', () => {
      navOpen = false;
    });
  });

  document.getElementById('menuButton')?.addEventListener('click', () => {
    navOpen = !navOpen;
    render();
  });

  const searchInput = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  searchInput?.addEventListener('input', event => {
    const query = event.target.value.trim().toLowerCase();
    if (!query) {
      results.hidden = true;
      results.innerHTML = '';
      return;
    }
    const matches = allPagesForSearch()
      .filter(item => item.text.toLowerCase().includes(query))
      .slice(0, 8);
    results.innerHTML = matches.length
      ? matches.map(item => `<a class="search-result" href="#${item.id}"><strong>${item.title}</strong><span>${item.text.slice(0, 130)}...</span></a>`).join('')
      : '<div class="search-result"><strong>No results</strong><span>Try another product or workflow term.</span></div>';
    results.hidden = false;
  });
}

window.addEventListener('hashchange', render);
window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navOpen) {
    navOpen = false;
    render();
    document.getElementById('menuButton')?.focus();
  }
});
render();
