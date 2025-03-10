---
layout: post
title: "Bias Variance Trade-off"
date: 2025-03-10
categories: AI Daily
toc: true
font-size: medium
---

* TOC
{:toc}

# Bias Variance Trade-off

## Basic concepts:

- Parameters: $\theta$

- Hypothesis class:  $\mathcal{H}$ . Model will learn a hypothesis $h_{\theta} \in \mathcal{H}$, and each hypothesis is a map: $\mathcal{X}\rightarrow\mathcal{Y}$
- Joint distribution of data: $(X, Y)\sim\mathcal{D}$
- Training set: $S$
- Empirical risk (training error): $L_{S}(\theta) = \frac{\sum_{i=1}^{|S|}\mathbb{1}\{h_{\theta}(x_{i})\neq y_i\}}{|S|}$ 