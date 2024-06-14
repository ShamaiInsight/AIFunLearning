
# Teachable Machine + Serial Port Integration

## Overview

This project demonstrates how to integrate Google Teachable Machine with Node.js and p5.js to perform actions based on image classification results. The initial model version is designed to detect whether eyes are open or closed and communicate this data to an Arduino, which controls an LED accordingly.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **p5.js:** JavaScript library for creative coding.
- **Google Teachable Machine:** Tool to create machine learning models.
- **Arduino:** Open-source electronics platform.

## Prerequisites

- Node.js installed on your machine.
- Arduino board and necessary setup.
- p5.js library.
- WebCam (Must be enable in your browser)

## Arduino Code Example

```c
/*
   Project: LED Control via Serial Communication
   Company: Shamai Insight
   Author: Joel. D
   Date: 13/06/2024

   Description:
   This Arduino code controls an LED connected to pin 13 through serial communication.
   The LED is turned on or off based on the incoming serial data ('1' or '0').

   License:
   MIT License

   Copyright (c) 2024 Shamai Insight

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.
*/

int LED = 13;  // Define LED pin

#define SW 12  // Define switch pin (not used in this code)

void setup() {
  // Initialize pin 13 as an output for the LED
  pinMode(LED, OUTPUT);

  // Start serial communication at 9600 baud rate
  Serial.begin(9600);
}

void loop() {
  // Check if data is available to read from the serial port
  if (Serial.available()) {
    // Read the incoming serial data
    char input = Serial.read();

    // If the input is '1', turn the LED on
    if (input == '1') {
      digitalWrite(LED, HIGH);
    }
    // If the input is '0', turn the LED off
    else if (input == '0') {
      digitalWrite(LED, LOW);
    }
  }
}
```

## Future Enhancements

### Frequency-Based Actions
Develop the capability to play different frequencies based on hand indications:
1. **Number Recognition:**
   ![Number Recognition](https://github.com/ShamaiInsight/AIFunLearning/assets/124437297/6d4d2f70-4c64-476f-b2d3-a115814bcc34)

2. **Note Recognition:**
   ![Note Recognition](https://github.com/ShamaiInsight/AIFunLearning/assets/124437297/7f4de9de-53d3-4303-97e8-10cc4fcc82cb)

### Advanced Model
Use gesture recognition to vary the frequency dynamically:
![Gesture Recognition](https://github.com/ShamaiInsight/AIFunLearning/assets/124437297/0cfbdaf6-be8e-4ddc-8152-9ac1b612f61c)

## Future Ideas
- **Gyroscope + Pose Model:**
  Implement 3D navigation using Unity 3D or Blender Game Engine (Python).

## Getting Started

### Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/ShamaiInsight/AIFunLearning
   cd AIFunLearning
   ```

2. **Install dependencies:**
   ```sh
   npm install express
   npm install serialport
   npm install socket.io
   ```

3. **Run the application:**
   ```sh
   node server.js
   open your webbrowser (localhost:3000)
   You will have to activate your webcam
   ```

### Connecting Arduino
1. **Upload the provided Arduino code to your Arduino board.**
2. **Ensure the Arduino board is connected to your computer.**
3. **Run the Node.js server and open the p5.js sketch in your browser.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/ShamaiInsight/AIFunLearning/blob/master/license.txt) file for details.

---

Feel free to reach out for any queries or contributions!
