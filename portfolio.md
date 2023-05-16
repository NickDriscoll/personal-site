---
title: Nick Driscoll's 3D graphics programming portfolio
layout: default.liquid
permalink: /portfolio.html
---

Below are the various graphics programming projects I have worked on:

---

<div class="project-title">
	<a href="https://github.com/NickDriscoll/vk_viewer">
		<img src="/images/github_icon.png" width="32" height="32"></img>
		vk_viewer
	</a>
</div>

Beginning in February of 2022, I began to take an interest in low-level GPU programming, and subsequently the Vulkan GPU API. This project is a physically-based renderer that I wrote in Rust, using Vulkan, and with the following rendering features:

- Physically-based shading (Combined Lambertian diffuse and Cook-Torrance specular BRDFs)
- Bloom post-processing effect based on COD:AW slides
- Directional lighting with cascaded shadow maps
- Bindless resource management
- Asset loading via glTF and optimized custom format
- Atmosphere rendering with Rayleigh and Mie scattering (raymarched)
- Simultaneous rendering of multiple frames

<image src="/images/vk2.png" width=640 height=360></image>
<image src="/images/vk1.png" width=640 height=360></image>

---

<div class="project-title">
	<a href="https://github.com/NickDriscoll/vr_game_prototype">
		<img src="/images/github_icon.png" width="32" height="32"></img>
		vr_game_prototype
	</a>
</div>

After my initial brush with 3D graphics programming, I decided that I would try to make an entire VR game from scratch. The idea is that you would have a variety of gadgets that would modify your movement and would also serve a double purpose as weapons to help you stun and collect the main objects of the game, the Totoros that run around. This was very much a VR reimagining of <a href="https://www.youtube.com/watch?v=ZEIhcE6VpuM&t=4s&pp=ygUOYXBlIGVzY2FwZSB0YXM%3D">Ape Escape</a>.

The game is writting in Rust using the OpenGL API for 3D graphics with the following rendering features:

- Gameplay interaction with AI agents
- Custom collision and VR character controller implementation
- Toon lighting from both directional and point light sources
- HMD rendering and controller/headset tracking using OpenXR

<iframe width="560" height="315" src="https://www.youtube.com/embed/6HBJdzkKTQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<image src="/images/vr1.png" width=640 height=360></image>
<image src="/images/vr2.gif" width=640 height=360></image>

---

<div class="project-title">
	<a href="https://github.com/NickDriscoll/model_viewer">
		<img src="/images/github_icon.png" width="32" height="32"></img>
		model_viewer
	</a>
</div>

This was my first ever attempting at learning 3D graphics programming. It's just a bunch of instanced trees, grass billboards, a ground plane modified by a noise function, horrible shadow mapping, and a cubemap skybox. It also even integrates the OpenVR API for VR support, which is fun. I'm proud of what I was able to accomplish while knowing so little.

The program was written in Rust with the OpenGL API

<iframe width="560" height="315" src="https://www.youtube.com/embed/0_sz0D57apQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<image src="/images/model1.png" width=640 height=360></image>
<image src="/images/model2.png" width=640 height=360></image>
<image src="/images/model3.png" width=640 height=360></image>