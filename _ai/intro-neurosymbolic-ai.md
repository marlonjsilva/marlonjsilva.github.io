---
title: Introduction to Neurosymbolic AI [WIP]
author: Marlon Silva
date: 2025-09-02
category: Jekyll
layout: post
---

# What is Neurosymbolic AI?

Neurosymbolic AI is a field that seeks to combine two major branches of AI research: **Neural Networks** and **Knowledge Representation and Reasoning**. The goal is to leverage the strengths of each approach to overcome their individual limitations.

# Understanding their Differences and Limitations

## Neural Networks

Neural Networks are primarily focused on **perception**. They are trained on raw data to mimic the distribution of that data, resulting in a black box that reflects the dataset used during training and produces very fast responses during inference. However, these systems have some limitations: they lack explainability (it is very difficult to understand what happens within the neural network) and generalization (they cannot acquire knowledge beyond their training data).

## Knowledge Representation & Reasoning

Knowledge Representation & Reasoning is focused on **reasoning**. It uses symbolic knowledge (logic, math, rules, etc.) to generate answers and is very effective at generalizing concepts and explaining its reasoning steps. However, these systems are often slow and require experts to convert real-world data into symbols (e.g., modeling a real-world situation using Prolog rules and facts).

# Examples of Neurosymbolic Systems

## AlphaEvolve

The DeepMind team at Google created [AlphaEvolve](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/), a system that bridges both approaches. They used LLM models to propose solutions to a problem and employed a symbolic component to assess and ensure the correctness of the solution. With this approach, Google's DeepMind team was able to:
- **Optimize the computing ecosystem:** AlphaEvolve improved by 0.7% the recovery process of Google's orchestrator tool worldwide, making it possible to complete more tasks with the same computational footprint.
- **Enhance AI Training and Inference:** AlphaEvolve reduced the training time in Gemini's models by 1% by optimizing the architecture and lower-level implementation that humans rarely touch on a day-to-day basis.
- **Improve Strassen's Algorithm:** AlphaEvolve proposed a better algorithm implementation to multiply 4x4 complex-valued matrices using 48 scalar multiplications, surpassing [Strassen's Algorithm](https://en.wikipedia.org/wiki/Strassen_algorithm).

We are only scratching the surface of the total potential of leveraging NeuroSymbolic reasoning systems to solve complex problems that we didn't think would be possible to solve a few years ago.

To thrive in this new era of Artificial Intelligence, it will be imperative for companies and governments to develop, change, and support systems to adopt this new approach of Neurosymbolic AI.