<template>
  <div id="app">
    <div class="top">
      <div class="top_shang">
        <img src="/static/logo.347f76cd.png" class="top_img" alt />
        <span class="top_text">中文</span>
      </div>
      <div class="top_xia" :class="{marquee_top:animate}" v-for="(item,index) in news" :key="index">
        <span>{{ item.name}}</span>
      </div>
    </div>
    <div class="layout">
      <!-- 左部 -->
      <div class="right flex_center">
        <!-- 头像 -->
        <div class="flex_space right_tou">
          <img src="/static/head.cbe0130e.png" class="touxiang" />
          <div class="flex_colum">
            <span class="text_white">ID:5001</span>
            <span class="flex_row">
              <div>
                <img src="/static/head.cbe0130e.png" class="smallTubiao" alt />
              </div>
              <div class="optice">
                <img src="/static/head.cbe0130e.png" class="smallTubiao" alt />
                <span class="optice_text">1001</span>
              </div>
              <div>
                <img src="/static/loginOut.9f49e9bc.png" class="smallTubiao" alt />
              </div>
            </span>
          </div>
        </div>
        <!-- 菜单列表 -->

        <div
          class="tab flex_right"
          v-for="(item,index) in rightData"
          :key="index"
          @click="clickTab(index)"
        >
          <img :src=" tabIndex=== index? item.select: item.img" class="tabImg" />
          <span :class="tabIndex===index?'text':'active_text'">{{ item.text }}</span>
        </div>
      </div>

      <!-- 右部 -->
      <div class="left">
        <div class="row">
          <router-link to="cp" class="jc_ic">
            <img src="/static/cp-s.9ae3959a.png" alt class="small" />
            <span>99999.99</span>
          </router-link>
          <router-link to="ap" class="jc_ic">
            <img src="/static/ap-s.e26bcc68.png" alt class="small" />
            <span>99999.99</span>
          </router-link>
          <router-link to="pp" class="jc_ic">
            <img src="/static/pp-l.51fc4cf0.png" alt class="small" />
            <span>99999.99</span>
          </router-link>
          <router-link to="mp" class="jc_ic">
            <img src="/static/mp-s.d52815fe.png" alt class="small" />
            <span>99999.99</span>
          </router-link>
          <router-link to="tk" class="jc_ic">
            <img src="/static/tk-l.38b905c1.png" alt class="small" />
            <span>99999.99</span>
          </router-link>
          <router-link to="imt" class="jc_ic">
            <img src="/static/imt-s.4c905e17.png" alt class="small" />
            <span>99999.99</span>
          </router-link>
        </div>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      rightData: [
        {
          img: "/static/account.247068ce.png",
          select: "/static/account.247068ce.png",
          text: "首页"
        },
        {
          img: "/static/account.247068ce.png",
          select: "/static/account.247068ce.png",
          text: "个人信息"
        },
        {
          img: "/static/team.3e21fa5f.png",
          select: "/static/team1.4f2eaba0.png",
          text: "我的团队"
        },
        {
          img: "/static/transfer.8826e495.png",
          select: "/static/transfer1.86216648.png",
          text: "转账充值"
        },

        {
          img: "/static/QueuingManager.c1cb014e.png",
          select: "/static/QueuingManager1.76060f57.png",
          text: "公排交易"
        },
        {
          img: "/static/account.247068ce.png",
          select: "/static/account.247068ce.png",
          text: "CP交易"
        },
        {
          img: "/static/Details.6a940b29.png",
          select: "/static/Details1.1ab67b46.png",
          text: "积分明细"
        },
        {
          img: "/static/IMTMoneyTree.5c8a8e90.png",
          select: "/static/IMTMoneyTree1.f8e019e1.png",
          text: "IMT金钱树"
        },
        {
          img: "/static/account.247068ce.png",
          select: "/static/account.247068ce.png",
          text: "IMT市场"
        },
        {
          img: "/static/account.247068ce.png",
          select: "/static/account1.631397e2.png",
          text: "子账号管理"
        }
      ], //彩单列表
      tabIndex: 0, //选中index
      animate: false,
      news: [
        {
          name: "对接口白色的可看出"
        },
        {
          name: "就的女会计师你开饭店"
        },
        {
          name: "机不可失打开的方式"
        },
        {
          name: "接口部分都看见你发靠的就是南方"
        },
        {
          name: "开办费离开你浪费"
        },
        {
          name: "举报你放假你发个技能奉公守法"
        }
      ]
    };
  },
  methods: {
    clickTab(index) {
      console.log(123);
      this.tabIndex = index;
    },
    showMarquee() {
      this.animate = true;
      setTimeout(() => {
        this.news.push(this.news[0]);
        this.news.shift();
        this.animate = false;
      }, 500);
    }
  },
  created() {
    setInterval(()=>{
      this.showMarquee();
    },3000)

    
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  color: #2c3e50;
  background-image: url("/static/login-bg.6e01a14c.jpg");
  width: 100%;
  height: 100vh;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.marquee_top {
  transform: all 0.5s;
  margin-top: 30px;
}
.layout {
  width: 60%;
  height: 85%;
  background-color: #122533;
  display: flex;
  flex-direction: row;
}
.top {
  height: 15%;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.top_text {
  color: white;
  font-size: 20px;
}
.top_shang {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 60%;
}
.top_xia {
  margin-top: 20px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  width: 60%;
}
.top_img {
  height: 30px;
  background-size: 100%;
}
.right {
  width: 150px;
  margin-top: 10px;
}
.left {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.tabImg {
  width: 20px;
  height: 20px;
  margin-left: 10%;
}
.active_text {
  margin-left: 10%;
  color: #76532d;
  font-size: 15px;
}
.text {
  margin-left: 10%;
  color: white;
  font-size: 15px;
}
.tab {
  background-color: #d2a32a;
  border-radius: 10px;
  margin: 5px;
  width: 100%;
  height: 40px;
  cursor: pointer;
}
.touxiang {
  height: 50px;
  width: 50px;
}
.smallTubiao {
  width: 25px;
  height: 25px;
  margin: 0 2px;
  color: white;
}
.right_tou {
  width: 150px;
}
.small {
  width: 20px;
  height: 20px;
  margin: 0 2px;
  margin-right: 5px;
}
.optice {
  position: relative;
}
.optice_text {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 1px;
  color: white;
  background-color: #d2a32a;
  border-radius: 10px;
}

.kuang_text {
  position: relative;
  background-color: white;
  margin: 10px;
}

.right_staus {
  position: absolute;
  bottom: 0;
  left: -40px;
}
.left_staus {
  position: absolute;
  bottom: 0;
  right: -40px;
}
.textarea {
  height: 50px;
}

.cha {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}
.fujian {
  display: flex;
  align-items: center;
  margin: 0 10px;
}
.send_fa {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.shangchuang {
  background-color: #63a4bd;
  border-radius: 10px;
  color: white;
  width: 80px;
  text-align: center;
  cursor: pointer;
  font-size: 10px;
  height: 20px;
}
.send_button {
  border-radius: 10px;
  background-color: #ce6d24;
  color: white;
  width: 80px;
  text-align: center;
  margin: 0 10px;
  cursor: pointer;
  font-size: 10px;
  height: 20px;
}

.flex_center {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.flex_right {
  display: flex;
  justify-content: right;
  align-items: center;
}
.flex_space {
  display: flex;
  justify-content: space-between;
}
.flex_colum {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.flex_row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.row {
  display: flex;
  flex-direction: row;
}
.row_right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.row_left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.text_white {
  color: white;
}
/* .top{
  height: 150px;
} */
.jc_ic {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.disNone {
  display: none;
}
</style>
