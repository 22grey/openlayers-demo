<template>
  <div class="view-box info-box">
    <info-title title="角色信息" icon="el-icon-s-custom"></info-title>
    <div class="info-content">
      <div class="search-box">
        <el-button type="primary" size="small" @click="addUser">新增</el-button>
        <el-button type="success" size="small" @click="exportUser">导出</el-button>
      </div>
      <!-- 表格 -->
      <el-table
        class="user-table"
        size="small"
        :data="tableData"
        stripe
        :header-cell-style="{background:'#F5F7FA',color:'#606266',}"
        border
        height="90%"
      >
        <el-table-column prop="name" label="角色名称"></el-table-column>
        <el-table-column prop="desc" label="角色描述"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <!-- <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>-->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small">禁用</el-button>
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">分配角色</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <div class="table-page">
        <el-pagination :total="10" background layout="total,prev, pager, next"></el-pagination>
      </div>
    </div>

    <!--  -->
    <el-dialog title="提示" :visible="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>-->
    </el-dialog>
  </div>
</template>

<script>
// 导入标题组件
import infoTitle from "../../../components/common/info-title";
import { getRoles } from "../../../api/role";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false
    };
  },
  components: { infoTitle },
  mounted() {
    getRoles()
      .then(res => {
        this.tableData = res.data;
      })
      .catch(err => {});
  },
  methods: {
    addUser() {
      console.log("------------");
      this.dialogVisible = true;
    },
    exportUser() {
      console.log("--------++++");
    }
  }
};
</script>

<style scoped>
.view-box {
  padding: 10px;
}
.info-content {
  overflow-y: auto;
  padding: 0.5rem;
}
.user-table {
  height: 100%;
  overflow-y: auto;
}
.search-box {
  margin: 0rem 0.5rem 0.5rem 0.5rem;
  text-align: right;
}
.table-page {
  margin: 0.5rem -5px 0rem 0rem;
  text-align: right;
}
</style>