# tianmind-landing

Public-safe bilingual landing page template for independent developers, small studios, and AI-assisted service builders.

独立开发者 / 小型工作室 / AI-assisted service builder 的中英双语品牌着陆页模板：零构建、零依赖、可 fork、可部署、可改成自己的公开服务页。

## What It Is

This repo is a static landing page template. It helps an outside reader understand:

- Who you are.
- What you build.
- Which proof links, demos, or public projects they can inspect.
- How to start with a safe first brief.
- What private material should not be shared publicly.

It is designed for public trust, not for exposing private commercial workflows.

## Features

- Blueprint-inspired visual style with dark hero, bright accent lines, and structured service cards.
- Chinese and English copy with a lightweight language switch.
- Pure HTML, CSS, and JavaScript.
- Responsive layout from mobile to desktop.
- Public proof sections for projects, demos, templates, and verification links.
- FAQ and contact sections that can stay public-safe.
- No build step and no runtime dependency.

## Page Sections

1. Hero: positioning, audience, and primary action.
2. Manifesto: operating principles and public promise.
3. Services: service categories or capability cards.
4. Tech Stack: tools and delivery stack.
5. Featured Work: public projects, demos, and proof links.
6. Trust Path: safe first brief, review flow, and public boundary.
7. FAQ: common buyer or collaborator questions.
8. Contact: public contact paths only.

## Quick Start

```bash
git clone https://github.com/tianmind-studio/tianmind-landing.git
cd tianmind-landing
```

Edit:

- `index.html` for structure and default Chinese copy.
- `assets/styles.css` for colors, spacing, and visual system.
- `assets/app.js` for language switch and English copy.

Then publish with GitHub Pages, Cloudflare Pages, or any static host.

## Customization

### Brand Color

Edit CSS variables near the top of `assets/styles.css`.

```css
:root {
  --accent: #4facfe;
  --accent-bright: #00f2fe;
  --accent-warm: #ffd89b;
  --bg: #050b18;
}
```

### Copy

- Keep the first screen concrete: who it is for, what you build, and what proof exists.
- Link to public demos, case studies, repositories, screenshots, or verification commands.
- Keep private examples out of public screenshots and public copy.
- Keep Chinese and English content aligned when editing.

### Proof Links

Useful public links for TianMind Studio-style pages:

- Public studio: <https://junius.tianmind.com/studio.html>
- Service one-pagers: <https://junius.tianmind.com/service-one-pagers.html>
- Demo proof kit: <https://junius.tianmind.com/demo-proof.html>
- Repo proof pack: <https://junius.tianmind.com/repo-proof.html>
- GitHub trust queue: <https://junius.tianmind.com/github-trust-queue.html>
- Trust center: <https://junius.tianmind.com/trust.html>

## File Structure

```text
tianmind-landing/
├── index.html
├── assets/
│   ├── styles.css
│   └── app.js
├── README.md
└── LICENSE
```

## Public-Safe Boundary

Do not publish:

- No customer files.
- No raw private conversations.
- No credentials, tokens, cookies, SSH keys, or account access.
- No contracts.
- No sensitive commercial records.
- No private backend access.
- No database dumps.
- No full private vault content.
- No Hermes or safe-index configuration.
- No unconfirmed claims.

Use public links, redacted samples, sanitized screenshots, sample outputs, and verification commands instead.

## Contact

Designed and maintained by TianMind Studio / 天智工坊.

- Studio surface: <https://junius.tianmind.com/studio.html>
- GitHub profile: <https://github.com/tianmind-studio>
- Public contact: `wx@tianmind.com`

## License

MIT © TianMind Studio / 天智工坊
