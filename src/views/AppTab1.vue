<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="grid h-full place-content-center">
        <ion-button router-link="/tabs/tab2" routerDirection="root">Go To Tab2</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>
