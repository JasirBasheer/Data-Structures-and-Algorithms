class HashTable{
    constructor(size = 10){
        this.table = Array.from({ length: size }, () => []);
        }

    hash(key){
        let hash = 0
        for(let i=0;i<key.length;i++){
           hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }

    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]      
        
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0] == key){
                bucket[i][1] = value
                return
            }
        }
        bucket.push([key,value])
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]

        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0] === key){
                return bucket[i][1]
            }
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]

        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0] === key){
                bucket.splice(i,1)
                return
            }
        }
    }

    print(){
        for(let i =0;i<this.table.length;i++){
            if(this.table[i].length!=0){
                console.log(i,this.table[i])
            }
        }
    }
}

const hs = new HashTable(10)
hs.set('name','jadsir')
hs.set('mane','jasir')

hs.print()
hs.remove('name')
console.log(hs.get('mane'))
























