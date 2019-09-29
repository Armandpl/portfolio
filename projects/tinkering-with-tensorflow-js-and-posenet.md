---
tags: []
title: tinkering with tensorflow.js and posenet
date: 2019-09-21
image: "/media/tf.svg"
excerpt: I wanted to play a little bit with tensorflow.js so I've made a web app that
  counts how many squats you do.
code: https://github.com/Armandpl/squat_counter
download: https://squat.armandpl.com/
external_link_name: Live Demo
read_more_bypass: ''
external_link: https://squat.armandpl.com/

---
I wanted to play a little bit with tensorflow.js so I've made a web app that counts how many squats you do.

I started from [this image classifier example](https://www.tensorflow.org/js/tutorials/transfer/image_classification) and then got most of the code from [this ml5 demo](https://github.com/ml5js/ml5-examples/tree/release/p5js/KNNClassification/KNNClassification_PoseNet).

The webapp uses posenet to estimate the pose and then a KNN classifier to classify it. I only recorded 4 examples for the KNN classifier. Two standing up and two while squatting, each time one from the front and one from the side.

The web app then increments the counter when it detects a pose change from squatting to standing up.

Next I'd like to understand the KNN algorithm a bit more, use different camera resolutions, add more poses and do the same in a flutter app using MK Kit.  