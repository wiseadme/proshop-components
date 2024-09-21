<script lang="ts" setup>
    import PlusMinusButtons from '~layer/components/Desktop/elements/PlusMinusButtons/PlusMinusButtons.vue'
    import type { IProduct } from '@proshop-app/types'

    defineProps<{
        product: IProduct
        route: any
        quantity?: number
        isFavorite: boolean
        linkTarget: string
    }>()

    defineEmits<{
        (event: 'toggle:favorite', value: { product: IProduct, state: boolean }): void
        (event: 'add:to-cart', value: IProduct): void
        (event: 'remove:from-cart', value: IProduct): void
    }>()

</script>
<template>
    <v-card
        class="product-card"
        style="width: 100%;"
        color="white"
    >
        <client-only>
            <div class="product-card__favorite d-flex justify-center align-center">
                <v-icon
                    :color="isFavorite ? 'primary' : 'grey lighten-1'"
                    icon="fas fa-heart"
                    clickable
                    @click="$emit('toggle:favorite', {product, state: isFavorite})"
                />
            </div>
        </client-only>
        <nuxt-link
            :to="route"
            class="product-card__link pa-2"
            :target="linkTarget"
            style="display: block; height: 100%"
        >
            <v-card-title class="product-card__header">
                <div class="product-card__image-wrapper">
                    <v-img
                        v-if="product.image || product.assets"
                        :src="product.image!"
                        :title="product.name"
                        :alt="product.name"
                        class="product-card__image app-border-radius"
                    />
                </div>
            </v-card-title>
            <v-card-content class="product-card__text grey--text text--darken-2">
                <div class="product-card__price">
                    <span class="product-card__cost">{{ product.price }}</span>
                    <span class="product-card__currency">{{ product.currency!.symbol }}</span>
                </div>
                <div class="product-card__info">
                    <span
                        class="product-card__title"
                        :title="product.name"
                    >
                        {{ product.name }}
                    </span>
                </div>
            </v-card-content>
        </nuxt-link>
        <v-card-actions class="product-card__btns py-4">
            <v-button
                v-if="!quantity"
                color="var(--secondary)"
                width="auto"
                class="app-border-radius"
                style="width: 100%"
                @click="$emit('add:to-cart', product)"
            >
                <div class="d-flex justify-center align-center">
                    <div class="product-card__btn-price">
                        <span class="ml-2 white--text">В корзину</span>
                    </div>
                </div>
            </v-button>
            <plus-minus-buttons
                v-else
                block
                :quantity="quantity"
                @minus="$emit('remove:from-cart', product)"
                @plus="$emit('add:to-cart', product)"
            />
        </v-card-actions>
    </v-card>
</template>
<style lang="scss" src="~layer/components/Desktop/elements/ProductCard/ProductCard.scss" scoped />
