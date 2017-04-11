document.addEventListener('DOMContentLoaded', function() {
  Vue.component('demo-grid', {
    template: templer('./templates/grid.vue'),//;'#grid-template',
    props: {
      data: Array,
      columns: Array,
      widths: Array,
      filterKey: String,
      rowIndex: Number
    },
    computed: {
      filteredData: function() {
        console.log('filteredData computed');
        return this.data.filter(function(v, i) { return v.n01>40 && v.n02>30 && v.n03>20 && v.n04>10; });
      },
      windowed: function() {
        console.log('windowed computed');
        return this.filteredData.filter(function(v, i) { return i>=this.rowIndex && i<this.rowIndex+30; }, this);
      },
      summary: function() {
        console.log('summary computed');
        var keys = ['n01','n02','n03','n04','n05','n06','n07','n08','n09','n10',
                    'n11','n12','n13','n14','n15','n16','n17','n18','n19','n20',
                    'n21','n22','n23','n24','n25','n26','n27','n28','n29','n30',
                    'n31','n32','n33','n34','n35','n36','n37','n38','n39','n40',
                    'n41','n42','n43','n44','n45','n46','n47','n48','n49','n50'];
        var sum = this.filteredData.reduce(function(p, c) {
          keys.forEach(function(k) { p[k] = (p[k]|0) + c[k]; });
          return p;
        }, {});
        
        keys.forEach(function(k) {
          sum[k] /= this.filteredData.length;
        }, this);
        
        return sum;
      }
    },
    methods: {
      sortBy: function(k) {
        this.sortKey = k;
        this.sortOrders[k] = this.sortOrders[k] * -1;
      },
      scroll: function(e) {
        this.rowIndex = Math.min(Math.max(this.rowIndex+e.deltaY/24, 0), this.filteredData.length-30);
      }
    }
  });
  
  Vue.component('demo-bar', {
    template: templer('./templates/barchart.vue'),
    props: { data: Object },
    methods: {
      at: function(i) { return this.data[(i<10? 'n0' : 'n') + i]; },
      hsl: function(i) { return 'hsl(' + (200 - this.at(i)*2) + ', 100%, 50%)'; }
    }
  });
   
  var demo = new Vue({
    el: '#demo',
    data: {
      searchQuery: '',
      gridData: testData,
      gridColumn: [ 'lastName','firstName', 'zipCode','email','phone','company', 'chart' ],
      gridWidths: [ 100, 100, 100, 300, 200, 320, 510],
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
    testData.length>=100000? testData.splice(0, 13333): testData.splice(0, 3333);
    

    console.log('fetch complete. elapsed time: ' + (new Date() - startDate));

    setTimeout(loadData, 1000);
  }, 'json');
}