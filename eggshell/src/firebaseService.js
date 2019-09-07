import {firebaseDatabase} from 'firebaseConfig'

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 100) => {

        let query = firebaseDatabase.ref(nodePath)
                                   .limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

}