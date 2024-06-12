<template>
  <div class="navmenu">
    <div class="navbar">
      <img src="../assets/ETC.png"
           height="18"
           width="69"/>

      <ul>

        <li><a href="#aboutCompany">О КОМПАНИИ</a></li>
        <li><a href="#services">УСЛУГИ</a></li>
        <li><a href="#contacts">КОНТАКТЫ</a></li>
      </ul>

      <div class="menu">
        <p>
          СВЯЗАТЬСЯ
        </p>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="9.25" stroke="#00A0E3" stroke-width="1.5"/>
          <path d="M15 10L10 10M10 10L5 10M10 10L10 5M10 10L10 15" stroke="#00A0E3" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="burger"
           v-if="!showMenu"
           @click="toggleMenu">
        <div/>
        <div style="background-color: rgba(0, 160, 227, 1);"/>
        <div/>
      </div>

      <svg v-else @click="toggleMenu" style="cursor: pointer" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="28" height="28" rx="14" stroke="#2B2A29" stroke-width="2"/>
        <path d="M7 15H23" stroke="#2B2A29" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>

    <div class="mobileMenu" v-show="showMenu">
      <div class="modal">
        <p><a href="#aboutCompany">О КОМПАНИИ</a></p>
        <p><a href="#services">УСЛУГИ</a></p>
        <p><a href="#contacts">КОНТАКТЫ</a></p>

        <div class="divider"/>

        <div class="callback">
          <p>
            СВЯЗАТЬСЯ
          </p>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="9.25" stroke="#00A0E3" stroke-width="1.5"/>
            <path d="M15 10L10 10M10 10L5 10M10 10L10 5M10 10L10 15" stroke="#00A0E3" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="callback">
          <p>
            СМОТРЕТЬ СЕРТИФИКАТЫ
          </p>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="9.25" stroke="#00A0E3" stroke-width="1.5"/>
            <path d="M15 10L10 10M10 10L5 10M10 10L10 5M10 10L10 15" stroke="#00A0E3" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="divider"/>

        <div class="social">


          <img src="../assets/svg/WhatsAppPng.png" height="30" width="32"/>


          <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 1L1 15L13.8947 16.8667M36 1L31.3947 29L13.8947 16.8667M36 1L13.8947 16.8667M13.8947 16.8667V27.1333L19.8797 21.0163" stroke="#00A0E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg width="47" height="28" viewBox="0 0 47 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.5962 26.8227V19.2123C32.7423 19.9917 34.3692 24.0147 37.6462 26.8227H46C43.9114 22.1911 40.7952 18.0887 36.8846 14.8226C39.8846 10.7193 43.0692 6.85682 44.6269 1H37.0346C34.0577 5.48144 32.4885 10.7308 27.5962 14.1922V1H16.5769L19.2077 4.23214V15.7509C14.9385 15.2581 12.0538 7.49867 8.92692 1H1C3.88462 9.77951 9.95385 29.0463 27.5962 26.8227Z" stroke="#00A0E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

</script>
<style scoped lang="scss">
.navmenu {
  background-color: white;
  z-index: 10;


  .mobileMenu {
    height: 90vh;
    width: 93%;
    position: absolute;
    z-index: 2;
    backdrop-filter: blur(5px);
    transition: 1s;

    .modal {
      display: flex;
      flex-direction: column;
      align-items: start;
      position: relative;
      bottom: 1px;
      right: 1px;
      padding-left: 1px;
      transition: 0.4s;
      background-color: #FFFFFF;
      width: 100%;


      .divider {
        height: 30px;
      }

      p {
        font-weight: 400;
        font-size: 14px;
        color: rgba(43, 42, 41, 1);
        margin: 0;
        padding: 0;
        margin-bottom: 16px;

        a {
          font-size: 15px;
          font-weight: 400;
          text-decoration: none;
          color: rgba(43, 42, 41, 1);

          &:active,
          &:hover {
            cursor: pointer;
            scale: 1.1;
            text-decoration: none;

            color: rgba(0, 160, 227, 1);
            text-decoration: underline;
          }
        }
      }

      .callback {
        display: flex;
        gap: 10px;
        font-weight: 600;
        text-decoration: underline;


        p {
          color: rgba(43, 42, 41, 1);
        }

        &:hover {
          cursor: pointer;
          scale: 1.1;
        }
      }

      .social {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;

        svg {

          &:hover {
            scale: 1.1;
            cursor: pointer;
          }
        }
      }
    }
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 33px;
    padding-bottom: 27px;
    background-color: #FFFFFF;

    ul {
      outline: none;
      display: flex;
      gap: 30px;
      list-style: none;
      @media (max-width: 700px) {
        display: none;
      }

      li {
        a {
          font-size: 14px;
          font-weight: 400;
          text-decoration: none;
          color: rgba(43, 42, 41, 1);

          &:active,
          &:hover {
            cursor: pointer;
            scale: 1.1;
            text-decoration: none;

            color: rgba(0, 160, 227, 1);
            text-decoration: underline;
          }
        }
      }
    }

    .menu {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 10px;
      font-weight: 600;
      text-decoration: underline;
      @media (max-width: 700px) {
        display: none;
      }

      &:hover {
        cursor: pointer;
        scale: 1.1;
      }
    }

    .burger {
      @media (min-width: 700px) {
        display: none;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      div {
        width: 30px;
        height: 3px;
        background: black;
        border-radius: 5px;

      }

      &:hover {
        scale: 1.1;
        cursor: pointer;
      }
    }
  }
}
</style>
