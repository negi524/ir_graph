<template>
  <header class="header">
    <ul class="nav mt-5">
      <li class="nav-item">
        <nuxt-link
          :to="{ path: '/bs', query: { name: $route.query.name, quarter: $route.query.quarter } }"
          class="nav-link active"
          >貸借対照表</nuxt-link
        >
      </li>
      <li class="nav-item">
        <nuxt-link
          :to="{ path: '/pl', query: { name: $route.query.name, quarter: $route.query.quarter } }"
          class="nav-link active"
          >損益計算書</nuxt-link
        >
      </li>
      <li class="nav-item">
        <nuxt-link
          :to="{ path: '/cs', query: { name: $route.query.name, quarter: $route.query.quarter } }"
          class="nav-link active"
          >キャッシュフロー計算書</nuxt-link
        >
      </li>
    </ul>
  </header>
</template>
