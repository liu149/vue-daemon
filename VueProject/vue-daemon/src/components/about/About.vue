<template>
  <div class="row mb-5">
    <div class="col-5">
      <ul class="list-group mb-5">
        <router-link tag="li" class="list-group-item" to="/about/contact">Contact</router-link>
        <router-link tag="li" class="list-group-item" to="/about/dilivery">Dilivery</router-link>
        <router-link tag="li" class="list-group-item" to="/about/history">History</router-link>
        <router-link tag="li" class="list-group-item" to="/about/orderingGuide">OrderingGuide</router-link>
      </ul>
    </div>
    <div class="clo-7">
      <router-view></router-view>
    </div>
  </div>
</template>
