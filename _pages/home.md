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
excerpt: #"Multi-Rate Bandwidth Extension by Token Completion in Neural Audio Codecs"
---

This website accompanies our paper "Multi-Rate Bandwidth Extension by Token Completion in Neural Audio Codecs", submitted to _IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP) 2027_. Here, we present audio examples illustrating what a single predictor recovers at each input rate, on both of the neural audio codecs we build it on.

# Contents
<p markdown="1">[Audio Examples](./audio.md) — Bandwidth extension results on MUSDB18 at 8, 16, 24 and 32 kHz input, comparing our reconstructions against A2SB, UniverSR, the band-limited input and ground truth.</p>
<p markdown="1">[Out-of-domain Examples](./out_of_domain.md) — The same predictor applied to OrchideaSOL solo instruments, a corpus absent from our training data.</p>

# Abstract

<html>
<div style="text-align: justify">
<p>
Bandwidth extension reconstructs the high-frequency content missing from a band-limited signal. We address the case where that signal is carried by a neural audio codec: the decoder receives band-limited codes, already holds the low band exactly, and the missing content is confined to the band above the input's cutoff frequency. This turns bandwidth extension into token completion. Inside a frozen codec, a single transformer, autoregressive over residual-quantiser depth, completes band-limited codes into full-band ones. From these we decode only the band above the cutoff and splice it onto the low band the decoder already holds, and since the predictor sits at the decoder the whole operation costs no bits. Because the codec ingests a fixed 48 kHz representation whatever the input bandwidth, the predictor is the only rate-dependent part of the system, and one model covers 8, 16, 24 and 32 kHz inputs without any explicit conditioning of the model on the bandwidth, the latter being recoverable from the codes themselves. Applied unchanged to a waveform-domain codec (DAC) and a spectral-domain one (SpectroStream), the method exceeds two recent published systems on MUSDB18 at every rate from a 12 kbit/s token stream, and a MUSHRA test at the hardest rate places it on par with the stronger of the two.
</p>

</div>
</html>

