class Barco {
  constructor(ban, pt_O, pt_D, f_Ini, f_fin, f_GPS, h_GPS, t_Barco, latit, longi, nom_dueño, num_Dcos) {
    this.ban = ban;
    this.pt_O = pt_O;
    this.pt_D = pt_D;
    this.f_Ini = f_Ini;
    this.f_fin = f_fin;
    this.f_GPS = f_GPS;
    this.h_GPS = h_GPS;
    this.t_Barco = t_Barco;
    this.latit = latit;
    this.longi = longi;
    this.nom_dueño = nom_dueño;
    this.num_Dcos = num_Dcos;
  }
}
class Bodegas {
  constructor(num_Prod_in, num_Prod_Out, num_Prod_Prim, num_Prod_Manu, nomeclatura_Prod, description) {
    this.num_Prod_in = num_Prod_in;
    this.num_Prod_Out = ptnum_Prod_Out_O;
    this.num_Prod_Prim = num_Prod_Prim;
    this.num_Prod_Manu = num_Prod_Manu;
    this.nomeclatura_Prod = f_fin;
    this.description = description;
  }
}
class Empleados {
  constructor(legajo, nombre, edad, sexo, t_emplado) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.t_emplado = t_emplado;
  }
}

var barco1 = new Barco("México", "Puerto de Bolivia", "Puerto Chino", "10/12/2020", "16/01/2021", "01/12/2020", "19:00", "Buce de carga", -10, 20, "José Días", 10);
var productos1 = new Bodegas(1500, 1000, 200, 2000, "20/01/2018", "Productos naturales");
var empleado1 = new Empleado(10, "Jose Ramirez", 56, "Hombre", "Administrador de Carga");
var empleado2 = new Empleado(5, "Jose Chavez", 23, "Hombre", "Tripulante");
