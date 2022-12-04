
let prod = [
    {id: '01', name: 'Blue Beanie', cat: 'GORRAS',price: '40', stock: '50', pic:'https://www.shutterstock.com/image-photo/beanie-hat-blue-isolated-on-600w-1669286446.jpg'},
    {id: '02', name: 'Aqua Ben 2', cat: 'GORRAS',price: '50', stock: '90', pic:'https://www.shutterstock.com/image-photo/green-hat-600w-515457253.jpg'},
    {id: '03', name: 'Flat Beanie', cat: 'GORRAS',price: '20', stock: '100', pic:'https://www.shutterstock.com/image-photo/flat-hipster-hat-isolated-on-600w-2074041623.jpg'},
    {id: '04', name: 'Vino Tinto', cat: 'REMERAS',price: '60', stock: '80', pic:'https://www.shutterstock.com/image-photo/dark-pink-blank-tshirt-front-600w-1109856773.jpg'},
    {id: '05', name: 'Black Beanie', cat: 'GORRAS',price: '25', stock: '20', pic:'https://www.shutterstock.com/image-photo/teenager-girl-looking-sunglasses-beenie-600w-206384560.jpg'},
    {id: '06', name: 'Sombrero', cat: 'GORRAS',price: '30', stock: '5', pic:'https://www.shutterstock.com/image-photo/portrait-sensual-sexy-girl-black-600w-1106202302.jpg'},
    {id: '07', name: 'Cool-Kid Beanie', cat: 'GORRAS',price: '29',stock: '100',  pic:'https://www.shutterstock.com/image-photo/boy-holding-toy-camera-acting-260nw-2219676865.jpg'},
    {id: '08', name: 'Dark Knight', cat: 'REMERAS',price: '80',stock: '100',  pic:'https://www.shutterstock.com/image-photo/tshirt-template-600w-256412089.jpg'},
    {id: '09', name: 'Basic Dad', cat: 'REMERAS',price: '160',stock: '99',  pic:'https://www.shutterstock.com/image-photo/tshirt-design-young-man-blank-600w-667154830.jpg'},
    {id: '10', name: 'Gorra Fede', cat: 'GORRAS',price: '9999',stock: '1',  pic:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'}
]
export const gFetch = () => {
    return new Promise( (res, rej)=>{
        
        const task = true
        if (task) {    
            setTimeout(()=>{ res(prod) }, 1600)
        } else {
            rej( 'Error' )        
        }
    } )
}