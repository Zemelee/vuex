import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    list: [],//
    inputValue: "aaa",
    nextId: 5,
    view: 'all',//默认展示所有表项
  },
  // 只有mutation才有权利修改state
  mutations: {

    initList(state, value) {
      state.list = value
    },
    inputValueChange(state, value) {
      state.inputValue = value
    },
    //给state中的list添加表项
    addItem(state) {
      const obj = {
        id: state.nextId,
        info: state.inputValue.trim(),
        done: false
      }
      state.list.push(obj)
      state.nextId++
      state.inputValue = ''
    },
    removeItem(state, id) {
      //将目标id表项赋值给i
      const i = state.list.findIndex((x) => x.id === id)
      if (i !== -1) {
        //从索引i删除1项
        state.list.splice(i, 1)
      }
      console.log("remove");
    },
    //修改列表项中的选中状态
    changeStaus(state, value) {
      const i = state.list.findIndex(x => x.id === value.id)
      if (i !== -1) {
        state.list[i].done = value.status
      }
    },
    doneClean(state) {
      // 将未完成的表项x过滤出来
      const i = state.list.filter(x => x.done === false)
      console.log(i);
      state.list = i
    },
    //修改视图,key为字符串all、undone、done
    changeView(state, key) {
      state.view = key
    }

  },
  //对state数据加工形成新数据，类似computed
  getters: {
    undoneCount(state) {
      //将未完成的表项过滤出
      const i = state.list.filter(x => x.done == false)
      console.log("未完成的表项:", i);
      return i.length
    },
    viewHandel(state) {
      if (state.view == "all") {
        return state.list
      } else if (state.view == "undone") {
        return state.list.filter(x => x.done === false)
      } else if (state.view == "done") {
        return state.list.filter(x => x.done === true)
      }
    }
  },


  //异步操作
  actions: {
    getList(context) {
      axios.get('/list.json').then(res => {
        console.log("res:", res);
        context.commit('initList', res.data)
      })
    }
  },
  
})
