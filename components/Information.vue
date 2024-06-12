<template>
  <section>
    <div class="section-wrapper">
      <VerificationForm></VerificationForm>
      <DemoPicture></DemoPicture>
    </div>
  </section>
</template>

<style scoped>
section {
  padding-top: 80px;
  padding-bottom: 105px;
}

.section-wrapper {
  display: flex;
  column-gap: 40px;
}

@media (max-width: 1115px) {
  .section-wrapper {
    align-items: center;
  }
}

@media (max-width: 825px) {
  .section-wrapper {
    flex-direction: column;
    row-gap: 40px;
  }
}

@media (max-width: 465px) {
  section {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .section-wrapper {
    gap: 0;
  }
}
</style>
