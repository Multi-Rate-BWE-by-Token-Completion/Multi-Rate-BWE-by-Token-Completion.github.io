---
title: "H-P Modulation"
layout: single
permalink: /HP_modulation
author_profile: false
# classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
excerpt: "H-P modulation" # "Here you can find the audio files of the different pieces we worked on." - Example of a subtitle
toc: true
toc_label: "Table of Contents"
toc_icon: "cog"
toc_sticky: true
---
<html>
<style>
.audio-compare {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.4rem 1rem;
  margin: 0.6rem 0 1.2rem;
}
.audio-compare figure {
  margin: 0;
  text-align: center;
}
.audio-compare figcaption {
  font-weight: 700;
  margin-bottom: 0.4rem;
  font-size: 0.9em;
}
.audio-compare audio {
  width: 100%;
  max-width: 200px;
}
.audio-compare-group-label {
  font-weight: 700;
  margin: 1rem 0 0.2rem;
}
</style>
</html>

A direct application of the harmonic-percussive disentanglement learned in the latent representation is the ability to modulate the harmonic-percussive balance of the reconstructed signal. We conduct an experiment in which the outputs of the two RVQs within each frequency branch are linearly weighted prior to decoding: the harmonic scale is varied from 0.0 (no harmonic contribution) to 1.0 (full harmonic contribution) while the percussive scale is held fixed at 1.0, and symmetrically for the percussive scale while the harmonic scale is held fixed. This progressively increases the relative contribution of the harmonic (resp. percussive) component in the final mix. Audio samples illustrating this manipulation are available in this section and demonstrate the fine-grained controllability our codec offers over the harmonic-percussive mix.


## Example 1

<html>
<div class="audio-compare-group-label">16kHz</div>
<div class="audio-compare">
  <figure>
    <figcaption>H = 1.0 | P = 0.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.0/sample_119_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.25</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.25/sample_119_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.5</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.5/sample_119_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.75</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.75/sample_119_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P1.0/sample_119_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.75 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.75_P1.0/sample_119_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.5 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.5_P1.0/sample_119_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.25 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.25_P1.0/sample_119_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.0_P1.0/sample_119_sr16000.wav" type="audio/wav"></audio>
  </figure>
</div>

<div class="audio-compare-group-label">48kHz</div>
<div class="audio-compare">
  <figure>
    <figcaption>H = 1.0 | P = 0.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.0/sample_119_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.25</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.25/sample_119_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.5</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.5/sample_119_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.75</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.75/sample_119_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P1.0/sample_119_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.75 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.75_P1.0/sample_119_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.5 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.5_P1.0/sample_119_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.25 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.25_P1.0/sample_119_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.0_P1.0/sample_119_sr48000.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>
<br/>


## Example 2

<html>
<div class="audio-compare-group-label">16kHz</div>
<div class="audio-compare">
  <figure>
    <figcaption>H = 1.0 | P = 0.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.0/sample_127_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.25</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.25/sample_127_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.5</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.5/sample_127_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.75</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.75/sample_127_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P1.0/sample_127_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.75 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.75_P1.0/sample_127_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.5 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.5_P1.0/sample_127_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.25 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.25_P1.0/sample_127_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.0_P1.0/sample_127_sr16000.wav" type="audio/wav"></audio>
  </figure>
</div>

<div class="audio-compare-group-label">48kHz</div>
<div class="audio-compare">
  <figure>
    <figcaption>H = 1.0 | P = 0.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.0/sample_127_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.25</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.25/sample_127_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.5</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.5/sample_127_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.75</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.75/sample_127_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P1.0/sample_127_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.75 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.75_P1.0/sample_127_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.5 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.5_P1.0/sample_127_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.25 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.25_P1.0/sample_127_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.0_P1.0/sample_127_sr48000.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>
<br/>

## Example 3

<html>
<div class="audio-compare-group-label">16kHz</div>
<div class="audio-compare">
  <figure>
    <figcaption>H = 1.0 | P = 0.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.0/sample_135_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.25</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.25/sample_135_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.5</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.5/sample_135_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.75</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.75/sample_135_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P1.0/sample_135_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.75 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.75_P1.0/sample_135_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.5 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.5_P1.0/sample_135_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.25 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.25_P1.0/sample_135_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.0_P1.0/sample_135_sr16000.wav" type="audio/wav"></audio>
  </figure>
</div>

<div class="audio-compare-group-label">48kHz</div>
<div class="audio-compare">
  <figure>
    <figcaption>H = 1.0 | P = 0.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.0/sample_135_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.25</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.25/sample_135_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.5</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.5/sample_135_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.75</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.75/sample_135_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P1.0/sample_135_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.75 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.75_P1.0/sample_135_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.5 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.5_P1.0/sample_135_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.25 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.25_P1.0/sample_135_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.0_P1.0/sample_135_sr48000.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>
<br/>

## Example 4

<html>
<div class="audio-compare-group-label">16kHz</div>
<div class="audio-compare">
  <figure>
    <figcaption>H = 1.0 | P = 0.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.0/sample_143_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.25</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.25/sample_143_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.5</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.5/sample_143_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.75</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.75/sample_143_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P1.0/sample_143_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.75 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.75_P1.0/sample_143_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.5 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.5_P1.0/sample_143_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.25 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.25_P1.0/sample_143_sr16000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.0_P1.0/sample_143_sr16000.wav" type="audio/wav"></audio>
  </figure>
</div>

<div class="audio-compare-group-label">48kHz</div>
<div class="audio-compare">
  <figure>
    <figcaption>H = 1.0 | P = 0.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.0/sample_143_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.25</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.25/sample_143_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.5</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.5/sample_143_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 0.75</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P0.75/sample_143_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 1.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H1.0_P1.0/sample_143_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.75 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.75_P1.0/sample_143_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.5 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.5_P1.0/sample_143_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.25 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.25_P1.0/sample_143_sr48000.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>H = 0.0 | P = 1.0</figcaption>
    <audio controls=""><source src="/H-P_modulation/H0.0_P1.0/sample_143_sr48000.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>
<br/>

<br/>
