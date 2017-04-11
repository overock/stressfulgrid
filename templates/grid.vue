<div>
  <div>{{data.length}} rows total, {{filteredData.length}} filtered.</div>
  <table @wheel.prevent="scroll">
    <thead>
      <tr>
        <th v-for="(v, k, i) in columns" v-bind:width="widths[k]">
          {{v}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="t in windowed">
        <td>{{t.lastName}}</td>
        <td>{{t.firstName}}</td>
        <td>{{t.zipCode}}</td>
        <td>{{t.email}}</td>
        <td>{{t.phone}}</td>
        <td>{{t.company}}</td>
        <td><demo-bar :data="t"></demo-bar></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td class="foot" colspan="6">avg</td>
        <td class="foot" ><demo-bar :data="summary"></demo-bar></td>
      </tr>
    </tfoot>
  </table>
</div>