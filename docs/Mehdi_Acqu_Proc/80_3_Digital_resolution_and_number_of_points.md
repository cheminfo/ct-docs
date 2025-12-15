# 80-3 Digital resolution and number of points

CT exploits the native spectral resolution and also requires adequate digital resolution. A good rule of thumb:

*   **At least 10 spectral points per full linewidth at half height (FWHH).**

This implies:
*   For a line width of 1 Hz, the digital resolution should be ≤ 0.1 Hz/point.
*   **For example:** On a 700 MHz spectrometer with decent shimming, typical average line widths can be below 2 Hz, so the digital resolution should be well below 0.2 Hz/point, ideally around 0.1 Hz/point.

### A practical setup is:
*   Acquire at least **64k points**.
*   Use linear prediction or zero filling to reach **128k points** in processing.

When possible, choose the number of acquired points so that you already have close to the desired digital resolution, and then refine it with linear prediction or zero filling.
