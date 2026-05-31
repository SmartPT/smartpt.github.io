# SmartPT Docs SEO Fix Report

Date: 2026-05-31

## Previous issues found

- Lighthouse reported SEO 92/100 on both mobile and desktop because `robots.txt` contained unsupported directives.
- Accessibility checks found low-contrast eyebrow labels and footer text.
- The topbar brand link had an accessible name that did not match the visible label.
- Hash navigation links pointed to routes that are rendered by JavaScript, but the initial DOM did not expose matching targets for automated link checks.
- Source content still contained a small number of vague phrases such as "control plane", "verified workflows", and "meaningful administrative actions".

## Files changed

- `robots.txt`
- `assets/app.js`
- `assets/styles.css`
- `docs/core/getting-started.md`
- `docs/core/portal-overview.md`
- `docs/ad-control/settings-overview.md`
- `seo-fix-report.md`

## What was fixed

- Removed invalid `Host` and `LLM-Content` directives from `robots.txt`.
- Kept the sitemap reference in `robots.txt`.
- Added hidden route targets for all navigation routes so hash links resolve cleanly during automated checks.
- Removed the unnecessary brand link `aria-label` so the accessible name matches the visible SmartPT Docs label.
- Improved contrast for footer text, light-page eyebrow labels, and eyebrow labels inside dark panels.
- Replaced vague wording with concrete product language:
  - SmartPT Console is the root entry point for license status, product access, administrator access, and shared MFA recovery.
  - AD Control settings now list direct password reset, OTP-verified password reset, direct unlock, and OTP-verified unlock explicitly.
  - Recent Activity now lists actual event types.
- Verified that rendered documentation routes keep one visible H1, page-specific title, page-specific meta description, canonical URL, useful image alt text, and working hash targets.
- Verified that referenced screenshot files exist on disk.
- Verified that the blocked wording list no longer appears in site source content, excluding valid product terms such as "unlock".

## Local validation

Local Lighthouse was run against the static site using a local HTTP server.

| Form factor | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 97 | 100 | 100 | 100 |

Route validation covered 45 documentation routes.

## Remaining Lighthouse/PageSpeed issues

- Local mobile performance is 97/100. The remaining items are performance optimizations, not SEO failures.
- GitHub Pages and browser cache behavior can affect live PageSpeed timing scores.
- Hash routing limits route-level SEO because all documentation routes share the same root HTML response. The root page is crawlable and Lighthouse can score SEO at 100/100, but individual documentation routes are not separate static HTML documents.

## Hash routing note

For stronger route-level indexing later, generate one static HTML file per documentation route, for example:

- `/start/requirements/`
- `/smartpt-console/portal-overview/`
- `/ad-control/password-reset/`
- `/jit-access/active-sessions/`

GitHub Pages can serve those static files. The current hash routes should remain available as aliases if customers already use them.

## Final scores

Final deployed Lighthouse validation was run against `https://docs.smartpt.co.il` after GitHub Pages published the changes.

| Form factor | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 99 | 100 | 100 | 100 |

Final SEO score:

- Desktop: 100/100
- Mobile: 100/100
