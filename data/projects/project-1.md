---
title: "Neural Network Visualizer"
date: "2024-12-15"
summary: "Interactive 3D visualization of neural network training processes in real-time."
tags: ["machine-learning", "python", "api"]
skills: ["PyTorch", "Three.js", "React", "WebSocket"]
image: "/projects/project-1.jpg"
featured: true
---

## Overview
Understanding how neural networks learn is often unintuitive. This project solves that by visualizing the weights and biases of a network as it trains on standard datasets like MNIST.

## Technical Approach
I built a custom WebSocket server in Python using FastAPI to stream training metrics from PyTorch. The frontend uses React Three Fiber to render a 3D representation of the network layers, updating in real-time as data flows in.

## Results
- **Performance**: Capable of visualizing networks with up to 10k parameters at 60fps.
- **Engagement**: Used by local study groups to teach backpropagation concepts.

## Links
- [GitHub](https://github.com/example/nn-viz)
- [Demo](https://example.com/demo)
