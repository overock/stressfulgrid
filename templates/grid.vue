<table @wheel.prevent="scroll">
  <thead>
    <tr>
      <th v-for="k in columns">
        {{k}}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="e in filteredData">
      <td v-for="k in columns">
        <span v-if="k[0]=='n' && e[k]>90" style="color:#f00;">{{e[k]}}</span>
        <span v-else-if="k[0]=='n' && e[k]>70" style="color:#aa0;">{{e[k]}}</span>
        <span v-else>{{e[k]}}</span>
      </td>
    </tr>
  </tbody>
</table>