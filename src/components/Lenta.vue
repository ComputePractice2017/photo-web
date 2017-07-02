<template>
    <div class="photos">
        <nav class="navbar navbar-toggleable-md navbar bg" style="border-bottom:1px solid rgba(0,0,0,.0975); background-color:#fff; ">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="container">
                <div class="col-md-3">
                    <a class="navbar-brand" href="#">InstaГрам</a>
                </div>
                <div class="col-md-6 search">
                    <input class="form-control_costom" type="text" placeholder="Поиск" v-model="search">
                </div>
                <div class="col-md-3">
                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <a href="#"><img src="../assets/img/friendf.png" alt="Найти друзей" class="icons"></a>
                        <a href="#"><img src="../assets/img/likes.png" alt="Мои лайки" class="icons"></a>
                        <a href="#"><img src="../assets/img/myprofile.png" alt="Мой профиль" class="icons"></a>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container">
            <br>
            <div>
                <b-btn id="add_photo" @click="$root.$emit('show::modal','modal1')">Добавить фотографию</b-btn>
                <!--Модальное окно для вывода формы добавления фото-->
                <b-modal id="modal1" title="Заполните данные" hide-footer>
                    <form>
                        <div class="form-group">
                            <label class="sr-only" for="inlineFormInput">Имя</label>
                            <input type="text" v-model="newphoto.name" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Введите имя" required>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputFile">Выбирите фотографию</label>
                            <input type="file" accept="image/*" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" required>
                        </div>
                        <div class="modal-footer">
                        <button v-on:click="addNewPhoto" class="btn btn-primary pull-right">Добавить</button>
                        </div>
                    </form>
                </b-modal>
            </div>
            <br>
            <!--Галерея-->
            <div class="row">
                <div class="col-md-3" v-for="photo in photoList" style="width: 300px !important;">
                    <img :src="photo.url" class="img-thumbnail photo"  @click="showphoto(photo)&$root.$emit('show::modal','modal2')">
                    <p>{{ photo.name }}</p>
                </div>
            </div>
            <!--Модальное окно для вывода изображения-->
            <b-modal id="modal2" title="" hide-footer hide-header>
                <img class="bigPhoto" :src="sphoto.url" alt="">
                <div class="comment">
                    <div id="knopkiphoto">
                        <button class="btn" @click="deletephoto(sphoto)&$root.$emit('hide::modal','modal2')">Удалить запись</button>
                    </div>
                    <p id="namephoto">{{sphoto.name}}</p>
                    <p id="commentphoto">Место для комментов</p>
                </div> 
            </b-modal>
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
              'url': 'http://imagen46.com/images/2014/02/02/Fondos-de-escritorio-paisajes-forest-grass-green-lake-paisaje-mountains-nature-1080x1920.jpg'
            },
            {
              'name': 'Alice D.',
              'url': 'https://im0-tub-ru.yandex.net/i?id=ef68548c946ca3a0b5f56a222eecfecd-l&n=13'
            }
          ],
          newphoto: {
            'name': '',
            'url': ''
          },
          sphoto: {
            'name': '',
            'url': '',
            'index': ''
          },
          search: ''
        }
      },
      computed: {
        photoList: function () {
          var search = this.search
          var filterfn = function (item) {
            return item.name.includes(search)
          }
          if (this.search !== '') {
            return this.photos.filter(filterfn)
          }
          return this.photos
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
        },
        showphoto: function (obj) {
          this.sphoto.url = obj.url
          this.sphoto.name = obj.name
          this.sphoto.index = this.photos.indexOf(obj)
        },
        deletephoto: function (obj) {
          if (obj.index > -1) {
            this.photos.splice(obj.index, 1)
          }
        }
      }
    }
</script>

<style>
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
    #modal2 > .modal-dialog.modal-md {
        max-width: 1100px;
        margin: 15% auto;
    }
    #modal2_modal_body {
        max-width: 1100px;
        margin: 0;
        padding: 0;
        display: inline-block;
    }
    #modal2 {
        background-color: #000000b3;
    }
    .bigPhoto {
        max-width: 799px;
    }
    .comment {
        width: 299px;
        float: right;
        text-align: center;
    }
    #namephoto {
        padding: 10px;
        margin: 0;
        border-bottom: 1px solid #eee;
    }
    #commentphoto {
        padding: 10px;
    }
    #knopkiphoto {
        padding: 10px;
        border-bottom: 1px solid #eee;
    }
    .search {
        text-align: center;
    }

    .form-control_costom {
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        line-height: 1.25;
        color: #464a4c;
        background-color: #fff;
        background-image: none;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 0.25rem;
    }

    a {
        color: #000;
    }

    .icons{
        margin: 10px 10px ;
        width:25px;
        height:24px;
    }
</style>
