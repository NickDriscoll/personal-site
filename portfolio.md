---
title: Nick Driscoll's 3D graphics programming portfolio
layout: default.liquid
permalink: /portfolio.html
---


<div class="header">
	<div class="top-row">
		<div class="logo-wrapper">
			<a href="#"><img class="logo" src="images\my_avi.jpg"/>
			<span class="logo-text">nick driscoll.</span></a>
		</div>
		<a href="https://github.com/NickDriscoll">
			<i class="header-git git fa fa-github" aria-hidden="true"></i>
		</a>
	</div>
	<div class="hero">
		<div class="hero-img-wrapper">
			<div class="persona-title-wrapper accent-font">
				<div class="persona-1">3D</div>
				<div class="persona-2">GRAPHICS</div>
				<div class="persona-3">PROGRAMMER</div>
			</div>
		</div>
		<img class="down-arrow" src="images/angle-down-solid.svg"/>
	</div>
</div>
<div class="content-wrapper">
	<div class="content">
		<div class="project-title">
			vk_viewer
			<a href="https://github.com/NickDriscoll/vk_viewer">
				<i class="git fa fa-github" aria-hidden="true"></i>
			</a>
		</div>

<p>Beginning in February of 2022, I began to take an interest in low-level GPU programming, and subsequently the Vulkan GPU API. This project is a physically-based renderer that I wrote in Rust, using Vulkan, and with the following rendering features:</p>
<div class="project-content-wrapper">
	<ul>
		<li>Physically-based shading (Combined Lambertian diffuse and Cook-Torrance specular BRDFs)</li>
		<li>Bloom post-processing effect based on COD:AW slides</li>
		<li>Directional lighting with cascaded shadow maps</li>
		<li>Bindless resource management</li>
		<li>Asset loading via glTF and optimized custom format</li>
		<li>Atmosphere rendering with Rayleigh and Mie scattering (raymarched)</li>
		<li>Simultaneous rendering of multiple frames</li>
	</ul>
	<div class="slide-show">
		<img class="slide" src="/images/vk2.jpg"/>
		<img class="slide hide" src="/images/vk1.jpg"/>
		<div class="buttons-wrapper">
			<span class="arrow left-arrow"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
			<span class="arrow right-arrow"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
		</div>
	</div>
</div>
<div class="project-title">
	vr_game_prototype
	<a href="https://github.com/NickDriscoll/vr_game_prototype">
		<i class="git fa fa-github" aria-hidden="true"></i>
	</a>
</div>
<p>After my initial brush with 3D graphics programming, I decided that I would try to make an entire VR game from scratch. The idea is that you would have a variety of gadgets that would modify your movement and would also serve a double purpose as weapons to help you stun and collect the main objects of the game, the Totoros that run around. This was very much a VR reimagining of <a>Ape Escape</a>.</p>
<p>The game is written in Rust using the OpenGL API for 3D graphics with the following rendering features:</p>
<div class="project-content-wrapper">
	<ul>
		<li>Gameplay interaction with AI agents</li>
		<li>Custom collision and VR character controller implementation</li>
		<li>Toon lighting from both directional and point light sources</li>
		<li>HMD rendering and controller/headset tracking using OpenXR</li>
	</ul>
	<div class="slide-show">
		<iframe class="slide" src="https://www.youtube.com/embed/6HBJdzkKTQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		<image class="slide hide" src="/images/vr1.jpg"></image>
		<image class="slide hide" src="/images/vr2.gif"></image>
		<div class="buttons-wrapper">
			<span class="arrow left-arrow"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
			<span class="arrow right-arrow"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
		</div>
	</div>
</div>
<div class="project-title">
	model_viewer
	<a href="https://github.com/NickDriscoll/model_viewer">
		<i class="git fa fa-github" aria-hidden="true"></i>
	</a>
</div>
<p>This was my first ever attempting at learning 3D graphics programming. It's just a bunch of instanced trees, grass billboards, a ground plane modified by a noise function, horrible shadow mapping, and a cubemap skybox. It also even integrates the OpenVR API for VR support. I'm proud of what I was able to accomplish while knowing so little.</p>
<p>The program was written in Rust with the OpenGL API</p>
<div class="project-content-wrapper no-list">
	<div class="slide-show">
		<iframe src="https://www.youtube.com/embed/0_sz0D57apQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		<image class="slide" src="/images/model1.jpg"></image>
		<image class="slide hide" src="/images/model2.jpg"></image>
		<image class="slide hide" src="/images/model3.jpg"></image>
		<div class="buttons-wrapper">
			<span class="arrow left-arrow"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
			<span class="arrow right-arrow"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
		</div>
	</div>
</div>
</div>
</div>
<div class="footer">
	<div class="bottom-row">
		<div class="link-wrapper">
			<a href="mailto:nick.a.driscoll@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
			<a href="https://www.linkedin.com/in/nicholas-driscoll-b5340a18b/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
			<a href="https://github.com/NickDriscoll"><i class="fa fa-github" aria-hidden="true"></i></a>
		</div>
	</div>
</div>
<button class="theme-toggle"><i class="hide dark-mode-on fa fa-moon-o" aria-hidden="true"></i><i class="light-mode-on fa fa-sun-o" aria-hidden="true"></i></button>