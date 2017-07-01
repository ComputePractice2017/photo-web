<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar  bg"
         style="border-bottom:1px solid rgba(0,0,0,.0975); background-color:#fff; ">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container">
        <div class="col-md-3">
          <a class="navbar-brand" href="#">Instagram</a>
        </div>
        <div class="col-md-6 search">
          <input class="form-control_costom" type="text" placeholder="Поиск">
        </div>
        <div class="col-md-3">
          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <a href="#"><img src="../dist/static/img/friendf.png" alt="Найти друзей" class="icons"></a>
            <a href="#"><img src="../dist/static/img/likes.png" alt="Мои лайки" class="icons"></a>
            <a href="#"><img src="../dist/static/img/myprofile.png" alt="Мой профиль" class="icons"></a>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
