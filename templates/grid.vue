<table @wheel.prevent="scroll">
  <thead>
    <tr>
      <th v-for="(v, k, i) in columns" v-bind:width="widths[k]">
        {{v}}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="e in windowed">
      <td v-for="k in columns">
        <span v-if="k[0]=='n' && e[k]>90" style="color:#f00;">{{e[k]}}</span>
        <span v-else-if="k[0]=='n' && e[k]>70" style="color:#aa0;">{{e[k]}}</span>
        <span v-else>{{e[k]}}</span>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="6">avg</td>
      <td v-for="i in 10">{{summary[i-1]}}</td>
    </tr>
  </tfoot>
</table>