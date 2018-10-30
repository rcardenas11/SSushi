import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";

export const Reservas = new Mongo.Collection("reservas");  //nombre que va a tener la coleccion en la BD

if(Meteor.isServer){
  Meteor.publish("reservas", () =>{
    return Reservas.find({});
  });
}

Meteor.methods(
  {
    "reserva.add"(name,fecha,numPersonas){


      Reservas.upsert({creador},{
        name,
        fecha,
        numPersonas,
        estado: false

      });

    },

    "reserva.del"(name){

      const part = Menu.findOne({name});

      Reservas.remove(part);

 
    }

    

  }
);