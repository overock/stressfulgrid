document.addEventListener('DOMContentLoaded', function() {
  Vue.component('demo-grid', {
    template: templer('./templates/grid.vue'),//;'#grid-template',
    props: {
      data: Array,
      columns: Array,
      filterKey: String,
      rowIndex: Number
    },
    computed: {
      filteredData: function() {
        var $this = this;
        var ret = this.data.filter(function(v, i) { return v.n01>=50; })
                           .filter(function(v, i) { return i>=$this.rowIndex && i<$this.rowIndex+10; });
        return ret;
      }
    },
    methods: {
      sortBy: function(k) {
        this.sortKey = k;
        this.sortOrders[k] = this.sortOrders[k] * -1;
      },
      scroll: function(e) {
        demo.gridIndex += e.deltaY/24;
        if(demo.gridIndex<0) demo.gridIndex = 0;
      }
    }
  });
   
  var demo = new Vue({
    el: '#demo',
    data: {
      searchQuery: '',
      gridData: testData,
      gridColumn: [ 'lastName','firstName','address','zipCode','email','phone','company','catchPhrase','signature',
                    'n01','n02','n03','n04','n05','n06','n07','n08','n09','n10',
                    'n11','n12','n13','n14','n15','n16','n17','n18','n19','n20',
                    'n21','n22','n23','n24','n25','n26','n27','n28','n29','n30',
                    'n31','n32','n33','n34','n35','n36','n37','n38','n39','n40',
                    'n41','n42','n43','n44','n45','n46','n47','n48','n49','n50' ],
      gridIndex: 0
    },
    mounted() {
      loadData();
    }
  });
});

var loadIndex = 0, testData = [], loadData = function() {
  console.log('fetch start');
  var startDate = new Date();
  $.get('./d/' + (loadIndex++%10) + '.json', function(data) {
    Array.prototype.push.apply(testData, data);
    testData.shift();
    if(testData.length>=100000) testData.splice(0, 13333);

    console.log('fetch complete. elapsed time: ' + (new Date() - startDate));

    setTimeout(loadData, 1000);
  }, 'json');
}