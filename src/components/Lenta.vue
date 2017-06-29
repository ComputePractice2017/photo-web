<template>
    <div class="photos">
        <div class="container">
            <h1>InstaГрам</h1>
            <br>
            <div>
                <b-btn id="add_photo" @click="$root.$emit('show::modal','modal1')">Добавить фотографию</b-btn>
                <b-modal id="modal1" title="Заполните данные" @ok="submit" @shown="clearName" hide-footer>
                    <form>
                        <div class="form-group">
                            <label class="sr-only" for="inlineFormInput">Имя</label>
                            <input type="text" v-model="newphoto.name" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Введите имя">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputFile">Выбирите фотографию</label>
                            <input type="file" accept="image/*" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
                        </div>
                        <div class="modal-footer">
                        <button v-on:click="addNewPhoto" class="btn btn-primary pull-right">Добавить</button>
                        </div>
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
            <br>
            {{newphoto}}
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
              'name': 'Damir Kh.',
              'url': 'https://s1.1zoom.ru/big0/942/270583-svetik.jpg'
            },
            {
              'name': 'Alex Pl.',
              'url': 'https://i.ytimg.com/vi/OIwX21Mg5vs/maxresdefault.jpg'
            },
            {
              'name': 'Pasha M.',
              'url': 'https://im0-tub-ru.yandex.net/i?id=c7cc03c8d3e4277681ceada8d2565663-l&n=13'
            },
            {
              'name': 'Vitya S.',
              'url': 'http://www.youwall.com/wallpapers/201307/purple-flowers-wallpaper.jpg'
            },
            {
              'name': 'Dima S.',
              'url': 'https://i.obozrevatel.com/8/1747448/gallery/919603.jpg'
            },
            {
              'name': 'Sveta Ya.',
              'url': 'http://www.hcxypz.com/data/out/167/713267.jpg'
            },
            {
              'name': 'Alice A.',
              'url': 'https://im0-tub-ru.yandex.net/i?id=ed26a62c3c6815fb43ffbe8532ac2df2-l&n=13'
            }
          ],
          newphoto: {
            'name': '',
            'url': ''
          }
        }
      },
      methods: {
        addNewPhoto: function () {
          var obj = {
            'name': '',
            'url': ''
          }
          obj.name = this.newphoto.name
          obj.url = this.newphoto.url
          this.photos.push(obj)
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
