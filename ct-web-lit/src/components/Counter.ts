import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('pw-counter')
export class Counter extends LitElement {
  render() {
    return html``;
  }
}

// Example vue implementation:

// <template>
//   <div @click="$emit('submit', 'hello')">
//     <div id="props">{{ count }}</div>
//     <div id="remount-count">{{ remountCount }}</div>
//     <slot name="main" />
//     <slot />
//   </div>
// </template>

// <script lang="ts">
// let remountCount = 0
// </script>

// <script lang="ts" setup>
// defineProps<{ count?: number }>()

// remountCount++
// </script>
