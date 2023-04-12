import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'app-new-joiners',
    templateUrl: './new-joiners.component.html',
    styleUrls: ['./new-joiners.component.css']
})

export class NewJoinersComponent {
    [x: string]: any;
    
    listaNewJoiners: any[] = [
        { username: 'Lisset Coria', EID: 'mayra.lisett.coria', Speciality: 'Hybrid', color: '' },
        { username: 'Vicente de la Peña', EID: 'v.de.la.pena.herrera', Speciality: 'Functional, GCP > Mty ', color: '' }
    ];

    myclass: String = "";

    colorList: String[] = ["#1cba11", "#d90fc9", "#31cfe9", "#e37236", "#63714f", "#2430e8", "#F4FF33", "#7f32a8"];
    color: String = "";
    
    constructor() {
        this.getRandomlyColor();
        this.splitName();
        console.log();
    }

    getRandomlyColor() {
        /*
        this.listaNewJoiners.map(joiner => {
             joiner.color = "#" + String(Math.floor(Math.random() * 16777215).toString(16));
         });
         */
        this.listaNewJoiners.map(joiner => {
            const random = Math.floor(Math.random() * this.colorList.length);
            joiner.color = this.colorList[random];
        });
        console.log(this.listaNewJoiners);
        //return String(Math.floor(Math.random()*16777215).toString(16));

        //return String(Math.floor(Math.random()*16777215).toString(16));
    }

    splitName() {
        this.listaNewJoiners.map(joiner => {
            const values = joiner.username.split(" ");
            //Examples: Eunice Perez. Length is 2; `${values[0]} ${values[1]}`
            //Juan Antonio de Leon Perez. Length is > 2 and values[2] is "de"; `${values[0]} ${values[2]} ${values[3]}`
            //Else: Juan Perez Ramos: `${values[0]} ${values[2]}`
            //joiner.username = values.length === 2 ? `${values[0]} ${values[1]}` : values.length > 2 && values[2] === "de" ? `${values[0]} ${values[2]} ${values[3]}` : `${values[0]} ${values[2]}`;
            
        });
    }

    updateClassStyle() {//TODO para evaluar y cambiar el estilo cuando sean pocos new joiners
        let sizeArray = this.listaNewJoiners.length;
        this.myclass = sizeArray <= 3 ? "clase4newjoiners" : "otraClase";
    }

    getSrcImg(extension: String, EID: String) {
        
        let src: String = "./../../assets/profile-pictures/" + EID + "." + extension;
  
        return src;
    }

    prueba() {

        const elemento = (document.querySelector('.profile-picture'));
        console.log(elemento);
        // console.log(elemento?.getAttribute('src'))
        // const path = document.querySelectorAll('.profile-picture');
        // path.forEach( elem => {
        //     console.log(elem.getAttribute("src"));
        // })
    }
}