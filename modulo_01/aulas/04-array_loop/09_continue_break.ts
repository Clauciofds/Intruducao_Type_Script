let countryslist = ['Brasil', 'Méxido', 'Austrália', 'Inglaterra', 'EUA']

for (let item of countryslist){
    if (item === 'Austrália'){
        break
    }
    console.log(item)
}

for (let i = 0; i < countryslist.length; i++){
    if (countryslist[i] === 'Austrália'){
        break
    }
    console.log(countryslist[i])
}

let i = 0
while (i < countryslist.length){
    if(countryslist[i] === 'Austrália'){
        break
    }
    console.log(countryslist[i])
    i++
}