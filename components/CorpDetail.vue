<template>
  <div>
    <table v-if="hasAnyQuery" class="table table-bordered mt-5">
      <thead class="thead-light">
        <tr>
          <th scope="col">企業名</th>
          <th scope="col">決算時期</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ $route.query.name }}</td>
          <td>{{ $route.query.quarter }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    /**
     * クエリパラメータのいずれかが存在すればtrue
     */
    hasAnyQuery() {
      return this.$route.query.name || this.$route.query.quarter
    },
  },
}
</script>
