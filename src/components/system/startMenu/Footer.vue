<script setup lang="ts">
import shutdown from '@/assets/icons/shutdown.svg'
</script>

<template>
  <footer>
    <button id="user">
      <img src="https://randomuser.me/api/portraits/women/1.jpg" />
      <span>Bram Bekkers</span>
    </button>
    <button id="shut-down">
      <shutdown height="32" />
    </button>
  </footer>
</template>

<style scoped>
footer {
  max-height: 80px;
  height: 80px;
  background-color: rgba(174, 192, 236, 0.34);
  padding: 0 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  #user {
    border: none;
    border-radius: 4px;
    display: flex;
    gap: 12px;
    align-items: center;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0);
    transition: all 200ms ease-in-out;
    padding: 8px 12px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.46);
    }

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }

  #shut-down {
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background-color: rgba(0, 0, 0, 0);
    transition: all 200ms ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.46);
    }
  }
}
</style>
