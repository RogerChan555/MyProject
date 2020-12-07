<template>
  <div v-if="error.statusCode === 404" class="error404-holder">
    <div class="container">
      <div class="row flex align-items-center justify-content-center">
        <div class="error-text col-lg-3 offset-lg-1 text-center">
          <h1>404</h1>
          <p>
            The page you were looking for couldn't be found. The page could be
            removed or you misspelled the word while searching for it.
          </p>
          <NuxtLink to="/" class="button shadow small light-blue soma-link"
            ><span>Go Back</span></NuxtLink
          >
        </div>
        <div class="waves col-lg-6 offset-lg-1">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 434.5 230.2"
            style="enable-background: new 0 0 434.5 230.2"
            xml:space="preserve"
          >
            <g id="boat">
              <defs>
                <path
                  id="SVGID_1_"
                  d="M80.2,112.2c0,0,2.8,10.2,15.5,10.2s14.9-10.2,14.9-10.2s2.8,10.2,15.5,10.2s14.9-10.2,14.9-10.2
                                    s2.8,10.2,15.5,10.2s14.9-10.2,14.9-10.2s2.8,10.2,15.5,10.2s14.9-10.2,14.9-10.2s2.8,10.2,15.5,10.2s14.9-10.2,14.9-10.2
                                    s2.8,10.2,15.5,10.2c12.6,0,14.9-10.2,14.9-10.2s2.8,10.2,15.5,10.2s14.9-10.2,14.9-10.2s2.8,10.2,15.5,10.2
                                    s14.9-10.2,14.9-10.2V0H62.3v40L80.2,112.2z"
                ></path>
              </defs>
              <clipPath id="SVGID_2_">
                <use xlink:href="#SVGID_1_" style="overflow: visible"></use>
              </clipPath>
              <g id="transform" class="st0">
                <g class="boat-reverse">
                  <g class="boat-rotate">
                    <g class="boat">
                      <polygon
                        class="st1"
                        points="128.3,22.2 134,27.3 197.7,101.6 262,120.3 271.3,123.9 223.6,153.4 146.7,119.6 				"
                      ></polygon>
                      <polygon
                        class="st2"
                        points="128.3,22.2 203.1,115.7 271.3,123.9 209.7,90.4 				"
                      ></polygon>
                      <polygon
                        class="st3"
                        points="203.1,115.7 271.3,123.9 209.7,90.4 				"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="waves">
              <path
                class="st4"
                d="M74,63.9c0,0-0.9,3.9-5.8,3.9s-6-3.9-6-3.9s-0.9,3.9-5.8,3.9s-6-3.9-6-3.9"
              ></path>
              <path
                class="st5"
                d="M65.4,158.1c0,0-2.2,9.9-14.4,9.9s-14.9-9.9-14.9-9.9s-2.2,9.9-14.4,9.9s-14.9-9.9-14.9-9.9"
              ></path>
              <path
                class="st6"
                d="M362.8,89.8c0,0-1.4,6.2-9.1,6.2c-7.7,0-9.4-6.2-9.4-6.2s-1.4,6.2-9.1,6.2c-7.7,0-9.4-6.2-9.4-6.2"
              ></path>
              <path
                class="st7"
                d="M323.4,112.2c0,0-2.3,10.2-14.9,10.2S293,112.2,293,112.2s-2.3,10.2-14.9,10.2s-15.5-10.2-15.5-10.2
                        s-2.3,10.2-14.9,10.2c-12.6,0-15.5-10.2-15.5-10.2s-2.3,10.2-14.9,10.2s-15.5-10.2-15.5-10.2s-2.3,10.2-14.9,10.2
                        s-15.5-10.2-15.5-10.2s-2.3,10.2-14.9,10.2S141,112.2,141,112.2s-2.3,10.2-14.9,10.2s-15.5-10.2-15.5-10.2s-2.3,10.2-14.9,10.2
                        s-15.5-10.2-15.5-10.2"
              ></path>
              <path
                class="st8"
                d="M305.6,64.7c0,0-0.9,3.9-5.8,3.9s-6-3.9-6-3.9c0,0-0.9,3.9-5.8,3.9s-6-3.9-6-3.9s-0.9,3.9-5.8,3.9
                        s-6-3.9-6-3.9"
              ></path>
              <path
                class="st9"
                d="M226,147.7c0,0-2.4,11-16,11c-13.5,0-16.6-11-16.6-11s-2.4,11-16,11c-13.5,0-16.6-11-16.6-11s-2.4,11-16,11
                        c-13.5,0-16.6-11-16.6-11"
              ></path>
              <path
                class="st10"
                d="M431.5,160.6c0,0-3.5,15.6-22.7,15.6c-19.3,0-23.6-15.6-23.6-15.6s-3.5,15.6-22.7,15.6
                        c-19.3,0-23.6-15.6-23.6-15.6s-3.5,15.6-22.7,15.6s-23.6-15.6-23.6-15.6"
              ></path>
              <path
                class="st11"
                d="M343.5,207.7c0,0-4.2,19.1-27.8,19.1c-23.6,0-28.9-19.1-28.9-19.1c0,0-4.2,19.1-27.8,19.1
                        s-28.9-19.1-28.9-19.1s-4.2,19.1-27.8,19.1s-28.9-19.1-28.9-19.1s-4.2,19.1-27.8,19.1s-28.9-19.1-28.9-19.1s-4.2,19.1-27.8,19.1
                        s-28.9-19.1-28.9-19.1s-4.2,19.1-27.8,19.1S3.5,207.7,3.5,207.7"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'error',
  props: ['error'],
  head() {
    return {
      bodyAttrs: {
        class: 'error404 wpb-js-composer js-comp-ver-5.4.7 vc_responsive'
      }
    }
  }
}
</script>
<style scoped>
.st0 {
  clip-path: url(#SVGID_2_);
}
.st1 {
  fill: #cfe5fc;
}
.st2 {
  fill: #6ca5d0;
}
.st3 {
  opacity: 0.3;
  fill: #cfe5fc;
}
.st4 {
  opacity: 0.36;
  fill: none;
  stroke: #bcc3ca;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st5 {
  opacity: 0.63;
  fill: none;
  stroke: #bcc3ca;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st6 {
  opacity: 0.4;
  fill: none;
  stroke: #bcc3ca;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st7 {
  fill: none;
  stroke: #d7dee2;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st8 {
  opacity: 0.35;
  fill: none;
  stroke: #bcc3ca;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st9 {
  opacity: 0.6;
  fill: none;
  stroke: #bcc3ca;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st10 {
  opacity: 0.64;
  fill: none;
  stroke: #bcc3ca;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st11 {
  opacity: 0.8;
  fill: none;
  stroke: #bcc3ca;
  stroke-width: 7;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
</style>
