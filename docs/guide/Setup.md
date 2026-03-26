# Setup

## Configure Motor Names
Change the names of the drive motors `MecanumConstants.java`
```java 
    public String leftFrontMotorName = "leftFront";
  public String rightFrontMotorName = "rightFront";
  public String leftRearMotorName = "leftRear";
  public String rightRearMotorName = "rightRear";
```
## Set Motor Directions
Change these directions in the `MecanumConstants.java`
```java
    public DcMotorSimple.Direction leftFrontMotorDirection = DcMotorSimple.Direction.REVERSE;
    public DcMotorSimple.Direction leftRearMotorDirection = DcMotorSimple.Direction.REVERSE;
    public DcMotorSimple.Direction rightFrontMotorDirection = DcMotorSimple.Direction.FORWARD;
    public DcMotorSimple.Direction rightRearMotorDirection = DcMotorSimple.Direction.FORWARD;
```
## Set Pod Offsets
* Pinpoint: Change your odometry pod offsets in `PinpointLocalizer.kt`
```kotlin
var xOffset: Double = 0.0;
    var yOffset: Double = 0.0;
```
* 3 Wheel: Change the names: `strafePodName`, `rightPodName`, `leftPodName` in `ThreeWheelLocalizer.kt` (lines 24-26)
For pinpoint there are 2 offsets, for 3 wheel there are 3 offsets
* 
## Set Pod Names
* Pinpoint: change the `deviceName` in line 27 of the `pinpointLocalizer.kt` file
* 3 Wheel: change the names in `ThreeWheelLocalizer.kt`, on line 15

## Configure Odometry type
* Pinpoint Directions: change the directions on line 31 & 32 in `PinpointLocalizer.kt` 
```java 
GoBildaPinpointDriver.EncoderDirection.FORWARD,
GoBildaPinpointDriver.EncoderDirection.FORWARD 
```
* 3 Wheel: Change this wheel size radius (it's in mm)
`val wheelRadius:Double = 48.0`





#

