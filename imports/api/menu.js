import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";

export const Menu = new Mongo.Collection("menu");  //nombre que va a tener la coleccion en la BD

if(Meteor.isServer){
  Meteor.publish("menu", () =>{
    return Menu.find({});
  });
}