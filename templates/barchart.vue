<svg style="width:500px; height:20px;" viewBox="0 0 50 100" preserveAspectRatio="none" shape-rendering="crispEdges">
  <path v-for="i in 50" 
      v-bind:stroke="hsl(i)"
      v-bind:d="'M' + i + ',100 l0,-' + at(i) + ' z'"  />
</svg>