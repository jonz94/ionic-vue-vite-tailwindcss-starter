<script setup lang="ts">
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Tab2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="grid h-full place-content-center">
        <h1>Tab2</h1>
      </div>
    </ion-content>
  </ion-page>
</template>
