# SPEAR — IROS 2026 Project Page (Nerfies/SERL/OpenVLA style)

This is a static English academic project page built from the actual SPEAR LaTeX source, accepted-manuscript PDF, and two author-provided videos. No generated figures, invented diagrams, or remote CSS/JS dependencies are used.

## Three top resource buttons

- **Paper:** opens `paper/SPEAR_IROS2026.pdf` directly.
- **arXiv:** temporarily opens an arXiv **title search**, not an unverified direct preprint URL. Once the public arXiv ID is known, edit `index.html` and replace the long `https://arxiv.org/search/?...` URL in the arXiv button with e.g. `https://arxiv.org/abs/2610.XXXXX` (USE THE REAL ID ONLY).
- **Intro Video:** opens the author-supplied `IROS2026_1793.mp4` in a modal. If a browser doesn't support dialogs/JS, the button opens the original MP4 file directly.

The portrait-format `video_SPEAR_final.mp4` is embedded with `controls` in the Real-World Robot Experiments section at a maximum CSS width of 315 px on desktop (285 px on small screens). Videos are preloaded at metadata level; they are not automatically downloaded in full or autoplayed on page load.

## Source provenance

- `assets/figures/overview.png` — `figure/overview_CVPR_4.0.pdf`
- `assets/figures/learning-curves.png` — `figure/metaworld_learning_curves_2026-07-14-17-02-38.pdf`
- `assets/figures/vlm-diagnostics.png` — `figure/gap_fit.pdf`
- `assets/figures/real-robot-settings.png` — `figure/real_exp.pdf`
- `assets/posters/*.jpg` — frames extracted directly from the submitted MP4 videos; **not AI-generated**.
- `paper/SPEAR_IROS2026.pdf` — previously compiled paper from the submitted source.

The website design follows the minimal layout conventions seen on Nerfies, HIL-SERL and SERL, but its HTML/CSS is written independently (not copied from their source templates).

## Local preview

Double-click `index.html` to open it, or preferably run a local HTTP server in this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`. Local video playback works best over HTTP rather than file://.

## Publish on GitHub Pages

1. Create a PUBLIC repository, e.g. `spear-project`.
2. Upload the **contents of this folder** to the repository root (not the parent folder itself).
3. GitHub repository → Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save.
4. Wait for the Pages deployment, then your address will typically be `https://YOUR-USERNAME.github.io/spear-project/`.

No GitHub username, password, token, or OAuth credentials are needed to preview this website. The final public URL needs to be configured by you using a GitHub repository or a connected, authorized publishing workflow.

## After arXiv publication

Replace the arXiv title-search URL with the direct paper URL. Consider updating the BibTeX and IEEE copyright notice if required by the eventual publication/license arrangement.

## Browser support

Desktop and mobile tested using Chromium. The intro modal closes by the X button, Esc key, or clicking outside the video, and stops playback on close.
