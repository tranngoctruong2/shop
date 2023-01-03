import {useState,createContext, useEffect} from 'react'
export const CartContext =createContext()

const CartProvider = ({children})=> {
    const [cart,setCart]=useState([])
    const [total,setTotal]=useState()
    const [totalamount,setTotalamount]=useState()
    
    const addToCart =(product,id)=>{
        const newItem ={...product,amount:1}
        
        const cartItem =cart.find((item)=>{
            return item.id===id
        })
        console.log("cartitem")
        if(cartItem) {
            const newCart =[...cart].map((item)=>{
                if(item.id===id){
                    return{...item,amount:item.amount+1}
                }else{
                    return item
                }
            });
            setCart(newCart);
            
        }else{
            setCart([...cart,newItem])
            console.log(cart)
        }

    }
    console.log(cart)
    const remoCart =(id)=>{
        const newCart =cart.filter((item)=>{return item.id!==id}
        )
        setCart(newCart)
        console.log(newCart)
    }
    const clearCart = ()=> setCart([])
    const congCart =(id)=>{
    
            const newCart =[...cart].map((item)=>{
                if(item.id===id){
                    return{...item,amount:item.amount+1}
              
                }else{
                    return item
                }
                })
                setCart(newCart) 
    }
   
      
    const truCart =(id)=>{
        const cartItem = cart.find((cart)=>{
            return cart.id===id
        })
        if(cartItem){
            const newCart =[...cart].map((item)=>{
                if(item.id===id){
                    return {...item,amount:item.amount-1}
                }else
                    return item;
               
            })
            setCart(newCart)
            console.log(cart)
        }
        if(cartItem.amount<2){
            remoCart(id)
        }
    }
    useEffect(()=>{
        if(cart){
            const amount =cart.reduce((a,b)=>{
                return a+b.amount
            },0)
            setTotalamount(amount)
        }
    },[cart])
    useEffect(()=>{
            const coin =cart.reduce((a,b)=>{
                return a +b.amount*b.price
            },0)
            setTotal(coin)
    },[cart])
    
    return <CartContext.Provider value={{cart,setCart,addToCart,remoCart,clearCart,congCart,truCart,total,totalamount}} >{children}</CartContext.Provider>
}
export default CartProvider;