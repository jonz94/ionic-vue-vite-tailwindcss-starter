<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { ref } from 'vue'
import AboutModal from '../components/AboutModal.vue'

const modalIsOpen = ref(false)

const showModal = () => {
  modalIsOpen.value = true
}

const closeModal = () => {
  modalIsOpen.value = false
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="grid h-full place-content-center">
        <div class="flex flex-col space-y-4 text-center">
          <h1>Tab3</h1>
          <ion-modal
            :is-open="modalIsOpen"
            @didDismiss="closeModal()"
            :presenting-element="($parent as any).$refs.ionRouterOutlet"
          >
            <about-modal @onClose="closeModal" />
          </ion-modal>
          <ion-button @click="showModal">Open Modal</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
