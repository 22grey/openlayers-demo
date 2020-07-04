<template>
  <div class="view-box info-box">
    <info-title title="用户信息" icon="el-icon-s-custom"></info-title>
    <div class="info-content">
      <div class="search-box">
        <el-button type="primary" size="small" @click="addUserBtn">新增</el-button>
        <el-button type="success" size="small" @click="exportUsers">导出</el-button>
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
        <el-table-column prop="username" label="账号"></el-table-column>
        <el-table-column prop="roles.name" label="角色"></el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small">禁用</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <div class="table-page">
        <el-pagination :total="10" background layout="total,prev, pager, next"></el-pagination>
      </div>
    </div>

    <!-- 弹窗信息 -->
    <el-dialog title="用户信息" width="35%" size="small" :visible.sync="dialogFormVisible">
      <el-form ref="ruleForm" :model="form" label-width="80px">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input class="input-width" v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-radio-group v-model="form.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input class="input-width" v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input class="input-width" v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select class="input-width" v-model="form.role_id" placeholder="请选择角色">
            <el-option
              v-for="item in roleOptions"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUserInfo">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 导入标题组件
import infoTitle from "../../../components/common/info-title";
import { getUesrs, addUser } from "../../../api/user";
import { getRoles } from "../../../api/role";
export default {
  inject: ["reload"],
  data() {
    return {
      // 表格数据
      tableData: [],
      // 弹窗标识
      dialogFormVisible: false,
      form: {
        username: "",
        gender: "男",
        phone: "",
        email: "",
        role_id: ""
      },
      formLabelWidth: "120px",
      // 角色信息
      roleOptions: []
    };
  },
  components: { infoTitle },
  mounted() {
    this.getUesrList();
  },
  methods: {
    // 新增按钮事件
    addUserBtn() {
      this.dialogFormVisible = true;
      this.getRolesData();
    },
    // 获取用户信息
    getUesrList() {
      getUesrs().then(res => {
        if (res.success) this.tableData = res.data;
      });
    },
    // 导出按钮事件
    exportUsers() {},
    // 获取角色信息
    getRolesData() {
      getRoles().then(res => {
        if (res.success) this.roleOptions = res.data;
      });
    },
    handleClick(data) {
      console.log(data);
      getUesrs(data.id).then(res => {
        console.log("用户数据", res);
      });
    },
    // 添加按钮信息
    addUserInfo() {
      addUser(this.form).then(res => {
        if (res.status == 200) {
          this.dialogFormVisible = false;
          this.$message.success("数据添加成功");
          // 重新加载页面数据
          this.reload();
        }
      });
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
.input-width {
  width: 450px;
}
</style>