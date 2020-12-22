<template>
<div>
<header>
  <div class="inicio">
    <div class="boton">
    </div>
  </div>
</header>
<br>
<br>
<br>
<section>
<div class="card1">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://www.kanlli.com/wp-content/uploads/2017/03/REGISTRO-ONLINE.png" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="INSCRIBIR PERSONA">
          <b-button variant="outline-success" to="/persons">Ir</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
<div class="card2">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://wpbody.com/wp-content/uploads/2017/11/Verificar-el-rol-de-usuario-en-WordPress.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="ROL">
          <b-button variant="outline-success" to="/rol">Ir</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</section>
<br>
<br>
<br>
<br>
</div>

</template>

<style scoped>
header{
  background: url(../assets/fondo.jpg);
  width: 100%;
  height:700px;
  background-position: center;
  background-size: cover;
}
.card1{
  margin-left: 300px;
  text-align: center;
}
.card2{
  margin-left: 1000px;
  margin-top: -165px;
  text-align: center;
}
.sesiones{
  margin-left: 1400px;
  margin-top: -2450px;
}
.inicio{
  margin-left: 400px;
}
.sesion{
  width: 400px;
}
h1{
  font-family: 'Bangers', cursive;
  font-size: 30px;
  color: #c97515;
}
p{
  width: 400px;
  font-family: 'Dancing Script', cursive;
  font-size: 25px;
  color: #ffffff;
}
.sesion{
  background: rgb(255, 255, 255);
  border-radius: 5px;
}
#sesiones-text{
  font-size: 70px;
}
#curso-text{
  margin-left: 200px;
  font-size: 70px;
  color: #c97515;
}
.cursos{
  background: rgb(255, 255, 255);
}
#curso1{
  margin-left: 200px;
  font-size: 20px;
  background: #c97515;
  color: white;
  

}
.boton{
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}
</style>