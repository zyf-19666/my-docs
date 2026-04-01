# 微信小程序页面跳转
通常来说，微信小程序的页面跳转有两种方式：
1. 基于组件的跳转
2. 基于 API 的跳转
## 基于组件的跳转
在微信小程序中，可以使用 `<navigator>` 组件来实现页面跳转。这个组件提供了多种跳转方式，包括：

- `navigateTo`: 保留当前页面，跳转到应用内的某个页面。
- `redirectTo`: 关闭当前页面，跳转到应用内的某个页面。
- `switchTab`: 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
- `reLaunch`: 关闭所有页面，打开到应用内的某个页面。
- `navigateBack`: 关闭当前页面，返回上一页面或多级页面。
### 示例
```html
<navigator url="/pages/index/index" open-type="navigateTo">跳转到首页</navigator>
<navigator url="/pages/profile/profile" open-type="redirectTo">跳转到个人中心</navigator>
```
### 传递参数
可以通过 URL 动态传递参数，例如：
```html
<!-- item 是当前循环的项目 -->
<navigator url="{{'/pages/detail/detail?id=' + item.id}}" open-type="navigateTo">跳转到详情页</navigator>
```
在目标页面中，可以通过 `onLoad` 方法获取传递的参数：
```javascript
Page({
  onLoad: function(options) {
    console.log("获取参数:", options.id); // 输出传递的 id 参数
    // 实际开发中可以根据 id 参数请求数据
    // 如果需要将参数传递给子组件，可以使用 this.setData() 方法将参数存储在页面的 data 中（首先要在 data 中定义 id 属性）
    this.setData({
      id: options.id
    });
  }
});
```
## 基于 API 的跳转
首先给跳转位置绑定事件，例如：
```html
<button bindtap="goToIndex">跳转到首页</button>
```
然后在跳转的位置定义参数属性（如果需要传递参数的话）：
```html
<button bindtap="goToIndex" data-id="{{item.id}}">跳转到首页</button>或者
<button bindtap="goToIndex" id="{{item.id}}">跳转到首页</button>
```
在事件处理函数中获取参数并进行跳转：
```javascript
Page({
  goToIndex: function(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({//默认支持返回上一页，保留当前页面
      url: `/pages/index/index?id=${id}`
    });
  }
});
```