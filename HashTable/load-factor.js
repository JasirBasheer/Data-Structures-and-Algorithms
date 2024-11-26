class HastTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
        this.count = 0
    }

    hash(key){
        let sum =0
        for(let i =0;i<key.length;i++){
            sum+=key.charCodeAt(i)
        }
        return Math.floor(sum%this.size)
    }

    insert(key,value){
        if(this.count/this.size >0.7){
            this.resize()
        }
        let index = this.hash(key)
        let bucket = this.table[index]

        if(!bucket){
            bucket = [];
            this.table[index] = bucket;
            
        }
            let sameKey = bucket.find((item) => item[0] === key);
            
            if(sameKey){
                sameKey[1] =value
            }else{
                bucket.push([key,value])
                this.count++
            }

        }

        delete(key){
            let index = this.hash(key)
            let bucket = this.table[index]

            if(bucket){
                let item = bucket.find((item)=>item[0]==key)
                bucket.splice(bucket?.indexOf(item),1)
            }
        }

        get(key){
            let index = this.hash(key)
            let bucket = this.table[index]
            
             if(bucket){
                for(let element of bucket){
                    if(element[0]==key){
                        return element[1]
                    }
                }
             }
             return undefined

        }


        resize(){
            let oldtable = this.table
            this.table = new Array(this.size*2)
            this.size = this.size*2
            this.count = 0

            for(let  i=0;i<oldtable.length;i++){
                if(oldtable[i]){
                    for(let j=0;j<oldtable[i].length;j++){
                        this.insert(oldtable[i][j][0],oldtable[i][j][1])
                    }
                }
            }
        }
}

const ht = new HastTable(10)

ht.insert('name','jasir')
ht.delete('name')
ht.insert('name','jasir')

console.log(ht.get('name'))