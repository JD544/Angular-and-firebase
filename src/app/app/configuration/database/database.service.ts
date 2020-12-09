import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service'
import { AngularFirestore } from '@angular/fire/firestore'
import { async } from '@angular/core/testing';
import { retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  collection = ''
  selectedData = ''

  constructor(
    private fireStore: AngularFirestore, 
    private AuthServer: AuthService
      ) { 
      }

      GMAD() {
        const self = this 
        const Objects = {
          getData: async function (Id, docId) {
        await self.fireStore.collection(Id).doc(docId).get().subscribe(snap => {
          setTimeout(()=>{
           self.collection = Id
             self.selectedData = snap.id
          },960)
            })

            const objects = {
              set: async function (data) {
                setTimeout(()=>{
            return self.fireStore.collection(self.collection).doc(self.selectedData).set(data)
              },3000)
              },
              getId: self.selectedData,
              exists: async function() {
                
                await self.fireStore.collection(self.collection).doc(self.selectedData).get().subscribe(data => {
                  if (data.exists) {
                    
                  }
                  else {
                    return null
                  }
                })

                const Options = {
                  set: async function (data) {
                    setTimeout(()=>{
                return self.fireStore.collection(self.collection).doc(self.selectedData).set(data)
                  },3000)
                  }
                }

                return Options
              }
            }

            return objects
          },
          Settings: function () {
            const settings = {
              enableActiveStatus: function (e) {

              },
              Cache: {
                disable: function () {
                 
                },
                enable: function () {
                 
                }
              }
            }

            return settings
          },
          Add: async function (collection, data) {
            return self.fireStore.collection(collection).add(data)
          },
          Set: async function (collection, doc, data) {
            return await self.fireStore.collection(collection).doc(doc).set(data)
          }
        }

        return Objects
      }
}
