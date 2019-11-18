---
tags:
- AI & Machine Learning
title: Tinkering with Tensorflow.js and PoseNet
date: 2019-09-21
image: "/media/tf.svg"
excerpt: I wanted to play a little bit with tensorflow.js so I've made a web app that
  counts how many squats you do.
code: https://github.com/Armandpl/squat_counter
download: https://squat.armandpl.com/
external_link_name: ''
read_more_bypass: ''
external_link: ''

---
I wanted to play with tensorflow.js so I built a web app that counts how many squats you do.

I started from [this image classifier example](https://www.tensorflow.org/js/tutorials/transfer/image_classification) and then got most of the code from [this ml5 demo](https://github.com/ml5js/ml5-examples/tree/release/p5js/KNNClassification/KNNClassification_PoseNet).

The webapp uses PoseNet to get the coordinates of the joints (elbows, knees...) and then a KNN classifier to classify these points. I recorded 4 example for the KNN to use. Two standing up and two squatting. 

The web app then increments the counter when it detects a pose change from squatting to standing up.

Next I'd like to understand the KNN algorithm a bit more, try different camera resolutions, add more poses and do the same in a flutter app using ML Kit.