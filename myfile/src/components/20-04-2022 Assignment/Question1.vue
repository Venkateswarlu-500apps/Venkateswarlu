<template>
  <div>
    <input type="text" id="Search" @keyup="search()" />

    <ul id="UL">
   
      <li><a>agile</a></li>

      <li><a>crm</a></li>

      <li><a>mantra</a></li>

      <li><a>technologies</a></li>

      <li><a>500apps</a></li>

      <li><a>infinity</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VenkY",

  data() {
    return {
    }
  },

  methods: {

    search() {
      var input, filter, ul, li, a, i, txtValue;

      input = document.getElementById("Search");

      filter = input.value.toUpperCase();

      ul = document.getElementById("UL");

      li = ul.getElementsByTagName("li");

      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerHTML;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    },
  },
};
</script>