<template>
<div>
<header>
  <div class="inicio">
  </div>
</header>
<br>
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
        <b-card-body title="AÑADIR SESION">
          <b-button variant="success" to="/sesiones">Ir</b-button>
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
        <b-card-body title="AÑADIR RECURSO">
          <b-button variant="success" to="/niveles">Ir</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
<div class="card3">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://wpbody.com/wp-content/uploads/2017/11/Verificar-el-rol-de-usuario-en-WordPress.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="AÑADIR TAREA">
          <b-button variant="success" to="/tareas">Ir</b-button>
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
<section class="cursos">
  <h1 id="curso-text">CURSOS</h1>
  <br>
  <div class="contenedor-cursos">
    <div class="curso">
      <b-card id="curso1"
        title="Matemáticas"
        img-src="https://www.educaciontrespuntocero.com/wp-content/uploads/2020/03/fondo-matematicas_23-2148146270.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 25rem;"
        class="mb-2"
          >
        <b-card-text>
          
        </b-card-text>

        <b-button href="#" variant="success">Ir al curso</b-button>
      </b-card>
    </div>
    <div class="curso">
      <b-card id="curso1"
        title="Comunicación"
        img-src="https://conceptodefinicion.de/wp-content/uploads/2014/12/comunicaci%C3%B3n-.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 25rem;"
        class="mb-2"
          >
        <b-card-text>
          
        </b-card-text>

        <b-button href="#" variant="success">Ir al curso</b-button>
      </b-card>
    </div>
    <div class="curso">
      <b-card id="curso1"
        title="Física"
        img-src="https://image.jimcdn.com/app/cms/image/transf/none/path/s799506142364285d/image/i699979539c37e171/version/1526958582/image.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 25rem;"
        class="mb-2"
          >
        <b-card-text>
          
        </b-card-text>

        <b-button href="#" variant="success">Ir al curso</b-button>
      </b-card>
    </div>
    <div class="curso">
      <b-card id="curso1"
        title="Geogafría"
        img-src="https://2.bp.blogspot.com/-eBmCzPr7Eog/WIpEBBo1fRI/AAAAAAAAASI/hucdvmbmiV0NGL0UeMxjsCRbHdz7wpZxQCLcB/s750/Geografia.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 25rem;"
        class="mb-2"
          >
        <b-card-text>
          
        </b-card-text>

        <b-button href="#" variant="success">Ir al curso</b-button>
      </b-card>
    </div>
    <div class="curso">
      <b-card id="curso1"
        title="Historia"
        img-src="https://www.caracteristicas.co/wp-content/uploads/2017/05/historia-e1568077367159.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 25rem;"
        class="mb-2"
          >
        <b-card-text>
          
        </b-card-text>

        <b-button href="#" variant="success">Ir al curso</b-button>
      </b-card>
    </div>
    <div class="curso">
      <b-card id="curso1"
        title="Psicología"
        img-src="https://mdcmagazine.com/image_large_2/como-aplicar-la-psicologia-de-las-ventas.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 25rem;"
        class="mb-10"
          >
        <b-card-text>
          
        </b-card-text>

        <b-button href="#" variant="success">Ir al curso</b-button>
      </b-card>
    </div>
  </div>
</section>
<br>
<br>
<br>
<section class="sesiones">
  <h1 id="sesiones-text">CLASES EN VIVO</h1>
  <br>
  <div class="sesion">
  <b-card title="MATEMÁTICAS" sub-title="Productos Notables">
    <b-button href="https://meet.google.com/" variant="success">Entrar a la reunión</b-button>
  </b-card>
</div>
<br>
<div class="sesion">
  <b-card title="FÍSICA" sub-title="Magnitudes Dimensionales">
    <b-button href="https://meet.google.com/" variant="success">Entrar a la reunión</b-button>
  </b-card>
</div>
</section>
</div>
</template>

<style scoped>
header{
  background: url(../assets/fondo-inicio.jpg);
  width: 100%;
  height:700px;
  background-attachment:fixed;
  background-position: center;
  background-size: cover;
}
.card1{
  margin-left: 120px;
  text-align: center;
}
.card2{
  margin-left: 720px;
  margin-top: -165px;
  text-align: center;
}
.card3{
  margin-left: 1320px;
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