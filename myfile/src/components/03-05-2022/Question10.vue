<template>
  <div>
    <h1>
      Question10:Removing 'null', '0', '""', 'false', 'undefined' and 'NaN'values from an array
    </h1>
    <button @click="fun()">Click</button><br /><br />
    Output:{{ res }}
  </div>
</template>

<script>
export default {
  name: "VenkY",
  data() {
    return {
      res: " ",
    };
  },
  methods: {
    fun() {
      function filter_array(test_array) {
        let index = -1;
        const arr_length = test_array ? test_array.length : 0;
        let resIndex = -1;
        const result = [];
        while (++index < arr_length) {
          const value = test_array[index];
          if (value) {
            result[++resIndex] = value;
          }
        }
        return result;
      }
      return (this.res = filter_array([NaN,0,15,false,-22,"",undefined,47,null,]));
    }
  }
}
</script>