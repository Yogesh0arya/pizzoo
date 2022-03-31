import MenuDisplay from "./MenuDisplay"
import {useState, useEffect} from 'react'

function Menu({data}) {
    const [finalUpdateData, setFinalUpdateData] = useState(data)

    const [isSelected, setIsSelected] = useState([true, false, false])
    const [isSelectedSort, setIsSelectedSort] = useState([false, false, true])

    const updateTheMenu=(ind)=>{
        const update = isSelected.map((item,i)=>i===ind ? !item : item=false)
        setIsSelected(update)
    }


    const sortTheMenu=(ind)=>{        
        const update = isSelectedSort.map((item,i)=>i===ind ? !item : item=false)
        setIsSelectedSort(update)
    }

    function finalUpdate(e){
        let newData = data
        
        if(isSelected[1]){
            newData = data.filter(item=>item.isVeg)     
            
        }else if(isSelected[2]){
            newData = data.filter(item=>item.isVeg===false)
        }


        if(isSelectedSort[0]){
            newData = newData.slice().sort((a,b)=>a.price - b.price)
        }else if(isSelectedSort[1]){
            newData = newData.slice().sort((a,b)=>a.rating - b.rating)
        }
        

        setFinalUpdateData(newData)

        if(!isSelectedSort.find((element) =>element === true)){
            setIsSelectedSort([false, false, true])
          }

        if(!isSelected.find((element) =>element === true)){
            setIsSelected([true, false, false])
        }

    }
    
    
    return (
        <div>
            <h1 className="text-center text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold mt-12 mb-3">Menu</h1>
            <div className="px-5 max-w-6xl mx-auto flex gap-2 flex-col md:flex-row md:justify-between bg-gray-100 p-2">
                <div className="space-x-3 flex items-center">
                    <h1 className="text-gray-400 font-bold text-lg">Filter</h1>
                    <button onClick={()=>updateTheMenu(0)} className={`${isSelected[0] ? ('bg-black text-white') : ('bg-white text-black')} text-sm p-1 md:px-2 md:py-1 rounded-full border-2 border-black `}>All</button>
                    <button onClick={()=>updateTheMenu(1)} className={`${isSelected[1] ? ('bg-black text-white') : ('bg-white text-black')} text-sm p-1 md:px-2 md:py-1 rounded-full border-2 border-black `}>VEG</button>
                    <button onClick={()=>updateTheMenu(2)} className={`${isSelected[2] ? ('bg-black text-white') : ('bg-white text-black')} text-sm p-1 md:px-2 md:py-1 rounded-full border-2 border-black `}>NON-VEG</button>
                </div>
                <div className="space-x-3 flex items-center">
                    <h1 className="text-gray-400 font-bold text-lg">Sort</h1>
                    <button onClick={()=>sortTheMenu(0)} className={`${isSelectedSort[0] ? ('bg-black text-white') : ('bg-white text-black')} text-sm p-1 md:px-2 md:py-1 rounded-full border-2 border-black `}>PRICE</button>
                    <button onClick={()=>sortTheMenu(1)} className={`${isSelectedSort[1] ? ('bg-black text-white') : ('bg-white text-black')} text-sm p-1 md:px-2 md:py-1 rounded-full border-2 border-black `}>RATING</button>
                    <button onClick={()=>sortTheMenu(2)} className={`${isSelectedSort[2] ? ('bg-black text-white') : ('bg-white text-black')} text-sm p-1 md:px-2 md:py-1 rounded-full border-2 border-black `}>UNSORT</button>
                </div>
                <button className="rounded-md px-2 py-2 bg-red-700 text-white" onClick={()=>finalUpdate(1)}>Apply</button>
            </div>
            <div className="my-12 max-w-6xl px-5 mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {finalUpdateData.map(({id, name, description, isVeg, rating, price, img_url, size, toppings})=>(
                    <MenuDisplay 
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        isVeg={isVeg}
                        rating={rating}
                        price={price}
                        img_url={img_url}
                        size={size}
                        toppings={toppings}
                    />
                ))}
            </div>
        </div>
    )
}

export default Menu