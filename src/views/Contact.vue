<template>
  <div>
    <b-dropdown variant="primary">
      <template #button-content>
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
      </template>
      <b-dropdown-item-button>
        <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
        Locked <span class="sr-only">(Click to unlock)</span>
      </b-dropdown-item-button>
      <b-dropdown-item-button>
        <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
        Locked <span class="sr-only">(Click to unlock)</span>
      </b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>
