<template>
  <div>
      <a-input :value="inputValue" @change="handleInputChange" placeholder="请输入任务" class="my_ipt" />
      <a-button type="primary" @click="addItemToList">添加事项</a-button>

      <a-list bordered :dataSource="viewHandel" class="dt_list">
        <a-list-item slot="renderItem" slot-scope="item">
          <!-- 复选框 -->
          <a-checkbox @change="handleChange($event,item.id)" :checked="item.done">{{ item.info }}</a-checkbox>
          <!-- 删除链接 -->
          <a slot="actions" @click="removeItemById(item.id)">删除</a>
        </a-list-item>

        <!-- footer区域 -->
        <div slot="footer" class="footer">
          <!-- 未完成的任务个数 -->
          <span>{{$store.getters.undoneCount}}条剩余</span>
          <!-- 操作按钮 -->
          <a-button-group>
            <a-button @click="changList('all')" :type="view == 'all' ? 'primary' : 'default'">全部</a-button>
            <a-button @click="changList('undone')" :type="view == 'undone' ? 'primary' : 'default'">未完成</a-button>
            <a-button @click="changList('done')" :type="view == 'done' ? 'primary' : 'default'">已完成</a-button>
          </a-button-group>
          <!-- 把已经完成的任务清空 -->
          <a @click="clean">清除已完成</a>
        </div>
      </a-list>
    </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  name: "app",
  methods:{
    //变更state中的inputValue
    handleInputChange(e){
      console.log("e.target.value",e.target.value);
      this.$store.commit('inputValueChange',e.target.value);
      //为state中的
      console.log("state",this.$store.state.inputValue);
    },
    addItemToList(){
      if(this.inputValue.trim().length<=0){
        return this.$message.warning('文本框内容不能为空')
      }
      //changeView
      this.$store.commit('addItem')
    },
    removeItemById(itemId){
      console.log(itemId);
      this.$store.commit('removeItem',itemId)
    },
    handleChange(e,id){
      console.log(e,id);
      const param = {
        id:id, //被点击的表项id
        status:e.target.checked//选中状态
      }
      this.$store.commit('changeStaus',param)
    },
    clean(){
      this.$store.commit('doneClean')
    },
    changList(key){
      this.$store.commit('changeView',key)
    }
  },
  created() {
    //dispatch：用于调用某个action函数
    this.$store.dispatch("getList");
  },
  computed: {
    ...mapState(["list","inputValue","view"]),
    ...mapGetters(["viewHandel"]),
  },
};
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>