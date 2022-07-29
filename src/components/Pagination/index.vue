<template>
  <div class="pagination">
    <h1>{{ startAndEnd }}</h1>
    <button @click="$emit('currentPage', pageNo - 1)" :disabled="pageNo == 1">
      上一页
    </button>
    <button v-if="startAndEnd.start > 1" @click="$emit('currentPage', 1)">
      1
    </button>
    <button v-if="startAndEnd.start > 2">.....</button>

    <!-- 中间连续页码的地方:v-for、数组、对象、数字、字符串 -->
    <button
      v-for="page in startAndEnd.end"
      :key="page"
      v-if="page >= startAndEnd.start"
      @click="$emit('currentPage', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-if="startAndEnd.end < totalPage - 1">......</button>
    <button
      v-if="startAndEnd.end < totalPage"
      @click="$emit('currentPage', totalPage)"
    >
      {{ totalPage }}
    </button>

    <button
      @click="$emit('currentPage', pageNo + 1)"
      :disabled="pageNo == totalPage"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
  <!-- <div>
    <div class="fr page">
      <div class="sui-pagination clearfix">
        <ul>
          <li class="prev disabled">
            <a href="#">«上一页</a>
          </li>
          <li class="active">
            <a href="#" v-if="pageNo > 3">1</a>
          </li>
          <li class="active">
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">{{ startAndEnd.start }}</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">{{ startAndEnd.end }}</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">{{ totalPage }}</a>
          </li>
          <li class="next">
            <a href="#">下一页»</a>
          </li>
        </ul>
        <div><span>共10页&nbsp;</span></div>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  data() {
    return {
      show: true,
    };
  },
  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startAndEnd() {
      const { pageNo, continues, totalPage } = this;
      let start = 0,
        end = 0,
        num = Math.ceil(continues / 2);
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else if (pageNo - num < 0) {
        start = 1;
        end = continues;
      } else if (pageNo + num > totalPage) {
        start = totalPage - continues + 1;
        end = totalPage;
      } else {
        start = pageNo - num;
        end = pageNo + num;
      }
      console.log(start);
      console.log(end);
      return { start, end };
    },
  },
};
</script>
<style scoped>
.pagination{
    text-align: center;
}
.pagination button {
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  outline: none;
  border-radius: 2px;
  padding: 0 4px;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border: 0;
}
.pagination button[disabled] {
  color: #c0c4cc;
  cursor: not-allowed;
}
.pagination button .active {
  cursor: not-allowed;
  background-color: #409eff;
  color: #fff;
}

/* .page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;
}
.page .sui-pagination {
  margin: 18px 0;
}
.page .sui-pagination ul {
  margin-left: 0;
  margin-bottom: 0;
  vertical-align: middle;
  width: 490px;
  float: left;
}
.page .sui-pagination ul li {
  line-height: 18px;
  display: inline-block;
}
.page .sui-pagination ul li a {
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e0e9ee;
  margin-left: -1px;
  font-size: 14px;
  padding: 9px 18px;
  color: #333;
}
.page .sui-pagination ul li.active a {
  background-color: #fff;
  color: #e1251b;
  border-color: #fff;
  cursor: default;
}
.page .sui-pagination ul li.prev a {
  background-color: #fafafa;
}
.page .sui-pagination ul li.disabled a {
  color: #999;
  cursor: default;
}
.page .sui-pagination ul li.dotted span {
  margin-left: -1px;
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  font-size: 14px;
  border: 0;
  padding: 9px 18px;
  color: #333;
}
.page .sui-pagination ul li.next a {
  background-color: #fafafa;
}
.page .sui-pagination div {
  color: #333;
  font-size: 14px;
  float: right;
  width: 241px;
} */
</style>
