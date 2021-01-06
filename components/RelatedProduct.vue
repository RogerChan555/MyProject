<template>
  <div class="related-upsell_products">
    <section class="related-products">
      <div class="max-w-screen-xl flex-grow mx-auto">
        <h6 class="text-center fadeInNeuron">Related products</h6>

        <div class="flex flex-wrap relative overflow-hidden xxl:-mx-8 -mx-4">
          <div
            v-for="product in relatedProducts"
            :key="product.name"
            class="w-full sm:w-1/2 xl:w-1/3 product xxl:px-8 xxl:pb-16 px-4 pb-8"
          >
            <ProductLayout :product="product" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    relatedProducts: {
      required: true,
      type: Array
    }
  }
}
</script>

<style></style>
