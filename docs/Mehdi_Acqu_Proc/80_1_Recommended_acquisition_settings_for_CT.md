# 80-1 Recommended acquisition settings for CT

Cosmic Truth (CT) relies on high‑quality, artifact‑free NMR data. Poor acquisition parameters cannot be fully fixed in processing and will directly degrade CT’s fits and line‑shape reliability. When possible, optimize acquisition before thinking about post‑processing.

*   Use sufficiently long acquisition times to avoid truncation artifacts.
*   Use repetition delays compatible with your relaxation times if you need quantitative integrals.
*   Ensure reasonable receiver gain (RG) so that strong peaks do not distort the baseline.
*   Aim for narrow, well‑shaped lines (good shimming) and enough points in the FID to represent them digitally.
