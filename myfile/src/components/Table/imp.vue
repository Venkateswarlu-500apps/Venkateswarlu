<template>
<div>
    <h1>Upload CSV</h1>
    <input type='file' @change='loadTextFromFile'>
    </div>
</template>

<script>
// csv parsing
import Papa from 'papaparse'

export default {
    name:'TableD',
    data() {
        return {

        }
    },
  methods: {
    loadTextFromFile (event) {
      if (!event.target.files[0]) {
        alert('Upload a file.')
      } else {
        let file = event.target.files[0]
        if (file) {
          let reader = new FileReader()
          let config = {
            delimiter: ',',
            newline: '',
            quoteChar: '"',
            escapeChar: '"',
            header: false,
            trimHeaders: false
          }
           //reader.onload = e => this.$emit('load', e.target.result)
           reader.onload = e => this.$emit('load', Papa.parse(e.event.target.result, config))
          // trace what was emitted
          reader.onload = function (event) {
            let results = Papa.parse(event.target.result, config)
            console.log('PAPA RESULT: ', results.data)
            console.log('ROWS:', event.target.result)
          }
          reader.readAsText(file)
        } else {
          alert('Please select a file to upload.')
        }
      }
    }
  }
}
</script>

<style>
</style>