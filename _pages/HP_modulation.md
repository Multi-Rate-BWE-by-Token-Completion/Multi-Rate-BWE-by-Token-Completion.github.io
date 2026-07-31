---
title: "H-P Modulation"
layout: single
permalink: /HP_modulation
author_profile: false
# classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
excerpt: "H-P modulation" # "Here you can find the audio files of the different pieces we worked on." - Example of a subtitle
toc: true
toc_label: "Table of Contents"
toc_icon: "cog"
toc_sticky: true
---
<html>

</html>

A direct application of the harmonic-percussive disentanglement learned in the latent representation is the ability to modulate the harmonic-percussive balance of the reconstructed signal. We conduct an experiment in which the outputs of the two RVQs within each frequency branch are linearly weighted prior to decoding: the harmonic scale is varied from 0.0 (no harmonic contribution) to 1.0 (full harmonic contribution) while the percussive scale is held fixed at 1.0, and symmetrically for the percussive scale while the harmonic scale is held fixed. This progressively increases the relative contribution of the harmonic (resp. percussive) component in the final mix. Audio samples illustrating this manipulation are available in this section and demonstrate the fine-grained controllability our codec offers over the harmonic-percussive mix.


## Example 1

<html>
  <table>
    <thread>
      <tr>
        <th>
          <center>  </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.0 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.25 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.5 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.75 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.75 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.5 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.25 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.0 | P = 1.0 </center>
        </th>
      </tr>
    </thread>
    <tbody>
      <tr>
        <th>
          <center> 16kHz </center>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.0/sample_119_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.25/sample_119_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.5/sample_119_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.75/sample_119_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P1.0/sample_119_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.75_P1.0/sample_119_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.5_P1.0/sample_119_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.25_P1.0/sample_119_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.0_P1.0/sample_119_sr16000.wav" type="audio/wav">
          </audio>
        </th>
      </tr>
      <tr>
        <th>
          <center> 48kHz </center>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.0/sample_119_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.25/sample_119_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.5/sample_119_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.75/sample_119_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P1.0/sample_119_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.75_P1.0/sample_119_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.5_P1.0/sample_119_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.25_P1.0/sample_119_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.0_P1.0/sample_119_sr48000.wav" type="audio/wav">
          </audio>
        </th>
      </tr>
    </tbody>
  </table>
</html>
<br/>


## Example 2

<html>
  <table>
    <thread>
      <tr>
        <th>
          <center>  </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.0 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.25 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.5 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.75 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.75 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.5 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.25 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.0 | P = 1.0 </center>
        </th>
      </tr>
    </thread>
    <tbody>
      <tr>
        <th>
          <center> 16kHz </center>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.0/sample_127_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.25/sample_127_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.5/sample_127_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.75/sample_127_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P1.0/sample_127_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.75_P1.0/sample_127_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.5_P1.0/sample_127_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.25_P1.0/sample_127_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.0_P1.0/sample_127_sr16000.wav" type="audio/wav">
          </audio>
        </th>
      </tr>
      <tr>
        <th>
          <center> 48kHz </center>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.0/sample_127_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.25/sample_127_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.5/sample_127_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.75/sample_127_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P1.0/sample_127_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.75_P1.0/sample_127_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.5_P1.0/sample_127_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.25_P1.0/sample_127_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.0_P1.0/sample_127_sr48000.wav" type="audio/wav">
          </audio>
        </th>
      </tr>
    </tbody>
  </table>
</html>
<br/>

## Example 3

<html>
  <table>
    <thread>
      <tr>
        <th>
          <center>  </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.0 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.25 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.5 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.75 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.75 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.5 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.25 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.0 | P = 1.0 </center>
        </th>
      </tr>
    </thread>
    <tbody>
      <tr>
        <th>
          <center> 16kHz </center>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.0/sample_135_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.25/sample_135_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.5/sample_135_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.75/sample_135_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P1.0/sample_135_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.75_P1.0/sample_135_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.5_P1.0/sample_135_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.25_P1.0/sample_135_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.0_P1.0/sample_135_sr16000.wav" type="audio/wav">
          </audio>
        </th>
      </tr>
      <tr>
        <th>
          <center> 48kHz </center>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.0/sample_135_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.25/sample_135_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.5/sample_135_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.75/sample_135_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P1.0/sample_135_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.75_P1.0/sample_135_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.5_P1.0/sample_135_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.25_P1.0/sample_135_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.0_P1.0/sample_135_sr48000.wav" type="audio/wav">
          </audio>
        </th>
      </tr>
    </tbody>
  </table>
</html>
<br/>

## Example 4

<html>
  <table>
    <thread>
      <tr>
        <th>
          <center>  </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.0 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.25 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.5 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 0.75 </center>
        </th>
        <th>
          <center> H = 1.0 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.75 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.5 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.25 | P = 1.0 </center>
        </th>
        <th>
          <center> H = 0.0 | P = 1.0 </center>
        </th>
      </tr>
    </thread>
    <tbody>
      <tr>
        <th>
          <center> 16kHz </center>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.0/sample_143_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.25/sample_143_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.5/sample_143_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.75/sample_143_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P1.0/sample_143_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.75_P1.0/sample_143_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.5_P1.0/sample_143_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.25_P1.0/sample_143_sr16000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.0_P1.0/sample_143_sr16000.wav" type="audio/wav">
          </audio>
        </th>
      </tr>
      <tr>
        <th>
          <center> 48kHz </center>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.0/sample_143_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.25/sample_143_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.5/sample_143_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P0.75/sample_143_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H1.0_P1.0/sample_143_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.75_P1.0/sample_143_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.5_P1.0/sample_143_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.25_P1.0/sample_143_sr48000.wav" type="audio/wav">
          </audio>
        </th>
        <th>
          <audio controls="">
            <source src="/H-P_modulation/H0.0_P1.0/sample_143_sr48000.wav" type="audio/wav">
          </audio>
        </th>
      </tr>
    </tbody>
  </table>
</html>
<br/>

<br/>
