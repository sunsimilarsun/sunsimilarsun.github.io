# Matrix
 
## 矩阵
### 1.基本语法
```
$$\begin{matrix}
0&1&1\\
1&1&0\\
1&0&1\\
\end{matrix}$$

```
$$\begin{matrix}
0&1&1\\
1&1&0\\
1&0&1\\
\end{matrix}$$
### 2.矩阵边框
在起始、结束标记用下列词替换 matrix
$$\begin{matrix}
0&1&1\\
1&1&0\\
1&0&1\\
\end{matrix}$$
pmatrix：小括号边框

bmatrix：中括号边框

Bmatrix：大括号边框

vmatrix：单竖线边框

Vmatrix：双竖线边框
```
$$\begin{pmatrix}
0&1&1\\
1&1&0\\
1&0&1\\
\end{pmatrix}$$

```
$$\begin{pmatrix}
0&1&1\\
1&1&0\\
1&0&1\\
\end{pmatrix}$$

### 3.省略元素

横省略号：\cdots
竖省略号：\vdots
斜省略号：\ddots

举例：
```
$$\begin{bmatrix}
{a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\\
{a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\\
{\vdots}&{\vdots}&{\ddots}&{\vdots}\\
{a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\\
\end{bmatrix}$$
```

$$\begin{bmatrix}
{a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\\
{a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\\
{\vdots}&{\vdots}&{\ddots}&{\vdots}\\
{a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\\
\end{bmatrix}$$

### 4.阵列

需要array环境：起始、结束处以{array}声明
对齐方式：在{array}后以{}逐行统一声明
左对齐：l；居中：c；右对齐：r
竖直线：在声明对齐方式时，插入 | 建立竖直线
插入水平线：\hline
举例：
```markdown
$$\begin{array}{c|lll}
{↓}&{a}&{b}&{c}\\
\hline
{R_1}&{c}&{b}&{a}\\
{R_2}&{b}&{c}&{c}\\
\end{array}$$
```

$$\begin{array}{c|lll}
{↓}&{a}&{b}&{c}\\
\hline
{R_1}&{c}&{b}&{a}\\
{R_2}&{b}&{c}&{c}\\
\end{array}$$


### 5.方程组

需要cases环境：起始、结束处以{cases}声明

举例：
```markdown
$$\begin{cases}
a_1x+b_1y+c_1z=d_1\\
a_2x+b_2y+c_2z=d_2\\
a_3x+b_3y+c_3z=d_3\\
\end{cases}
$$
```

$$\begin{cases}
a_1x+b_1y+c_1z=d_1\\
a_2x+b_2y+c_2z=d_2\\
a_3x+b_3y+c_3z=d_3\\
\end{cases}
$$


