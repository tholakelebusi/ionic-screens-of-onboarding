import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import  firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import {Onbord} from './onbord';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  userInfo:Onbord;
  constructor(private db: AngularFirestore,
    public afAuth: AngularFireAuth,public router:Router) { }


  signUpUser(user)
  {
    var database = firebase.database();

    let message=""
    firebase.auth().createUserWithEmailAndPassword(user.email,user.password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    message=errorMessage
    console.log(errorMessage);
  }).then( results =>{
    console.log(results);

    if(results){
      message = "successfully registered"
      firebase.database().ref('user/' + results.user.uid).set({
        name: user.name,
       surname : user.surname,
       email: user.email,
       age:user.age,
       cellNo:user.cellNo
      
      });
      this.router.navigateByUrl("/login")
      console.log(message);

    }else{
      this.router.navigateByUrl("/register")
    }

  });
}


signInUser(email,password){
  
  let user :any
  let message = "";

  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    message = errorMessage
    // ...
  }).then(result =>{

    
    user = result

    if(user){
      message = user.user.email + " has successfully logged in"
      console.log(message);
      this.router.navigateByUrl("")
    }else{
      this.router.navigateByUrl("/login")
      console.log(message);
    }

    return user.user.email
    
  });

}
  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
     .then(() => console.log("email sent"))
     .catch((error) => console.log(error))
  }
 
 ForgotPassword(passwordResetEmail) {
       return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
       .then(() => {
         window.alert('Password reset email sent, check your inbox.');
       }).catch((error) => {
         window.alert(error)
       })
     }
 
 
 
     logout(){
       firebase.auth().signOut().then(()  =>{
         // Sign-out successful.
         console.log("Sign-out successful.");
         
       }).catch(function(error) {
         console.log(error);
   
       });
 
 }

}
