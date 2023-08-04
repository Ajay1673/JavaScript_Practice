let arr = []
const loadAndUnload = {
    A: [0,0,[],[]],
    B: [0,0,[],[]],
    C: [0,0,[],[]],
    D: [0,0,[],[]],
    E: [0,0,[],[]]
}
function unload(name,parcel_unload){
    arr.splice(arr.indexOf(`${parcel_unload}`),1)
    loadAndUnload[name][2].push(parcel_unload)
}
function parcelUnload(){
    const stationName = document.querySelector(".station-name").value
    const parcel_unload = document.querySelector(".parcel-unload").value
    if(stationName!="A" && arr!=null){
        if(stationName=="B" && loadAndUnload.B[1]<2 && loadAndUnload[stationName][3].includes(parcel_unload)==false){
            unload(stationName,parcel_unload)
            loadAndUnload.B[1]++
        }
        else if(stationName=="C" && loadAndUnload.C[1]<4 && loadAndUnload[stationName][3].includes(parcel_unload)==false){
            unload(stationName,parcel_unload)
            
            loadAndUnload.C[1]++
        }
        else if(stationName=="D" && loadAndUnload.D[1]<3 && loadAndUnload[stationName][3].includes(parcel_unload)==false){
            unload(stationName,parcel_unload)
            loadAndUnload.D[1]++
        }
        else if(stationName=="E" && loadAndUnload.E[1]<5){
            unload(stationName,parcel_unload)
            loadAndUnload.E[1]++
        }
    }
    console.log(loadAndUnload)
    console.log(arr)
}
function load(stationName,parcel_load){
    arr.push(parcel_load)
    loadAndUnload[stationName][3].push(parcel_load)
}
function parcelLoad(){
    const stationName = document.querySelector(".station-name").value
    const parcel_load = document.querySelector(".parcel-load").value
    if(stationName!="E"){
        if(stationName=="A" && loadAndUnload[stationName][0]<5){
            load(stationName,parcel_load)
            loadAndUnload.A[0]++
        }
        else if(stationName=="B" && loadAndUnload.B[0]<4 && loadAndUnload[stationName][2].includes(parcel_load)==false){
            load(stationName,parcel_load)
            loadAndUnload.B[0]++
        }
        else if(stationName=="C" && loadAndUnload.C[0]<3 && loadAndUnload[stationName][2].includes(parcel_load)==false){
            load(stationName,parcel_load)
            loadAndUnload.C[0]++
        }
        else if(stationName=="D" && loadAndUnload.D[0]<2 && loadAndUnload[stationName][2].includes(parcel_load)==false){
            load(stationName,parcel_load)
            loadAndUnload.D[0]++
        }
    }
    console.log(loadAndUnload)
    console.log(arr)
}