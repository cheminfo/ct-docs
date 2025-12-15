# 80_6 Apodization / resolution enhancement

CT benefits from line shapes with a strong Gaussian contribution and minimal truncation distortions.

*   Apply a **Gaussian–Lorentzian resolution enhancement** rather than pure exponential broadening or aggressive truncation.
*   **Optimize the Gaussian and Lorentzian parameters empirically:**
    *   Increase Gaussian contribution to smooth truncation wiggles.
    *   Avoid parameter choices that introduce negative down‑wiggles or amplify noise excessively.

The exact parameter values depend on:
*   The original line widths,
*   The S/N ratio,
*   The software implementation of the window function.

**As a mild Bruker‑style example for 1H:**
Instead of a simple exponential (e.g., `EM 0.3 Hz`), a mixed Lorentz–Gauss with approximate values such as `LB -0.5 Hz`, `GB 0.05` can significantly improve appearance and line fitting.

> **Note:** Always verify that the resulting spectrum has smooth lines and no obvious truncation artifacts.
