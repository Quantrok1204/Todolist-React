// function getAll()  { 
//         let data = this.storage.data;
//         return (data && data.length) ? data : [];
// }

// function write(data) { 
//     let d = JSON.stringify({ data: data || [] });
//     localStorage.setItem(this.storageKey, d);
// }

// export {getAll, write}


export class Localstorage { 
    storage = null;
    storageKey;
    constructor(storageKey) {
        this.storageKey = storageKey;
        let d = JSON.parse( localStorage.getItem(storageKey) || '{}');
        this.storage = d;
    }
    
    getAll() { 
        let data = this.storage.data;
        return (data && data.length) ? data : [];
    }

    write(data) { 
        let d = JSON.stringify({ data: data || [] });
        localStorage.setItem(this.storageKey, d);
    }

}