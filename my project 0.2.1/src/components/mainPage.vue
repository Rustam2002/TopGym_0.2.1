<template>
<!-- эта страница нужна ля отображения всех блоков тут я их просто к=грубо говоря вставляю ссылками -->
    <div>
        <videosection />
        <Presentsection />
        <linesection />
        <trenadd />
        <inverstren />
        <footerr />
    </div>
</template>


<script>
import videosection from './MainComp/videosection.vue';
import Presentsection from './MainComp/presentsection.vue';
import linesection from './MainComp/linesection.vue';
import trenadd from './MainComp/trenadd.vue';
import inverstren from './MainComp/inverstren.vue';
import footerr from './MainComp/footer.vue';
export default {
  name: 'App',
  components: {
    videosection,
    Presentsection,
    linesection,
    trenadd,
    inverstren,
    footerr
  }
}
</script>
