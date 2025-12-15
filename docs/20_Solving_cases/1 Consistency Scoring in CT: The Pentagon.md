---
title: 1 Consistency Scoring in CT: The Pentagon
description: General concepts
slug: /
---

Before getting into solving cases, we need to understand how CT scores the status of a case. 
CT determines five Consistency Scores, which are grouped into 2+2+1 and shown as pentagon. 

The consistency scores fall into three categories:
*Similarity Scores* (bottom two):
Shift and coupling similarities.
These scores indicate how closely the delta and J match with the CT prediction (using the CT knowledge base) or a prior result that the user defined as the starting values. Similarity indicators should be maximum when the case matches predicted values or prior/known results
CT Help: The shift similarity describes how well the experimental and expected chemical shifts are consistent.
CT Help: The coupling similarity describes how well the experimental and expected coupling constants are consistent.
*Intensity and RMS Scores* (middle two):
These scores measure the congruence of the intensities of the resonances and the deviations between the calculated and experimental data (residual) in the form of an RMS value. 
CT Help: The RMS score describes how well the calculated (red) spectrum resembles the experimental (blue) spectrum. The better the fit, the low the RMS, the higher the RMS score.
CT Help: The intensity score describes how much of the experimental intensity is explained by the calculated spectrum. This intensity score is a kind of measure for the NMR purity of the sample.
*Overall Match*:
Score compounded from the other four scores

:::tip How to get help

Tooltips appear when you hover over different tools, providing quick information and listing available keyboard shortcuts. Most shortcuts are single-letter keys — no need to press <kbd>CTRL</kbd>, <kbd>shift</kbd>, or other modifier keys. Tooltips often include direct links to more detailed documentation.

:::
