<template>
  <div id="app">
      <nav class="navbar navbar-default">
          <div class="container-fluid">

              <div class="navbar-header">
                  <a class="navbar-brand" href="#">
                      <span class="glyphicon glyphicon-book bookico" aria-hidden="true"></span>
                  </a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                      <li>
                          <router-link to="/">index</router-link>
                      </li>
                      <li>
                          <router-link to="/explain">explain</router-link>
                      </li>
                  </ul>
                  <form class="navbar-form navbar-right">
                      <div class="form-group">
                          <input type="text" class="form-control" placeholder="Search">
                      </div>
                      <button type="submit" class="btn btn-info">search</button>
                  </form>
              </div>
              <!-- /.navbar-collapse -->
          </div>
          <!-- /.container-fluid -->
      </nav>

    <transition name="slide">
        <router-view></router-view>
    </transition>

  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
export default {
  name: 'app'
}
</script>

<style scoped>
.bookico {
    color: rgb(56, 178, 210);
}

.slide-enter-active {
    transition: all .3s .3s ease;
}

.slide-enter {
    transform: translateY(-30px);
    opacity: 0;
}

.slide-leave-active {
    transition: all .3s ease;
    transform: translateY(30px);
    opacity: 0;
}

</style>
