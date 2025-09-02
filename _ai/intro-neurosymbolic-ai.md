---
title: AI
author: Marlon Silva
date: 2025-09-02
category: Jekyll
layout: post
---

# Introduction to Neurosymbolic AI [WIP]

## What is Neurosymbolic AI?

Neurosymbolic AI is a field that seeks to combine two major branches of AI research: **Neural Networks** and **Knowledge Representation and Reasoning**. The goal is to leverage the strengths of each other to overcome their individual limitations.

## Understanding their Differences and Limitations

### Neural Networks

We could say that Neural Networks are focused on **perception**, it's trained on raw data to mimic the distribution of the data, the result is a black box that will reflect the dataset used in the training, and produce very fast responses in inference time. Altought these systems have some limitations: they lack explainability (it's very hard to get to know what happens under the neural networks), lacks generalizations (it doesn't have the ability to get knowledge behond their training data).

### Knowledge Representation & Reasoning

We could say that Knowledge Representation & Reasoning are focused on **reasoning**, it used symbolic knowledge (logic, math, rules, etc)  to generate answers, it's very good to generalize conceps and explain their reasoning steps. Altought their are slow, requires experts to convert real-world data into symbols (e.g., model a real world situation into prolog rules and facts)

## Examples of Neurosymbolic Systems

### AlphaEvolve

The DeepMind teams from Google managed to create a system that bridges both approaches, they used LLM models to propose solutions for a problem and used the symbolic componement to assess and ensure correctness for the solution. The systems was able to propose a beter algorithm solution than Strassen algorithm for 4x4 matrics multiplications.

