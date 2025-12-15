# 80-2 Proton acquisition parameters

## Typical issues to avoid
*   **Too short acquisition time (AQ)** leads to truncated multiplets and strong sinc wiggles.
*   **Too short repetition delay (D1/RD)** causes under‑relaxation and wrong integrals, especially for slowly relaxing or aromatic protons.

## Recommended ranges

### Acquisition time
*   **Minimum:** AQ ≥ 4 s
*   **Preferably:** AQ = 6–8 s for detailed line‑shape analysis

### Repetition delay
*   **For routine, non‑quantitative work:** D1/RD ≈ 2–4 s
*   **For quantitative integrals:** D1/RD ≥ 10 s, or at least several T1 of the slowest relaxing nuclei

### Receiver gain
*   Adjust RG to avoid clipping of intense signals, and check that the baseline is flat and free of overload distortions.
