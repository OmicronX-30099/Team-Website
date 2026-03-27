---
outline: deep
---

# Our Robot: OmicronX

Explore our 2025-2026 technical design in 3D. Use your mouse to rotate and zoom.

<ClientOnly>
  <div class="spline-container">
    <script type="module" src="https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js"></script>
    <spline-viewer url="https://my.spline.design/untitled-nMTzyjlxo47ujWK96o5ueMEd/"></spline-viewer>
  </div>
</ClientOnly>

## Technical Details

* **Chassis:** Custom CNC-milled aluminum 6061-T6.
* **Drivetrain:** 4-wheel mecanum drive with high-torque motors.
* **Sensors:** Dual dead-wheel odometry for precise autonomous positioning.

<style>
  .spline-container {
    width: 100%;
    height: 600px;
    margin: 20px 0;
    background: #1e1e1e;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  }

  spline-viewer {
    width: 100%;
    height: 100%;
  }
</style>
