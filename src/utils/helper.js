export function filterData(text,allrestaurants){
    return allrestaurants.filter((item)=>item.info.name.toLowerCase().includes(text.toLowerCase()));
};