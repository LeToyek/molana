![Main Opticon Image](/images/blog/opticon-lp.jpg)

### Opticon: Drowsiness Mitigation using IOT and AI

Opticon is a project designed to combat driver drowsiness through the integration of IoT and AI technologies. This project combines hardware and software to detect drowsiness in drivers and alert them to take breaks.

Hardware: The system features an embedded IoT device integrated into eyeglasses. It includes an infrared sensor to monitor eye blink frequency and duration, and a PPG sensor to track heart rate, both of which help in detecting driver drowsiness.

Software: The software collects real-time data from the IoT device, allowing users to monitor various metrics such as blink frequency, duration, heart rate, and overall drowsiness level. It also incorporates a machine learning model that predicts drowsiness levels for the upcoming hour.

This project was developed by myself, along with two researchers, [Lailatul Badriyah](https://www.linkedin.com/in/lailatulbadriyah/) and [Yonanda Mayla](https://www.linkedin.com/in/yonanda-mayla-rusdiaty-77952828b/). My key contributions include developing the mobile app, machine learning model pipeline, IoT integration, and cloud infrastructure.

Here is the Mobile App of the Opticon:
![Opticon Mobile App](/images/blog/opticon-mobile.png)

Here is the looks of the Opticon Glasses:
<img src="/images/blog/opticon-glasses.jpeg" alt="Opticon Glasses" width="100"/>

Technology used in this project:

| Feature | Technology |
|------------|-------------|
|------------|-------------|
| IOT        | Arduino, Classic Bluetooth Connection |
| Mobile App         | Flutter, Classic Bluetooth Connection |
| Machine Learning    | Python, Tensorflow, LSTM |
| Cloud | Firebase, Google Cloud Platform (VM Instance)  |



<strong>Repositories</strong> 
- [Opticon Mobile](https://github.com/LeToyek/opticon_flutter)
- [Opticon ML](https://github.com/LeToyek/opticon-ml)