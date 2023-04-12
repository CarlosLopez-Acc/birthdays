import { Component } from "@angular/core";

@Component({
    selector: 'app-birthdays',
    templateUrl: './birthdays.component.html',
    styleUrls: ['./birthdays.component.css']
})

export class BirthdaysComponent {
    menuItems: any[] = [
        //JANUARY
        /*
        { userName: 'Alejandro Gomez Valerio', birthday: '4' },
        { userName: 'Keevin Sánchez', birthday: '4' },
        { userName: 'Iván Argueta', birthday: '5' },
        { userName: 'Jose Aguilera Ramos', birthday: '5' },
        { userName: 'Yazmin Anai Torres', birthday: '6' },
        { userName: 'Alan Daniel Casas', birthday: '7' },
        { userName: 'Ivan Ribadeneira', birthday: '7' },
        { userName: 'Gonzalo Gomez', birthday: '10' },
        { userName: 'Ruben Dominguez', birthday: '10' },
        { userName: 'Diana Salinas Martinez', birthday: '11' },
        { userName: 'Jenny Guadarrama', birthday: '11' },
        { userName: 'Luisa Coronado', birthday: '11' },
        { userName: 'Monica Garza Urrutia', birthday: '11' },
        { userName: 'Abihu Sahib Palacios Gonzalez', birthday: '12' }
         
        { userName: 'Ricardo Martinez Herrera', birthday: '16' },
        { userName: 'Cesar Perez Munoz', birthday: '19' },
        { userName: 'Manuel Maldonado Chavez', birthday: '19' },
        { userName: 'Aimme Montserrat Balderas', birthday: '20' },
        { userName: 'Gerardo Castro Ortiz', birthday: '21' },
        { userName: 'Daniela Cabrieles', birthday: '22' },
        { userName: 'Ivan Eduardo Gonzalez', birthday: '23' },
        { userName: 'Alan Isaac Martinez Segura', birthday: '24' },
        { userName: 'Maria Galindo Lopez', birthday: '24' },
        { userName: 'Damaris Luna', birthday: '25' },
        { userName: 'Ahide Bautista', birthday: '28' },
        { userName: 'Ricardo Flores Noriega', birthday: '29' },
        { userName: 'Diana Bernal', birthday: '30' },
        { userName: 'Elda Sierra', birthday: '30' },
        { userName: 'Luis Ulloa Guajardo', birthday: '30' }  
        */  
        //FEBRUARY
        /*
        { userName: 'Ageo Damaso Villarreal', birthday: '3' },
        { userName: 'Luis Barrera Venegas', birthday: '3' },
        { userName: 'Eunice Perez', birthday: '8' },
        { userName: 'Armando Blanco Lerma', birthday: '10' },
        { userName: 'Jose A. Ramos', birthday: '11' },
        { userName: 'Nuria Villanueva Gaytan', birthday: '12' },
        { userName: 'Gail Terrazas Lopez', birthday: '13' },
        { userName: 'Luis Reyes', birthday: '14' },
        { userName: 'Yamani Lona', birthday: '16' },
        { userName: 'Brenda Bautista Hernandez', birthday: '18' },
        { userName: 'Marco Tulio Lopez Leija', birthday: '18' }
        /*
        { userName: 'Marco Tulio Arroyo', birthday: '22' },
        { userName: 'Luz M. Espinosa Tagal', birthday: '22' },
        { userName: 'Israel Martinez Lira', birthday: '23' },
        { userName: 'Josue Gutierrez Figueroa', birthday: '26' },
        { userName: 'Pedro Vidales', birthday: '26' },
        { userName: 'Yuven Garza Martinez', birthday: '26' },
        { userName: 'Daniela Ramirez', birthday: '27' },
        { userName: 'Yaret Jimenez', birthday: '27' },
        { userName: 'Hugo Obeso Diaz', birthday: '28' },
        { userName: 'Yadira Abigail Macias Alvarado', birthday: '28' }
        */   
        //MARCH
        /*
        { userName: 'Edith Guzman', birthday: '2' },
        { userName: 'Lissette Galvan', birthday: '2' },
        { userName: 'Omar Miranda', birthday: '2' },
        { userName: 'Varun D. Channegowda', birthday: '3' },
        { userName: 'Edson Cervera Garcia', birthday: '4' },
        { userName: 'Larissa Vidales', birthday: '4' },
        { userName: 'María del Rosario Inzunza Limón', birthday: '4' },
        { userName: 'Francisco Ruben Frias Valdarrama', birthday: '6' },
        { userName: 'Sharon Martínez', birthday: '6' },
        { userName: 'Cesar A. Hernandez', birthday: '7' },
        { userName: 'Riad Aissar Santos Charruf', birthday: '7' },
        { userName: 'Jesus Delgado', birthday: '7' },
        { userName: 'Jose Francisco Bahena', birthday: '8' },
        { userName: 'Brianda Viridiana Ayala Nicolas', birthday: '10' },
        { userName: 'Gysela Peña Chanona', birthday: '10' }
        */
        /*
        { userName: 'Jose A. Campos Silva', birthday: '11' },
        { userName: 'Luis Rodrigo Torres', birthday: '11' },
        { userName: 'Christian Alejandro Carranza Ramírez', birthday: '11' },
        { userName: 'Jessica Trujillo', birthday: '14' },
        { userName: 'Fernando Guzman', birthday: '17' },
        { userName: 'Ricardo Rocha', birthday: '17' },
        { userName: 'Diana Guerrero Hernandez', birthday: '18' },
        { userName: 'Mario Alejandro Aguilar Blasquez', birthday: '18' },
        { userName: 'Daniela Carrillo', birthday: '19' },
        { userName: 'Adriana Sosa Luna', birthday: '20' },
        { userName: 'Ana Velasco Pacheco', birthday: '20' }
        */
        /*
        { userName: 'Edek Luna', birthday: '22' },
        { userName: 'Gabriel Velez', birthday: '22' },
        { userName: 'Jose Villafranca Toy', birthday: '22' },
        { userName: 'Paola Garcia Alonso', birthday: '24' },
        { userName: 'Diego J. Magallon', birthday: '25' },
        { userName: 'Norma A. Cruz Torres', birthday: '25' },
        { userName: 'Roberto Reyes Mejia', birthday: '25' },
        { userName: 'Alan Aldair Molina Aguillon', birthday: '26' },
        { userName: 'Aidé Natzielly Carreón Valerio', birthday: '26' },
        { userName: 'Diana Aguirre', birthday: '27' },
        { userName: 'Joaquin Chávez', birthday: '27' },
        { userName: 'Litzy Anahí Hernández Rivas', birthday: '27' }
        */
        /*
        { userName: 'Antonio D. Gonzalez', birthday: '28' },
        { userName: 'Antony De León', birthday: '29' },
        { userName: 'Benito Ruvalcaba', birthday: '29' },
        { userName: 'Gloria Ivonne Contreras Cisneros', birthday: '29' },
        { userName: 'Jesus Horacio Gutierrez', birthday: '29' },
        { userName: 'Carolina Bazán Godoy', birthday: '30' },
        { userName: 'Selena Ruiz', birthday: '31' }
        */
        //APRIL
        /*
        { userName: 'Alex Morrill', birthday: '1' },
        { userName: 'Nubia Villa Martinez', birthday: '1' },
        { userName: 'Victor Grimaldo', birthday: '1' },
        { userName: 'Francisco Escareño', birthday: '2' },
        { userName: 'Alondra García Benítez', birthday: '2' },
        { userName: 'Fernando Amador', birthday: '3' },
        { userName: 'César López', birthday: '4' },
        { userName: 'Luis Francisco Uribe Morelos', birthday: '5' },
        { userName: 'Miguel Ángel Villanueva Ramírez', birthday: '5' },
        { userName: 'Alex Melendez Sanchez', birthday: '7' },
        { userName: 'Marcela Alvarado', birthday: '7' },
        { userName: 'Gonzalez,Regina', birthday: '7' },
        { userName: 'Adrián Núñez', birthday: '9' },
        { userName: 'Elia Verenisse Lara', birthday: '13' }
        */
        { userName: 'Andrea Aguayo Casas', birthday: '17' },
        { userName: 'Jared Magaña', birthday: '18' },
        { userName: 'Carlos Eduardo Garcia Salas', birthday: '19' },
        { userName: 'Paul Broca', birthday: '21' },
        { userName: 'Ruth Medina', birthday: '24' },
        { userName: 'Marco Antonio Maldonado', birthday: '25' },
        { userName: 'Rodolfo Montes Charles', birthday: '25' },
        { userName: 'Shadeen Zamudio', birthday: '25' },
        { userName: 'Mayra C. Garcia Perez', birthday: '27' }

        // MAY     
        /*
        { userName: 'David Ballesteros', birthday: '4' },
        { userName: 'María Meza', birthday: '5' },
        { userName: 'Luis Cantu Lopez', birthday: '8' },
        { userName: 'Vannesa Yepez Perez', birthday: '9' },
        { userName: 'Erick Esquivel Macias', birthday: '9' },
        { userName: 'Miriam Femerling', birthday: '10' },
        { userName: 'Bertha Yaneth Verdin Saldana', birthday: '10' },
        { userName: 'Mariela Garcia', birthday: '10' },
        { userName: 'Angel Ivan De Leon Rodarte', birthday: '12' },
        { userName: 'Hector Esquivel', birthday: '14' }
        */
        /*
        { userName: 'Laura N. Oviedo', birthday: '17' },
        { userName: 'Eric Antonio Puc', birthday: '17' },
        { userName: 'María Eugenia Hernández Tavera', birthday: '18' },
        { userName: 'Patrizzio M. Torres', birthday: '19' },
        { userName: 'Juan Carlos Ledezma Moreno', birthday: '21' },
        { userName: 'Julio Sánchez Torres', birthday: '21' },
        { userName: 'Jorge Alberto Castillo González', birthday: '22' },
        { userName: 'Carlos Lopez', birthday: '23' },
        { userName: 'Oscar Sanchez', birthday: '23' },
        { userName: 'Sergio Pina', birthday: '24' },
        { userName: 'Jorge Gutiérrez Puerta', birthday: '25' },
        { userName: 'Osiris Serrano', birthday: '25' },
        { userName: 'Jorge Eduardo Gómez López', birthday: '30' }
        */
        // JUNE
        /*
        { userName: 'Irene Zapata', birthday: '1' },
        { userName: 'Jose Roberto Gonzalez', birthday: '4' },
        { userName: 'Norma Vazquez Puente', birthday: '5' },
        { userName: 'Juan Fernando Dionicio', birthday: '5' },
        { userName: 'Edwin Vieyra', birthday: '5' },
        { userName: 'Sergio Leon', birthday: '6' },
        { userName: 'Jorge F. Villarreal', birthday: '7' },
        { userName: 'David Fernandez', birthday: '7' },
        { userName: 'Jose Antonio Saldaña', birthday: '8' },
        { userName: 'Diego Sebastian Corral', birthday: '8' },
        { userName: 'Fernando Anaya', birthday: '8' },
        { userName: 'Juan Manuel Garcia', birthday: '14' },
        { userName: 'Oscar Cortez', birthday: '15' }
        */
        /*
        { userName: 'Hiram Ponce Alvarado', birthday: '17' },
        { userName: 'Arturo Garcia Rodriguez', birthday: '17' },
        { userName: 'Itzel Vazquez', birthday: '17' },
        { userName: 'Eilleen Camarena Leon', birthday: '18' },
        { userName: 'Fernando Hernandez Rivas', birthday: '20' },
        { userName: 'Luis Nunez Aguilar', birthday: '21' },
        { userName: 'Maria Gabriela Salgado', birthday: '27' },
        { userName: 'Leonardo Daniel Sanchez', birthday: '27' }
        */
        // JULY
        /*
        { userName: 'Lessly A. Marquez', birthday: '1' },
        { userName: 'Juan D. Ceron Neira', birthday: '3' },
        { userName: 'Cassandra Marlene Salazar Sauceda', birthday: '4' },
        { userName: 'Ivan Carvajal', birthday: '7' },
        { userName: 'Luis Edgar Decuir Ramon', birthday: '8' },
        { userName: 'Miguel Peña', birthday: '8' },
        { userName: 'Cesar J. Ramos Corral', birthday: '10' },
        { userName: 'Alejandro Guajardo', birthday: '10' },
        { userName: 'Jose Roberto Salinas', birthday: '12' },
        { userName: 'Dibin Babu', birthday: '13' },
        { userName: 'Abigail Monroy García', birthday: '13' },
        { userName: 'Lucero Correa', birthday: '14' },
        { userName: 'Juan Guzman', birthday: '14' }
        { userName: 'Neil Salazar', birthday: '15' },
        { userName: 'Angel Zamarrón', birthday: '15' },
        { userName: 'Maria Guzman', birthday: '16' },
        { userName: 'Cindy Betzaida Ramirez Mireles', birthday: '16' },
        { userName: 'Jorge A. Garcia Garza', birthday: '17' },
        { userName: 'Jose A. Ayala Cantu', birthday: '19' },
        { userName: 'Juan Garcia Garcia', birthday: '19' },
        { userName: 'Cinthia Hernandez', birthday: '19' },
        { userName: 'Sergio Cantua', birthday: '22' },
        { userName: 'Leslie Castillo Calamaco', birthday: '22' },
        { userName: 'Adrian Vargas Rangel', birthday: '22' },
        { userName: 'Joseph Bryan Quezada Gongora', birthday: '25' },
        { userName: 'Tathiana Cabrera Rodriguez', birthday: '26' },
        { userName: 'Jose A. Perez Rico', birthday: '31' },
        */
       // AUGUST
       /*
       { userName: 'Mario Arturo Amaya', birthday: '1' },
       { userName: 'Diego Enrique Armijo', birthday: '1' },
       { userName: 'Cesar Barron', birthday: '2' },
       { userName: 'Jose Sergio Gonzalez Aceves', birthday: '3' },
       { userName: 'Edgar Garcia Andrade', birthday: '4' },
       { userName: 'Edgar Alejandro Moreno', birthday: '4' },
       { userName: 'Ana Monroy Cruz', birthday: '5' },
       { userName: 'Minerva Palomino Zavala', birthday: '7' },
       { userName: 'Rene Jair Sanchez', birthday: '7' },
       { userName: 'Ana L. Juarez Fuentes', birthday: '8' },
       { userName: 'Joel A. Lopez Flores', birthday: '8' },
       { userName: 'Rodolfo Sotelo', birthday: '8' },
       { userName: 'Adrian Thompson Ramirez', birthday: '8' },
       { userName: 'Jose Maria Morales', birthday: '9' },
       { userName: 'Gurusharan Kumar', birthday: '9' },
       { userName: 'Cesar Cardona', birthday: '10' },
       { userName: 'Gabby Valdivieso', birthday: '11' },
       { userName: 'Jesus Ivan Gomez Velasco', birthday: '11' },
       { userName: 'Karla Martinez', birthday: '11' },
       { userName: 'Jesus Agundis', birthday: '14' }
       
       { userName: 'Martha De Anda', birthday: '15' },
       { userName: 'Claudia Deneb Marquez Badillo', birthday: '16' },
       { userName: 'Jose Robles Vidal', birthday: '16' },
       { userName: 'Ricardo Garcia G', birthday: '17' },
       { userName: 'Luisa P. Tirado Islas', birthday: '18' },
       { userName: 'Jesus Gustavo Perez Lobo', birthday: '18' },
       { userName: 'Jesus Alberto Allwood Rodriguez', birthday: '20' },
       { userName: 'Ismael Gutiérrez', birthday: '20' },
       { userName: 'Paco Galvan Guzman', birthday: '21' },
       { userName: 'Daniela Iturbe', birthday: '21' },
       { userName: 'Mariana Rdz', birthday: '22' },
       { userName: 'Hugo Missael Guerra Martínez', birthday: '23' },
       { userName: 'Carolina Escobedo Rubio', birthday: '25' },
       { userName: 'Emmanuel Espinoza', birthday: '25' },
       { userName: 'Ana M. Moreno Esparza', birthday: '26' },
       { userName: 'Tommy Alberto Arévalo', birthday: '26' },
       { userName: 'Alex Sanchez Cervantes', birthday: '28' },
       { userName: 'Oscar Hernandez Flores', birthday: '31' }
       */
       //SEPTEMBER
       /*
       { userName: 'Nery L. Arroyo Flores', birthday: '1' },
       { userName: 'Daniel Izquierdo', birthday: '1' },
       { userName: 'Oswaldo Galicia Perez', birthday: '2' },
       { userName: 'Gisella Tamez Gonzalez', birthday: '2' },
       { userName: 'Laura Judith Garcia Valenzuela', birthday: '5' },
       { userName: 'Roberto Trevino Gonzalez', birthday: '5' },
       { userName: 'Ma. Juliana Tripodi', birthday: '5' },
       { userName: 'Ana M. Santoyo Lara', birthday: '6' },
       { userName: 'Abhishek E. Soni', birthday: '8' },
       { userName: 'Ana Cortez Cortes', birthday: '10' },
       { userName: 'Joseph A. Guerrero', birthday: '10' },
       { userName: 'Rodrigo Romero Moctezuma', birthday: '12' },
       { userName: 'Atziri Chapa Gutierrez', birthday: '13' },
       { userName: 'Carlos Fernando Dueñas Ramirez', birthday: '14' },
       { userName: 'Oziel Aldair Muñiz', birthday: '14' },
       { userName: 'Alberto Perez Rendon', birthday: '16' },
       { userName: 'Ana Perez', birthday: '16' },
       { userName: 'Marcela Nuñez', birthday: '17' }
            
       { userName: 'Rosy Morales Hernandez', birthday: '18' },
       { userName: 'Adrian Casanova Rivera', birthday: '19' },
       { userName: 'Cesar Gonzalez Rodriguez', birthday: '20' },
       { userName: 'Nancy V. Vega Rivera', birthday: '20' },
       { userName: 'Fatima Aquino', birthday: '20' },
       { userName: 'Jose Angel Garcia Arce', birthday: '20' },
       { userName: 'Armando Infante Cordero', birthday: '23' },
       { userName: 'Juan Carlos Villarreal', birthday: '23' },
       { userName: 'Jorge Alanis Vazquez', birthday: '24' },
       { userName: 'Gerardo Lagunes', birthday: '24' },
       { userName: 'Vanesa Ruiz Gonzalez', birthday: '27' },
       { userName: 'Olga Elizabeth Gutiérrez Mercado', birthday: '27' },
       { userName: 'Iliana Carrasquedo', birthday: '27' },
       { userName: 'David Hernández', birthday: '28' },
       { userName: 'Miguel Camacho', birthday: '29' },
       { userName: 'Sonnia la Garza Barrera', birthday: '29' },
       { userName: 'Ricardo Martinez', birthday: '29' },
       { userName: 'Mayra Ramirez', birthday: '30' }
       */
       //OCTOBER
       /*
       { userName: 'Andres Campos Guerra', birthday: '2' },
       { userName: 'Myriam Benavides Elizondo', birthday: '3' },
       { userName: 'Jaziel Vallejo', birthday: '5' },
       { userName: 'Hector Real', birthday: '5' },
       { userName: 'Adriana Esvereidy Torres', birthday: '7' },
       { userName: 'Irma Zamudio', birthday: '10' },
       { userName: 'Gerardo Perez Lara', birthday: '10' },
       { userName: 'Fabricio Gaona Leal', birthday: '10' },
       { userName: 'Lizeth Martinez', birthday: '11' },
       { userName: 'Denisse Azucena Cruz Alvarado', birthday: '12' },
       { userName: 'Carlos Alberto Villegas Contreras', birthday: '12' },
       { userName: 'Sonia Maria Rodriguez Arroyo', birthday: '13' },
       { userName: 'Daniel Saucedo Borrego', birthday: '13' },
       { userName: 'David Eduardo Sierra', birthday: '13' },
       { userName: 'Ovidio Garza Gil', birthday: '14' },
       { userName: 'Gabriel Hernandez Garcia', birthday: '15' },
       { userName: 'Ana Paulina Suarez Gutierrez', birthday: '15' },
       { userName: 'Abraham Elias', birthday: '16' },
       { userName: 'Mizaelle C. San Diego', birthday: '18' },
       { userName: 'Estefani Lisset Tamez', birthday: '18' }
       
       { userName: 'Pedro Reyes', birthday: '18' },
       { userName: 'Maria Guadalupe Gonzalez Davila', birthday: '18' },
       { userName: 'Lorena Avila', birthday: '20' },
       { userName: 'Gustavo Merino', birthday: '21' },
       { userName: 'Hanieli Tovar', birthday: '21' },
       { userName: 'Oscar Lerma', birthday: '22' },
       { userName: 'Elizabeth Jimenez Aquino', birthday: '23' },
       { userName: 'Alan Yatzael Maldonado Obregon', birthday: '24' },
       { userName: 'Monica E. Ruvalcaba', birthday: '25' },
       { userName: 'Raul Hernandez Rodriguez', birthday: '25' },
       { userName: 'Andres Hernandez', birthday: '25' },
       { userName: 'Miguel Hernandez Gamez', birthday: '26' },
       { userName: 'Adrian Ballesteros', birthday: '27' },
       { userName: 'Manuel Arana', birthday: '28' },
       { userName: 'Joel Garcia', birthday: '28' },
       { userName: 'Luis Ramirez', birthday: '28' },
       { userName: 'Arturo Leyva Rodriguez', birthday: '30' },
       { userName: 'Juan Andres Tamez Ceja', birthday: '30' },
       { userName: 'Carlos Arizpe Bautista', birthday: '31' }
       */
       //NOVEMBER
       /*
       { userName: 'Roberto Arevalo Cedillo', birthday: '1' },
       { userName: 'Kevin Adrian Vidales Alvarez', birthday: '4' },
       { userName: 'Roberto Argüelles', birthday: '5' },
       { userName: 'Jonathan Ivan Ponce Ramirez', birthday: '7' },
       { userName: 'Alber J. Valdez Parra', birthday: '8' },
       { userName: 'Luis Fernando Trujillo Olivares', birthday: '8' },
       { userName: 'Saul Figueroa Alcaraz', birthday: '8' },
       { userName: 'Alan Cano Lopez', birthday: '9' },
       { userName: 'Jessica Leticia Garza', birthday: '9' },
       { userName: 'Claudia Mendez', birthday: '10' },
       { userName: 'Luis Barreras', birthday: '10' },
       { userName: 'Maria Melissa Garcia', birthday: '10' },
       { userName: 'Alejandro Vazquez Vazquez', birthday: '11' },
       { userName: 'Tonatiuh Ortega', birthday: '12' },
       { userName: 'Jose Eleuterio Benavides Flores', birthday: '16' }      

       { userName: 'Nancy Rivera Rosas', birthday: '17' },
       { userName: 'Ricardo Reyes Sanchez', birthday: '19' },
       { userName: 'Dennys Gabriela Gallegos', birthday: '22' },
       { userName: 'Diana Lizeth Rodriguez Lopez', birthday: '23' },
       { userName: 'Rene Alarcon Torres', birthday: '23' },
       { userName: 'Luis Gerardo Rodriguez', birthday: '25' },
       { userName: 'Rosa Aglae Castaneda Garcia', birthday: '25' },
       { userName: 'Ricardo Salinas', birthday: '25' },
       { userName: 'Andres Garcia Barrios', birthday: '26' },
       { userName: 'Angel Adrian Delgado Bocanegra', birthday: '27' },
       { userName: 'Cynthia Esparza Flores', birthday: '27' },
       { userName: 'Maria Cadena', birthday: '27' },
       { userName: 'Carla Lopez', birthday: '28' },
       { userName: 'Cutberto Pulido', birthday: '29' },
       { userName: 'David Crispin', birthday: '30' }
       */
      //DECEMBER
      /*
      { userName: 'Oswaldo Tavares Córdova', birthday: '2' },
      { userName: 'Loreli Cerda', birthday: '3' },
      { userName: 'Jesus Mario Rodriguez Charles', birthday: '4' },
      { userName: 'Ingrid Ramos Najera', birthday: '7' },
      { userName: 'Carlos Salcido', birthday: '10' },
      { userName: 'Cynthia Brito', birthday: '13' },
      { userName: 'Fabian Iracheta Villarreal', birthday: '14' },
      { userName: 'Victor Rivera', birthday: '14' },
      { userName: 'Ricardo García González', birthday: '16' },
      { userName: 'Antonio García Triana', birthday: '18' },
      { userName: 'Raul Suarez Sandova', birthday: '18' },
      { userName: 'Enrique Mercado', birthday: '19' },
      { userName: 'Harlan Búrquez', birthday: '19' }
      
      { userName: 'Azeneth Luna', birthday: '22' },
      { userName: 'Beatriz Arredondo', birthday: '22' },
      { userName: 'Orlando Jimenez Leal', birthday: '22' },
      { userName: 'Edgar Ayala Iracheta', birthday: '24' },
      { userName: 'Ernesto Aguilar Granados', birthday: '24' },
      { userName: 'Salymar Hernandez', birthday: '26' },
      { userName: 'Hugo Rivera', birthday: '27' },
      { userName: 'Johana Villanueva Sanchez', birthday: '28' },
      { userName: 'Rafael De La Cruz', birthday: '28' },
      { userName: 'Alberto Pasillas', birthday: '31' },
      { userName: 'Karla Saldaña', birthday: '31' }
      */
];

    constructor() {
        console.log(this.menuItems);
        var today = (new Date("01/10/2019")).getDate();
        console.log(today)
    }

}