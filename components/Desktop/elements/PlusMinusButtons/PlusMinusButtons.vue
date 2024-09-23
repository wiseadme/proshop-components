<script lang="ts" setup>
    const { block = false } = defineProps<{
        block?: boolean
    }>()

    defineEmits<{
        (event: 'plus'): void
        (event: 'minus'): void
    }>()

    const classes = computed(() => ({
        'pm-buttons': true,
        'pm-buttons--block': block,
    }))

</script>
<template>
    <div :class="classes">
        <v-button
            color="secondary app-border-radius"
            @click="$emit('minus')"
        >
            <v-icon
                size="12"
                icon="fas fa-minus"
            />
        </v-button>
        <div class="mx-2">
            <slot></slot>
        </div>
        <v-button
            color="primary app-border-radius"
            @click="$emit('plus')"
        >
            <v-icon
                size="12"
                icon="fas fa-plus"
            />
        </v-button>
    </div>
</template>
<style lang="scss" scoped>
    .pm-buttons {
        display: flex;
        align-items: center;

        &--block {
            width: 100%;
            justify-content: space-between;
        }
    }
</style>
