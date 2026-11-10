# GOO — Amit Porat & Yuval Refael

Hebrew RTL studio landing page. Next.js App Router, React, TypeScript, Tailwind CSS. Original CSS/SVG illustrations, locally hosted Heebo fonts, static export, social sharing image and favicon. No source decks, client data or personal contact details are embedded.

## Run

```sh
npm ci
npm run dev
npm run build
```

Static output: `out/`. Serve it with `python3 -m http.server 4173 --directory out`.

## Brief and decisions

GOO connects product engineering, AI agents, automation and business development. Primary voice is Hebrew, first person plural. Four detailed project cards, a research area, capabilities, working process and contact section. English toggle was optional and is not included. Contact controls are intentionally disabled until the approved phone/email are supplied. No backend, contact submission or analytics. Preview is marked `noindex`; change robots metadata when approving a public launch.

Previous local work mentions GOO in an earlier NetoFun proposal and GO in later variants. The current explicit brief takes precedence: brand is GOO. No prior GOO codebase was identified in accessible local sources. GitHub and Vercel CLI authentication were absent, so remote history could not be confirmed. Local branch: `landing-v2`; intended private repository: `amitpo23/goo-site`.

## Sources consulted (local, never bundled)

- User brief: Amit's approximately 20 years of travel-tech work.
- `/workspace/yuval-meeting-*.txt`, `/workspace/yuval-pack-24.9/{meeting-pack.md,one-pager-agenda.md,DESIGN-NOTES.txt}`: complementary roles, product context, terminology.
- `/workspace/cfo-85/README.md`, `/workspace/cfo-85/docs/REZEF_MOSHKO_OPERATING_PLAN.md`, `MOSHKO_IDENTITY_AND_WHATSAPP_SPRINT_2026-08-24.md`: stack, approval boundaries, incomplete WhatsApp activation.
- `/workspace/bdo-proposal/proposal-structure.md`: current product maturity and workflow positioning.
- `/workspace/netofan-proposal/proposal-structure.md`, `/workspace/slides/netofan-proposal/netofan-proposal.pptx`, earlier proposal research: Medici positioning and prior GOO/GO spelling.
- `/workspace/marketing-os/{00_README.md,05_tools_and_team.md,07_team_operating_plan.md}`, `/workspace/pizza-cohen`: marketing assets and planning, with no launch or performance claims.
- `/workspace/t_a2ecc030/src/docs/OFIR_SERVER_RESEARCH_SANDBOX.md`: isolated research, no trading returns or numerical claims.
- `/workspace/slides/rezef-bdo-capabilities-FaCbTk/deck-clean.html`, `/workspace/bdo-demo-screenshots` (inventory), `/workspace/cloud-agent-artifacts` (inventory): supporting concept research.
- `https://handinhandai.com/`: HTML, styles, desktop/mobile browser analysis for presentation principles only. Its branding, text and images are not reused.

Shared concept: understand a business workflow, connect existing systems, build a focused product, keep people involved in decisions, and validate before expanding. Proposals are not presented as completed client work.

## Deploy (preview only)

```sh
npx vercel deploy --yes --name goo-site
```

Do not use `--prod`. Deployment was attempted and failed because credentials were unavailable. No login was completed. To publish after credentials are provided, create/link the Vercel project as `goo-site`. `VERCEL_URL` automatically supplies metadata's base URL; set `SITE_URL` explicitly for other hosts. For a prebuilt export, set `SITE_URL` before building.

GitHub repository creation and push require authenticated access. The requested private repository could not be created in this session. Source is committed locally; the configured remote is the intended destination, not confirmation that it exists.

See [REPORT.md](REPORT.md) for review items and [screenshots](shots/).
