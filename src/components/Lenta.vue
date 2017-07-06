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
                    <form method="post" enctype="multipart/form-data">
                        <div class="form-group">
                            <label class="sr-only" for="inlineFormInput">Имя</label>
                            <input type="text" v-model="newphoto.name" class="form-control mb-2 mr-sm-2 mb-sm-0" id="namephoto_name" placeholder="Введите имя" required>
                        </div>
                        <div class="form-group">
                            <label for="filename">Выбирите фотографию</label>
                            <input v-on:change="uploadphoto($event)" type="file" name="file" accept="image/*" class="form-control-file" id="filename" aria-describedby="fileHelp" required>
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
          photos: null,
          newphoto: {
            'name': '',
            'url': ''
          },
          sphoto: {
            'name': '',
            'url': '',
            'index': ''
          },
          search: '',
          newphotourl: '',
          photofile: ''
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
      mounted: function () {
        this.$http.get('/photos').then(response => {
          this.photos = response.body
          console.log(this.photos)
        }, response => {
          console.log(response)
        })
      },
      methods: {
        uploadphoto: function (obj) {
          this.photofile = obj.srcElement.files[0]
          this.$http.post('http://localhost:8000/uploadfile', obj.srcElement.files[0]).then(response => {
            console.log(this.response)
            this.newphotourl = response.body
          }, response => {
            console.log(response)
          })
        },
        addNewPhoto: function () {
          var obj = {
            'name': '',
            'url': ''
          }
          obj.name = this.newphoto.name
          obj.url = this.newphotourl
          this.photos.push(obj)

          this.$http.post('http://localhost:8000/photos', obj).then(response => {
            console.log(this.response)
          }, response => {
            console.log(response)
          })
        },
        showphoto: function (obj) {
          this.sphoto.url = obj.url
          this.sphoto.name = obj.name
          this.sphoto.index = this.photos.indexOf(obj)
        },
        deletephoto: function (obj) {
          this.$http.delete('/photos/' + obj.id).then(response => {
            console.log(this.response)
          }, response => {
            console.log(response)
          })
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
