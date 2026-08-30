---
title: ""
layout: single
permalink: /
author_profile: false
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
#   overlay_image: /images/particles.jpg
excerpt: #"Harmonic-Percussive Disentangled Neural Audio Codec for Bandwidth Extension"
---

This website accompanies our paper "Harmonic-Percussive Disentangled Neural Audio Codec for Bandwidth Extension", submitted to _IEEE Transactions on Audio, Speech and Language Processing_. Here, we present audio examples illustrating the capabilities of HP-codec and HP-codecX, our proposed models.

# Contents
<p markdown="1">[Audio Examples](./audio.md) — Bandwidth extension results obtained with HP-codec, comparing our reconstructions against baseline methods and ground truth.</p>
<p markdown="1">[H-P modulation](./HP_modulation.md) — Audio samples reconstructed with HP-codec while modulating the harmonic-percussive mix, obtained by scaling the tokens of each respective RVQ section in the pre-decoder sum.</p>
<p markdown="1">[Model details](./model_details.md) — Technical details of the HP-codec architecture and the HP-codecX training setup.</p>

# Abstract

<html>
<div style="text-align: justify">
<p>
Bandwidth extension, the task of reconstructing the high-frequency components of an audio signal from its low-passed counterpart, is a long-standing problem in audio processing. In this work, we extend recent advances in neural architectures by framing bandwidth extension as an audio token prediction problem. Specifically, we train a transformer-based language model on the discrete representations produced by a disentangled neural audio codec, where the disentanglement is guided by a Harmonic–Percussive decomposition of the input signals, highlighting spectral structures particularly relevant for bandwidth extension. Our approach introduces a novel codec design that explicitly accounts for the downstream token prediction task, enabling a more effective coupling between codec structure and transformer modeling. This joint design yields high-quality reconstructions of the original signal, as measured by both objective metrics and subjective evaluations. These results highlight the importance of aligning codec disentanglement and representation learning with the generative modeling stage, and demonstrate the potential of global, representation-aware design for advancing bandwidth extension.
</p>

</div>
</html>
