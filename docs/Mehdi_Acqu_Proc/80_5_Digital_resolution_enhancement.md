# 80-5 Digital resolution enhancement

To reach the recommended **≥10 points per FWHH**:

### Extend the FID:
*   **Zero filling** to at least 2× the acquired points (e.g., 64k → 128k).
*   **Even better:** use **forward linear prediction** (when your software supports it) to realistically extend the FID without introducing excessive artifacts.

### Aim after processing for:
*   Digital resolution **≤0.2 Hz/point**.
*   Preferably **≈0.1 Hz/point** when targeting high‑quality line‑shape fits.
