import React, {useState, useRef} from 'react';
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {db} from '../firebase';


const Form = ()=>{

    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [edad,setEdad] = useState('');
    const [celular,setCelular] = useState('');
    const [email,setEmail] = useState('');
    const [repetir,setRepetir] = useState(null);
    const [venderFuturo,setVenderFuturo] = useState(null);


    const insertDoc = async ()=>{
        try {
            const toastifyId = toast.loading('Por favor espere',{
                closeOnClick: true
            }) ;
            if(nombre !=='' &&
                apellido !=='' &&
                edad !== '' &&
                celular !== '' &&
                email !== '' &&
                repetir !== null &&
                venderFuturo !== null
            ){
                const docRef = await addDoc(collection(db, "visitantes"), {
                    nombre,
                    apellido,
                    edad,
                    celular,
                    email,
                    repetir,
                    futuro_vender:venderFuturo
                });
                if(docRef.id && docRef.id !== ''){
                    console.log("Document written in db: ", docRef);
                    toast.update(toastifyId,{
                        render:'El registro se realizó exitosamente! Gracias.',
                        closeOnClick: true,
                        type:'success',
                        isLoading:false
                    });
                } else {
                    toast.update(toastifyId,{
                        render:'Ocurrió un error al momento de registrar. Intente nuevamente por favor.',
                        closeOnClick: true,
                        type:'error',
                        isLoading:false
                    });
                }

            }
            else if(nombre ===''){
                toast.update(toastifyId,{
                    render:'El Nombre es obligatorio',
                    type:'error',
                    autoClose:true,
                    closeOnClick:true,
                    isLoading:false
                });
            }
            else if(apellido ===''){
                toast.update(toastifyId,{
                    render:'El Apellido es obligatorio',
                    type:'error',
                    autoClose:true,
                    closeOnClick:true,
                    isLoading:false
                });
            }
            else if(celular ===''){
                toast.update(toastifyId,{
                    render:'El Celular es obligatorio',
                    type:'error',
                    autoClose:true,
                    closeOnClick:true,
                    isLoading:false
                });
            }

            else if(edad ==='' || edad==='0'){
                toast.update(toastifyId,{
                    render:'La Edad es obligatoria',
                    type:'error',
                    autoClose:true,
                    closeOnClick:true,
                    isLoading:false
                });
            }

            else if(email ===''){
                toast.update(toastifyId,{
                    render:'El E-Mail es obligatorio',
                    type:'error',
                    autoClose:true,
                    closeOnClick:true,
                    isLoading:false
                });
            }

            else if(repetir ==='' || venderFuturo==='' || repetir === null || venderFuturo === null){
                toast.update(toastifyId,{
                    render:"Debes elegir explícitamente 'Sí' o 'No'",
                    type:'error',
                    autoClose:true,
                    closeOnClick:true,
                    isLoading:false
                });
            }


          } catch (e) {
            console.error("Error adding document: ", e);
          }
    };

    return (
        <div className='max-sm:w-full sm:w-[30%] flex flex-col justify-start items-start gap-3 border-2 bg-slate-100 rounded-xl p-2 mt-5'>
            <div className='flex flex-col w-full py-4'>
                <label className='font-palanquin'>Nombre*</label>
                <input required type='text' placeholder='Christian' className='font-palanquin' value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            </div>
            <div className='flex flex-col w-full py-4 gap-2'>
                <label className='font-palanquin'>Apelliido*</label>
                <input required type='text' placeholder='Dior' className='font-palanquin' value={apellido} onChange={(e)=>setApellido(e.target.value)} />
            </div>
            <div className='flex flex-col w-full py-4 gap-2'>
                <label className='font-palanquin'>Celular*</label>
                <input required type='number' placeholder='65190342' className='font-palanquin' value={celular} onChange={(e)=>setCelular(e.target.value)} />
            </div>
            <div className='flex flex-col w-full py-4 gap-2'>
                <label className='font-palanquin'>E-Mail*</label>
                <input required type='email' placeholder='c.dior@gmail.com' className='font-palanquin' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col w-full py-4 gap-2'>
                <label className='font-palanquin'>Edad*</label>
                <input required type='number' placeholder='40' className='font-palanquin' value={edad} onChange={(e)=>setEdad(e.target.value)} />
            </div>
            <div className='flex flex-col w-full py-4 gap-2'>
                <label className='font-palanquin'>Te gustaría que repitamos la Venta de Garaje?*</label>
                <select required className='font-palanquin' value={repetir} onChange={(e)=>setRepetir(e.target.value)}>
                    <option value='' style={{backgroundColor:'#a2a2a2', textDecoration:'line-through'}}>Eliga una opción</option>
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </select>
            </div>
            <div className='flex flex-col w-full py-4 gap-2'>
                <label className='font-palanquin'>Estarías interesad@ en vender tus cosas?*</label>
                <select required className='font-palanquin' value={venderFuturo} onChange={(e)=>setVenderFuturo(e.target.value)}>
                    <option value='' style={{backgroundColor:'#a2a2a2', textDecoration:'line-through'}}>Eliga una opción</option>
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </select>
            </div>
            <p className='text-[10px] text-red-600'>*Campo obligatorio</p>
            <div className='flex justify-center items-center vertical-middle w-full'>
                <button className='bg-gradient-to-r
                from-[#f1bc15] to-[#b2b2b2] px-8 py-2
                rounded-lg shadow-md border-2 border-slate-500 active:border-black'
                onClick={insertDoc}>Enviar</button>
            </div>
            

            <ToastContainer
            position='top-center'
            />
        </div>
    )
};

export default Form;