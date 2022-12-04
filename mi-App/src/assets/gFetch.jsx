
let obj = [
    {id: '1', name: 'GORRA 1', categoria: 'gorras',stock: '50',price: '40',  foto:'https://www.shutterstock.com/image-photo/beanie-hat-blue-isolated-on-600w-1669286446.jpg'},
    {id: '2', name: 'GORRA 2', categoria: 'gorras',stock: '90',price: '50',  foto:'https://www.shutterstock.com/image-photo/green-hat-600w-515457253.jpg'},
    {id: '3', name: 'GORRA 3', categoria: 'gorras',stock: '100',price: '20',  foto:'https://www.shutterstock.com/image-photo/flat-hipster-hat-isolated-on-600w-2074041623.jpg'},
    {id: '4', name: 'REMERA 4', categoria: 'remeras',stock: '80',price: '60',  foto:'https://www.shutterstock.com/image-photo/dark-pink-blank-tshirt-front-600w-1109856773.jpg'},
    {id: '5', name: 'GORRA 5', categoria: 'gorras',stock: '20',price: '25',  foto:'https://www.shutterstock.com/image-photo/teenager-girl-looking-sunglasses-beenie-600w-206384560.jpg'},
    {id: '6', name: 'GORRA 6', categoria: 'gorras',stock: '5',price: '30',  foto:'https://www.shutterstock.com/image-photo/portrait-sensual-sexy-girl-black-600w-1106202302.jpg'},
    {id: '7', name: 'GORRA 7', categoria: 'gorras',stock: '100',price: '29',  foto:'https://www.shutterstock.com/image-photo/boy-holding-toy-camera-acting-260nw-2219676865.jpg'},
    {id: '8', name: 'REMERA 8', categoria: 'remeras',stock: '100',price: '80',  foto:'https://www.shutterstock.com/image-photo/tshirt-template-600w-256412089.jpg'},
    {id: '9', name: 'REMERA 9', categoria: 'remeras',stock: '99',price: '160',  foto:'https://www.shutterstock.com/image-photo/tshirt-design-young-man-blank-600w-667154830.jpg'}
]
export const gFetch = (nro) => {
    return new Promise( (resolve, reject)=>{
        
        const condition = true
        if (condition) {    
            setTimeout(()=>{ resolve(obj) }, 1200)
        } else {
            reject( 'Error' )        
        }
    } )
}