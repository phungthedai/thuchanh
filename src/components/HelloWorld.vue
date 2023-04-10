<template>
  <div class="hello">
    <div class="showwOpstion">
      <div  class="showwOpstion-item" v-for="item in  listOpstion" :key="item.key">
        <OpstionInputs v-if="item.checked" :data="item" @deleteItem="deleteItemSHow" />
      </div>
    </div>
    <div class="listOpstion">
      <div class="listOpstion__item" v-for="item in listOpstion" :key="item.key">
      <input type="checkbox" :id="item.key" :name="item.name" :value="item.value" v-model="item.checked">
      <label :for="item.key">{{ item.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import OpstionInputs from './OpstionInput.vue'
export default {
  name: 'HelloWorld',
  components : {
    OpstionInputs
  },
  props: {
    msg: String
  },
  data() {
    return {
      listOpstion: [
        {
          name: 'item1',
          key: 1,
          value: 2,
          checked: true,
        },
        {
          name: 'item2',
          key: 2,
          value: 3,
          checked: true,
        },
        {
          name: 'item3',
          key: 3,
          value: 2,
          checked: false,
        },
        {
          name: 'item4',
          key: 4,
          value: 2,
          checked: false,
        },{
          name: 'item5',
          key: 5,
          value: 2,
          checked: false,
        }
      ]
    }
  },
  methods: {
    deleteItemSHow(id) {
      const a = this.listOpstion.find(x => x.key === id)
      a.checked = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  grid-area: content;
  /* background-color: aqua; */
  width: 100%;
}
.showwOpstion {
  display: flex;
}
</style>
