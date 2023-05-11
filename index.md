---
title: Nick Driscoll's 3D graphics programming blog
layout: default.liquid
---

[My Portfolio]({{ site.base_url }}/portfolio.html)

---

## Embedded Rust source test:
{% highlight RUST %}
    let phys_devices = match vk_instance.enumerate_physical_devices() {
        Ok(devices) => { devices }
        Err(e) => { crash_with_error_dialog(&format!("Unable to enumerate physical devices: {}", e)); }
    };

    //Search for the physical device
    const DEVICE_TYPES: [vk::PhysicalDeviceType; 3] = [
        vk::PhysicalDeviceType::DISCRETE_GPU,
        vk::PhysicalDeviceType::INTEGRATED_GPU,
        vk::PhysicalDeviceType::CPU
    ];
    let mut phys_device = None;
    'gpu_search: for d_type in DEVICE_TYPES {
        for device in phys_devices.iter() {
            let props = vk_instance.get_physical_device_properties(*device);
            if props.device_type == d_type {
                let name = CStr::from_ptr(props.device_name.as_ptr()).to_str().unwrap();
                println!("\"{}\" was chosen as primary GPU.", name);
                phys_device = Some(*device);
                break 'gpu_search;
            }
        }
    }

    vk_physical_device = match phys_device {
        Some(device) => { device }
        None => { crash_with_error_dialog("Unable to selected physical device."); }
    };
{% endhighlight %}

---

## Referenced image test
<a href="{{site.base_url}}/scapegoat.html">
    <img src="https://product-images.tcgplayer.com/fit-in/421x421/174406.jpg" />
</a>

## All current site pages:

{% for post in collections.posts.pages %}
#### {{post.title}}

[{{ post.title }}]({{post.permalink}})
{% endfor %}
