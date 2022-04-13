<template>
    <div>
      <h1>Table</h1>
        <b-table :items="items" :fields="fields" class="w-50"></b-table>
        </div>
      </template>
      <script>
        export default {
          name:'VenkY',                                                                                                                                                                                                                                                        
          data() {
            return {
              items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson',_rowVariant: 'danger'},
                { age: 40, first_name: 'Thor', last_name: 'MacDonald', _cellVariants: { age: 'info', first_name: 'warning' }},
                { age: 29, first_name: 'Dick', last_name: 'Dunlap' }],
                fields:['age','first_name','last_name']
            }
          }
        }
      </script>