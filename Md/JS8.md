# 编程实践
## UI层的松耦合
### Web UI分层
#### 
### 将JavaScript从CSS中抽离
#### 避免使用CSS表达式（expression函数）
### 将CSS从JavaScript中抽离
#### 可以通过在JavaScript中操作CSS的className来达到修改元素样式的目的
### 将JavaScript从HTML中抽离
### 将HTML从JavaScript中抽离
#### 1、从服务器加载
##### 
#### 2、简单客户端模板
#### 3、复杂客户端模板
## 避免使用全局变量
### 全局变量带来的问题
#### 命名冲突
#### 代码的脆弱性
#### 难以测试
### 意外的全局变量
#### 避免省略var关键字
#### 避免意外的全局变量
#### 如果可以使用严格模式("use strict")
### 单全局变量方式
#### 命名空间
#### 模块
##### YUI模块
##### 异步模块（AMD）
### 零全局变量
## 事件处理
### 隔离应用逻辑
### 不要分发事件对象
#### 
## 避免"空比较"
### 检测基本类型
#### 字符串
##### typeof "hello";  // "string"
#### 数字
##### typeof 123;  // "number"
#### 布尔
##### typeof true;  // "boolean"
#### undefined
##### typeof undefined;  // "undefined"
#### null
##### typeof null;  // "object"
###### 这是一种低效的判断null的方法，如果你需要检测null，则直接使用恒等运算符（===）或非恒等运算符（!==）
##### 一般不用于检测语句
### 检测引用类型
#### instanceof
##### Date、Error、RegExp、自定义引用类型
##### 检测引用类型最好的方法是使用instanceof运算符
##### instanceof不仅检测构造这个对象的构造器，还检测原型链
##### 默认情况下，每个对象都继承自Object，因此每个对象的"value instanceof Object"都会返回true
##### 因此使用"value instanceof Object"来判断对象是否属于某个特定类型的做法并非最佳。
#### 检测函数
##### 检测函数最好的方法是使用typeof，因为它可以跨帧(frame)使用
    假设一个浏览器帧（frameA ）里的一个对象被传入到另一个帧（frame B）中。两个帧里都定义了构造函数Person。如果来自帧A的对象是帧A的Person的实例，则如下规则成立：
    // true
    frameAPersonInstance instanceof frameAPerson
    
    // false
    frameAPersonInstance instanceof frameBPerson
    因为每个帧都拥有Person的一份拷贝，他被认为是该帧（frame）中的Person的拷贝的实例，尽管两个定义可能是完全一样的。
    

##### typeof myFun === "function"(IE8+)
###### 
#### 检测数组
##### Array.isArray()
###### 
#### 
### 检测属性
#### 判断属性是否存在的最好方法是使用in运算符
#### 如需判断实例属性也可以用hasOwnProperty()
##### 
## 将配置数据从代码中分离出来
### 什么是配置数据
#### URI
#### 需要展现给用户的字符串
#### 重复的值
#### 设置（比如每页的配置项）
#### 任何可能发生变更的值
### 抽离配置数据
### 保存配置数据
## 抛出自定义错误
### 错误的本质
#### 抛出错误的本质是为了调试方便
### 在JavaScript中抛出错误
#### throw new Error("Something bad happened.")
### 抛出错误的好处
#### 便于调试
### 何时抛出错误
#### 一旦修复了一个很难调试的错误，尝试增加一两个自定义错误。当再次发生错误时，这将有助于更容易的解决问题。
#### 如果正在编写代码，思考一下："我希望[某些事情]不会发生，如果发生，我的代码会一团糟糕"。这时，如果[某些事情]发生，就抛出一个错误。
#### 如果正在编写的代码别人（不知道是谁）也会使用，思考一下他们使用的方式，在特定的情况下抛出错误。
### try-catch语句
#### 使用throw还是try-catch
#### 不要将try-catch中的catch留空
### 错误类型
#### Error
##### 所有错误的基本类型。实际上引擎从来不会抛出该类型错误
#### EvalError
##### 通过eval()函数执行代码发生错误时抛出
#### RangeError
##### 一个数字超出它的边界时抛出。该错误在正常的代码执行中非常罕见
#### ReferenceError
##### 期望的对象不存在时抛出
#### SyntaxError
##### 有语法错误时抛出
#### TypeError
##### 变量不是期望的类型时抛出
#### URIError
##### 给encodeURI(), encodeURIComponent(), decodeURI()或者decodeURIComponent()等函数传递格式非法的URI字符串时抛出
## 不是你的对象不要动
### 什么是你的
#### 在一个多人开发的项目中，每个人都假设库对象会按照它们的文档中描述的一样正常工作。如果你修改了其中的对象，将会给自己的团队设置一个陷阱。
#### 原生对象（Object、Array等等）
#### DOM对象（document等）
#### 浏览器对象模型（BOM）对象（window等）
#### 类库的对象
### 原则
#### 不覆盖方法
##### 以下代码会导致函数劫持
##### 
#### 不新增方法
##### 避免命名冲突
##### 一个对象此刻没有某个方法不代表它未来也没有
#### 不删除方法
### 更好的途径
#### 基于对象的继承（原型继承）
#### 基于类型的继承
#### 门面模式
### 关于Polyfill的注解
### 阻止修改
#### 防止扩展
##### 禁止为对象“添加”属性和方法，但已存在的属性和方法是可以被修改和删除的
##### 
#### 密封
##### 类似“防止扩展”，但是禁止"删除"对象已存在的属性和方法
##### 
#### 冻结
##### 类似“密封”，但是禁止"修改"对象已经存在的属性和方法
##### 
## 浏览器嗅探
### User-Agent检测
#### 只针对旧的或者特定版本的浏览器，绝不应当针对最新版本或者未来版本的浏览器
### 特性检测
#### 纯粹的特性检测是一种很好的做法
### 避免特性推断
### 避免浏览器推断
### 应当不惜一切代价避免使用