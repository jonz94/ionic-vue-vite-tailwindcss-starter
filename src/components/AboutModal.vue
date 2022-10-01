<script setup lang="ts">
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/vue'
import { close } from 'ionicons/icons'

defineEmits<{
  (e: 'onClose'): void
}>()
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button @click="$emit('onClose')">
          <ion-icon :icon="close" slot="icon-only" />
        </ion-button>
      </ion-buttons>
      <ion-title>Title</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <div class="flex justify-center">
      <h1 class="mt-8">content</h1>
    </div>
  </ion-content>
</template>
