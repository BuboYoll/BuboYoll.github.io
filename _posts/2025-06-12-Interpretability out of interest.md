# ML

- PCA
	- Motivation: in real-world experiment, we have a bunch of observation, which might be **redundant** and **full of noise**
		- Redundant means sometimes we do observation essentially repeatedly, i.e., with high covariance
		- Full of noise means the **Signal Noise Ratio** $\frac{\sigma^2_{s}}{\sigma^2_{n}}$
	- Assumption:
		- Linearity
		- Large variance equals to importance
		- principal components are orthogonal
	- Goal: reduce the dimension of data, to make **SNR** big and **Redundancy** small
	- $n$ observation, $m$ variables, form data matrix $X\in \mathbb{R}^{m\times n}$, where each row vector is observations of a variable.
	- Step1:  $X \leftarrow X - X.\text{mean}(dim=-1)$ so that each variable has mean 0.
	- Step2: Covariance matrix $C_X = \frac{1}{n}XX^T$, diagonal matrices are variance, and $(i,j)$ matrices is covariance between variable i and j: $C_X (i,j)=\frac{1}{n}x_ix_j^T=\frac{1}{n}\sum_{k=1}^{n}x_{i}(k)x_{j}(k)$
	- Step3: Our goal is to find out a new representation of $X$, i.e., a coordinate change of $Y=PX$, under which $C_Y$ satisfy
		- has a relative large value on diaganol (large **SNR**)
		- has 0 on non-diaganol 
		- This is done by letting $P$ be the eigenvector matrix of $C_X$
		- $C_Y=\frac{1}{n}yy^T=\frac{1}{n}Pxx^TP^T=\frac{1}{n}PC_XP^T=\frac{1}{n}PP^{-1}\Lambda PP^T=\frac{1}{n}\Lambda$, where each row vector of $P$ is eigenvector of $C_X$, and $\Lambda$ is the corresponding eigenvalue.
	- Step4: according to 3, we are using the eigenvalues of $C_X$ as basis, which is so called **principal components**, and the $i-th$ principal component have variance of $\Lambda(i,i)$

# LLM

- Word2Vec: *For words shown in similar context, it should be assigned similar meanings, e.g., token embedding.* 
	- Idea: learn the following embedding for each words in corpus.
		- context embedding
		- token embedding
	- Formula(given previous word wj, the likelihood of next token is wi) $t_i, c_j = \arg\max_{t_i, c_j}p(w_i\mid w_j)$
	- Understanding phrases: addition: for example, Russia + river ~ Moscow
	- The magnitute of the embedding, is related to the strength of meaning. For example, magnitute of “apple” is larger than “this”.
- Feature
	- A feature is neuron activations. In other word, the representation inside model's brain. Weights and non-linear functions are how model **use** the **features**, and further **form** useful features for later use.
	- Or it could be understood as a function map input to another space.
	- **Early features and later features**:
		- Early layers: de-tokenization. The words that are broken when during tokenization is formed into nature representation
		- Later layers: re-tokenization.
		- Mid layers: abstract features.
	- Different kinds of neurons have been found in NNs
		- **Sentiment neurons** in LSTM (Found by statistics, run a lot of postive/negetive sentimental sentences, and see the histagram: count vs activation value, is *seperated*) (Learning to Generate Reviews and Discovering Sentiment)
		- **Knowledge neurons** in **MLP**: for input matrix $W_{in}\in \mathbb{R}^{ d_{\text{model}}\times 4d_{\text{model}}}$, each column vector is **key vector**, take inner product with input vector to have **activation**, and then weighted sum the **value vector**, which is row vector in $W_{in}\in \mathbb{R}^{ 4d_{\text{model}}\times d_{\text{model}}}$. 
			- the way of finding the knowledge neuron is to see, **how much does the probability of  output being the desired memory changes w.r.t. the activation, and accumulate it** $w_{i}\int_{0}^{1}\frac{d P(\text{memory} \mid x, \alpha\times w_i)}{d \alpha}d\alpha$
	- As layer goes deeper, the **answer** become closer to the target. By distribution, we means that representation in different residual stream is distribution over vocabulary, and different blocks are just modifying this distribution. The distribution could be read by applying the $W_{\text{unembed}}\in \mathbb{R}^{d_{\text{model}}\times d_{\text{vocab}}}$
- Superposition
	- Neural networks learn *features* more than their *neurons*, so *some neurons* is *multi-semantic*. Or, they are trying to mimic a larger models, in which neurons is more than features.
		- **except for some important features**, most features share basis, therefore the activation of a neuron is hard to interpret with single feature. 
		- **or** all features do not have dedicated basis.
	- Privilege basis vs non-privilege basis: whether talking about activation is meaningful. If the activation is in non-priviledge basis, the **value** of neuron is meaningless, since it could be **arbitrarily rotated by $R$**.
		- **Attention output**: Non-priviledge basis. $r_j=\sum_{i}\text{attn}_{ij}v_{i}$ is projected into residual stream by $W_{o}r_j=W_{o}R^{-1}Rr_j$. 
		- **Residual stream**: Non-priviledge basis. Say activation in residual stream is $x\rightarrow Rx$, then for QKV matrices $W_{Q,K,V}\rightarrow W_{QKV}R^{-1}$
		- **MLP activations**: Priviledge basis. $\text{MLP}(x)=W_{2}\sigma(W_1x)$, rotating $x_1$ would not be able to recover by any method, so it is meaningful.
- Linear representation hypothesis
	- Hidden representation could be represented as $x = \sum_{i=1}^{d_{\text{dictionary}}}\mathbf{v}_{i} f_{i}$, where $f_i$ is the so-called **feature**, and this induce that we hypothesize features are **one-dimensional**, which may [not turn](https://openreview.net/forum?id=d63a4AM4hb) out to be the case. 
		- in this way the superposition may disappear, since the dictionary is sparse, and it could be though of a *decoder* of sparse auto encoder.
		- each $\mathbf{D}_i$ in the dictionary is a feature, $\mathbf{D}$ is the feature dictionary. In $n$ dimensinal space, number of basis satisfu (ii) is ~$\exp(n)$
		- See [blog](https://www.lesswrong.com/posts/Qryk6FqjtZk9FHHJR/sparse-autoencoders-find-highly-interpretable-directions-in).
	- **From a encoder point of view**
		- $z=Ex$ , where they are in $\mathbb{R}^{p},\mathbb{R}^{p\times m}, \mathbb{R}^{m}$. $E=(e_1,...,e_m), e_1\in \mathbb{R}^{p}$ and $x_i$ is the coefficient of each $e_i$. Intuitively, encoder makes the 
	- **From antropic**
		- *claim1*: each *feature* $f_i$ is represented as a direction (**in other words, feature is one-dimensinal**) in the representation space inside MLP.
		- *claim2*: the combination coefficient is determined by the input $c_i=g(x,f_i)$, some says that this intensity $g$ would be a *linear function* of embedding $x$
		- In this way, the input could be mapped into a vector in representation space $\sum_{i=1}^{n_{d_{hidden}}}c_if_i$

- Likelihood: *try to use some parameters to model the ground true distribution*.
	- Maximum likelihood estimation: when given observations sampled from distribution $p(x)$, estimate the parameters of the model $q_{\theta}(x)$, s.t. the observation is the most likely to occur (try to recover the observation with $q_{\theta}$)
		- Example: estimate the probability of getting head, when tossed 10 times a coin with (head:5, tail:4) would be 5/9. With parameterized model, $p_\theta(\text{head})=\theta$, setting derivative to zero would raise the answer.

# Deep learning


- Regularization
	- Dropout: randomly throw away some neurons in each layer when training, and scale the output by the retention rate.
		- **Interpretation**: learn the weights that does not depend on single neuron.
	- weight-decay
	- Flooding: let the loss be $\mid J_{\theta}-b \mid +b$ to prevent it from being zero during training.
	- Early stopping: two ways of implementing
		- Set a epoch number as *hyperparameter*. At each epoch, evaluate on valid set. If is so far the best, save the model; else continue.
		- Or, at each epoch, check if the evaluation on valid set is worsen. If for the next **some epochs** the performance is worsen then stop.
- Loss function
	- Cross entropy: a measure of difference between distribution $H(p,q_{\theta})=H(p)-KL(p\mid \mid q_{\theta})=-\sum_{x\in \text{feature space}}p(x)\log q_{\theta}(x)$, where $p(x), q_{\theta}(x)$ is the ground true and model's predict distribution over labels.
		- Entropy: the expectation of self-information
			- Self information: *map* a distribution to a *real number* $I(p)=-\log p(x)$. Measures the *surpisal* of an event.
			- Mutual information: *map* 2 distribution to a *real number* $I(p,q)=-\mathbb{E}_{p_{XY}}[\frac{p_{X,Y}(x,y)}{p_X(x)p_Y(y)}]$ . If they are independent, its 0. If they are the same random variable, its self information.
			- Entropy: $\mathbb{E}_{p}[I(p)]$
			- Relation the maximize log-likelihood: the likelihood given observation from i to n is $L(\theta, X)=\prod_{i}q_{\theta}(X=x_i)=\prod_{x_i}q_{\theta}(x_i)^{Np(x_i)}$, so the log likelihood: $l(\theta)=\sum_{x_i}Np(x_i)\log q_{\theta}(x_i)=-NH(p, q_\theta)$. **Hence MLE =Minimize cross entropy**
- Training dynamics
	- [Neural tangent kernel theory](https://www.eigentales.com/NTK/): roughly saying, it gives a way to discribe the training dynamics towards 0 training loss.
		- Neural tangent kernel: $H(w)=\nabla_{w}f(w,x)\nabla_{w}^{T}f(w,x),\text{where }\nabla_{w}f(w,x)\in \mathbb{R}^{n\times p}$
		- when changing parameters $w$, the **reletive change of** $\kappa(w)=\nabla_{w}(f_w(x))$ could be estimated. If it satisfy $\kappa(w_0)\ll 1$ (this could be achieve by scaling the output by infinite) then the training process could by described by ODE $\dot{y}=H(w_0)(y-t)$.
		- The solution is $y = \exp(-H(w_0)x)t$, which surely converge to t, meaning **0 training loss**.