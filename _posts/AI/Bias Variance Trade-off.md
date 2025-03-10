---
layout: post
title: Bias Variance Trade-off
sections:
  - id: basic-concepts
    title: Basic Concepts
  - id: how-to-optimize
    title: How to Optimize the Model
  - id: overfitting-underfitting
    title: The Risk of Overfitting and Underfitting
  - id: inductive-bias-variance
    title: Inductive Bias and Variance
  - id: trade-off
    title: Trade-off
---

# Bias Variance Trade-off

## Basic Concepts {#basic-concepts}

- Parameters: $\theta$
- $\mathcal{X}\times\mathcal{Y}$: the feature space. Each sample $(x,y)\in \mathcal{X}\times\mathcal{Y}$

- Hypothesis class:  $\mathcal{H}$ . Model will learn a hypothesis $h_{\theta} \in \mathcal{H}$, and each hypothesis is a map: $\mathcal{X}\rightarrow\mathcal{Y}$
- Joint distribution of data: $(X, Y)\sim\mathcal{D}$
- Training set: $S$
- Empirical risk (training error): $L_{S}(\theta) = \frac{\sum_{i=1}^{|S|}\mathbb{1}\{h_{\theta}(x_{i})\neq y_i\}}{|S|}$

## How to Optimize the Model {#how-to-optimize}

The model is permitted to access only part of the data, i.e., the training set $S$. Then the model is test on the test data, which have not be seen by the model. 



The goal of training a model, is to make it performe well on test data, instead of training data.



However, the model can not access to the true distribution of data $\mathcal{D}$ (otherwise there is no need to train at all). An alternative way of optimizing the model  using $S$, namely, Empirical risk minimization:
$$
ERM_{\mathcal{H}}(S)\in \mathop{\arg\min}\limits_{h\in \mathcal{H}}\, L_{S}(h)
$$

## The Risk of Overfitting and Underfitting {#overfitting-underfitting}

When we choose a reletively **large** hypothesis class, we may face *overfitting*. On the otherhand, we may encounter *underfitting*.

> *Example*
> Say the data is linear seperable, and $x\in \mathbb{R}$.
> $\mathcal{H}_1 = \{h_\theta|h_{\theta}:=\theta_0, \theta_0 \in \mathbb{R}\}$
> $\mathcal{H}_2 = \{h_\theta|h_{\theta}:=\theta^Tx=\theta_0+\theta_1x,\,  \theta \in \mathbb{R}^{2}\}$
>
> $\mathcal{H}_3 = \{h_\theta|h_{\theta}:=\theta_0+\theta_1x+\theta_2x^2+\theta_3x^3, \theta \in \mathbb{R}^{4}\}$
>
> The first hypothesis class will clearly underfitting, while the third hypothesis class will overfitting to the noise in $S$.

```python
class Model1(nn.Module):
    def __init__(self):
        super().__init__()
        self.theta = nn.Parameter(torch.randn((1,)))

    def forward(self, x):
        return self.theta.expand_as(x)

class Model2(nn.Module):
    def __init__(self):
        super().__init__()
        self.theta = nn.Parameter(torch.randn((2,)))

    def forward(self, x):
        x_2 = torch.cat([x.unsqueeze(1)**i for i in range(2)], dim=1)
        return x_2@(self.theta)
        
class Model3(nn.Module):
    def __init__(self):
        super().__init__()
        self.theta = nn.Parameter(torch.randn((6,)))

    def forward(self, x):
        x_5 = torch.cat([x.unsqueeze(1)**i for i in range(6)], dim=1)
        return x_5@(self.theta)
```

<img src="C:\Users\冯菁源\CS229\fit.png" alt="fit" style="zoom:67%;" />

where the train data is generated by $y = 2x+1+\epsilon, \, \epsilon\sim\mathcal{N}(0,1)$. 

## Inductive Bias and Variance {#inductive-bias-variance}

The risk of a hypothesis $h_s$ trained by ERM could be decomposed into 2 parts:
$$
L_{\mathcal{D}}(h_s)  =\mathop{\arg\min}\limits_{h\in \mathcal{H}}\,L_{\mathcal{D}}(h)+\epsilon_{est}
$$
The first term -*bias* : measures **how much risk we have because we restrict ourselves to a specic class, namely, how much inductive bias we have.** For model1, this term would be large, while for model3, this term is small.

The second term - estimation error or *variance* : measures **error caused by the differnce between $S$ and $\mathcal{D}$, i.e., the random nature of the $S$ that makes it slighly different with $\mathcal{D}$.** Say, if $S$ and $\mathcal{D}$ is exactly the same, then $L_{\mathcal{D}}(h_{s})=\mathop{\arg\min}\limits_{h\in \mathcal{H}} \, L_{\mathcal{D}}(h)$ and $\epsilon_{est}=0$

The following example shows variance (Linear regression with the simplest hypothesis class $h_{\theta}=\theta$. The blue line is the hypothesis learned on training set, the pink line is the best hypothesis in $\mathcal{H}$ over all data $\mathcal{D}$. )

<img src="C:\Users\冯菁源\Documents\WeChat Files\wxid_gaendpl45syk22\FileStorage\Temp\fe83b62134b9b047250a4526dbcde93.jpg" alt="fe83b62134b9b047250a4526dbcde93" style="zoom:50%;" />

## Trade-off {#trade-off}

Choosing a *too small hypothesis class* face underfitting, even the best hypothesis has a large error.

On the other hand, a *too large hypothesis class* face overfitting, though the best possible hypothesis has a small error, the *variance* caused by the random nature of observed data leads to a large error eventually.

To choose a proper hypothesis class, it is essential to combine with prior **domain knowledge**.

> *The end 2025/03/10*