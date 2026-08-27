---
title: "Model Details"
layout: single
permalink: /model_details
author_profile: false
# classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
excerpt: "Technical details of HP-codec and HP-codecX"
toc: true
toc_label: "Table of Contents"
toc_icon: "cog"
toc_sticky: true
---

## HP-codec architecture

HP-codec adopts the DAC architecture (Kumar et al., 2023), adapted following the framework proposed in our prior work (Ginies et al., 2025), with modifications to the number of tokens as well as to the encoder and decoder rates.

### 16 kHz branch

For the 16 kHz branch, we employ encoder rates of {2, 2, 5, 8}, with three codebooks per RVQ. Given a 1 s audio segment sampled at 16 kHz and quantized on 16 bits (i.e., 256,000 bits), the encoder produces 100 tokens for each of the 3 Harmonic and 3 Percussive codebooks composing the 16 kHz branch. Since each codebook contains 1024 entries, every token is encoded on 10 bits, yielding a total of 6,000 bits (i.e., a bitrate of 6 kbit/s) and a compression ratio of 42.6.

### 48 kHz branch

For the 48 kHz branch, encoder rates of {2, 5, 6, 8} are adopted to preserve proportionality with the sampling rate. For a 1 s audio segment sampled at 48 kHz and quantized on 16 bits (768,000 bits), the encoder produces 100 tokens for each of the 3 Harmonic and 3 Percussive codebooks at both the 16 kHz and 48 kHz branches. With all codebooks encoded on 10 bits, this results in a bitrate of 12 kbit/s and a compression ratio of 64.

### Training

The model is trained on 0.38-second audio segments. We use a batch size of 32 for the first training branch, and a batch size of 16 for the second branch as well as for the subsequent fine-tuning stage. Training is performed on a single NVIDIA L40S GPU (48 GB memory) for a total of approximately 20 hours, with the two initial training stages each running for 35,000 iterations, followed by 25,000 iterations of fine-tuning.

## HP-codecX

The transformer modules of HP-codecX follow the design of Wang et al. (2023). Each module employs five input embeddings mapping HP-codec tokens to 1024-dimensional representations, a 6-layer transformer decoder with 8 attention heads and hidden dimension 4096, followed by three dense layers that output the following tokens' prediction. Training is conducted on 2.5-second audio segments with a batch size of 32, on a single NVIDIA L40S GPU (48 GB memory), for 45,000 iterations over a total of 27 hours.

## References

- Kumar, R. et al. (2023). *High-Fidelity Audio Compression with Improved RVQGAN.*
- Ginies, B. et al. (2025). *Soft disentanglement in frequency bands for neural audio codecs.*
- Wang, C. et al. (2023). *Neural Codec Language Models are Zero-Shot Text to Speech Synthesizers.*
