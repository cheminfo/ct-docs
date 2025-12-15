# 80_8 Handling solvent peaks, impurities, and artifacts

Strong solvent peaks (e.g., HDO) and other broad artifacts can distract CT because of their large intensity and non‑ideal line shapes. There are two general strategies:

### For experienced users
You may remove or suppress such peaks during post‑processing **only if you know exactly what you are doing** and can guarantee not to remove intensity belonging to the analyte.
*   Typical approaches include careful peak deletion in a very narrow region, or using targeted solvent suppression tools in processing software.

### For general users and especially beginners
It is usually safer to **let CT fit solvent signals, impurities, and artifacts** together with the analyte resonances whenever possible.
*   Fitting problematic peaks rather than modifying the spectrum avoids the risk of accidentally cutting away true analyte intensity, which can degrade fit quality and line shape metrics (e.g., LRMS values).
