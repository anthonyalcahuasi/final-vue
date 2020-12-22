import Vue from 'vue';
import Router from 'vue-router';
import Person from './components/Person.vue';
import HelloWorld from './components/HelloWorld.vue'
import PersonForm from './components/PersonForm.vue';
import Login from './components/Login.vue';
import Logout from './components/Logout.vue';
import Rol from './components/Rol.vue';
import RolForm from './components/RolForm.vue';
import Sesion from './components/Sesion.vue';
import SesionForm from './components/SesionForm.vue';
import Curso from './components/Curso.vue';
import CursoForm from './components/CursoForm.vue';
import Tarea from './components/Tarea.vue';
import TareaForm from './components/TareaForm.vue';
import Nivel from './components/Nivel.vue';
import NivelForm from './components/NivelForm.vue';
import Alumno from './components/Alumno.vue';
import AlumnoForm from './components/AlumnoForm.vue';
import Docente from './components/Docente.vue';
import DocenteForm from './components/DocenteForm.vue';
import CargaAcademica from './components/CargaAcademica.vue';
import CargaAcademicaForm from './components/CargaAcademicaForm.vue';
import Grado from './components/Grado.vue';
import GradoForm from './components/GradoForm.vue';
import CursoHome from './components/CursoHome.vue';
import AlumnoHome from './components/AlumnoHome.vue';
import DocenteHome from './components/DocenteHome.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'LoginForm',
      component: Login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/cursohome',
      name: 'CursoHome',
      component: CursoHome
    },
    {
      path: '/alumnohome',
      name: 'AlumnoHome',
      component: AlumnoHome
    },
    {
      path: '/docentehome',
      name: 'DocenteHome',
      component: DocenteHome
    },
    {
      path: '/persons',
      name: 'Person',
      component: Person,
    },
    {
      path: '/persons/form',
      name: 'PersonForm',
      component: PersonForm,

    },
    {
      path: '/persons/form/:id',
      name: 'PersonForme',
      component: PersonForm
    },
    {
      path: '/rol',
      name: 'Rol',
      component: Rol,
    },
    {
      path: '/rol/form',
      name: 'RolForm',
      component: RolForm,

    },
    {
      path: '/rol/form/:id',
      name: 'RolForme',
      component: RolForm
    },
    {
      path: '/sesiones',
      name: 'Sesion',
      component: Sesion,
    },
    {
      path: '/sesiones/form',
      name: 'SesionForm',
      component: SesionForm,

    },
    {
      path: '/sesiones/form/:id',
      name: 'SesionForme',
      component: SesionForm
    },
    {
      path: '/curso',
      name: 'Curso',
      component: Curso,
    },
    {
      path: '/curso/form',
      name: 'CursoForm',
      component: CursoForm,

    },
    {
      path: '/curso/form/:id',
      name: 'CursoForme',
      component: CursoForm
    },
    {
      path: '/tareas',
      name: 'Tarea',
      component: Tarea,
    },
    {
      path: '/tareas/form',
      name: 'TareaForm',
      component: TareaForm,

    },
    {
      path: '/tareas/form/:id',
      name: 'TareaForme',
      component: TareaForm
    },
    {
      path: '/niveles',
      name: 'Nivel',
      component: Nivel,
    },
    {
      path: '/niveles/form',
      name: 'NivelForm',
      component: NivelForm,

    },
    {
      path: '/niveles/form/:id',
      name: 'NivelForme',
      component: NivelForm
    },
    {
      path: '/grados',
      name: 'Grado',
      component: Grado,
    },
    {
      path: '/grados/form',
      name: 'GradoForm',
      component: GradoForm,

    },
    {
      path: '/grados/form/:id',
      name: 'GradoForme',
      component: GradoForm
    },
    {
      path: '/alumnos',
      name: 'Alumno',
      component: Alumno,
    },
    {
      path: '/alumnos/form',
      name: 'AlumnoForm',
      component: AlumnoForm,

    },
    {
      path: '/alumnos/form/:id',
      name: 'AlumnoForme',
      component: AlumnoForm
    },
    {
      path: '/docentes',
      name: 'Docente',
      component: Docente,
    },
    {
      path: '/docentes/form',
      name: 'DocenteForm',
      component: DocenteForm,

    },
    {
      path: '/docentes/form/:id',
      name: 'DocenteForme',
      component: DocenteForm
    },
    {
      path: '/carga_academica',
      name: 'CargaAcademica',
      component: CargaAcademica,
    },
    {
      path: '/carga_academica/form',
      name: 'CargaAcademicaForm',
      component: CargaAcademicaForm,

    },
    {
      path: '/carga_academica/form/:id',
      name: 'CargaAcademicaForme',
      component: CargaAcademicaForm
    },
    
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },

  ],
});

let whiteRoutes = [
  "LoginForm",
  "HelloWorld",
  "Rol",
  "RolForm",
  "AlumnoHome",
  "DocenteHome"
]

router.beforeEach((to, from, next) => {
  console.log(`${from.path} to ${to.path}`);
  let isAuthenticated = false;
  if (localStorage.getItem('user') != null) {
    isAuthenticated = true;
  }
  // if (to.name !== 'LoginForm' && to.name !== 'HelloWorld' && to.name !== 'Ping' && !isAuthenticated) {
  if (!whiteRoutes.includes(to.name) && !isAuthenticated) {
    next({ name: 'LoginForm' });
  } else {
    next();
  }
});
//https://www.digitalocean.com/community/tutorials/vuejs-advanced-vue-routing
export default router
