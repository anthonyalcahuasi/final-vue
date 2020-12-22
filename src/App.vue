<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="warning">
                  <b-navbar-brand>
                    <img
                    src="../src/assets/logo.png"
                    alt="logo"
                    class="d-inline"
                    id="LogoBE"/>
                  </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item active to="/">HOME</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Login" right>
          <b-dropdown-item to="/login">Login</b-dropdown-item>
          <b-dropdown-item to="/logout">Salir</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Usuario</em>
          </template>
          <b-dropdown-item to="/alumnohome">Alumno</b-dropdown-item>
          <b-dropdown-item to="/docentehome">Docente</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view></router-view>
</div>
</template>


<style>
.appx {
  font-family: 'Bangers', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav-collapse{
  font-family: 'Bangers', cursive;
}
#LogoBE {
  width: 180px;
}
</style>
