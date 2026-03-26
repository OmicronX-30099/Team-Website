# Forward and Lateral Velocity Tuners
Here's our advice for tuning your robot:




## Forward Velocity Tuner
The `ForwardVelocityTuner.java` tuner gives our software an idea of how fast your robot is and how fast
to run it when following paths. The robot will run 40 inches forwards but this can be changed in the `ForwardVelocityTuner.java` file.
This is an automatic tuner which will spit out the value at the end. replace the `xVelocity` in the `MecanumConstants.java` file with the value the test spit out.
**Make sure your motor directions and pod directions are right before running this test!**

:::tip
Best results are achieved by running this test multiple times and averaging the result. 
:::


## Lateral Velocity Tuner
The `LateralVelocityTuner.java` tuner gives our software an idea of how fast your robot at strafing and how fast
to run it when following paths. The robot will run 40 inches to the left but this can be changed in the `ForwardVelocityTuner.java` file.
This is an automatic tuner which will spit out the value at the end. replace the `yVelocity` in the `MecanumConstants.java` file with the value the test spit out.
**Make sure your motor directions and pod directions are right before running this test!**


:::tip
We recommend using a freshly charged battery for this test
:::

<style>
/* If you prefer to keep the CSS inside this specific file instead of custom.css,
you can paste this block at the bottom of your Markdown file: */
.custom-block.info .custom-block-title {
color: #ff69b4;
}
</style>

