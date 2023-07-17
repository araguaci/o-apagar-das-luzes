<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.openPdf()
  },
  methods: {
    openPdf() {
      const file = this.$route.params.file
      const pdfUrl = '/inquerito_do_fim_do_mundo_o_apagar_das_luzes_do_direito_brasileiro' + file + '.pdf'
      // window.open(pdfUrl, '_blank')
    }
  }
}
</script>
