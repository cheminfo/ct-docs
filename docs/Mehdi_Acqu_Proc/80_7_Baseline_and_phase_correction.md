# 3. Baseline and phase correction

Given the often large dynamic range of NMR spectra:

*   Perform careful **zero‑ and first‑order phase corrections**.
*   Use high‑quality **baseline correction**:
    *   Prefer higher‑order or spline‑based methods tuned to avoid overfitting peaks.
    *   Inspect regions near large peaks where baseline distortions are common.

**Check that:**
*   No artificial ripples or curvature remain around strong resonances.
*   The baseline is flat in empty regions since CT will interpret any residual curvature as real intensity.
