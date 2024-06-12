<script setup>
import { ref } from 'vue';

const viedoIsOpen = ref(false);

const videoToggle = () => {
  viedoIsOpen.value = !viedoIsOpen.value;

  document.body.classList.toggle('scroll-none');
};
</script>

<template>
  <div class="video-container" v-if="viedoIsOpen">
    <div class="video">
      <iframe
        src="https://www.youtube.com/embed/2EmYw-O-WLI?si=7ql26orEvorAJKmQ"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
      <button class="close-video" type="button" @click="videoToggle">X</button>
    </div>
  </div>

  <button class="video-about" type="button" @click="videoToggle">
    О сервисе <span>(1 мин. 27 сек.)</span>
  </button>
</template>

<style lang="scss" scoped>
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.79);
}

.video {
  position: relative;

  iframe {
    width: 560px;
    height: 315px;
  }
}

.close-video {
  position: absolute;
  top: -25px;
  right: 0px;
  z-index: 2;
  color: #fff;
  font-size: 20px;
}

.video-about {
  padding: 11px 20px;
  padding-left: 58px;
  font-size: 18px;
  border: 1px solid var(--color-tertiary);
  border-radius: 7px;
  transition: border-color 0.2s ease;

  background-image: url('~/assets/youtube.svg');
  background-repeat: no-repeat;
  background-position: 20px center;
  background-size: 32.5px 23px;

  &:hover {
    border-color: var(--color-quaternary);
  }

  span {
    font-size: 15px;
    color: var(--color-text-accent);
  }
}

@media (max-width: 580px) {
  .video {
    iframe {
      width: 350px;
      height: 210px;
    }
  }
}

@media (max-width: 390px) {
  .video {
    iframe {
      width: 260px;
      height: 157px;
    }
  }
}

@media (max-width: 340px) {
  button {
    font-size: 16px;
  }
}
</style>
