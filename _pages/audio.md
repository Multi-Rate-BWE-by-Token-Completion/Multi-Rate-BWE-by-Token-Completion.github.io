---
title: "Audio Examples"
layout: single
permalink: /audio
author_profile: false
# classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
excerpt: "Experimental results" # "Here you can find the audio files of the different pieces we worked on." - Example of a subtitle
toc: true
toc_label: "Table of Contents"
toc_icon: "cog"
toc_sticky: true
---
<html>
<style>
.audio-compare {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.4rem 1rem;
  margin: 1.2rem 0 1.6rem;
}
.audio-compare figure {
  margin: 0;
  text-align: center;
}
.audio-compare figcaption {
  font-weight: 700;
  margin-bottom: 0.4rem;
}
.audio-compare audio {
  width: 100%;
  max-width: 220px;
}
</style>
</html>


In this page, we introduce a few audio examples drawn from the test set of <a href="https://sigsep.github.io/datasets/musdb.html" target="_blank" rel="noopener noreferrer">MUSDB18</a>. Each audio example have been downsampled to 16kHz (Anchor), then processed successively by the <a href="https://cslikai.cn/Apollo/" target="_blank" rel="noopener noreferrer">Apollo</a> model, the <a href="https://audioldm.github.io/audiosr/" target="_blank" rel="noopener noreferrer">AudioSR</a> model, and our model HP-codecX.

---
# Experimental results

## Example 1

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/11-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/11-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/11-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/11-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/11-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/11-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/11-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_11.png">
</figure>


## Example 2

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/27-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/27-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/27-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/27-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/27-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/27-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/27-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_27.png">
</figure>

## Example 3

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/105-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/105-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/105-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/105-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/105-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/105-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/105-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_105.png">
</figure>

## Example 4

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/131-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/131-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/131-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/131-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/131-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/131-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/131-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_131.png">
</figure>

## Example 5

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/189-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/189-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/189-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/189-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/189-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/189-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/189-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_189.png">
</figure>

## Example 6

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/407-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/407-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/407-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/407-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/407-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/407-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/407-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_407.png">
</figure>

## Example 7

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/535-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/535-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/535-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/535-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/535-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/535-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/535-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_535.png">
</figure>

## Example 8

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/658-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/658-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/658-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/658-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/658-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/658-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/658-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_658.png">
</figure>

## Example 9

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/723-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/723-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/723-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/723-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/723-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/723-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/723-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_723.png">
</figure>

## Example 10

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/792-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/792-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/792-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/792-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/792-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/792-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/792-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_792.png">
</figure>

## Example 11

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/819-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/819-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/819-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/819-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/819-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/819-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/819-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_819.png">
</figure>

## Example 12

<html>
<div class="audio-compare">
  <figure>
    <figcaption>Reference</figcaption>
    <audio controls=""><source src="/audio/48/851-48.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Anchor</figcaption>
    <audio controls=""><source src="/audio/16/851-16.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>Apollo</figcaption>
    <audio controls=""><source src="/audio/APO/851-apo.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>AudioSR</figcaption>
    <audio controls=""><source src="/audio/ASR/851-asr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>UniverSR</figcaption>
    <audio controls=""><source src="/audio/USR/851-usr.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>A2SB</figcaption>
    <audio controls=""><source src="/audio/A2S/851-a2s.wav" type="audio/wav"></audio>
  </figure>
  <figure>
    <figcaption>HP-codecX</figcaption>
    <audio controls=""><source src="/audio/HPX/851-hpx.wav" type="audio/wav"></audio>
  </figure>
</div>
</html>

<figure>
<img src="/images/spec_comp_sample_851.png">
</figure>

<br/>
