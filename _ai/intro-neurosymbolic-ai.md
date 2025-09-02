---
title: AI
author: Marlon Silva
date: 2025-09-02
category: Jekyll
layout: post
---


# Introduction to Neurosymbolic AI [WIP]

## What is Neurosymbolic AI?

Neurosymbolic AI is a field that seeks to combine two major branches of AI research: **Neural Networks** and **Knowledge Representation and Reasoning**. The goal is to leverage the strengths of each approach to overcome their individual limitations.

## Understanding their Differences and Limitations

### Neural Networks

Neural Networks are primarily focused on **perception**. They are trained on raw data to mimic the distribution of that data, resulting in a black box that reflects the dataset used during training and produces very fast responses during inference. However, these systems have some limitations: they lack explainability (it is very difficult to understand what happens within the neural network) and generalization (they cannot acquire knowledge beyond their training data).

### Knowledge Representation & Reasoning

Knowledge Representation & Reasoning is focused on **reasoning**. It uses symbolic knowledge (logic, math, rules, etc.) to generate answers and is very effective at generalizing concepts and explaining its reasoning steps. However, these systems are often slow and require experts to convert real-world data into symbols (e.g., modeling a real-world situation using Prolog rules and facts).

## Examples of Neurosymbolic Systems

### AlphaEvolve

The DeepMind team at Google created [AlphaEvolve](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) a system that bridges both approaches. They used LLM models to propose solutions to a problem and employed a symbolic component to assess and ensure the correctness of the solution. The system was able to propose a better algorithm for 4x4 matrix multiplication than the [Strassen algorithm](https://en.wikipedia.org/wiki/Strassen_algorithm).
