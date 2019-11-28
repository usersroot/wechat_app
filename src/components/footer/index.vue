<template>
<div class="container">
    <div class="page tabbar js_show">
    <div class="page__bd" style="height: 100%;">
      <div class="weui-tab">
        <div class="weui-tab__panel"></div>
        <div class="weui-tabbar">
          <router-link  to="/chat" class="weui-tabbar__item" active-class="weui-bar__item_on">
            <span style="display: inline-block;position: relative;">
              <img src alt class="iconfont icon-icon_xinxi" />
              <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
            </span>
            <p class="weui-tabbar__label">微信</p>
          </router-link >
          <router-link  to="/address" class="weui-tabbar__item" active-class="weui-bar__item_on">
            <img src alt class="iconfont icon-fujinderenicon" />
            <p class="weui-tabbar__label">通讯录</p>
          </router-link >
          <router-link  to="/discover" class="weui-tabbar__item" active-class="weui-bar__item_on">
            <span style="display: inline-block;position: relative;">
              <img src alt class="iconfont icon-icon-test" />
              <span
                class="weui-badge weui-badge_dot"
                style="position: absolute;top: 0;right: -6px;"
              ></span>
            </span>
            <p class="weui-tabbar__label">发现</p>
          </router-link >
          <router-link  to="/mine" class="weui-tabbar__item" active-class="weui-bar__item_on">
            <img src alt class="iconfont icon-weixintubiao" />
            <p class="weui-tabbar__label">我</p>
          </router-link >
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>


<style lang="less">
    .container{
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
    }
</style>