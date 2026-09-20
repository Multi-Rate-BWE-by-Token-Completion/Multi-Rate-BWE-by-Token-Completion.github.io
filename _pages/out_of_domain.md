---
title: "Out-of-domain Examples — OrchideaSOL"
layout: single
permalink: /out_of_domain
author_profile: false
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
excerpt: "The same predictor on solo orchestral instruments, a corpus it never saw in training"
toc: true
toc_label: "Excerpts"
toc_icon: "music"
toc_sticky: true
---

{% include bwe-styles.html %}

These excerpts come from <a href="https://forum.ircam.fr/projects/detail/orchideasol/" target="_blank" rel="noopener noreferrer">OrchideaSOL</a>, a library of solo orchestral instrument recordings. Neither the codecs nor the predictor saw this corpus during training, and it is far from the mixed, mastered music they were trained on: single instruments, extended techniques, long quiet decays.

The models are unchanged — the same checkpoints as on the [MUSDB18 page](./audio.md), with no fine-tuning. Pick an **input sampling rate** and a **codec**; every player and spectrogram on the page follows.

<div class="bwe-legend" markdown="0">
<dl>
  <dt>Band-limited input</dt>
  <dd>The input's low band with nothing above the cutoff — the part the decoder already holds exactly. Every system below keeps this band unchanged, so what you hear between them is entirely the band each one recovered.</dd>
  <dt>A2SB and UniverSR</dt>
  <dd>Two recent published bandwidth-extension systems, run on the same excerpts. Their output is spliced onto the same low band as ours, so only the recovered band differs.</dd>
  <dt>Ours</dt>
  <dd>The band-limited codes completed over residual-quantiser depth, decoded, and spliced onto the low band. No extra bits are sent.</dd>
  <dt>Codec ceiling</dt>
  <dd>The same excerpt encoded from the full-band original and decoded again. It is what the codec can reproduce at this bitrate, so it bounds what any predictor inside it can reach. On this corpus the ceiling itself is lower than on music, which limits every system built inside the codec.</dd>
  <dt>Reference</dt>
  <dd>The original 48 kHz excerpt, untouched.</dd>
</dl>
</div>

Spectrograms run from 0 to 24 kHz; the vertical axis is marked in kHz. Excerpt names follow the OrchideaSOL convention, instrument–technique–pitch–dynamic.

{% include bwe-examples.html corpus="osol" %}

---

In-domain results on music are on the [MUSDB18 page](./audio.md). Code and trained models: <a href="https://github.com/Multi-Rate-BWE-by-Token-Completion/Multi-rate-BWE" target="_blank" rel="noopener noreferrer">github.com/Multi-Rate-BWE-by-Token-Completion/Multi-rate-BWE</a>.
