---
title: "Audio Examples — MUSDB18"
layout: single
permalink: /audio
author_profile: false
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
excerpt: "Bandwidth extension on the MUSDB18 test set, at 8, 16, 24 and 32 kHz input"
toc: true
toc_label: "Excerpts"
toc_icon: "music"
toc_sticky: true
---

{% include bwe-styles.html %}

These excerpts come from the test set of <a href="https://sigsep.github.io/datasets/musdb.html" target="_blank" rel="noopener noreferrer">MUSDB18</a>, the corpus the predictor was evaluated on. Each one is 2.5 seconds of full-band music, band-limited to a given input sampling rate, encoded, and then completed inside the codec.

Pick an **input sampling rate** and a **codec**: every player and spectrogram on the page follows, so you can move across rates while staying on the same excerpt. A single predictor covers all four rates — nothing about the model changes between them.

<div class="bwe-legend" markdown="0">
<dl>
  <dt>Band-limited input</dt>
  <dd>The input's low band with nothing above the cutoff — the part the decoder already holds exactly. Every system below keeps this band unchanged, so what you hear between them is entirely the band each one recovered.</dd>
  <dt>A2SB and UniverSR</dt>
  <dd>Two recent published bandwidth-extension systems, run on the same excerpts. Their output is spliced onto the same low band as ours, so only the recovered band differs.</dd>
  <dt>Ours</dt>
  <dd>The band-limited codes completed over residual-quantiser depth, decoded, and spliced onto the low band. No extra bits are sent.</dd>
  <dt>Codec ceiling</dt>
  <dd>The same excerpt encoded from the full-band original and decoded again. It is what the codec can reproduce at this bitrate, so it bounds what any predictor inside it can reach.</dd>
  <dt>Reference</dt>
  <dd>The original 48 kHz excerpt, untouched.</dd>
</dl>
</div>

Spectrograms run from 0 to 24 kHz; the vertical axis is marked in kHz.

{% include bwe-examples.html corpus="musdb" %}

---

Out-of-domain results on solo orchestral instruments are on the [OrchideaSOL page](./out_of_domain.md). Code and trained models: <a href="https://github.com/Multi-Rate-BWE-by-Token-Completion/Multi-rate-BWE" target="_blank" rel="noopener noreferrer">github.com/Multi-Rate-BWE-by-Token-Completion/Multi-rate-BWE</a>.
