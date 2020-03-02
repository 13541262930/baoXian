<template>
  <div class="index">
    <!-- 右边框 -->
    <div class="right_kuang">
      <!-- 右边 -->
      <div v-for="(item,index) in chatList" :key="index">
        <div v-if="item.issend" class="row_right">
          <div class="colum kuang_text">
            <span v-html="item.text">
            </span>
            <span>附件</span>
            <span class="right_staus">{{ item.staus?'已读':'未读' }}</span>
          </div>
          <img :src="item.img" class="touxiang" />
        </div>
        <div class="row_left" v-else>
        <img :src="item.img" class="touxiang" />
        <div class="colum kuang_text">
          <span v-html="item.text">
            </span>
          <span>附件</span>
          <span class="left_staus">{{ item.staus?'已读':'未读' }}</span>
        </div>
      </div>
      </div>

      <!-- 左边 -->
      
    </div>
    <textarea class="textarea" name id cols="30" rows="10"></textarea>
    <div class="send_kuang">
      <div>附件列表</div>
      <div class="row">
        <span class="fujian">
          AP充值截图.jpg
          <img src="/static/close_normal.34268eb1.png" class="cha" alt />
        </span>
        <span class="fujian">
          AP充值截图.jpg
          <img src="/static/close_normal.34268eb1.png" class="cha" alt />
        </span>
      </div>
      <div class="row send_fa">
        <div class="shangchuang jc_ic" @click="uploadImg()">上传附件</div>
        <div class="send_button jc_ic">发送</div>
      </div>
    </div>
    <input type="file" ref="inputFile" class="disNone" accept="image/*" @change="getFile" />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      chatList: [
        {
          issend: true,
          img: "/static/head.cbe0130e.png",
          text: "请问我进行了APP充值，什么时候才能到账了？ <br />附件为我进行的充值凭证。",
          staus: true
        },
        {
          issend: false,
          img: "/static/head.cbe0130e.png",
          text: "请问我进行了APP充值，什么时候才能到账了？ <br />附件为我进行的充值凭证。",
          staus: true
        },
        {
          issend: true,
          img: "/static/head.cbe0130e.png",
          text: "请问我进行了APP充值，什么时候才能到账了？ <br />附件为我进行的充值凭证。",
          staus: true
        }
      ],
      img: ""
    };
  },
  methods: {
    uploadImg() {
      this.$refs.inputFile.click();
    },
    getFile(e) {
      const files = event.target.files;
      let filename = files[0].name; //只有一个文件
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid image!"); //判断图片是否有效
      }
      const fileReader = new FileReader(); //内置方法new FileReader()   读取文件
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      console.log(this.image);
    }

    //  上传接口
    // onUpload (event) {
    //   event.preventDefault();
    //   let fd = new FormData()
    //   fd.append('file',this.image)                                             //(       第二次有效打印           )
    //   this.$api.post(this.postUrl,fd).then( res => {                 //第一个参:this.postUrl就是上面保存好的要上传的地址
    //   console.log(res)                                               //(      第三次有效打印    )
    //     if(res.status === 200 && res.data ){
    //       let data = res.data.data
    //       let imageUrl = data.url                                        //上传成功 , 后台返回了一个图片地址
    //       this.imageUrl = imageUrl
    //     }
    //    }).catch(error => {
    //       console.log(error)
    //   })
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
index {
  color: #122533;
  height: 500px;
  width: 100%;
}
.right_kuang {
  border: 1px solid;
  height: 400px;
  margin-top: 10px;
}
.row_right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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
.touxiang {
  height: 50px;
  width: 50px;
}
.row_left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.send_kuang {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
}
.textarea {
  width: 100%;
  height: 30px;
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
</style>
