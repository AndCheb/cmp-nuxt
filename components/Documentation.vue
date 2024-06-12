<template>
  <div class="container" id="docs">
    <h2 class="title">Документы</h2>

    <el-carousel />
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding-bottom: 300px;
}

.title {
  margin-bottom: 40px;
  font-size: 30px;
  text-align: center;
  padding-left: 58px;
}

@media (max-width: 795px) {
  .container {
    padding-bottom: 70px;
  }

  .title {
    padding: 0;
    font-size: 26px;
  }
}
</style>
