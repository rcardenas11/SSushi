import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";

export const Reservas = new Mongo.Collection("reservas");  //nombre que va a tener la coleccion en la BD

if(Meteor.isServer){
  Meteor.publish("reservas", () =>{
    return Reservas.find({});
  });
}