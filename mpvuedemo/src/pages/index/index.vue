<template>
  <div class="container" @click="clickHandle('test click', $event)" v-if="!loading">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <i-panel title="标题">
      <i-cell-group>
        <i-cell title="只显示箭头" is-link></i-cell>
        <i-cell title="跳转到首页" is-link url="/pages/counter/main"></i-cell>
        <i-cell title="只有 footer 点击有效" is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
        <i-cell title="开关">
          <switch slot="footer" checked />
        </i-cell>
      </i-cell-group>
    </i-panel>
    <i-panel>
      <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
        <view slot="content">内容不错</view>
        <view slot="footer">尾部内容</view>
      </i-card>
    </i-panel>
    <i-panel>
      <ul>
        <li v-for="(item,index) in bannerList" :key="index"><img :src="'https://img.allchips.com'+item.picUrl" alt=""></li>
      </ul>
    </i-panel>
    <i-panel>
      <i-button type="ghost" @click="handleToast">只显示文本</i-button>
      <i-toast id="toast" />
    </i-panel>
  </div>
  <div v-else>
    <i-spin size="large" fix></i-spin>
  </div>
</template>

<script>
import card from '@/components/card';

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      bannerList: [],
      loading: true
    };
  },

  components: {
    card
  },
  // computed: {
  //   bannerList () {
  //     return this.listData;
  //   }
  // },

  methods: {
    bindViewTap () {
      const url = '../logs/main';
      wx.navigateTo({ url });
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
      // this.$http.post(`https://test.allchips.com/website/api/home/getAdBannerList`, { adType: 10 }).then((response) => {
      //   // 输出请求数据
      //   console.log(response.data)
      //   let res = response.data;
      //   if (res.code === 0) {
      //     this.bannerList = res.data;
      //     setTimeout(() => {
      //       this.loading = false;
      //     }, 1000)
      //   }
      // }).catch(err => {
      //   console.log(err.status, err.message)
      // })
      this.$http({
        url: `https://test.allchips.com/website/api/home/getAdBannerList`,
        data: { adType: 10 },
        methods: 'POST'
      }).then(response => {
        console.log(`success----${response}`);
        let res = response.data;
        if (res.code === 0) {
          this.bannerList = res.data;
          setTimeout(() => {
            this.loading = false;
          }, 1000)
        }
      }).catch(err => {
        console.log(`err----${err}`);
      });
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev);
    },
    handleClick () {
      console.log('点击按钮');
    },
    bindDateChange () {
      console.log(2321);
    },
    handleToast () {
      // console.log(111111);
      this.$Toast({
        content: '这是文本提示'
      });
      // wx.showToast('tishi')
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  display: block;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
