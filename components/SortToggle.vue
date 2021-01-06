<template>
  <div class="top-bar_right flex justify-end items-center lg:mb-20 mb-16">
    <div class="dropdown">
      <a
        id="dropdown-button"
        :class="{ 'is-open': isOpen }"
        @click.prevent="isOpen = !isOpen"
      >
        {{ sort }}
        <span class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="18"
            viewBox="0 0 16 20"
          >
            <metadata>
              <x:xmpmeta
                xmlns:x="adobe:ns:meta/"
                x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01 "
              >
                <rdf:RDF
                  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                >
                  <rdf:Description rdf:about="" /> </rdf:RDF
              ></x:xmpmeta>
            </metadata>
            <path
              id="arrow_down"
              data-name="arrow down"
              class="cls-1"
              d="M7,1.008V16.594L1.707,11.3A1,1,0,1,0,.293,12.715l7,7a1,1,0,0,0,1.414,0l7-7A1,1,0,0,0,14.293,11.3L9,16.594V1.008A1,1,0,0,0,7,1.008Z"
            />
          </svg>
        </span>
      </a>
      <div class="submenu" :class="{ 'is-open': isOpen }">
        <input id="orderby-input" type="hidden" name="orderby" />
        <ul class="orderby flex-col">
          <li v-for="option in sortOptions" :key="option.value">
            <a
              :class="{ active: option == sort }"
              @click.prevent="
                sort = option
                handleClick(option)
              "
              >{{ option }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  data() {
    return {
      sort: 'All',
      isOpen: false,
      sortOptions: [
        'All',
        // 'Popularity',
        // 'Newness',
        'Low to high',
        'Hight to low'
      ]
    }
  },
  methods: {
    handleClick(option) {
      this.isOpen = !this.isOpen
      this.sort = option
      this.$emit('sortEvent', option)
    }
  }
}
</script>

<style></style>
