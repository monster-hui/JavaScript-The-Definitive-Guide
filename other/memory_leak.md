# 内存泄漏
### 1.  delete 运算只能断开属性和宿主对象的联系，而不会操作属性中的属性。
``` javascript
  a={p:{x:1}};
  b=a.p;
  delete a.p;
  console.log(b.x)//1
```
