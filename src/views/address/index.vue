<template>
  <div class="chat_box">
    <header>
      <div class="top_box">
        <h2>
          通讯录
          <span class="iconfont icon-icon_zuojiantou-1 right"></span>
        </h2>
      </div>
    </header>
    <section>
      <div>
        <div class="weui-search-bar" id="searchBar">
          <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
              <i class="weui-icon-search"></i>
              <input
                type="search"
                class="weui-search-bar__input"
                id="searchInput"
                placeholder="搜索"
                required
              />
              <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
            </div>
            <label class="weui-search-bar__label" id="searchText">
              <i class="weui-icon-search"></i>
              <span>搜索</span>
            </label>
          </form>
          <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>
      </div>
      <ul>
        <li>
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <svg class="icon" aria-hidden="true" style="font-size:54px;">
                <use xlink:href="#icon-zu" />
              </svg>
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">标题一</h4>
              <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <svg class="icon" aria-hidden="true" style="font-size:54px;">
                <use xlink:href="#icon-weixintubiao" />
              </svg>
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">标题一</h4>
              <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <svg class="icon" aria-hidden="true" style="font-size:54px;">
                <use xlink:href="#icon-wenjianchuanshuzhushou" />
              </svg>
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">标题一</h4>
              <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <svg class="icon" aria-hidden="true" style="font-size:54px;">
                <use xlink:href="#icon-weixintubiao1" />
              </svg>
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">标题一</h4>
              <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <svg class="icon" aria-hidden="true" style="font-size:54px;">
                <use xlink:href="#icon-gouwu" />
              </svg>
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">标题一</h4>
              <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </div>
          </a>
        </li>

      </ul>
      <ul>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="../../../public/img/tx.jpg" style="width: 50px;display: block" />
            </div>
            <div class="weui-cell__bd">
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>


<style lang="less" scope>
.chat_box {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
header {
  width: 100%;
  height: 46px;
  background: #ededed;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  .top_box {
    padding: 8px;
    box-sizing: border-box;
    h2 {
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }
}
section {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  margin-top: 46px;
  margin-bottom: 57px;
}
.right {
  float: right;
}
</style>