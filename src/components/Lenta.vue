<template>
    <div class="photos">
        <div class="container">
            <h1>InstaГрам</h1>
            <br>
            <div>
                <b-btn id="add_photo" @click="$root.$emit('show::modal','modal1')">Добавить фотографию</b-btn>

                <b-modal id="modal1" title="Заполните данные" @ok="submit" @shown="clearName">
                    
                    <form @submit.stop.prevent="submit">
                    <b-form-input type="text" placeholder="Введите ваше имя" v-model="name"></b-form-input>
                    <br>
                    <b-form-file v-model="file"></b-form-file>
                    </form>
                    
                </b-modal>
            </div>
            <br>
            <div class="row">
                <div class="col-md-3" v-for="photo in photos" style="width: 300px !important;">
                    <img :src=" photo.url " alt="" class="img-thumbnail photo">
                    <p>{{ photo.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'hello',
      data () {
        return {
          photos: [
            {
              'id': 1,
              'name': 'Damir Kh.',
              'url': 'https://s1.1zoom.ru/big0/942/270583-svetik.jpg'
            },
            {
              'id': 2,
              'name': 'Alex Pl.',
              'url': 'https://i.ytimg.com/vi/OIwX21Mg5vs/maxresdefault.jpg'
            },
            {
              'id': 3,
              'name': 'Pasha M.',
              'url': 'https://im0-tub-ru.yandex.net/i?id=c7cc03c8d3e4277681ceada8d2565663-l&n=13'
            },
            {
              'id': 4,
              'name': 'Vitya S.',
              'url': 'http://www.youwall.com/wallpapers/201307/purple-flowers-wallpaper.jpg'
            },
            {
              'id': 5,
              'name': 'Dima S.',
              'url': 'https://i.obozrevatel.com/8/1747448/gallery/919603.jpg'
            },
            {
              'id': 6,
              'name': 'Sveta Ya.',
              'url': 'http://www.hcxypz.com/data/out/167/713267.jpg'
            },
            {
              'id': 7,
              'name': 'Alice A.',
              'url': 'https://im0-tub-ru.yandex.net/i?id=ed26a62c3c6815fb43ffbe8532ac2df2-l&n=13'
            }
          ]
        }
      }
    }
</script>

<style scoped>
    h1{
        text-align: center;
    }
    .photo{
        width: 300px;
        height: 250px;
    }
    #add_photo{
        display: block !important;
        margin: 0 auto;
    }
</style>
