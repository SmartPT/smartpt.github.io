# SmartPT Documentation Site

Static customer documentation website for SmartPT Core, JIT Access, and AD Control.

## Local Use

Open `index.html` in a browser or serve the folder with any static web server.

## Production

Point `docs.smartpt.co.il` to the static host that serves this folder.

The `CNAME` file is ready for GitHub Pages. GitHub Pages does not apply the `_headers` file, so use Cloudflare, Netlify, or another static host/proxy if production security headers must be set at the edge.

## Downloads

The activation wizard package is placed in `downloads/` when available. Keep binary releases versioned and replace them intentionally.

Large release packages should be published through GitHub Releases or an approved download store instead of committing very large binaries directly to the repository.
