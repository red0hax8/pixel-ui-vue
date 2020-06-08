<template>
  <div class="pixelDropInput">
    <!-- 图片上传窗口 -->
    <div class="uploadBox">
      <div
        :class="img?'icon hiddenIcon':'icon'"
        ref="select_frame"
        :style="{background:'url('+img+') no-repeat 100%/100%'}"
      >
        +
        <div id="selectImgFile">
          <label for="images">
            <input type="file" accept="image/pjpeg, image/png" name="images" @change="uploadFile" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pixelDropInput",
  props: {
    borderStyle: {
      type: String,
      default: "2px dashed red"
    },
    img: {
      type: String
    },
    accept: {
      type: String,
      default: "image/pjpeg, image/png"
    }
  },
  mounted() {
    // 拖动事件
    this.initDropFn();
  },
  data() {
    return {
      imgSrc: ""
    };
  },
  methods: {
    // 图片上传
    uploadFile(e) {
      if (e.target.files.length === 1) {
        const data = e.target.files[0];
        this.getImgURL(data);
      }
    },
    // 监听拖动事件
    initDropFn() {
      this.$refs.select_frame.ondragleave = e => {
        //阻止离开时的浏览器默认行为
        e.preventDefault();
      };
      this.$refs.select_frame.ondrop = e => {
        //阻止拖放后的浏览器默认行为
        e.preventDefault();
        // 获取文件对象
        const data = e.dataTransfer.files;
        // 检测是否有文件拖拽到页面
        if (data.length !== 1) {
          alert("一次只能上传一个文件");
          return;
        }
        this.fileData = data[0];
        this.getImgURL(data[0]);
      };
      //阻止拖入时的浏览器默认行为
      this.$refs.select_frame.ondragenter = e => {
        e.preventDefault();
        this.$refs.select_frame.border = this.borderStyle;
      };
      //阻止拖来拖去的浏览器默认行为
      this.$refs.select_frame.ondragover = e => {
        e.preventDefault();
      };
    },
    getImgURL(datas) {
      let img = URL.createObjectURL(datas);
      this.$emit("update:img", img);
    }
  }
};
</script>
<style lang="scss" scoped>
  @import "./css/index.scss";
</style>