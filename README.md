# FreeAPI YouTube Videos Listing UI

Hosted link-https://free-api-you-tube-videos-listing-ui-eight.vercel.app/

A minimal static UI that lists YouTube videos from FreeAPI. Includes a simple client-side script and styles for demonstration and local testing.

## Contents

- `index.html` — main HTML file
- `script.js` — client-side JavaScript to fetch and render videos
- `style.css` — styles for the UI
- `api.js` — small helper or local API shim (if used)
- `vercel.json` — Vercel configuration (for deployment)

## Quick start

1. Install a static server (or use any web server).

```bash
npx serve
```

2. Open `http://localhost:5000` (or the port `serve` prints).

## Development

- Edit `index.html`, `script.js`, and `style.css` to change the UI or behavior.
- If `api.js` is used as a local shim, update it to match the data shape expected by `script.js`.

## Deployment

This project includes a basic `vercel.json` for deployment to Vercel. Deploy by running `vercel` from the project root and following prompts, or connect the repository in the Vercel dashboard.

## Contributing

Pull requests and issues are welcome. Keep changes small and focused.

## License

This project is provided as-is. Add a license file if you intend to share or publish it publicly.
