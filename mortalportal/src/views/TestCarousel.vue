<template>
    <div class="container">
        <q-carousel
            animated
            v-model="slide"
            infinite
            :autoplay="autoplay"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            height="100vh"
            width=""
        >
            <q-carousel-slide :name="1" img-src="https://i.picsum.photos/id/319/5445/2768.jpg?hmac=oZV0pFhNqKHhhKnqoPwpG3MS68TynWZVdMhaqHZ68x4" />
            <q-carousel-slide :name="2" img-src="https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8" />
            <q-carousel-slide :name="3" img-src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" />
            <q-carousel-slide :name="4" img-src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" />
            <q-carousel-slide :name="5" img-src="https://i.picsum.photos/id/4/5616/3744.jpg?hmac=8wIoVTScZoSiagRtRYlNfcd7dYHEf9tGyyEF44ihYFI" />
            <q-carousel-slide :name="6" img-src="https://i.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU" />
            <q-carousel-slide :name="7" img-src="https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E" />
            <q-carousel-slide :name="8" img-src="https://i.picsum.photos/id/1076/4835/3223.jpg?hmac=sw_W2oBUV1Pp_QwMbkODYHgWlX-SOkVRatS_UErh64Q" />
            <q-carousel-slide :name="9" img-src="https://i.picsum.photos/id/1073/5472/3648.jpg?hmac=xCDetU9pLnLGZopbvHOQOkQRhTiYwyrzWc0YyHPzp5Y" />
            <q-carousel-slide :name="10" img-src="https://i.picsum.photos/id/304/6016/4000.jpg?hmac=ULWayz92dKMWLEZviIJkgLRd6J5FClakkDq_3VmXbw0" />
            <q-carousel-slide :name="11" img-src="https://i.picsum.photos/id/1047/3264/2448.jpg?hmac=ksy0K4uGgm79hAV7-KvsfHY2ZuPA0Oq1Kii9hqkOCfU" />
        </q-carousel>
        <div class="container-2 absolute-center">
            <div class="text-h1" :class="textColor">Lend a hand today!</div>
            <div class="text-h5" :class="subtextColor">Complete tasks as an Angel and earn</div>
        </div>
    </div>
    <div class="content text-h7">
        ahjBABDFBEUISFBFOBVI
    </div>
</template>
  
<script>
import { ref } from 'vue'

export default {
    setup () {
        return {
        slide: ref(1),
        autoplay: ref(true)
        }
    },
    data () {
            return {
                textColor: 'text-white',
                subtextColor: 'text-white'
            }
        }
}
</script>


<style>
    /* .left {
        text-align: left;
    }
    .center {
        vertical-align: middle;
    } */
    .left_center{
        margin-left:50px;
        margin-top:400px;
        margin-bottom: auto;
        text-align: left;
    }
    .container{
        height: 100%;
    }
    .container-2{
        height: 100%;
        width: 100%;
        background-color: #000000;
        opacity: 0.5;
        text-align:left;
        padding-top: 400px;
        padding-left: 100px
    }
    .content {
        width: 100%;
        height: 700px;
    }
</style>