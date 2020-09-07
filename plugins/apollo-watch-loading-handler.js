/* eslint-disable */
export default (isLoading, countModifier, nuxtContext) => {
  loading += countModifier
  console.log('Global loading', loading, countModifier, nuxtContext)
}
