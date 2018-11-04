import AV from 'leancloud-storage'
let APP_ID = 'Wwznshss8YtSAktaYBWks0Lt-gzGzoHsz'
let APP_KEY = 'cptsnlLS3yriPqudT9fDc65u'
AV.init({appId: APP_ID, appKey: APP_KEY})

function save(store, data){
    store = AV.Object.extend(store);
    let storeItem = new store();
    return storeItem.save(data)
}

function fetchAll(store){
        let storeItem = new AV.Query(store)
        return storeItem.find()
}

export {save, fetchAll}